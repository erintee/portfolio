const About =() => {
  return (
    <div id="about" className="flex flex-col items-start bg-background pt-8 pb-12 ">
      <div className="custom-container">
        <div className="content">
          <h2 className="w-full md:w-[65%] text-4xl lg:text-6xl font-bold text-black mb-8">
            It started with the need for{" "}
            <span className="italic">real people</span> in tech who<br></br>
            <span className="text-yellow">truly listen</span>.
          </h2>
          <p className="w-full md:w-[65%] text-lg md:text-xl mb-4">
            When I was approached by an organization who knew something needed
            to be changed, but wasn't sure what- or how, I realized how
            overwhelming and inaccessible tech solutions can sometimes be
            without the necessary know how. So I listened to their
            challenges, concerns, and goals, and then came up a solution to show
            what was possible.
          </p>
          <p className="w-full md:w-[65%] text-lg md:text-xl font-bold italic mb-4">
            Every step of the way was tailored to the team's needs and comfort
            level to ensure that the solution was, above all else, sustainable.
            From planning to hands-on training to straight-forward
            documentation, the focus was on making the tech work for their
            needs.
          </p>
          <p className="w-full md:w-[65%] text-lg md:text-xl">
            I continue that approach now, collaborating with teams and business
            owners to understand their current processes, struggles, ideas, and
            dreams. I help turn those insights into practical solutions, showing
            what's possible while skipping the jargon. Whether it's coming up
            with a <strong>refreshed look</strong>, building{" "}
            <strong>apps or websites</strong> from a notepad sketch, or creating
            tools and programs to <strong>increase efficiency</strong>, my goal
            is to bridge the gap between technology and people, creating systems
            that work for the team, not the tech.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;