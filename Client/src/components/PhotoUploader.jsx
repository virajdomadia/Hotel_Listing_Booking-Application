import axios from "axios";
import { useState } from "react";

export default function PhotosUploader({ addedPhotos, onChange }) {
  const [photoLink, setPhotoLink] = useState("");

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    onChange((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  function removePhoto(ev, filename) {
    ev.preventDefault();
    onChange(addedPhotos.filter((photo) => photo !== filename));
  }

  function selectAsMainPhoto(ev, filename) {
    ev.preventDefault();
    onChange([filename, ...addedPhotos.filter((photo) => photo !== filename)]);
  }

  return (
    <>
      <div className="flex gap-2">
        <input
          value={photoLink}
          onChange={(ev) => setPhotoLink(ev.target.value)}
          type="text"
          placeholder="Add photo URL"
          className="border rounded p-2 flex-1"
        />
        <button
          onClick={addPhotoByLink}
          className="bg-primary text-white px-4 rounded"
        >
          Add Photo
        </button>
      </div>
      <div className="mt-2 grid gap-3 grid-cols-3 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div className="h-32 flex relative" key={link}>
              <img
                className="rounded-2xl w-full object-cover"
                src={link}
                alt="Uploaded"
              />
              <button
                onClick={(ev) => removePhoto(ev, link)}
                className="absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-full p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                onClick={(ev) => selectAsMainPhoto(ev, link)}
                className={`absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-full p-1 ${
                  link === addedPhotos[0] ? "bg-green-600" : ""
                }`}
              >
                {link === addedPhotos[0] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.38-.49.992-.49 1.372 0l4.848 6.243c.327.421.005.967-.686.967h-9.696c-.69 0-1.012-.546-.686-.967l4.848-6.243zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 2a1 1 0 000 2h12a1 1 0 100-2H4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
        <label className="border bg-transparent rounded-2xl flex items-center justify-center h-32 cursor-pointer">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Upload
        </label>
      </div>
    </>
  );
}
