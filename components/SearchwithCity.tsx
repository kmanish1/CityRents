import { useState } from "react";

export default function SearchWithCity() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const selectCity = (city:string) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };
  return (
    <form className="mx-auto bg-white border border-sky-900 p-3"> 
      <div className="flex items-center">
        <div className="relative mr-2">
            <button
              id="dropdown-button"
              type="button"
              onClick={toggleDropdown}
              className="ml-2.5 py-4 rounded-full px-4 text-sm font-medium flex text-gray-900 bg-gray-100 border border-gray-300  hover:bg-gray-200  focus:outline-none"
            >
              {selectedCity||"City"}
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
              <div className="absolute z-20 mt-1.5 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 hover:bg-gray-100 "
                      onClick={() => selectCity("Hyderabad")}
                    >
                      Hyderabad
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 hover:bg-gray-100 "
                      onClick={() => selectCity("Bangalore")}
                    >
                      Bangalore
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 hover:bg-gray-100 "
                      onClick={() => selectCity("Chennai")}
                    >
                      Chennai
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 hover:bg-gray-100 "
                      onClick={() => selectCity("Mumbai")}
                    >
                      Mumbai
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block w-full p-4 text-sm text-gray-900 bg-gray-50 rounded-full border focus:border-none"
            placeholder="Where do you want to rent? e.g Gachibowli"
            required
          />
          <button
            type="submit"
            className="absolute top-0 rounded-full flex right-0 p-4 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none "
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
            <span className="ml-2">Search</span>
          </button>
        </div>
        
      </div>
      
    </form>
  );
}
