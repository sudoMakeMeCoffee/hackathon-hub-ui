import React, { useEffect } from "react";

const Loader = ({ isLoading }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"; // prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // restore scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup on unmount
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="w-16 h-16 border-4 border-t-blue-500 border-blue-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
