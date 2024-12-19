import { differenceInCalendarDays, format } from "date-fns";

export default function BookingDates({ booking, className }) {
  const nights = differenceInCalendarDays(
    new Date(booking.checkOut),
    new Date(booking.checkIn)
  );

  return (
    <div className={"flex gap-1 " + className}>
      {/* Calendar Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4h18M3 10h18M3 16h18M3 20h18"
        />
      </svg>

      {/* Number of nights */}
      <span className="text-xl">{nights} nights</span>

      <div className="flex gap-1 items-center ml-2">
        {/* Check-in Date */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 9l7 7-7 7"
          />
        </svg>
        <span>{format(new Date(booking.checkIn), "yyyy-MM-dd")}</span>
      </div>

      {/* Arrow separator */}
      <span className="text-2xl">→</span>

      <div className="flex gap-1 items-center">
        {/* Check-out Date */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 15l-7-7 7-7"
          />
        </svg>
        <span>{format(new Date(booking.checkOut), "yyyy-MM-dd")}</span>
      </div>
    </div>
  );
}
