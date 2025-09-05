import { useState, ReactNode } from "react";
import { ProjectDialogContext } from "./useProjectDialog";
import { Project } from "@/types/types";


export const ProjectDialogProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
    // const openDialog = (project: Project) => {
    //   console.log("openDialog triggered with project: ", project)
    //   setIsOpen(true);
    //   setSelectedProject(project);
    // };
  
    // const closeDialog = () => {
    //   setIsOpen(false);
    //   setSelectedProject(null);
    // };
  
    return (
      <ProjectDialogContext.Provider value={{ isOpen, setIsOpen, selectedProject, setSelectedProject }}>
        {children}
      </ProjectDialogContext.Provider>
    );
  };