"use client";

import { useEffect, useState } from "react";

import ArrowDown from "./icons/arrow-down";

function GoUp() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    // Show button when scrolled down more than 300 pixels
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div
        className="p-3 rounded-full w-10 h-10 bg-primary sticky left-[95%] right-5 bottom-10 mb-2 cursor-pointer z-10"
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"
        onClick={handleClick}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClick();
          }
        }}
      >
        <ArrowDown className="text-gray rotate-180" />
      </div>
    )
  );
}

export default GoUp;
