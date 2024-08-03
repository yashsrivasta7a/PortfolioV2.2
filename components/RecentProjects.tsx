"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton"; // Adjust the path if necessary
import { SparklesCore } from "./ui/sparkles"; // Adjust the path if necessary

const RecentProjects = () => {
  return (
    <div className="pt-28 pb-28 relative" id="projects">
      {/* Background Grid */}
      <div className="absolute z-0  inset-0 h-100vh w-100vw dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2] flex items-center justify-center">
        <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <h1 className="heading relative z-10">
        Some of my <span className="text-purple">Projects</span>
      </h1>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {/* Card 1 */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.2] w-fit dark:shadow-none bg-grid-pattern bg-cover bg-black-100 bg-center p-10">
          <div className="flex flex-col items-start gap-4">
            <img
              src="/bg1.png"
              alt="Tech 1"
              className="w-96 rounded-2xl object-cover"
            />
            <h1 className=" text-2xl md:text-5xl font-extrabold text-purple mt-5 ml-5">
              TRACK IT
            </h1>
            <h1 className="text-base font-light text-white ml-5">
              Track your realtime location
            </h1>
            <a
              href="https://trackit-5orj.onrender.com/"
              className="top-1 ml-5 z-0 relative bottom-8"
            >
              <MagicButton
                title=""
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.2] w-fit dark:shadow-none bg-grid-pattern bg-cover bg-black-100 bg-center p-10">
          <div className="flex flex-col items-start gap-4">
            <img
              src="/b2.png"
              alt="Tech 2"
              className="w-96 rounded-3xl object-cover"
            />
            <h1 className="text-2xl md:text-5xl font-extrabold text-purple mt-5 ml-5">
              Pixel Code
            </h1>
            <h1 className="text-base font-light text-white ml-5">
              Freelance Work
            </h1>
            <a
              href="https://www.behance.net/gallery/180922585/PIXEL-CODE-UI-DESIGN"
              className="top-1 ml-5 z-0 relative bottom-8"
            >
              <MagicButton
                title="  "
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.2] w-fit dark:shadow-none bg-grid-pattern bg-cover bg-black-100 bg-center p-10">
          <div className="flex flex-col items-start gap-4">
            <img
              src="/b4.png"
              alt="Tech 4"
              className="w-96 rounded-2xl object-cover"
            />
            <h1 className="text-2xl md:text-4xl font-extrabold text-purple mt-5 ml-5">
              NetPlay Book
            </h1>
            <h1 className="text-base font-light text-white ml-5">
              Freelance Work
            </h1>
            <a
              href="https://netplayexchange.com/"
              className="top-1 ml-5 z-0 relative bottom-8"
            >
              <MagicButton
                title=""
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
