import React from "react";

const MoviesNotFound = () => (
  <div
    className="my-8 mx-auto flex max-w-7xl
  flex-col items-center justify-center
  "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mb-4 h-16 w-16 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    <p className="text-lg font-semibold text-gray-500">Oops!</p>
    <p className="text-center text-gray-500">
      We couldn&apos;t find any movies.
    </p>
  </div>
);

export default MoviesNotFound;
