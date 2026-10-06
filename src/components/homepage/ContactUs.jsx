import React from "react";

// WhatsApp number in international format (no "+", spaces or dashes)
const PHONE = "601";

// Message pre-filled in the customer's chat box
const MESSAGE = "Hi YEG Academy, I'd like to talk to an advisor.";

function ContactUs() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    // Fixed to the bottom-right corner; "group" lets the tooltip react to hover
    <div className="group fixed bottom-5 right-5 z-50 flex items-center">
      {/* Tooltip: hidden by default, shown on hover or keyboard focus */}
      <span
        className="pointer-events-none mr-3 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0"
      >
        WhatsApp our advisor
      </span>

      {/* WhatsApp logo button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp our advisor"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-lg transition-transform duration-200 hover:scale-110"
      >
        <svg viewBox="0 0 32 32" width="34" height="34" fill="#fff">
          <path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.7c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1 1.1-3.9-.3-.4C5.700 20 5.100 18 5.100 16 5.100 9.900 10 5.100 16 5.100S26.900 10 26.900 16 22 26.700 16 26.700zm6-8.100c-.3-.2-1.900-.9-2.200-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.200-.2.200-.4.200-.7.100-.3-.2-1.400-.5-2.600-1.600-1-.9-1.600-1.900-1.800-2.200-.2-.3 0-.5.100-.7l.5-.5c.1-.2.200-.3.300-.5.100-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1.100 1.100-1.100 2.600s1.100 3 1.300 3.200c.2.200 2.200 3.400 5.300 4.700.7.300 1.300.5 1.700.6.700.2 1.400.2 1.900.1.600-.1 1.900-.8 2.100-1.500.3-.7.300-1.400.2-1.500-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </a>
    </div>
  );
}

export default ContactUs;