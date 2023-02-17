import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 008-8h-4a4 4 0 01-4 4v4zm5-7.291A7.962 7.962 0 0120 12h-4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"
        ></path>
      </svg>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
