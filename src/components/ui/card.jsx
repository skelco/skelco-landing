export function Card({ className = "", ...props }) {
    return <div className={`rounded-xl border border-white/10 bg-white/5 ${className}`} {...props} />
  }
  export function CardHeader({ className = "", ...props }) {
    return <div className={`p-4 ${className}`} {...props} />
  }
  export function CardContent({ className = "", ...props }) {
    return <div className={`p-4 ${className}`} {...props} />
  }
  export function CardTitle({ className = "", ...props }) {
    return <h3 className={`text-lg font-semibold ${className}`} {...props} />
  }  