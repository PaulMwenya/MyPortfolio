import React from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "ZedHome",
      description:
        "A real estate platform built to connect property seekers and tenants with property owners.",
      image: "/zedhome.png",
      tech: "React, shadcn/ui, OpenStreetMap",
      link: "https://zedhome.netlify.app/",
      github: "https://github.com/PaulMwenya",
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio built to showcase my skills, projects I’ve built and everything about me.",
      image: "/portfolio.png",
      tech: "Next.js, shadcn/ui",
      link: "https://mwenyapaul.netlify.app/",
      github: "https://github.com/PaulMwenya",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-12"
    >
      {/* background */}
      <Image
        src="/hero.jpg"
        fill
        alt="projects background"
        className="absolute inset-0 object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      <h4 className="relative z-10 mb-8 text-xl font-semibold tracking-tight text-green-500/40">
        Projects
      </h4>

      {/* cards */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-primary rounded-md p-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex flex-col xl:flex-row gap-4">
              {/* image */}
              <div className="w-full xl:w-[260px] shrink-0 overflow-hidden rounded-sm border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={260}
                  height={160}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-3 text-white">
                <h4 className="text-xl font-semibold tracking-tight bg-linear-to-r from-[#a7fdbc] via-[#159baf] to-[#390eaf] bg-clip-text text-transparent">
                  {project.title}
                </h4>

                <p className="text-sm leading-relaxed opacity-90">
                  {project.description}
                </p>

                <p className="text-xs opacity-70">{project.tech}</p>

                {/* actions */}
                <div className="mt-2 flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="gap-2">
                      Live Demo
                      <ExternalLink size={16} />
                    </Button>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-green-200 transition-colors"
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* view more */}
      <div className="relative z-20 mt-10 flex justify-center">
        <Button variant="outline" className="gap-2">
          View all projects
          <ExternalLink size={16} />
        </Button>
      </div>
    </section>
  );
}
