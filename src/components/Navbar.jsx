import React, { useState, useEffect } from "react";
import Resume from "../../src/assets/images/resume/Resume12.pdf";
import Logo from "../../public/jpg.jpg";
import { FaArrowUp } from "react-icons/fa";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};


const getClass = (active, section) =>
  `cursor-pointer px-2 py-1 text-base rounded-md transition-all ${
    active === section
      ? "text-cyan-200 underline underline-offset-4 decoration-2 decoration-cyan-300"
      : "text-slate-300 hover:text-cyan-100 hover:bg-white/10"
  }`;


const NavItems = ({ active, setActive, setOpen }) => {
  const handleClick = (section) => {
    scrollToSection(section);
    setActive(section);
    if (setOpen) setOpen(false); 
  };

  return (
    <>
      <button
        onClick={() => handleClick("about")}
        className={getClass(active, "about")}
      >
        About
      </button>

      {/* <button
        onClick={() => handleClick("experience")}
        className={getClass(active, "experience")}
      >
        Experience
      </button> */}

      <button
        onClick={() => handleClick("education")}
        className={getClass(active, "education")}
      >
        Education
      </button>

      <button
        onClick={() => handleClick("project")}
        className={getClass(active, "project")}
      >
        Project
      </button>

      <button
        onClick={() => handleClick("skills")}
        className={getClass(active, "skills")}
      >
        Skills
      </button>

      <button
        onClick={() => handleClick("certificate")}
        className={getClass(active, "certificate")}
      >
        Certificate
      </button>

      <button
        onClick={() => handleClick("activity")}
        className={getClass(active, "activity")}
      >
        Activity
      </button>

      <button
        onClick={() => handleClick("contact")}
        className={getClass(active, "contact")}
      >
        Contact
      </button>
      <button>
        <a
          href={Resume}
          download
          className="px-2 py-1 text-slate-300 hover:text-cyan-100"
        >
          Resume
        </a>
      </button>
    </>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [showTop, setShowTop] = useState(false);
  const [open, setOpen] = useState(false); 


  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="navbar bg-[#0b1224dd] backdrop-blur-xl text-white sticky top-0 z-50 px-3 border-b border-white/10">
        <div className="navbar-start">
          <img
            src={Logo}
            alt="Logo"
            
            onClick={() => {
              scrollToSection("about");
              setActive("about");
            }}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover object-top cursor-pointer ml-4 md:ml-14"
          />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            <NavItems active={active} setActive={setActive} />
          </ul>
        </div>

        <div className="navbar-end lg:hidden relative">
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-ghost text-xl text-cyan-100 hover:bg-white/10"
          >
            {open ? "✖" : "☰"}
          </button>

          {open && (
            <div className="absolute right-3 top-14 w-52 rounded-lg border border-white/10 bg-[#111a32] p-4 text-white shadow-xl z-999">
              <div className="flex flex-col gap-2">
                <NavItems
                  active={active}
                  setActive={setActive}
                  setOpen={setOpen}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {showTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-25 md:bottom-30 right-6 z-50 bg-linear-to-tr from-indigo-500 to-cyan-500 text-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-cyan-400/50 transition-all duration-300 animate-bounce"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Navbar;