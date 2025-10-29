// Footer.tsx
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useContactDialog } from "@/context/useContactDialog";

export default function Footer() {

  const { setOpen } = useContactDialog();
  
  return (
    <footer className="bg-mauve text-white py-6 mt-12 md:mt-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <p className="text-xs sm:text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Erin Templeton. All rights reserved.
        </p>

        <a
          href="https://github.com/erintee"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs sm:text-sm hover:text-gray-300 transition"
        >
          <Github size={18} className="shrink-0" />
          <span>GitHub</span>
        </a>

        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="bg-yellow text-black py-2 px-8 rounded self-end font-bold outline-none border-none focus:outline-black hover:bg-black hover:text-background"
        >
          Get in touch
        </Button>
      </div>
    </footer>
  );
}
