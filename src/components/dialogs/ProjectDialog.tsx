import { useProjectDialog } from "@/context/useProjectDialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ProjectDialog: React.FC = () => {
  const { isOpen, setIsOpen, selectedProject } = useProjectDialog();

  if (!isOpen || !selectedProject) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-full lg:w-[80%] max-w-full max-h-full lg:max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {selectedProject && selectedProject.title}
          </DialogTitle>
        </DialogHeader>
        <section className="flex-1 overflow-y-auto">
          <div className="flex justify-center mb-4">
            <img
              src={`/assets/project-photos/${selectedProject.mainImage}`}
            ></img>
          </div>
          <div className="flex flex-col gap-4 text-lg mb-4">
            {selectedProject.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mb-4">
            <ul className="list-disc pl-5 text-lg">
              {selectedProject.results &&
                selectedProject.results.map((result, index) => (
                  <li className="font-bold" key={index}>
                    {result}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mb-4 text-lg">
            <p>{selectedProject.conclusion}</p>
          </div>
          {selectedProject.images?.length > 0 && (
            <div className="flex flex-col items-center">
              {selectedProject.images.map((image, index) => (
                <img src={`/assets/project-photos/${image}`} key={index}></img>
              ))}
            </div>
          )}
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
