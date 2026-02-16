import { FaEnvelope, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-4">

        {/* Name */}
        <h2 className="text-xl font-bold text-cyber tracking-wide">
          Nikhil Chauhan
        </h2>

        {/* Short line */}
        <p className="text-gray-400 text-sm">
          Full Stack Web Developer · Building modern & scalable web experiences
        </p>

        {/* Email (internal route example) */}
        <div className="flex justify-center items-center gap-2 text-gray-300">
          <FaEnvelope className="text-cyber" />
          <Link
            to="/contact"
            className="hover:text-cyber transition"
          >
            nc388782@gmail.com
          </Link>
        </div>

        {/* Social icons (internal navigation) */}
        <div className="flex justify-center gap-6 text-xl mt-4">
          <Link to="https://github.com/nikhilstw53" className="hover:text-cyber transition">
            <FaGithub />
          </Link>

          <Link to="/" className="hover:text-cyber transition">
            <FaLinkedin />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-6">
          © 2025 Nikhil Chauhan · Made with{" "}
          <FaHeart className="inline text-red-500 mx-1" /> using React & Tailwind
        </p>

      </div>
    </footer>
  );
}
