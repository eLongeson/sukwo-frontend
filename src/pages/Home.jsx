import backgroundImage from "../assets/bg.svg";
import Thread from "../assets/thread-arrow.svg";
import Spiral from "../assets/spiral.svg";
import ButtonSolo from "../components/ButtonSolo";
import MouseIcon from "../assets/mouse-icon.svg";

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="min-h-[100vh] pb-2  pt-20"
    >
      <div className="max-w-7xl w-full flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
        <section className="md:w-[85%] relative lg:w-[65%] xl:w-[60%] flex flex-col gap-6 mt-[52px]">
          <div className="z-0 text-3xl sm:text-4xl md:text-[45px] lg:text-[52px] md:leading-[58.52px] font-bold">
            Create Stunning Websites Effortlessly – We Handle the Hard Work!
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

            <div>
              <img src={MouseIcon} alt="" />
            </div>

            <span>
              <img src={Thread} alt="" />
            </span>
          </div>
        </section>

        <div>
          <img src="" alt="" />
        </div>

        <section className="flex w-full justify-between overflow-clip">
          <img className="mt-24" src={Spiral} alt="" />
          <div className="text-[#222] w-fit text-[150px] font-bold opacity-20 -rotate-90">
            Hi
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
