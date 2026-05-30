"use client";

import React from "react";

const Contact = () => {
  return (
    <section className="relative py-32 px-6 bg-black" id="contact">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.05] mb-12">
          Ready to build something structurally sound?
        </h2>
        
        <form 
          action="https://formsubmit.co/support.honewebzen@gmail.com" 
          method="POST"
          className="max-w-2xl mx-auto flex flex-col gap-6 text-left"
        >
          {/* Hone WebZen Redirect after submission */}
          <input type="hidden" name="_next" value="https://hone-webzen.onrender.com" />
          
          {/* Disable Captcha for smoother UX */}
          <input type="hidden" name="_captcha" value="false" />
          
          {/* Email Subject Line */}
          <input type="hidden" name="_subject" value="New Project Inquiry!" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white text-xs font-bold uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                required 
                className="bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white text-xs font-bold uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                required 
                className="bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="project_description" className="text-white text-xs font-bold uppercase tracking-widest">Project Description</label>
            <textarea 
              name="project_description" 
              id="project_description"
              rows={5}
              required 
              className="bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button 
            type="submit"
            className="mt-4 px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-[#E5E5E5] transition-colors self-start"
          >
            Send Details
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
