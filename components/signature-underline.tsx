export function SignatureUnderline({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md h-[2px] bg-foreground" />
    </div>
  )
}
