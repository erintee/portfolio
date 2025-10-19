import { useState, useRef, useEffect } from "react";
import { useProjectDialog } from "@/context/useProjectDialog";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

import thumbnails from "@/data/projects.json";
import projectDetails from "@/data/projectDetails.json";


const CardCarousel = () => {

  const { setIsOpen, setSelectedProject } = useProjectDialog();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const desktopScrollRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollToItem = (index: number) => {
    const isMobile = window.innerWidth < 768;

    if (isMobile && mobileScrollRef.current) {
      const containerWidth = mobileScrollRef.current.clientWidth;
      const itemElement = mobileScrollRef.current.children[index] as HTMLElement | null;
      if (!itemElement) return;
      const itemWidth = itemElement.clientWidth;
      const itemOffsetLeft = itemElement.offsetLeft;
      mobileScrollRef.current.scrollTo({
        left: itemOffsetLeft - (containerWidth - itemWidth) / 2,
        behavior: "smooth",
      });
    } else if (!isMobile && desktopScrollRef.current) {
      const itemElement = desktopScrollRef.current.children[index] as HTMLElement | null;
      if (!itemElement) return;
      desktopScrollRef.current.scrollTo({
        left:
          itemElement.offsetLeft -
          desktopScrollRef.current.clientWidth / 2 +
          itemElement.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const handleMobileCardClick = (projectId: number) => {
    const project = projectDetails.find((project) => project.id === projectId);
    
    if (project) {
      console.log("thumbnail click for id: ", projectId)
      setSelectedProject(project);
      setIsOpen(true);
    } else {
      console.error(`Project with id ${projectId} not found.`);
    }
  }

  const handleCardClick = (projectId: number) => {
    const project = projectDetails.find((project) => project.id === projectId);

    if (project && project.id === (currentIndex+1)) {
      setSelectedProject(project);
      setIsOpen(true);
    } else if (project && project.id === (currentIndex)) {
      prevItem();
    } else if (project && project.id === (currentIndex+2)) {
      nextItem();
    }
    else {
      console.error(`Project with ID ${projectId} not found.`);
    }
  };

  const nextItem = () => {
    setCurrentIndex(prev => (prev + 1) % thumbnails.length);
  };

  const prevItem = () => {
    setCurrentIndex(prev => (prev - 1 + thumbnails.length) % thumbnails.length);
  };

  useEffect(() => {
    scrollToItem(currentIndex);
  }, [currentIndex]);

  return (
    <div
      className="relative w-full focus:outline-yellow"
      ref={carouselRef}
      tabIndex={0}
      role="region"
      aria-label="Project gallery carousel"
      onKeyDown={e => {
        if (e.key === "ArrowRight") nextItem();
        if (e.key === "ArrowLeft") prevItem();
      }}
    >
      {/* Mobile Carousel */}
      <div
        ref={mobileScrollRef}
        className="md:hidden relative w-full overflow-x-scroll scroll-smooth flex py-4 snap-x snap-mandatory"
        aria-roledescription="carousel"
      >
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className="w-full flex-none snap-start mx-4 cursor-pointer"
            onClick={(() => handleMobileCardClick(thumbnail.id))}
            aria-roledescription="slide"
            aria-hidden={currentIndex !== index}
          >
            <Card className="p-4">
              <CardContent className="p-0 h-[400px]">
                <div
                  className="w-full h-[240px] mb-4 bg-cover"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(255,255,255,1), rgba(167,134,130,0)), url(/assets/thumbnails/${thumbnail.image})`,
                  }}
                ></div>
                <h3 className="w-full text-center font-bold text-xl">{thumbnail.title}</h3>
                <p className="mt-2">{thumbnail.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* DESKTOP CAROUSEL */}
      <div className="custom-container relative">
        {/* Navigation Buttons */}
        <div className="hidden md:flex absolute top-1/2 w-full max-w-[1290px]">  
          <button
            aria-label="Previous item"
            onClick={prevItem}
            className={`absolute left-1 z-10 bg-yellow rounded-full p-2 focus:outline-black ${
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "bg-opacity-30"
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            aria-label="Next item"
            onClick={nextItem}
            className="absolute right-1 z-10 bg-yellow bg-opacity-50 rounded-full p-2 focus:outline-black"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Carousel */}
        <div className="hidden md:flex content thumbnails-center justify-center relative no-scrollbar">
          <div className="flex overflow-hidden no-scrollbar" ref={desktopScrollRef}>
            {thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out transform focus:outline-yellow focus:rounded-md ${
                  index === currentIndex ? "scale-100 opacity-100" : "scale-95 opacity-50"
                }`}
                onClick={(()=>handleCardClick(thumbnail.id))}
                role="group"
                aria-roledescription="slide"
                aria-label={`${thumbnail.title}, slide ${index + 1} of ${thumbnails.length}`}
                tabIndex={index === currentIndex ? 0 : -1}
              >
                <div className="w-[550px] p-4">
                  <Card className="w-full h-[450px] p-6 cursor-pointer">
                    <CardContent className="p-0">
                      <div
                        className="w-full h-[200px] max-h-[260px] bg-cover"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(255,255,255,1), rgba(167,134,130,0)), url(/assets/thumbnails/${thumbnail.image})`,
                        }}
                      ></div>
                      <h3 className="w-full my-4 text-center font-bold text-2xl">{thumbnail.title}</h3>
                      <p className="mt-2 px-4 text-justify">{thumbnail.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
