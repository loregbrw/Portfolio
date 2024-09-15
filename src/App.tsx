import { Github } from "./components/github";
import { Header } from "./components/header";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { Skills } from "./pages/skills";

export const App = () => {
  return (
    <>
      <Header />
      <Github />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
