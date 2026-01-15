"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Fix: type the event
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form); // Replace with API call/email handler
    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 relative z-10 py-16 bg-black/90"
    >
      {/* background */}
      <Image
        src="/tech.png"
        fill
        alt="Contact background"
        className="absolute inset-0 object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold bg-linear-to-r from-[#a7fdbc] via-[#159baf] to-[#390eaf] bg-clip-text text-transparent mb-6">
          Contact Me
        </h2>
        <p className="text-white/70 mb-10 text-center max-w-xl">
          Have a project in mind or want to get in touch? Fill out the form
          below or reach me via WhatsApp, email, or phone.
        </p>

        {/* Grid: Form + Contact info */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur-md mx-auto w-full max-w-md md:max-w-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-32"
              required
            />
            <Button
              type="submit"
              className="mt-2 bg-green-500 hover:bg-green-600"
            >
              Send Message
            </Button>
            {submitted && (
              <p className="text-green-400 mt-2 animate__animated animate__fadeIn">
                Message sent! I will get back to you soon.
              </p>
            )}
          </form>

          {/* Contact Info & WhatsApp */}
          <div className="flex flex-col gap-6 justify-center md:justify-start items-start md:items-start">
            {/* Email */}
            <div className="flex items-center gap-2 text-white/70">
              <Mail size={20} />
              <a
                href="mailto:mwenyapaul@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                mwenyapaul2@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 text-white/70">
              <Phone size={20} />
              <a
                href="tel:+260971234567"
                className="hover:text-blue-400 transition-colors"
              >
                +260 77 027 7242
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-2 text-white/70">
              <a
                href="https://bit.ly/49ZVMSf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </a>
              <span className="text-white/70">Chat on WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
