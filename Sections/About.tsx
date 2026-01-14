import React from "react";
import Image from "next/image";
import { Code2, Lightbulb, Rocket, Users2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean & Modular Code",
      description:
        "I write well-structured, maintainable code that scales easily, reduces bugs, and stays readable over time.",
    },
    {
      icon: Users2,
      title: "User-Centered Approach",
      description:
        "I design interfaces that are intuitive, accessible, and focused on solving real user problems.",
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
        "I build fast, optimized applications while continuously improving my skills and best practices.",
    },
  ];

  return (
    <section id="About" className="relative overflow-hidden py-16">
      {/* background */}
      <Image
        src="/tech.png"
        fill
        alt="About background"
        className="absolute inset-0 object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/80" />

      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
        {/* LEFT: Story */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold tracking-tight text-green-500/40">
            About me
          </h4>

          <h2 className="text-3xl font-semibold tracking-tight bg-linear-to-r from-[#a7fdbc] via-[#159baf] to-[#390eaf] bg-clip-text text-transparent">
            Crafting reliable web solutions with clarity and precision
          </h2>

          <div className="space-y-5 text-sm leading-relaxed opacity-90">
            <p>
              I’m Paul Mwenya, a Computer Science & Software Engineering
              graduate from the University of Zambia with a strong passion for
              building clean, functional, and user-focused web applications.
            </p>

            <p>
              I enjoy turning ideas and user requirements into real products
              through code, paying close attention to performance, design, and
              overall user experience.
            </p>

            <p>
              I mainly work with React, Next.js, and Node.js with Express, using
              modern tools and proven software engineering principles to build
              responsive, modular, and reliable applications.
            </p>
          </div>
        </div>

        {/* RIGHT: Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="flex flex-col gap-3 rounded-md bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-blue-500/10">
                  <highlight.icon className="text-blue-500 w-5 h-5" />
                </div>

                <h4 className="text-base font-semibold text-green-500/80">
                  {highlight.title}
                </h4>
              </div>

              <p className="text-sm leading-relaxed opacity-85">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
