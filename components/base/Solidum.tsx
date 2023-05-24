export const SolidumIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon points="12,2 4,10 4,14 12,22 20,14 20,10" fill="none" />
      <polyline points="10,12 12,10 16,14 12,18 4,10" fill="none" />
      <polyline points="14,12 12,14 8,10 12,6 20,14" fill="none" />
    </svg>
  )
}
