import { Link, useParams } from "react-router-dom";
import PlacesFormPage from "./PlacesFormPage.jsx";
import AccountNav from "../AccountNav.jsx";
import { useEffect, useState } from "react";
import PlaceImg from "../components/PlaceImg.jsx";
import axios from "axios";

export default function PlacesPage() {
  const { action } = useParams();
  const [places, setPlaces] = useState([]);

  // Fetch user's places
  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          className="bg-primary text-white py-2 px-6 rounded-full inline-flex items-center gap-2"
          to={"/account/places/new"}
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new place
        </Link>
      </div>

      <div className="mt-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={`/account/places/${place._id}`}
              className="flex gap-4 bg-gray-100 p-4 rounded-lg mb-4"
              key={place._id}
            >
              <div className="flex w-32 h-32 grow shrink-0">
                <PlaceImg className="rounded-xl" place={place} />
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl font-bold">{place.title}</h2>
                <p className="text-sm mt-2 text-gray-600">
                  {place.description}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
