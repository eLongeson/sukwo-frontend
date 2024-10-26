import SelectedProject from "../components/SelectedProject";
import IMG2 from "../assets/project-2.svg";
import IMG3 from "../assets/project-3.svg";

function Projects() {
  return (
    <div className="py-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl  flex flex-col gap-11">
      <header className="text-4xl md:text-6xl font-bold flex justify-center uppercase">
        Selected Projects
      </header>

      <main className="flex flex-col gap-20">
        <SelectedProject />
        <SelectedProject myImage={IMG2} inverse />
        <SelectedProject myImage={IMG3} />
        <SelectedProject myImage={IMG2} inverse />
      </main>
    </div>
  );
}

export default Projects;
