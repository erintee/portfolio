import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const strings: string[] = [
    "modern designs.",
    "actionable plans.",
    "real-world tools.",
    "tangible results.",
    "efficient systems.",
    "automated processes.",
    "customised platforms.",
    "dynamic solutions.",
  ];

  // State to track if animations are disabled
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Check if user has animations disabled
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAnimationsEnabled(!prefersReducedMotion.matches);
    
    // Optional: Listener to watch for changes in the user's preference
    const handler = (e: MediaQueryListEvent) => {
      setAnimationsEnabled(!e.matches);
    };
    
    prefersReducedMotion.addEventListener("change", handler);
    
    // Cleanup listener
    return () => {
      prefersReducedMotion.removeEventListener("change", handler);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-[url(@/assets/hero2.jpg)] bg-cover bg-center w-full h-[85vh] flex justify-center items-end">
        <div className="absolute custom-container">
          <div className="content text-background text-4xl lg:text-6xl font-bold">
            Turn your ideas into
          </div>
        </div>
      </div>

      <div className="custom-container">
        {animationsEnabled ? (
          <ReactTyped
            className="content text-4xl lg:text-6xl font-black text-right"
            strings={strings}
            typeSpeed={100}
            backSpeed={20}
            showCursor={true}
          />
        ) : (
          <div className="content text-4xl lg:text-6xl font-black text-right">
            {strings[7]}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
