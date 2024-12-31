'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image'


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
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 z-50">
        <div className="rounded shadow-lg relative">
          <button
            className="absolute top-2 right-2 text-gray-600"
            onClick={handleClose}
          > ✕
          </button>
          <Image 
          className="rounded"
          src="/newyear.jpg"
          alt="newyear"
          width="1200"
          height="80"
          style={{
            objectFit:"cover",
          }}/>
        </div>
      </div>
    )
  );
};

export default PopupAd;
