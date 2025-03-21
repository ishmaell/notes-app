import { cn } from "@/lib/utils";
import { type InputHTMLAttributes, forwardRef } from "react";


export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "w-full bg-gray-700 px-3 py-3 rounded-lg text-white focus:outline-0",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
