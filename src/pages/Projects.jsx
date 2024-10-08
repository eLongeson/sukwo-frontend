import SelectedProject from "../components/SelectedProject";

function Projects() {
  return (
    <div className="pt-20 pb-36 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl  flex flex-col gap-11">
      <header className="text-4xl md:text-6xl font-bold flex justify-center uppercase">
        Selected Projects
      </header>

      <main className="flex flex-col gap-20">
        <SelectedProject />
        <SelectedProject inverse />
      </main>
    </div>
  );
}

export default Projects;
