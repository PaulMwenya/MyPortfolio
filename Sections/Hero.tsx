"use client";
import Image from "next/image";
import React from "react";
import "animate.css";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Facebook, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/raemond.fwalishi/",
      id: 1,
    },
    {
      icon: Github,
      href: "https://github.com/PaulMwenya",
      id: 2,
    },
    {
      icon: Linkedin,
      href: "https://www.facebook.com/raemond.fwalis",
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
    <section className="relative overflow-hidden pt-16">
      {/*background image */}
      <Image
        src="/hero.jpg"
        fill
        alt="main section"
        className="absolute inset-0 object-cover"
        priority
      />
      {/* overlay to make bg less visible*/}
      <div className="absolute inset-0 bg-black/60" />
      {/* hero section content main div*/}
      <div className="relative z-10 text-white p-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {" "}
        {/* text div*/}
        <div className="flex flex-col gap-4 text-center">
          <h1 className="scroll-m-20 text-start text-wrap text-4xl sm:text-7xl font-extrabold tracking-tight text-balance animate__animated animate__fadeInLeft animate__delay-0.4s 0.4s">
            <span className="bg-linear-to-r from-[#a7fdbc] via-[#159baf] to-[#390eaf] bg-clip-text text-transparent">
              {" "}
              Hello, I'm <br /> Paul Mwenya
            </span>
          </h1>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg animate__animated animate__fadeInLeft animate__delay-1s	1s">
            A software engineer primarily focused on frontend Web Development
            and Web Design. I create intuitive, user-friendly interfaces that
            bridge the gap between design and functionality.
          </p>
          <div className="flex gap-4 justify-center items-center sm:mx-auto ">
            {/*call to action buttons */}
            <Button variant={"secondary"} className="w-auto">
              Read more about me <ArrowRight className="text-primary" />
            </Button>
            <div className="bg-linear-to-r from-amber-500 via-blue-600 to-emerald-500 rounded-lg p-0.5">
              <Button
                variant={"ghost"}
                className="w-auto m-auto bg-black rounded-lg hover:bg-white/60"
              >
                <Download className="animate animate-ping text-green-500" />
                Resume{" "}
              </Button>
            </div>
          </div>
          <div className="flex justify-center gap-4 p-4 animate__animated animate__backInUp animate__delay-2s	2s">
            <span className="text-white/60">Follow me</span>
            {socialLinks.map((social) => (
              <a
                href={social.href}
                key={social.id}
                className="hover:text-blue-500"
              >
                {<social.icon />}
              </a>
            ))}
          </div>
        </div>
        {/* image div*/}
        <div className="relative w-auto h-100 md:h-full p-4 max-w-2xl">
          {" "}
          <Image
            src="/PMR.jpg"
            fill
            alt="Paul Mwenya"
            className="object-cover rounded-2xl"
          />
        </div>{" "}
      </div>

      {/* Tech stack section below grid */}
      <div className="w-full mt-12 relative z-10 flex flex-col items-center gap-4">
        {/* Heading above marquee */}
        <h2 className="bg-linear-to-r from-[#a7fdbc] via-[#159baf] to-[#390eaf] bg-clip-text text-transparent text-2xl font-bold">
          My Skills
        </h2>

        {/* Marquee */}
        <div className="overflow-hidden w-full hidden md:block pb-6">
          <div className="flex animate-marquee gap-6 whitespace-nowrap">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block text-white/60 px-4 py-2 rounded-full hover:text-blue-200"
              >
                {tech}
              </span>
            ))}
            {/* duplicate for seamless scrolling */}
            {techStack.map((tech, index) => (
              <span
                key={`dup-${index}`}
                className="inline-block text-white/60 px-4 py-2 rounded-full hover:text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Mobile: swipeable scroll */}
        <div className="flex md:hidden gap-4 overflow-x-auto py-2 scrollbar-hide w-full px-4 pb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-block text-white/60 px-4 py-2 rounded-full hover:text-blue-200 flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
