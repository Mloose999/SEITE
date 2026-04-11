export function SignatureUnderline({ className = "", width = "default" }: { className?: string; width?: "default" | "wide" | "full" }) {
  const widthClasses = {
    default: "w-48 md:w-64",
    wide: "w-64 md:w-80",
    full: "w-full max-w-md"
  }
  
  return (
    <svg
      viewBox="0 0 300 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${widthClasses[width]} h-auto ${className}`}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* First line - slight curve, slopes down to the right */}
      <path
        d="M0 5 Q 150 4, 300 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Second line - slight curve, slopes down to the right */}
      <path
        d="M0 10 Q 150 9, 300 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
