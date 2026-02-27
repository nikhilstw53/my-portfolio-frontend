const projects = [
  {
    title: "construction website",
    image: "./construction.png",
    live: "https://ksv-construction-website-project-cx.vercel.app/",
    tech: ["React.js", "node.js"],
  },
  {
    title: "E-commerce App",
    image: "/website.jpeg",
    live: "https://frontend-e-commerce-eight-chi.vercel.app/",
    tech: ["React", "Node.js", "express.js"],
  },
  {
    title: "Calculator",
    image: "/calculater.jpeg",
    live: "https://calculater-with-js.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather App",
    image: "/weather.jpeg",
    live: "https://weather-seven-delta.vercel.app/",
    tech: ["html", "js"],
  },
  {
    title: "MY PORTFOLIO",
    image: "image.png",
    live: "https://my-portfolio-frontend-ruby.vercel.app/",
    tech: ["React.js", "node.js"],
  },
  {
    title: "TODO-APP",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1lXY8pD3MKHozJHBitTQ4NZsJPYSQsDby0A&s",
    live: "https://todo-ui-sigma.vercel.app/",
    tech: ["React.js", "node.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 animate-fade">
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
        <span className="text-cyber">Featured</span>{" "}
        <span className="text-white">Projects</span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden
            bg-white/5 border border-white/10
            hover:border-cyber transition-all duration-500
            h-[380px]"
          >
            {/* IMAGE */}
            <div className="relative h-[220px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center
                transition duration-700 group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t
                from-black/90 via-black/40 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 p-5 w-full">
              {/* TECH TAGS */}
              <div className="flex gap-2 mb-3 flex-wrap">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full
                    bg-white/10 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              {/* 🔥 ONLY LIVE BUTTON */}
              <div className="opacity-0 group-hover:opacity-100
                translate-y-4 group-hover:translate-y-0
                transition-all duration-500">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-cyber text-black
                  rounded-lg text-sm font-medium"
                >
                  Live Demo ↗
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}