export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-20 animate-fade bg-gray-900 text-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-cyber mb-8 font-orbitron border-b-2 border-cyber inline-block pb-2">
        About Me
      </h2>

      {/* Profile and Intro */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Avatar + Info */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <img
            src="/image.png"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-cyber"
          />
          <h3 className="text-xl font-bold font-poppins">
            Nikhil Chauhan
          </h3>
          <p className="text-gray-400 text-sm">
            Full Stack Web Developer | React | Node.js | MongoDB
          </p>
          <div className="flex flex-col gap-2 text-gray-300 text-sm">
            <p>Email: <span className="text-cyber">nc388782@gmail.com</span></p>
            <p>Phone: <span className="text-cyber">+919569324843</span></p>
            <p>Location: <span className="text-cyber">Lucknow, India</span></p>
          </div>
        </div>

        {/* Right: About Description */}
        <div className="flex-1 text-lg leading-relaxed font-poppins">
          <p>
            Hi! I'm <span className="text-cyber font-orbitron">Nikhil Chauhan</span>, a passionate 
            <span className="text-yellow-400 font-orbitron"> Full Stack Web Developer</span> 
            from Lucknow, India.
          </p>
          <p className="mt-4">
            I specialize in building <span className="text-pink-500">modern</span> and 
            <span className="text-cyber"> responsive web applications</span>. My tech stack includes 
            <span className="text-cyber"> React</span>, <span className="text-cyber">Node.js</span>, 
            <span className="text-cyber"> Express</span>, and <span className="text-cyber">MongoDB</span>.
          </p>
          <p className="mt-4">
            I enjoy turning ideas into functional websites, writing <span className="text-pink-500">clean code</span>, 
            and learning new technologies to create impactful projects.
          </p>
        </div>
      </div>

      {/* Skills / What I Do */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyber hover:scale-105 transition">
          <h4 className="font-bold text-cyber mb-2">Frontend Development</h4>
          <p>Building responsive and dynamic user interfaces with React and Tailwind CSS.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-pink-500 hover:scale-105 transition">
          <h4 className="font-bold text-pink-500 mb-2">Backend Development</h4>
          <p>Creating robust APIs and server-side logic using Node.js, Express, and MongoDB.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-yellow-400 hover:scale-105 transition">
          <h4 className="font-bold text-yellow-400 mb-2">Database Management</h4>
          <p>Designing and managing efficient NoSQL databases for scalable applications.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-400 hover:scale-105 transition">
          <h4 className="font-bold text-purple-400 mb-2">Version Control</h4>
          <p>Using Git and GitHub for collaboration, version tracking, and deployment.</p>
        </div>
      </div>
    </section>
  );
}
