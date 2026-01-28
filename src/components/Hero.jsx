export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 md:pt-36 pb-28 flex flex-col md:flex-row items-center gap-20 animate-fade bg-black"
    >
      {/* Decorative background circles */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-yellow-400 rounded-full opacity-10 blur-2xl"></div>

      {/* LEFT CONTENT */}
      <div className="z-10 animate-slideUp">
        <h1 className="text-5xl font-bold leading-tight">
          <span className="flex items-center gap-3 animate-textGlow text-purple-400">
            <span>💻</span>
            Software IT Engineer
          </span>
          <span className="flex items-center gap-3 mt-2 animate-textGlow text-green-400">
            <span>🖥️</span>
            Full-Stack Web Developer
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl animate-fadeDelay">
          Hi, I’m <span className="text-yellow-400 font-semibold">Nikhil Chauhan</span>.  
          I build modern, animated, and scalable web applications that make an impact.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-yellow-400
          text-black rounded-xl hover:bg-yellow-500 hover:scale-105
          transition animate-bounceSoft"
        >
          RESUME
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="z-10 relative">
        <img
          src="./image.png"
          alt="profile"
          className="w-72 h-72 rounded-full shadow-[0_0_90px_#00ffb3] animate-float"
        />
      </div>

      {/* Optional tagline or animated scroll hint */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm animate-bounce">
        Scroll down to see my work ⬇️
      </div>
    </section>
  );
}
