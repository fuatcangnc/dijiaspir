import { cn } from "@/lib/utils";
import React from "react";

function CustomButton({ className,handleClick,children }: { className: string,handleClick?:()=>void,children:React.ReactNode }) {
  return (
    <button
      className={cn(
        "min-w-[144px] min-h-[48px] flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5    transition ease-in-out delay-150",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default CustomButton;
