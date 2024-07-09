import React from 'react';
import { cn } from "@/utils/cn";


interface ScrollDownButtonProps {
  className?: string;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({ className }) => {
  return (
    <div className={cn("relative  mr-6 ml-1/2",className)}>
    <div className="scroll-down-button absolute  md:w-12 md:h-12 w-8 h-8 bg-transparent z-80 bottom-6 border-0 border-r-2 border-b-2 border-solid border-antiquewhite animate-scrolldown"></div>
    <div className="scroll-down-button absolute  md:w-12 md:h-12 w-8 h-8 bg-transparent z-80 bottom-10 border-0 border-r-2 border-b-2 border-solid border-antiquewhite animate-scrolldown animation-delay"></div>
  </div>
  );
};

export default ScrollDownButton;
