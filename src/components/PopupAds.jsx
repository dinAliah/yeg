import React, { useState, useEffect } from "react";

const PopupAd = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    let autoCloseTimer;
    if (showPopup) {
      autoCloseTimer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }

    // Cleanup for autoCloseTimer
    return () => clearTimeout(autoCloseTimer);
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded shadow-lg relative">
          <button
            className="absolute top-2 right-2 text-gray-600"
            onClick={handleClose}
          >
            ✕
          </button>
          <h2 className="text-lg font-bold mb-4">Exciting News!</h2>
          <p>
            We're working on a brand-new website design to serve you better.
            Stay tuned for an upgraded experience!
          </p>
        </div>
      </div>
    )
  );
};

export default PopupAd;
