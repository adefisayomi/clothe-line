import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function InfoSidebar ({ isOpen, onClose, header, content }: { isOpen: boolean, onClose: any, header: string, content: ReactNode }) {
  const slideInVariants = {
    hidden: { x: '150%' },
    visible: { x: '0%' },
  };

  const slideInTransition = {
    type: 'tween',
    stiffness: 100,
    damping: 10,
    delay: 0.2, // Adjust the delay value (in seconds) as needed
  };

  return (
    <motion.div
      className="fixed md:top-[10%] top-[5%] md:right-4 right-1 w-full rounded-md md:max-w-sm p-3 bg-muted flex flex-col "
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={slideInVariants}
      transition={slideInTransition}
      style={{ zIndex: 1000 }}
    >
      <div className='w-full flex items-center justify-between mb-5'>
        <h1 className='text-xs font-bold uppercase'>{header}</h1>
        <X className='w-4 h-4 cursor-pointer' onClick={onClose}/>
      </div>
      {content}
    </motion.div>
  );
};
