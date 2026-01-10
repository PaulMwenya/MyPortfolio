import React from "react";
import Image from "next/image";
import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "ZedHome",
      description:
        "A real estate platform built to connect property seekers and tenants with property owners.",
      image: "/zedhome.png",
      tech: "React, shadcn/ui, OpenStreetMap",
      link: "https://zedhome.netlify.app/",
      github: Github,
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio built to showcase my skills,projects iv built and everything about me",
      image: "/portfolio.png",
      tech: "Next Js, shadcn/ui ",
      link: "https://mwenyapaul.netlify.app/",
      github: Github,
    },
  ];
  return (
    <section id="projects" className="relative overflow-hidden py-12 z-10 px-8">
      {/*background image */}
      <Image
        src="/hero.jpg"
        fill
        alt="main section"
        className="absolute inset-0 object-cover"
        priority
      />
      {/* overlay to make bg less visible*/}
      <div className="absolute inset-0 bg-black/70" />
      {/* main content div*/}
      <br />
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-green-500/40 relative z-10 mb-8">
        Projects
      </h4>
      <div className="relative z-20 w-full gap-4 grid grid-cols-1 md:grid-cols-2 h-auto">
        {/*project div*/}
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex gap-4 shadow-2xl rounded-sm p-4 bg-primary flex-col text-white md:flex-row"
          >
            {" "}
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={600}
              className="rounded-sm object-contain"
            />{" "}
            <div className="flex flex-col gap-4">
              <a href={project.link} className="">
                {" "}
                <h4 className="text-xl font-semibold tracking-tight bg-linear-to-r from-[#a7fdbc] via-[#159baf] to-[#390eaf] bg-clip-text text-transparent">
                  {project.title}
                </h4>
              </a>

              <p className="text-sm text-white">{project.description}</p>
              <p>{project.tech}</p>
              <a href="https://github.com/PaulMwenya" className="">
                {" "}
                <project.github
                  width={40}
                  height={40}
                  className="text-green-500 w-auto "
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
