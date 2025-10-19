import CardCarousel from "./CardCarousel";

const Projects = () => {
  return (
      <div
        id="projects"
        className="bg-mauve flex flex-col items-center pb-8 md:pb-24 z-1 scroll-pt-16"
        role="section"
        aria-labelledby="projects-heading"
        aria-describedby="projects-description"
      >
        {/* <div className="custom-container flex-col items-center bg-gradient-to-b from-background to-mauve"> */}
        <div className="content">
          </div>
          <h2
            id="projects-heading"
            className="content text-5xl md:text-7xl text-background font-bold"
          >
            Projects
          </h2>
        {/* </div> */}

        <div className="custom-container px-4">
          <CardCarousel />
        </div>
      </div>
  );
};

export default Projects;
