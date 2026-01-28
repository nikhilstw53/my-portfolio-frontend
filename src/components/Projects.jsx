const projects = [
  {
    title: "Spiner Game",
    image: "/spiner.png",
    code: "#",
    live: "#",
    tech: ["React", "JavaScript"],
  },
  {
    title: "E-commerce App",
    image: "/website.jpeg",
    code: "#",
    live: "#",
    tech: ["React", "Node.js", "Tailwind"],
  },
  {
    title: "Calculator",
    image: "/calculater.jpeg",
    code: "#",
    live: "#",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather App",
    image: "/weather.jpeg",
    code: "#",
    live: "#",
    tech: ["API", "React"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 animate-fade">
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        <span className="text-cyber">Featured</span>{" "}
        <span className="text-white">Projects</span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-[2rem] overflow-hidden
            bg-white/5 border border-white/10
            hover:border-cyber transition-all duration-500"
          >
            {/* IMAGE */}
            <div className="relative h-[420px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover
                group-hover:scale-110 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t
                from-black/90 via-black/40 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 p-6 w-full">
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

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              {/* BUTTONS */}
              <div className="flex gap-4 opacity-0 group-hover:opacity-100
                translate-y-4 group-hover:translate-y-0
                transition-all duration-500">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-cyber text-black
                  rounded-lg text-sm font-medium"
                >
                  Live Demo ↗
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 border border-white/30
                  rounded-lg text-sm hover:border-cyber transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
