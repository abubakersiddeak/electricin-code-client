import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex min-h-24 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        // ✅ Ant Design style hover - subtle blue border
        "hover:border-mest-blue-6/50 dark:hover:border-mest-blue-7/50",
        // ✅ Ant Design style focus - border blue + subtle shadow
        "focus:border-mest-blue-6 dark:focus:border-mest-blue-7 focus:shadow-[0_0_0_2px_rgba(0,144,255,0.1)] dark:focus:shadow-[0_0_0_2px_rgba(0,114,245,0.1)]",
        // ✅ Error state
        "aria-invalid:border-mest-red-6 dark:aria-invalid:border-mest-red-7 aria-invalid:focus:shadow-[0_0_0_2px_rgba(229,72,77,0.1)] dark:aria-invalid:focus:shadow-[0_0_0_2px_rgba(235,85,90,0.1)]",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
