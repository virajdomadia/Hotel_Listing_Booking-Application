export default function Perks({ selected, onChange }) {
  function handleCbClick(ev) {
    const { checked, name } = ev.target;
    if (checked) {
      // If the checkbox is checked, add the perk name to the selected array
      onChange([...selected, name]);
    } else {
      // If the checkbox is unchecked, remove the perk name from the selected array
      onChange(selected.filter((selectedName) => selectedName !== name));
    }
  }

  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input
          type="checkbox"
          name="wifi"
          checked={selected.includes("wifi")}
          onChange={handleCbClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 8c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"
          />
        </svg>
        <span>Wifi</span>
      </label>

      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input
          type="checkbox"
          name="parking"
          checked={selected.includes("parking")}
          onChange={handleCbClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>Free parking spot</span>
      </label>

      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input
          type="checkbox"
          name="tv"
          checked={selected.includes("tv")}
          onChange={handleCbClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5v14h14V5H5zM19 17H5V7h14v10z"
          />
        </svg>
        <span>TV</span>
      </label>

      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input
          type="checkbox"
          name="radio"
          checked={selected.includes("radio")}
          onChange={handleCbClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l9 9 9-9"
          />
        </svg>
        <span>Radio</span>
      </label>

      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input
          type="checkbox"
          name="pets"
          checked={selected.includes("pets")}
          onChange={handleCbClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.051 9.051 0 0 1 1.443-2.031c.465-.561.927-.99 1.417-1.34a4.813 4.813 0 0 1 3.688-1.084C16.366 6.004 18 8.596 18 12c0 3.409-2.818 6.169-6.281 6.169a5.018 5.018 0 0 1-3.452-1.357 3.897 3.897 0 0 1-1.415-3.339C7.86 11.054 7.377 10.5 6.633 10.5z"
          />
        </svg>
        <span>Pets</span>
      </label>

      <label className="border p-4 flex rounded-2xl gap-2 items-center">
        <input
          type="checkbox"
          name="private_entrance"
          checked={selected.includes("private_entrance")}
          onChange={handleCbClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16V4h16v12"
          />
        </svg>
        <span>Private entrance</span>
      </label>
    </>
  );
}
