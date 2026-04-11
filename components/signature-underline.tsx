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
      {/* First curvy line */}
      <path
        d="M0 6 Q 40 2, 90 8 T 180 4 T 260 10 T 300 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Second curvy line */}
      <path
        d="M0 14 Q 50 10, 100 16 T 200 12 T 270 18 T 300 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
