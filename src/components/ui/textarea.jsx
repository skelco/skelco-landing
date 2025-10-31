export function Textarea({ className = "", ...props }) {
    return (
      <textarea
        className={`w-full rounded-md border px-3 py-2 bg-neutral-900 border-white/10 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-indigo-500 ${className}`}
        {...props}
      />
    )
  }  