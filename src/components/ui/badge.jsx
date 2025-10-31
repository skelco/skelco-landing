export function Badge({ className = "", children }) {
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-md bg-white/10 text-white ${className}`}>
        {children}
      </span>
    )
  }  