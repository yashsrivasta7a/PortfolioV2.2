"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    external?: boolean;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const handleScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault(); // Prevent default behavior
    const element = document.getElementById(target.replace("#", ""));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/10 shadow-lg items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(8px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) =>
          navItem.external ? (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative dark:text-neutral-50 flex items-center space-x-6 text-neutral-600 dark:hover:text-purple hover:text-purple"
            >
              <span className="md:text-xl text-xs pr-3 font-semibold font-sans cursor-pointer">
                {navItem.name}
              </span>
            </a>
          ) : (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              onClick={(e) => handleScroll(e, navItem.link)}
              className="relative dark:text-neutral-50 flex items-center space-x-6 text-neutral-600 dark:hover:text-purple hover:text-purple"
            >
              <span className="md:text-xl text-xs pr-3 font-semibold font-sans cursor-pointer">
                {navItem.name}
              </span>
            </a>
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
};
