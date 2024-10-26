import AboutBg from "../assets/about-bg.svg";
function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className="max-w-7xl pt-20 md:pb-52 mb-2 w-full flex flex-col gap-6 md:flex-row md:justify-between mx-auto px-4 sm:px-6 lg:px-8 bg-no-repeat"
    >
      <section className="text-3xl sm:text-4xl md:text-[45px] lg:text-[52px] font-bold">
        ABOUT
      </section>
      <section className="md:text-sm lg:text-base xl:text-[18px] md:leading-[23.94px] w-full md:w-[75%] text-justify">
        Loremmm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </section>
    </div>
  );
}

export default About;
