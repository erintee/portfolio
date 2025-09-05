import { createContext, useContext, } from "react";
import { Project } from "@/types/types";

interface ProjectDialogContextType {
  isOpen: boolean,
  setIsOpen: (open: boolean) => void;
  selectedProject: Project | null;
  setSelectedProject: (selectedProject: Project | null) => void;
  // openDialog: (project: Project) => void;
  // closeDialog: () => void;
}

export const ProjectDialogContext = createContext<ProjectDialogContextType | undefined>(undefined);

export const useProjectDialog = () => {
  const context = useContext(ProjectDialogContext);
  if(!context) {
    throw new Error("useProjectDialog must be used within a ProjectDialogProvider");
  }

  return context;
};