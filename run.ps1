#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Local Test Execution & Dev Runner for White Presentation Engine.
    Orchestrates installation, quality gates (-CI), production build,
    and spins up the Vite development server with auto-browser launch.
#>

[CmdletBinding()]
param (
    [int]$Port = 5180,
    [switch]$NoBrowser,
    [switch]$CI,
    [switch]$Install,
    [switch]$Build,
    [switch]$Test
)

$ErrorActionPreference = "Stop"
$RepoRoot = $PSScriptRoot

$configPath = Join-Path $RepoRoot "run.config.json"
if (Test-Path $configPath) {
    try {
        $config = Get-Content $configPath -Raw | ConvertFrom-Json
        if ($config.frontend.port -and -not $PSBoundParameters.ContainsKey('Port')) {
            $Port = [int]$config.frontend.port
        }
    } catch {
        Write-Warning "Could not parse run.config.json, defaulting to standard settings."
    }
}

Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "  White Presentation System - Dynamic Orchestrator  " -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Cyan

# 1. CI / Quality Gate Verification Mode
if ($CI) {
    Write-Host "`n--- [CI MODE] Executing Quality Gates & Build ---" -ForegroundColor Yellow
    Write-Host "Step 1: Running all 36 local CI quality gates..." -ForegroundColor Cyan
    & python (Join-Path $RepoRoot "03-ai-scripts/06-cicd-local-runner.py") --all
    if ($LASTEXITCODE -ne 0) {
        Write-Error "CI quality gates failed with exit code $LASTEXITCODE"
        exit $LASTEXITCODE
    }

    Write-Host "`nStep 2: Testing Vite production compile..." -ForegroundColor Cyan
    & npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Production build failed with exit code $LASTEXITCODE"
        exit $LASTEXITCODE
    }

    Write-Host "`n[SUCCESS] All CI verification checks passed cleanly!" -ForegroundColor Green
    exit 0
}

# 2. Dependency Installation Mode
if ($Install) {
    Write-Host "`n[INSTALL] Installing project dependencies via npm..." -ForegroundColor Cyan
    & npm install
    exit $LASTEXITCODE
}

# 3. Production Build Mode
if ($Build) {
    Write-Host "`n[BUILD] Building production assets via Vite..." -ForegroundColor Cyan
    & npm run build
    exit $LASTEXITCODE
}

# 4. Test Mode
if ($Test) {
    Write-Host "`n[TEST] Running test suite and quality gates..." -ForegroundColor Cyan
    & python (Join-Path $RepoRoot "03-ai-scripts/06-cicd-local-runner.py") --all
    exit $LASTEXITCODE
}

# 5. Interactive Dev Mode
Write-Host "`n[1/2] Verifying prerequisites..." -ForegroundColor Yellow
$hasNode = Get-Command node -ErrorAction SilentlyContinue
$hasNpm = Get-Command npm -ErrorAction SilentlyContinue

if (-not $hasNode -or -not $hasNpm) {
    Write-Error "Node.js and npm are required to run White Presentation."
    exit 1
}

Write-Host "  [OK] Node: $(node -v) | npm: $(npm -v)" -ForegroundColor Green

Write-Host "`n[2/2] Launching Vite dev server on port $Port..." -ForegroundColor Yellow
$TargetUrl = "http://127.0.0.1:$Port"

if (-not $NoBrowser) {
    Write-Host "Configuring browser auto-launch for $TargetUrl..." -ForegroundColor Cyan
    Start-Job -ScriptBlock {
        param($url)
        Start-Sleep -Milliseconds 1200
        try {
            Start-Process $url -ErrorAction Stop
        } catch {
            Start-Process "cmd.exe" -ArgumentList "/c start $url" -WindowStyle Hidden -ErrorAction SilentlyContinue
        }
    } -ArgumentList $TargetUrl | Out-Null
}

Write-Host "`nServer running at $TargetUrl! Press Ctrl+C to stop.`n" -ForegroundColor Green
try {
    & npm run dev -- --host 127.0.0.1 --port $Port
} finally {
    Write-Host "`nShutting down dev server. Done." -ForegroundColor Yellow
}
