import { cn } from "@/lib/utils"

export function Button({ asChild, className = "", ...props }) {
  const Comp = asChild ? "a" : "button"
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium",
        "px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        "bg-indigo-500 text-white hover:bg-indigo-400 disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}