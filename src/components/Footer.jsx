import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import LinkedIn from "../assets/linkedin.svg";
import Whatsapp from "../assets/whatsapp.svg";
import ArrowUp from "../assets/arrow-up.svg";

function Footer({ aboutRef, workRef }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWorks = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="pt-10 md:pt-[72px] lg:pt-[90px] pb-14 flex flex-col gap-12 md:gap-24 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="text-center uppercase text-3xl md:text-[52px] font-bold md:leading-[58.52px] md:tracking-[1.04px]">
        Let's Chat - <br /> We're Just a Message Away!
      </div>

      <div className="flex items-center gap-5 flex-col md:flex-row justify-between">
        <section className="flex gap-3">
          <span className="cursor-pointer hover:scale-110 transform duration-500">
            <img src={LinkedIn} alt="LinkedIn" />
          </span>
          <span className="cursor-pointer hover:scale-110 transform duration-500">
            <img src={Twitter} alt="Twitter" />
          </span>
          <span className="cursor-pointer hover:scale-110 transform duration-500">
            <img src={Whatsapp} alt="WhatsApp" />
          </span>
          <span className="cursor-pointer hover:scale-110 transform duration-500">
            <img src={Instagram} alt="Instagram" />
          </span>
        </section>

        <section className="flex gap-5 text-[#222]">
          <button onClick={scrollToTop}>Home</button>
          <button onClick={scrollToAbout}>About</button>
          <button onClick={scrollToWorks}>Works</button>
        </section>

        <section
          className="flex cursor-pointer items-center gap-1"
          onClick={scrollToTop}
        >
          <span className=" animate-fade-up animate-iteration-infinite animate-duration-[2500ms]">
            <img src={ArrowUp} alt="Arrow Up" />
          </span>

          <span className="animate-fade-left">Back to top</span>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
