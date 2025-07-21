"use client";
// ...existing code...
import { FaLocationArrow, FaExternalLinkAlt } from "react-icons/fa";
import MagicButton from "./MagicButton"; // Adjust the path if necessary
import { SparklesCore } from "./ui/sparkles"; // Adjust the path if necessary
import projectData from "../data/projectData";
import { chromeExtensions } from "../data/chromeExtensions";
import React, { useState } from "react";

const TABS = [
  { label: "Web Projects", key: "web" },
  { label: "Chrome Extensions", key: "chrome" },
];

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState("web");

  const renderProjects = (data: any[]) => (
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {data.map((project, index) => (
        <div
          key={`${activeTab}-${index}`} // More unique key
          className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer"
        >
          {/* Glassmorphism Card */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 h-full min-h-[280px] flex flex-col justify-between shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 blur-sm -z-10 animate-pulse" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Header with Icon */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10">
                  <FaLocationArrow className="text-purple-500 text-xl transform group-hover:rotate-45 transition-transform duration-500" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <FaExternalLinkAlt className="text-white/60 text-sm" />
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                  {project.description}
                </p>
              </div>

              {/* Bottom Section with Link Button */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                  View Project
                </span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center opacity-80 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <FaLocationArrow className="text-white text-xs transform rotate-45" />
                </div>
              </div>
            </div>

            {/* Sparks Effect - Only render if SparklesCore is available */}
            {typeof SparklesCore !== "undefined" && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                <SparklesCore
                  id={`sparkles-${activeTab}-${index}`} // More unique ID
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={50}
                  className="w-full h-full"
                  particleColor="#8B5CF6"
                />
              </div>
            )}

            {/* Floating Particles Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-purple-500 rounded-full animate-bounce"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "2s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Clickable Overlay */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-50"
              aria-label={`View ${project.title} project`}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-28 pb-28 relative overflow-hidden" id="projects">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black-100 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <h1 className="heading relative z-10 mb-8">
        Some of my <span className="text-purple-500">Projects</span>
      </h1>

      {/* Enhanced Tab Switcher */}
      <div className="flex gap-2 mt-8 justify-center z-10 relative">
        <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-2 shadow-2xl">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {activeTab === tab.key && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl" />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {activeTab === "web" && renderProjects(projectData)}
      {activeTab === "chrome" && renderProjects(chromeExtensions)}
    </div>
  );
};

export default RecentProjects;
