"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Facebook, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/mwenyapaul2/",
      id: 1,
    },
    {
      icon: Github,
      href: "https://github.com/PaulMwenya",
      id: 2,
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/paul-mwenya-685447393",
      id: 3,
    },
  ];

  const techStack = [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "shadcn/ui",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "SQL",
    "Supabase",
    "Clerk Auth",
    "Git",
    "GitHub",
    "Figma",
    "Vercel",
    "Netlify",
  ];

  return (
    <section className="relative overflow-hidden pt-20">
      {/* background */}
      <Image
        src="/hero.jpg"
        fill
        alt="Hero background"
        className="absolute inset-0 object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* main hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
        {/* text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            <span className="bg-linear-to-r from-[#a7fdbc] via-[#159baf] to-[#390eaf] bg-clip-text text-transparent">
              Hello, I’m <br /> Paul Mwenya
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed opacity-90 max-w-xl">
            A software engineer focused on frontend web development and design.
            I build intuitive, user-friendly interfaces that bridge the gap
            between design and functionality.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button className="gap-2">
              Read more about me
              <ArrowRight size={18} />
            </Button>

            <a href="/Paul_Mwenya_Resume .pdf" download>
              <Button
                variant="outline"
                className="gap-2 border-white/20 hover:bg-white/10 text-primary"
              >
                <Download size={18} />
                Resume
              </Button>
            </a>
          </div>

          {/* socials */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-white/60 text-sm">Follow me</span>
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

        {/* image */}
        <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/PMR.jpg"
            alt="Paul Mwenya"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* tech stack */}
      <div className="relative z-10 mt-16 flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold bg-linear-to-r from-[#a7fdbc] via-[#159baf] to-[#390eaf] bg-clip-text text-transparent">
          Tech Stack
        </h2>

        {/* desktop marquee */}
        <div className="hidden md:block overflow-hidden w-full pb-6">
          <div className="flex gap-6 whitespace-nowrap animate-marquee">
            {[...techStack, ...techStack].map((tech, index) => (
              <span
                key={index}
                className="text-white/60 px-4 py-2 rounded-full hover:text-blue-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* mobile scroll */}
        <div className="flex md:hidden gap-4 overflow-x-auto pb-6 px-4 w-full">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="flex-shrink-0 text-white/60 px-4 py-2 rounded-full hover:text-blue-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
