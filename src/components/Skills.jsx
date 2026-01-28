import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap } from "react-icons/si"; // Tailwind + Bootstrap

const skills = [
  { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500" />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-500" />, level: 90 },
  { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-400" />, level: 85 },
  { name: "React", icon: <FaReact size={50} className="text-cyan-400" />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500" />, level: 75 },
  { name: "Express.js", icon: <SiExpress size={50} className="text-white" />, level: 70 },
  { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-600" />, level: 70 },
  { name: "GitHub", icon: <FaGitAlt size={50} className="text-gray-300" />, level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} className="text-cyan-500" />, level: 90 },
  { name: "Bootstrap", icon: <SiBootstrap size={50} className="text-purple-500" />, level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 animate-fade">
      <h2 className="text-4xl font-bold text-cyber mb-10">Skills</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="bg-white/5 border border-white/10 p-6 rounded-xl
            text-center hover:border-cyber hover:scale-105 transition flex flex-col items-center gap-4"
          >
            {skill.icon}
            <span className="text-lg font-semibold">{skill.name}</span>
            {/* Skill bar */}
            <div className="w-full bg-white/20 h-2 rounded-full mt-2">
              <div
                className="bg-cyber h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
