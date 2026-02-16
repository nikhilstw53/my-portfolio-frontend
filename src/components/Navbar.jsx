export default function Navbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur z-50
      flex justify-between items-center px-6 md:px-20 py-4">

      <h1 className="text-2xl font-bold text-cyber">Nikhil.</h1>

      <div className="flex gap-6 text-sm">
        <button onClick={() => handleScroll("home")} className="hover:text-cyber">Home</button>
        <button onClick={() => handleScroll("about")} className="hover:text-cyber">About</button>
        <button onClick={() => handleScroll("skills")} className="hover:text-cyber">Skills</button>
        <button onClick={() => handleScroll("projects")} className="hover:text-cyber">Projects</button>
        <button
          onClick={() => handleScroll("contact")} 
          className="px-4 py-2 bg-cyber text-black rounded-lg hover:scale-105 transition"
         >
          Hire Me
        </button>
      </div>
    </nav>
  );
}
