"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your sales process? Let’s talk about how
            Hyperflow can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-muted-foreground">hello@hyperflow.com</p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Office</p>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-primary/90 text-background py-4 px-6 rounded-lg font-semibold transition-transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
