import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AddressLink from "../components/AddressLink";
import PlaceGallery from "../components/PlaceGallery";
import BookingDates from "../components/BookingDates";

export default function BookingPage() {
  const { id } = useParams(); // Extracts the booking ID from URL params
  const [booking, setBooking] = useState(null); // State to store the booking data

  useEffect(() => {
    if (id) {
      // Fetching the bookings data from the API
      axios.get("/bookings").then((response) => {
        // Finding the specific booking by ID
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking); // Setting the found booking to the state
        }
      });
    }
  }, [id]); // useEffect runs whenever `id` changes

  if (!booking) {
    // If booking data is not available, render nothing or a loading state
    return <div>Loading...</div>;
  }

  return (
    <div className="my-8">
      <h1 className="text-3xl">{booking.place.title}</h1>
      <AddressLink className="my-2 block">{booking.place.address}</AddressLink>

      <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-start">
        <div>
          <h2 className="text-2xl mb-4">Your booking information</h2>
          <BookingDates booking={booking} className="mb-4" />
        </div>
        <div className="bg-primary p-6 text-white rounded-2xl">
          <div>Total price</div>
          <div className="text-3xl">${booking.price}</div>
        </div>
      </div>

      <PlaceGallery place={booking.place} />
    </div>
  );
}
