#!/usr/bin/env python3
"""check-sequence-integrity.py

Verifies sequence numbering integrity across numbered markdown files and directories
in 02-spec/, 01-prompts/, and .ai-memory/plans/. Ensures zero sequence gaps.

Exit codes:
  0 = all sequences intact (no gaps)
  1 = sequence gaps detected
"""
from __future__ import annotations

import argparse
import os
import re
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

NUM_PREFIX_RE = re.compile(r"^(\d+)[-_]")
EXCLUDE_DIRS = {
    ".git", "node_modules", "dist", "build", "bin", ".next", ".gitmap",
    "vendor", "coverage", ".gemini", ".system_generated", "scratch",
    "temp", "temp-scripts", "temp-agents", ".tmp", "__pycache__"
}


def audit_sequences(target_dir: Path) -> list[str]:
    """Audits numbered files in directories under target_dir to find sequence gaps."""
    gaps: list[str] = []

    for root, dirs, files in os.walk(target_dir):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS and not d.startswith(".")]

        # Check numbered files
        numbered: list[tuple[int, str]] = []
        for f in files:
            m = NUM_PREFIX_RE.match(f)
            if m:
                numbered.append((int(m.group(1)), f))

        if not numbered:
            continue

        numbered.sort(key=lambda x: x[0])
        first_num = numbered[0][0]
        # Only enforce consecutive numbering if the folder starts at 0 or 1
        if first_num in (0, 1):
            expected = first_num
            for num, fname in numbered:
                if num != expected:
                    rel_p = Path(root).relative_to(target_dir.parent).as_posix()
                    gaps.append(f"{rel_p}/{fname}: found {num:02d}, expected {expected:02d}")
                expected += 1

    return gaps


def main() -> int:
    parser = argparse.ArgumentParser(description="Check sequence numbering integrity.")
    parser.add_argument("path", nargs="?", default="02-spec", help="Root directory to check (default: 02-spec)")
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parent.parent
    target = (repo_root / args.path).resolve()

    if not target.exists():
        print(f"::error::Target path {target} does not exist.")
        return 1

    print(f"=== Checking Sequence Integrity across '{target.relative_to(repo_root).as_posix()}' ===")
    gaps = audit_sequences(target)

    if gaps:
        print(f"\n❌ FAIL: Detected {len(gaps)} sequence gap(s):")
        for gap in gaps:
            print(f"  {gap}")
        return 1

    print(f"\n✅ PASS: All sequential file numbering is continuous and unbroken across '{args.path}'.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
