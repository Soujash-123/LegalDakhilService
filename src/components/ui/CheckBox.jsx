import React from "react"

export const Checkbox = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 rounded border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
})

Checkbox.displayName = "Checkbox"

