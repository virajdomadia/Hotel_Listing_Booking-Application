import { Link, useLocation } from "react-router-dom";

export default function AccountNav() {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "profile";
  }

  // Function to dynamically assign classes to links
  function linkClasses(type = null) {
    let classes = "inline-flex gap-1 py-2 px-6 rounded-full";
    if (type === subpage) {
      classes += " bg-primary text-white";
    } else {
      classes += " bg-gray-200";
    }
    return classes;
  }

  return (
    <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
      <Link className={linkClasses("profile")} to={"/account/profile"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9A3.75 3.75 0 1 1 12 5.25 3.75 3.75 0 0 1 15.75 9zM4.5 18.75A8.25 8.25 0 0 1 12 15a8.25 8.25 0 0 1 7.5 3.75"
          />
        </svg>
        My Profile
      </Link>

      <Link className={linkClasses("bookings")} to={"/account/bookings"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5.25V19.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V5.25a2.25 2.25 0 0 0-2.25-2.25h-13.5A2.25 2.25 0 0 0 3 5.25zM6 3v2.25M18 3v2.25M6 10.5h12"
          />
        </svg>
        My Bookings
      </Link>

      <Link className={linkClasses("places")} to={"/account/places"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9zM9 22V12h6v10"
          />
        </svg>
        My Accommodations
      </Link>
    </nav>
  );
}
