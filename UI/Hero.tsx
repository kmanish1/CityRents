// First Page

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/1.png")' }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 text-center max-w-2xl px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl animate-fade-in-up">
          Find Your Perfect Rental
        </h1>
        <p className="mt-3 text-xl text-gray-300 sm:mt-5 sm:text-2xl animate-fade-in-up delay-100">
          Discover the best city rentals with our easy-to-use platform.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center animate-fade-in-up delay-200">
          <Link
            href="#"
            className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center mx-8 px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
            prefetch={false}
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
            prefetch={false}
          >
            Explore Features
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in-up delay-300">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold">Easy Search</h3>
            <p className="mt-2 text-gray-600">
              Find the perfect rental with our intuitive search tools.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold">Verified Listings</h3>
            <p className="mt-2 text-gray-600">
              Browse only the best properties, verified by our team.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold">Personalized Recommendations</h3>
            <p className="mt-2 text-gray-600">
              Get tailored suggestions based on your preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
