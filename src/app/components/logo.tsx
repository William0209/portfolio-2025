export default function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-500 hover:text-black transition-colors duration-300"
    >
      {/* Vertical points */}
      <path d="M16 2L16 12M16 20L16 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Horizontal points - extended */}
      <path d="M2 16L12 16M20 16L30 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Diagonal points - extended */}
      <path
        d="M6 6L12 12M20 12L26 6M6 26L12 20M20 20L26 26"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />

      {/* Center dot */}
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}
