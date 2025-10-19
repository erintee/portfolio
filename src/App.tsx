import './App.css'
import { DialogProvider } from "@/context/ContactDialogProvider";
import { ProjectDialogProvider } from './context/ProjectDialogProvider';
import Header from './components/Header'
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projects from './components/Projects';
import ContactDialog from './components/dialogs/ContactDialog';
import ProjectDialog from './components/dialogs/ProjectDialog';
import About from './components/About';

function App() {

  return (
    <DialogProvider>
      <ProjectDialogProvider>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Projects />
        <ContactDialog />
        <ProjectDialog />
        <About />
      </main>
      </ProjectDialogProvider>
    </DialogProvider>
  )
}

export default App
