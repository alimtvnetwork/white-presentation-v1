import React from 'react';
import type { StepsChainSlideData, ThemePalette } from '../../../types/presentation';

const getStepChainStyle = (isActive: boolean, isCompleted: boolean, theme: ThemePalette): React.CSSProperties => {
  if (isActive) {
    return {
      backgroundColor: theme.cardBg,
      borderColor: theme.accentColor,
      opacity: 1,
      transform: 'translateY(0)',
      boxShadow: `0 0 0 1px ${theme.accentColor}40, 0 0 24px -2px ${theme.accentColor}50`,
    };
  }
  const borderColor = isCompleted ? theme.accentColor : theme.cardBorder;
  const opacity = isCompleted ? 0.75 : 0.25;
  const transform = isCompleted ? 'translateY(0)' : 'translateY(16px)';
  return { backgroundColor: theme.cardBg, borderColor, opacity, transform };
};

export interface StepChainCardProps {
  step: StepsChainSlideData['steps'][0];
  idx: number;
  isActive: boolean;
  isCompleted: boolean;
  totalSteps: number;
  theme: ThemePalette;
  onSelect: (index: number) => void;
}

export const StepChainCard: React.FC<StepChainCardProps> = ({
  step, idx, isActive, isCompleted, totalSteps, theme, onSelect,
}) => {
  const cardStyle = getStepChainStyle(isActive, isCompleted, theme);
  return (
    <div
      onClick={() => onSelect(idx)}
      style={cardStyle}
      className="border-2 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer shadow-md hover:scale-[1.01]"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            style={{ backgroundColor: theme.accentColor }}
            className="w-8 h-8 rounded-lg text-white font-ubuntu font-bold text-sm flex items-center justify-center shadow"
          >
            {step.stepNumber}
          </span>
          <span style={{ color: theme.accentColor }} className="text-xs font-mono font-bold uppercase">
            {step.duration || `Stage 0${step.stepNumber}`}
          </span>
        </div>
        <h3 style={{ color: theme.textColor }} className="font-ubuntu text-[20px] font-bold mb-2">
          {step.title}
        </h3>
        <p style={{ color: theme.subtextColor }} className="font-poppins text-[15px] leading-relaxed">
          {step.description}
        </p>
      </div>
      <div style={{ borderColor: theme.cardBorder }} className="pt-4 border-t flex items-center justify-between text-xs font-mono">
        <span style={{ color: theme.subtextColor }}>{idx + 1} of {totalSteps}</span>
        <span style={{ color: isActive ? theme.accentColor : theme.subtextColor }} className="font-bold">
          {isActive ? '● IN FOCUS' : isCompleted ? '✓ VERIFIED' : '○ PENDING'}
        </span>
      </div>
    </div>
  );
};
