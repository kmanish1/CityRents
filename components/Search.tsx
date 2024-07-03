import { useState } from "react";

export default function SearchWithCity() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const selectCity = (city: string) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };
  return (
    <form className="mx-auto bg-white border md:rounded-full border-sky-900 p-3 max-w-xl">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="relative w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2">
          <button
            id="dropdown-button"
            type="button"
            onClick={toggleDropdown}
            className="w-full sm:w-auto py-3 rounded-full px-4 text-sm font-medium flex justify-between items-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:outline-none"
          >
            <span className="truncate">{selectedCity || "City"}</span>
            <svg
              className="w-4 h-4 ml-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute z-50 mt-1.5 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
              <ul className="py-2 text-sm text-gray-700">
                {["Hyderabad", "Bangalore", "Chennai", "Mumbai"].map((city) => (
                  <li key={city}>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                      onClick={() => selectCity(city)}
                    >
                      {city}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block w-full p-3 text-sm text-gray-900 bg-gray-100 rounded-full outline-none"
            placeholder='Search "Gachibowli"'
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-3 flex justify-center items-center text-sm font-medium text-white bg-[#22cc88] rounded-full"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="ml-2 hidden sm:inline">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}