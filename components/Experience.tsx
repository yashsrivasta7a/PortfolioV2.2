import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="w-full pt-20 pb-36 relative" id="about">
      <h1 className="heading relative z-10">
        <span className="text-purple">ABOUT</span> ME!
      </h1>
      {/* Background Grid */}
      <div className="absolute z-0 inset-0 h-100vh w-100vw dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black-100/[0.2] flex items-center justify-center">
        <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="w-full mt-12 flex flex-col gap-10">
        {/* Large Card with Background Blur Effect */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.2] p-10 bg-gradient-to-r from-blue-900 to-blue-600 text-white flex items-center backdrop-blur-md">
          <div className="flex flex-col items-start gap-4 flex-1">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-purple">
              YASH SRIVASTAVA
            </h1>
            <p className="text-base lg:text-lg font-semibold">
              I&apos;m a 20-year-old UI/UX Designer diving into web development
              while pursuing my BTech. Over the past four years, I&apos;ve
              crafted standout graphic designs and collaborated with big names
              in Indian rap. My designs aren&apos;t just visuals—they&apos;re
              vibrant stories that bring digital landscapes to life. I blend
              creativity with a fun, engaging persona and see design as
              storytelling. Join me on this journey where creativity meets
              technology!
            </p>
          </div>
          <img
            src="/logo.png"
            alt="Large Card"
            className="w-40 h-40 lg:w-60 lg:h-60 object-cover rounded-lg ml-6 mix-blend-plus-darker hidden lg:block"
          />
        </div>

        {/* Work Experience Cards */}
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                  {/* New clickable image below text */}
                  <a
                    href={card.linkurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mt-3"
                  >
                    <img
                      src={card.linkImage}
                      alt="Link"
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
