import { useContactDialog } from "@/context/useContactDialog";

const Header = () => {

  const { setOpen } = useContactDialog();

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
  
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
  
      // Scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Handle keyboard activation
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action(); 
    }
  };

  return (
    <header className="bg-background w-full fixed  flex justify-center z-20 custom-container" aria-label="Main header">
      <nav className="flex justify-between align-bottom content" role="navigation">
        <span
          className="font-bold text-5xl cursor-pointer focus: outline-mauve"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          tabIndex={0}
          aria-label="Go to top of page"
          onKeyDown={(e) => handleKeyDown(e, () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }))}
        >
          Erin T.
        </span>
        <ul className="flex gap-4 self-end">
          <li 
            className="font-semibold text-xl cursor-pointer hover:text-mauve focus: outline-mauve"
            onClick={() => scrollToElement("projects")}
            tabIndex={0}
            aria-label="Navigate to Projects section"
            onKeyDown={(e) => handleKeyDown(e, () => scrollToElement("projects"))}
          >
            projects
          </li>
          <li 
            className="font-semibold text-xl cursor-pointer hover:text-mauve focus: outline-mauve"
            onClick={() => setOpen(true)}
            tabIndex={0}
            aria-label="Open contact form"
            onKeyDown={(e) => handleKeyDown(e, () => setOpen(true))}
          >
            contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
