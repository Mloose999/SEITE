export function SignatureUnderline({ className = "", width = "default" }: { className?: string; width?: "default" | "wide" | "full" }) {
  const widthClasses = {
    default: "w-48 md:w-64",
    wide: "w-64 md:w-80",
    full: "w-full max-w-md"
  }
  
  return (
    <svg
      viewBox="0 0 300 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${widthClasses[width]} h-auto -mt-1 ${className}`}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* First line - handwritten style with slight variation */}
      <path
        d="M0 3 C 50 2, 100 4, 150 3.5 S 250 5, 300 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        className="text-foreground"
      />
      {/* Second line - handwritten style, parallel */}
      <path
        d="M0 9 C 60 8, 120 10, 180 9 S 260 11, 300 14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        className="text-foreground"
      />
    </svg>
  )
}
