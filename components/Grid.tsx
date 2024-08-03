import React from "react";
import { SparklesCore } from "./ui/sparkles";

function Grid() {
  return (
    <section className="relative overflow-hidden pb-20 ">
      {/* Grid Content */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="flex justify-center gap-16 mb-16">
          <div className="hidden lg:flex flex-col items-center">
            <h1 className="relative text-9xl font-bold font-sans pt-16 text-white text-transparent bg-clip-text">
              TECH
            </h1>
            <h2 className="absolute text-purple text-6xl font-bold pacifico-font top-44">
              Stack
            </h2>
          </div>
          <div
            className={`flex justify-center p-8 items-center relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input w-fit dark:shadow-none`}
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%), url('/grid.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-6 gap-8 p-2 md:p-7">
              {/* Your images here */}
              <img
                src="/Tech Stack/C++.svg"
                alt="Tech 1"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/css3.svg"
                alt="Tech 2"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/express.svg"
                alt="Tech 3"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/figma.svg"
                alt="Tech 4"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/git.svg"
                alt="Tech 5"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/html5.svg"
                alt="Tech 6"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/java.svg"
                alt="Tech 7"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/jquery.svg"
                alt="Tech 8"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/js.svg"
                alt="Tech 9"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/mongodb.svg"
                alt="Tech 10"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/nodejs.svg"
                alt="Tech 11"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/npm.svg"
                alt="Tech 12"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/postman.svg"
                alt="Tech 13"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/ps.svg"
                alt="Tech 14"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/reactjs.svg"
                alt="Tech 15"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
              <img
                src="/Tech Stack/tailwindcss.svg"
                alt="Tech 16"
                className="md:w-16 md:h-16 w-12 h-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Background grid overlay */}
      {/* Background grid overlay */}
      <div className="absolute inset-0 z-0 h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.05] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </section>
  );
}

export default Grid;
