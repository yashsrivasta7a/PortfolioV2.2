import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { SparklesCore } from "./ui/sparkles";
import { FlipWords } from "./ui/Flip-words";
import { socialMedia } from "@/data";

const words = ["SRIVATAVA", "SRIVATA7A"];

const Hero = () => {
  return (
    <div className="mt-24">
      <div className="h-100vh relative w-full z-20 flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={1.5}
            maxSize={1.4}
            particleDensity={10}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="h-[40rem] flex flex-col justify-center items-center px-4 text-center">
          <div className="text-2xl sm:text-7xl mx-auto font-bold text-purple dark:text-purple">
            YASH
            <FlipWords
              words={words}
              className="font-bold text-purple dark:text-purple"
            />
          </div>
          <h2 className="text-sm sm:text-xl text-white ">
            {"< "} Developer / Designer{" >"}
          </h2>
          <div className="flex items-center mt-4 md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                onClick={() => window.open(info.url, "_blank")}
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
    </div>
  );
};

export default Hero;
