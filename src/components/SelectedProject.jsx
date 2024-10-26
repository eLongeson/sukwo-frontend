import { useState, useEffect, useRef } from "react";
import IMG1 from "../assets/project-cover-1.svg";
import { motion, useScroll } from "framer-motion";

function SelectedProject({ inverse, myImage = IMG1 }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1.33 1"],
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing after animation triggers
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`w-full flex flex-col ${
        inverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-7 items-center justify-between`}
      ref={sectionRef}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
    >
      <section
        className={`w-[60%] ${
          isVisible ? "animate-fade-down animate-fill-forwards" : "opacity-0"
        }`}
      >
        <img src={myImage} alt="" />
      </section>

      <section
        className={`w-[60%] flex flex-col justify-center items-center h-full lg:w-2/5 ${
          isVisible ? "animate-fade-left animate-fill-forwards" : "opacity-0"
        } gap-5`}
      >
        <span className="lg:text-2xl w-full flex font font-bold">
          Lorem ipsum dolor sit amet, consectetur{" "}
        </span>

        <div className="lg:text-[18px] text-justify leading-[21.95px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          <br /> <br /> Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat
        </div>
      </section>
    </div>
  );
}

export default SelectedProject;
