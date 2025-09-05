import { useContactDialog } from "@/context/useContactDialog";

const Intro = () => {
  const { setOpen } = useContactDialog();

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="custom-container" role="region" aria-label="Introduction Section">
        <div className="content flex flex-col items-end gap-8">
          <p
            className="text-justify md:text-right text-lg md:text-xl md:w-[70%] md:max-w-[545px] lg:w-[60%]"
            aria-label="Introductory message"
          >
            I'm here to refine your online presence by building intuitive, natural platforms that
            users will love to visit. <br />
          </p>
          <p
            className="text-justify md:text-right text-lg md:text-xl md:w-[70%] md:max-w-[545px] lg:w-[60%]"
            aria-label="Introductory message"
          >
            Whether it’s building your site from the bottom up, or creating a new tool to accelerate
            your growth, let me take care of the details so that you can focus on your next goal.
          </p>
        </div>
      </div>
      <div className="custom-container">
        <div className="content flex justify-end">
          <button
            className="bg-yellow py-2 px-8 rounded self-end text-xl lg:text-2xl font-bold focus:outline-black hover:bg-black hover:text-background"
            onClick={() => setOpen(true)}
            aria-label="Open contact form"
          >
            let's build
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
