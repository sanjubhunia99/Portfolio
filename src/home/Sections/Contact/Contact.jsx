import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_hxibvxq",
        "template_59vnvir",
        form.current,
        "J8Fnx2Nd0u2t4D2ne"
      )
      .then(
        () => {
          alert("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Message failed to send");
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="scroll-mt-16 px-4 py-6 md:px-20">
      <h1 className="section-heading text-2xl font-semibold text-white text-center mb-8">
        📸 Contact Me
      </h1>

      <div className="flex justify-center">
        <div className="w-full max-w-md rounded-3xl border border-white/15 bg-gradient-to-br from-[#1e1b4b]/95 via-[#172554]/95 to-[#0f172a]/95 p-5 shadow-2xl shadow-indigo-950/40">
          <h2 className="text-lg font-semibold mb-4 text-white text-center">
            Send me a message
          </h2>

          <form onSubmit={handleSubmit} ref={form} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-lg border border-white/15 bg-[#0b1224]/80 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-lg border border-white/15 bg-[#0b1224]/80 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30"
              required
            />

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              className="w-full rounded-lg border border-white/15 bg-[#0b1224]/80 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-full font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "accent-button text-white hover:from-indigo-400 hover:to-cyan-400 cursor-pointer"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-around md:justify-center md:gap-16 mt-12">
        <ContactIcon href="tel:+919775638730" label="Call" color="bg-blue-800">
          <FaPhoneAlt />
        </ContactIcon>

        <ContactIcon
          href="mailto:sanjubhunia93@outlook.com"
          label="Email"
          color="bg-blue-500"
        >
          <FaEnvelope />
        </ContactIcon>

        <ContactIcon
          href="https://wa.me/919775638730"
          label="WhatsApp"
          color="bg-green-500"
          external
        >
          <FaWhatsapp />
        </ContactIcon>
      </div>
    </div>
  );
};

const ContactIcon = ({ href, label, color, children, external }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="flex flex-col items-center hover:scale-105 transition"
  >
    <div
      className={`w-14 h-14 ${color} rounded-full flex items-center justify-center text-xl text-white`}
    >
      {children}
    </div>
    <p className="mt-2 text-sm font-medium text-white">{label}</p>
  </a>
);

export default Contact;