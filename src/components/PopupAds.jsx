import { useEffect, useState } from "react";
import Image from "next/image";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);  // Control visibility
  const [isVisible, setIsVisible] = useState(false);  // Control animation state

  useEffect(() => {
    // Show the popup after 100ms and trigger animation
    const showTimer = setTimeout(() => {
      setShowPopup(true);
      setIsVisible(true);  // Trigger the animation
    }, 100); // Popup will appear after 100ms

    // Hide the popup after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);  // Start hide animation (fade and scale down)
      setTimeout(() => setShowPopup(false), 500);  // Remove from DOM after animation
    }, 5100); // 5 seconds before hiding

    // Cleanup timers when component unmounts
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`rounded shadow-lg relative transform transition-all duration-500 ease-in-out ${
              isVisible ? "scale-100" : "scale-90"
            }`}
          >
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => {
                // Start close animation
                setIsVisible(false);  // Fade out and scale down
                setTimeout(() => setShowPopup(false), 500); // Remove from DOM after 500ms animation
              }}
            >
              ✕
            </button>
            <Image
              className="rounded"
              src="/newyear.jpg"
              alt="newyear"
              width={1200}
              height={80}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
