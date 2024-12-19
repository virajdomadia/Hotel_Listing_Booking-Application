export default function AddressLink({ children, className = null }) {
  if (!className) {
    className = "my-3 block";
  }
  className += " flex gap-1 font-semibold underline";
  return (
    <a
      className={className}
      target="_blank"
      href={"https://maps.google.com/?q=" + children}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2.25c3.338 0 6.075 2.637 6.075 5.875 0 4.313-4.425 8.688-5.617 9.822a.75.75 0 0 1-1.033 0c-1.192-1.134-5.617-5.509-5.617-9.822 0-3.238 2.737-5.875 6.075-5.875z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
        />
      </svg>
      {children}
    </a>
  );
}
