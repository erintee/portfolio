import { createContext, useContext } from "react";

interface DialogContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const useContactDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
