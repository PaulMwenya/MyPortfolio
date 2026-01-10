import React from "react";
import Image from "next/image";
import { Code2, Lightbulb, Rocket, Users2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean & Modular Code",
      description:
        "I write well-structured, maintainable code that’s easy to scale, debug, and improve over time.",
    },
    {
      icon: Users2,
      title: "User-Centered Approach",
      description:
        "I focus on building interfaces that are intuitive, accessible, and designed with real users in mind.",
    },
    {
      icon: Lightbulb,
      title: "Problem-Solving Mindset",
      description:
        "I enjoy breaking down complex problems and turning ideas into practical, effective solutions.",
    },
    {
      icon: Rocket,
      title: "Performance & Growth",
      description:
        "I aim to build fast, optimized applications while continuously learning and improving my skills.",
    },
  ];

  return (
    <section id="About" className="relative overflow-hidden py-12">
      {/*background image */}
      <Image
        src="/tech.png"
        fill
        alt="main section"
        className="absolute inset-0 object-cover"
        priority
      />
      {/* overlay to make bg less visible*/}
      <div className="absolute inset-0 bg-black/90" />
      <div className="relative z-10 text-white p-4 grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        <div className="p-6 space-y-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-green-500/40">
            About me
          </h4>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 bg-linear-to-r from-[#a7fdbc] via-[#159baf] to-[#390eaf] bg-clip-text text-transparent">
            Crafting reliable web solutions with clarity and precision
          </h2>
          <div className="flex gap-0.5 flex-col">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I’m Paul Mwenya, a Computer Science & Software Engineering
              graduate from The University of Zambia with a strong passion for
              building clean, functional, and user-focused web applications.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I enjoy turning ideas,user requirements into real products through
              code, paying close attention to performance, design, and user
              experience.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I work mainly with React,Next.js and Node with express, using
              modern tools and best software engineering practices,principles
              and methodologies to build responsive,modular,reliable web
              applications.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 space-y-4 items-center">
          <br />
          {highlights.map((highlight) => (
            <div key={highlight.title} className="flex flex-col">
              <div className="flex items-center space-x-2">
                <highlight.icon className="text-blue-500" />
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-green-500/40">
                  {highlight.title}
                </h4>
              </div>
              <p className="leading-7 [&:not(:first-child)]:mt-1">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
