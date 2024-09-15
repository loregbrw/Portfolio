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
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
