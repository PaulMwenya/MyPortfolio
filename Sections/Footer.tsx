"use client";

import React from "react";
import { Github, Linkedin, Facebook } from "lucide-react";
import { dancingScript } from "./Header"; // reuse the Dancing_Script font

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/mwenyapaul2/", id: 1 },
    { icon: Github, href: "https://github.com/PaulMwenya", id: 2 },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/paul-mwenya-685447393",
      id: 3,
    },
  ];

  const navLinks = [
    { label: "About", href: "#About" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative z-10 bg-black/90 backdrop-blur-sm border-t border-white/10 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <a
          href="#"
          className={`${dancingScript.className} text-2xl font-bold hover:text-blue-400 transition-colors`}
        >
          PM<span className="text-green-400">.</span>
        </a>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social links */}
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-400 transition-colors"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-white/50 text-sm">
        &copy; {new Date().getFullYear()} Paul Mwenya. All rights reserved.
      </div>
    </footer>
  );
}
