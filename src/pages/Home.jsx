import backgroundImage from "../assets/bg.svg";
import Thread from "../assets/thread-arrow.svg";
import Spiral from "../assets/spiral.svg";
import ButtonSolo from "../components/ButtonSolo";
import MouseIcon from "../assets/mouse-icon.svg";
import StarIcon from "../assets/star.svg";

function Home({ workRef }) {
  const scrollToWorks = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="min-h-[100vh] pb-2  pt-20"
    >
      <div className="max-w-7xl relative w-full flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
        <section className="md:w-[85%]  lg:w-[65%] flex flex-col gap-6 mt-[52px]">
          <div className="z-0 relative text-3xl sm:text-4xl md:text-[45px] lg:text-[52px] md:leading-[58.52px] font-bold">
            <span className="relative">
              <img
                className="absolute z-0 left-[36px]  sm:top-1.5 sm:left-[56px] md:top-2.5 md:left-[76px] lg:top-3 lg:left-24 animate-pulse"
                src={StarIcon}
                alt=""
              />
              <span className="relative z-10">Create</span>{" "}
              {/* Higher z-index than the image */}
            </span>
            <span
              style={{
                background: "rgba(253, 253, 253, 0.90)",
                backdropFilter: "blur(5px)",
                transform: "rotate(-2.485deg)",
              }}
              className="py-3 px-2 border-[1.7px] inline-flex border-[#E0912F]"
            >
              Stunning
            </span>{" "}
            Websites Effortlessly – We Handle the Hard Work!
          </div>

          <div className="text-[18px] leading-[23.94px]">
            Transform your vision into reality with our expert website
            solutions. No editing experience needed – we make your online
            presence powerful and captivating. Let's build something amazing
            together!
          </div>

          <div className="flex justify-between">
            <span>
              <ButtonSolo />
            </span>

            <span>
              <img src={Thread} alt="" />
            </span>
          </div>
        </section>

        <section className="flex w-full justify-between overflow-clip">
          <img className="mt-24" src={Spiral} alt="" />

          {/* <div className="flex items-end">
            <img
              className="animate-bounce cursor-pointer"
              src={MouseIcon}
              alt="Mouse Icon"
            />
          </div> */}
          <div className="text-[#222] w-fit text-[150px] font-bold opacity-20 -rotate-90">
            Hi
          </div>
        </section>

        {/* Mouse Icon Container */}
        <div
          onClick={scrollToWorks}
          className="absolute hidden sm:inline cursor-pointer bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce -translate-y-1/2"
        >
          <img src={MouseIcon} alt="Mouse Icon" />
        </div>
      </div>
    </div>
  );
}

export default Home;
