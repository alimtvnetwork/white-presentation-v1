import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PRESENTATION_EASE } from '../../utils/motionPhysics';

export interface SlideTransitionProps {
  transitionKey: string;
  direction: 1 | -1;
  transitionType?: 'slide' | 'fade' | 'zoom' | 'rise';
  children: React.ReactNode;
}

const getOffset = (isForward: boolean, amount: number) => (isForward ? amount : -amount);

const createVariants = (direction: 1 | -1, transitionType: string) => {
  const isForward = direction > 0;
  if (transitionType === 'fade') {
    return { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } };
  }
  if (transitionType === 'zoom') {
    return { enter: { scale: 0.94, opacity: 0 }, center: { scale: 1, opacity: 1 }, exit: { scale: 1.04, opacity: 0 } };
  }
  if (transitionType === 'rise') {
    return {
      enter: { y: getOffset(isForward, 60), opacity: 0 },
      center: { y: 0, opacity: 1 },
      exit: { y: getOffset(isForward, -60), opacity: 0 },
    };
  }
  return {
    enter: { x: getOffset(isForward, 80), opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: getOffset(isForward, -80), opacity: 0 },
  };
};

export const SlideTransition: React.FC<SlideTransitionProps> = ({
  transitionKey,
  direction,
  transitionType = 'slide',
  children,
}) => {
  const variants = createVariants(direction, transitionType);

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={transitionKey}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.42, ease: [...PRESENTATION_EASE] }}
        className="w-full h-full relative"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
