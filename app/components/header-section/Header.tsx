"use client";
import { useView } from "@/contexts/ViewContext";
import { Icon, loadIcons } from "@iconify/react/dist/iconify.js";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  loadIcons([
    "gg:close",
    "lucide:menu",
    "hugeicons:linkedin-01",
    "hugeicons:github",
    "akar-icons:x-fill",
  ]);
  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <>
      <div
        ref={headerRef}
        className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none"
      >
        <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-linear-to-r from-[#d9d9d91f] to-[#7373731f] mt-4 sm:mt-8 backdrop-blur-md std-backdrop-blur">
          <Image
            src="/K-white.png"
            width={32}
            height={48}
            alt="logo"
            className="select-none rounded-sm"
          />
          <Icon
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer flex sm:hidden text-2xl"
            icon={`${menuOpen ? "gg:close" : "lucide:menu"}`}
          />

          <ul className="hidden sm:flex gap-8 lg:gap-12 text-white/25">
            <Link
              href="#home"
              className={`${sectionInView === "home" && "text-white"} `}
            >
              Home
            </Link>
            <Link
              href="#work"
              className={`${sectionInView === "work" && "text-white"} `}
            >
              Work
            </Link>
            <Link
              href="#about"
              className={`${sectionInView === "about" && "text-white"} `}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`${sectionInView === "contact" && "text-white"} `}
            >
              Contact
            </Link>
          </ul>
          <div className="gap-5 text-xl hidden sm:flex">
            <Link target="_blank" href="https://www.linkedin.com/in/durga-prasad-kakileti-bannu/">
              <Icon icon="hugeicons:linkedin-01" />
            </Link>
            <Link target="_blank" href="https://github.com/DurgaPydahSoft">
              <Icon icon="hugeicons:github" />
            </Link>
            <Link target="_blank" href="https://www.youtube.com/@durgaprasadkakileti">
              <Icon icon="hugeicons:youtube" />
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && <MobileMenu onMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  );
}
