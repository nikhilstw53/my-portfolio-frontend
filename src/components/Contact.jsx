import { FaEnvelope, FaUser, FaPhone, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 animate-fade flex justify-center"
    >
      <div className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-cyber mb-4 text-center">
          Hire Me
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Have a project in mind? Let’s build something amazing together.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute top-4 left-4 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10
              rounded-lg outline-none focus:border-cyber transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10
              rounded-lg outline-none focus:border-cyber transition"
            />
          </div>

          {/* Mobile */}
          <div className="relative">
            <FaPhone className="absolute top-4 left-4 text-gray-400" />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10
              rounded-lg outline-none focus:border-cyber transition"
            />
          </div>

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-black/40 border border-white/10
            rounded-lg outline-none focus:border-cyber transition resize-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2
            px-6 py-3 bg-cyber text-black font-semibold rounded-lg
            hover:scale-105 transition"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </form>

        {/* Direct Email */}
        <p className="text-center text-gray-400 mt-6">
          Or email me directly at{" "}
          <a
            href="mailto:nc388782@gmail.com"
            className="text-cyber hover:underline"
          >
            nc388782@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 text-gray-400">
          <a href="#" className="hover:text-cyber transition">GitHub</a>
          <a href="#" className="hover:text-cyber transition">LinkedIn</a>
          <a href="#" className="hover:text-cyber transition">Instagram</a>
        </div>

      </div>
    </section>
  );
}
