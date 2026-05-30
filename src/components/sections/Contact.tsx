"use client";

import React from "react";

const Contact = () => {
  const email = "support.honewebzen@gmail.com";
  const subject = "Project Inquiry";
  const body = "Let's talk about building something structurally sound.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section className="relative py-32 px-6 bg-black" id="contact">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.05] mb-12">
          Ready to build something structurally sound?
        </h2>
        
        <a 
          href={mailtoLink}
          className="inline-block px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-[#E5E5E5] transition-colors"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  );
};

export default Contact;
