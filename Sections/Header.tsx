"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "animate.css";
import { Dancing_Script } from "next/font/google";
export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"], // weights
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#About" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <header className="fixed top-0 inset-x-0  flex h-16 items-center justify-between bg-primary px-4 text-white backdrop-blur-lg z-[200]">
      <div>
        <a
          className={`${dancingScript.className} hidden sm:block font-bold hover:text-blue-200`}
          href="#"
        >
          PMwenya
        </a>
        <a href="#" className={`${dancingScript.className} sm:hidden`}>
          PM
        </a>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav
          className="fixed inset-x-0 top-16 z-[300] flex min-h-screen flex-col bg-primary p-4
                     md:hidden animate__animated animate__fadeInRight"
        >
          {navLinks.map((section) => (
            <a
              key={section.label}
              href={section.href}
              onClick={() => setIsOpen(false)}
              className="py-2 text-lg hover:text-green-600"
            >
              {section.label}
            </a>
          ))}
          <Button className="bg-blue-700">Contact me</Button>
        </nav>
      )}

      {/* Desktop nav */}
      <nav className="hidden gap-4 md:flex">
        {navLinks.map((section) => (
          <a
            key={section.label}
            href={section.href}
            className="hover:text-blue-200"
          >
            {section.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer md:hidden"
        >
          {" "}
          {!isOpen ? <Menu size={24} /> : <X size={24} />}
        </Button>
        <Button
          className="hidden md:block hover:bg-linear-to-r from-[#a7fdbc] via-[#159baf] to-[#390eaf]"
          size="sm"
          variant="default"
        >
          Contact me
        </Button>
      </div>
    </header>
  );
}
