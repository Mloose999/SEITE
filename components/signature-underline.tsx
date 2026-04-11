export function SignatureUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-32 md:w-40 h-auto ${className}`}
      aria-hidden="true"
    >
      {/* First curvy line */}
      <path
        d="M5 8 Q 30 4, 60 10 T 120 6 T 195 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Second curvy line */}
      <path
        d="M5 16 Q 40 12, 80 18 T 140 14 T 195 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
