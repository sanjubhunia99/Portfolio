import { useState } from "react";
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiHtml5,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { BsTypescript } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { DiEclipse } from "react-icons/di";
import { FaBootstrap, FaDatabase, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava, FaPython, FaAngular } from "react-icons/fa6";
import { FaGitAlt, FaGithub } from "react-icons/fa";
const skillsData = [
  {
    name: "Java",
    icon: FaJava,
    color: "text-yellow-400",
    category: "",
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    category: "web",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-cyan-400",
    category: "web",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
    category: "web",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-300",
    category: "web",
  },

  {
    name: "Python",
    icon: FaPython,
    color: "text-blue-500",
    category: "",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "text-orange-500",
    category: "web",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
    category: "design",
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "text-sky-400",
    category: "design",
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "text-red-500",
    category: "web",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "text-purple-500",
    category: "design",
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-400",
    category: "database",
  },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    color: "text-blue-400",
    category: "database",
  },
  {
    name: "SQL",
    icon: FaDatabase,
    color: "text-blue-300",
    category: "database",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-300",
    category: "database",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
    category: "",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-white-400",
    category: "",
  },

  {
    name: "Visual Studio Code",
    icon: VscVscode,
    color: "text-blue-300",
    category: "tools",
  },
  {
    name: "Eclipse",
    icon: DiEclipse,
    color: "text-purple-400",
    category: "tools",
  },
  {
    name: "TypeScript",
    icon: BsTypescript,
    color: "text-blue-400",
    category: "web",
  },
  {
    name: "NextJS",
    "icon": "nextjs-icon",
    "color": "text-gray-800",
    "category": "web"
  }
];

const Skills = () => {
  const [active, setActive] = useState("all");

  const filteredSkills =
    active === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === active);

  const filterBtn = (id, label, icon) => (
    <button
      onClick={() => setActive(id)}
      className={`px-5 py-2 rounded-full text-sm font-medium transition
        ${
          active === id
            ? "bg-indigo-400/25 text-cyan-100 ring-1 ring-cyan-300/40 shadow-[0_0_15px_rgba(103,232,249,0.2)]"
            : "text-slate-300 hover:text-cyan-100 hover:bg-white/5"
        }`}
    >
      {icon} {label}
    </button>
  );

  return (
    <section
      id="skills"
      className="scroll-mt-20 text-white text-center mb-10 px-3 sm:px-6"
    >
      <div className="section-heading text-xl sm:text-2xl font-semibold mb-6">
        🛠️ Skills
      </div>
      <div className="flex justify-center text-white gap-3 sm:gap-6 mb-8 sm:mb-12 flex-wrap p-4">
        {filterBtn("all", "All", "⚡")}
        {filterBtn("web", "Web Development", "💻")}
        {filterBtn("design", "Web Design", "🎨")}
        {filterBtn("database", "Database", "🗄️")}
        {filterBtn("tools", "Tools", "🛠️")}
      </div>
      <div
        className="max-w-3xl mx-auto max-h-82.5 overflow-y-auto pr-2 cursor-pointer"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className={`grid gap-4 sm:gap-6
            ${
              active === "all"
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2"
            }`}
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 border border-white/15 bg-gradient-to-br from-white/[0.07] to-white/[0.02] rounded-xl px-6 py-4 shadow-lg shadow-black/10
                            hover:-translate-y-1
                          hover:border-cyan-300/40 hover:shadow-[0_0_18px_rgba(34,211,238,0.18)]
                           transition duration-300"
              >
                <Icon className={`text-2xl ${skill.color}`} />
                <span className="text-base font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
