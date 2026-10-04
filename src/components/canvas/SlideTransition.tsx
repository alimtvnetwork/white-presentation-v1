import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PRESENTATION_EASE } from '../../utils/motionPhysics';

export interface SlideTransitionProps {
  transitionKey: string;
  direction: 1 | -1;
  transitionType?: 'slide' | 'fade' | 'zoom' | 'rise' | 'flip' | 'kinetic-morph';
  children: React.ReactNode;
}

const getOffset = (isForward: boolean, amount: number) => (isForward ? amount : -amount);

const getFlipVariants = (isForward: boolean) => ({
  enter: { rotateY: isForward ? 45 : -45, scale: 0.92, opacity: 0, transformPerspective: 1200 },
  center: { rotateY: 0, scale: 1, opacity: 1, transformPerspective: 1200 },
  exit: { rotateY: isForward ? -45 : 45, scale: 0.92, opacity: 0, transformPerspective: 1200 },
});

const getRiseVariants = (isForward: boolean) => ({
  enter: { y: getOffset(isForward, 60), opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: getOffset(isForward, -60), opacity: 0 },
});

const getSlideVariants = (isForward: boolean) => ({
  enter: { x: getOffset(isForward, 80), opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: getOffset(isForward, -80), opacity: 0 },
});

const getKineticMorphVariants = (isForward: boolean) => ({
  enter: { opacity: 0, scale: 0.95, filter: 'blur(6px)', y: isForward ? 30 : -30 },
  center: { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 1.04, filter: 'blur(6px)', y: isForward ? -30 : 30, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
});

const createVariants = (direction: 1 | -1, transitionType: string) => {
  const isForward = direction > 0;
  if (transitionType === 'kinetic-morph') return getKineticMorphVariants(isForward);
  if (transitionType === 'fade') return { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } };
  if (transitionType === 'zoom') return { enter: { scale: 0.94, opacity: 0 }, center: { scale: 1, opacity: 1 }, exit: { scale: 1.04, opacity: 0 } };
  if (transitionType === 'rise') return getRiseVariants(isForward);
  if (transitionType === 'flip') return getFlipVariants(isForward);
  return getSlideVariants(isForward);
};

export const SlideTransition: React.FC<SlideTransitionProps> = ({
  transitionKey,
  direction,
  transitionType = 'slide',
  children,
}) => (
  <AnimatePresence initial={false} mode="wait">
    <motion.div
      key={transitionKey}
      variants={createVariants(direction, transitionType)}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.42, ease: [...PRESENTATION_EASE] }}
      style={{ perspective: 1200 }}
      className="w-full h-full relative"
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
