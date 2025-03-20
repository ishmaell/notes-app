import { type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "bg-gray-700 min-h-48 px-3 py-2 rounded-lg text-white w-full focus:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
