// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import bookStore from "../../../assets/images/project/Book Store.jpg";
// import ecommerce from "../../../assets/images/project/Cartify.png";
// import proTask from "../../../assets/images/project/ProTask.jpg";
// import birthday from "../../../assets/images/project/Birthday.jpg";
// import ai_assistant from "../../../assets/images/project/Ai_Assistant.jpg";
// import weather from "../../../assets/images/project/weather.jpg";
// import image_editor from "../../../assets/images/project/image_editor.jpg";
// import clock from "../../../assets/images/project/Clock.png";
// import loginsignup from "../../../assets/images/project/LoginSignup.png";
// import qrcode from "../../../assets/images/project/QR_Code.jpg";
// import stopwatch from "../../../assets/images/project/Watch.png";

// // import chatApp from "../../../assets/images/project/chat.jpg";
// // import calculator from "../../../assets/images/project/calculator.jpg";


// const projects = [
//   {
//     title: "Book Store App",
//     desc: "BookStore is an online book shopping web application that allows users to explore, search, and manage books through a clean and interactive interface.",
//     tech: ["MongoDB", "Express", "React", "Node"],
//     image: bookStore,
//     live: "https://book-store-two-rust.vercel.app",
//     github: "https://github.com/SanjuBhunia99/Book-Store.git",
//   },
//   {
//     title: "Ecommerce",
//     desc: "E-Commerce Website is a modern online shopping platform where users can browse products, add items to the cart, and place orders through an interactive user interface.",
//     tech: ["JavaScript", "React", "HTML5", "CSS3"],
//     image: ecommerce,
//     live: "https://soft-cranachan-7d8331.netlify.app/",
//     github: "https://github.com/SanjuBhunia99/E-Commerce",
//   },
//   {
//     title: "ProTask",
//     desc: "TaskFlow is a modern task management web application that helps users organize, track, and manage daily tasks efficiently.",
//     tech: ["MongoDB", "Express", "React", "Node"],
//     image: proTask,
//     live: "https://protask-frontend.vercel.app/",
//     github: "https://github.com/SanjuBhunia99/ProTask.git",
//   },
//   {
//     title: "Birthday Card",
//     desc: "Birthday Wish Web App is a creative and interactive website designed to celebrate birthdays with beautiful animations, and personalized messages.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     image: birthday,
//     live: "https://wishbirthday1205.netlify.app/",
//     github: "https://github.com/sanjubhunia99/Birthday-Card",
//   },
//   {
//     title: "Ai_Assistant",
//     desc: "AI Assistant is a smart web application that interacts with users and responds to questions using Artificial Intelligence concepts and APIs.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     image: ai_assistant,
//     live: "https://aisriparna.netlify.app/",
//     github: "https://github.com/sanjubhunia99/AI_Assistant",
//   },
//   {
//     title: "Weather",
//     desc: "Live Weather Application that shows real-time weather information using the user’s current location.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     image: weather,
//     live: "https://weather1205.netlify.app/",
//     github: "https://github.com/sanjubhunia99/Weather_App",
//   },
//   {
//     title: "Image Editor",
//     desc: "Image Editor is a web-based application that allows users to edit images directly in the browser using JavaScript.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     image: image_editor,
//     live: "https://imageeditorsb.netlify.app/",
//     github: "https://github.com/sanjubhunia99/Image-Editor",
//   },
//   {
//     title: "Analog Clock",
//     desc: "Analog Clock is a real-time clock web application that displays the current time using rotating hour, minute, and second hands just like a traditional wall clock.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     image: clock,
//     live: "https://694fe8a894af8a00088e2c43--elegant-shortbread-d7f95d.netlify.app/",
//     github: "https://github.com/SanjuBhunia99/Analog-clock",
//   },
//   // {
//   //   title: "Chat Application",
//   //   desc: "Real-time chat app using Socket.io.",
//   //   tech: ["React", "Node", "Socket.io", "MongoDB", "Express"],
//   //   image: "chatapplication",
//   //   live: "#",
//   //   github: "https://github.com/SanjuBhunia99/Chatting-Application",
//   // },

//   // {
//   //   title: "Quiz_Platfrom",
//   //   desc: "Quiz Platfrom built using React and ",
//   //   tech: ["React", "Node", "Socket.io", "MongoDB", "Express"],
//   //   image: "quizplatfrom",
//   //   live: "#",
//   //   github: "https://github.com/SanjuBhunia99/KodNest_Quiz_Platfrom.git",
//   // },

//   // {
//   //   title: "Chat Application",
//   //   desc: "Real-time chat app using Socket.io.",
//   //   tech: ["React", "Node", "Socket.io", "MongoDB", "Express"],
//   //   image: "chatapplication",
//   //   live: "#",
//   //   github: "https://github.com/SanjuBhunia99/Chatting-Application",
//   // },

//   {
//     title: "QR_Code",
//     desc: "QR Code Generator is a web application that allows users to generate QR codes instantly from text, links, or any custom input.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     image: qrcode,
//     live: "#",
//     github: "https://github.com/SanjuBhunia99/QR_COde.git",
//   },

//   {
//     title: "Login-Signup Page",
//     desc: "Login and Signup Form is a secure and responsive authentication interface that allows users to create accounts and log in to the application.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     image: loginsignup,
//     live: "https://jovial-flan-df896a.netlify.app/",
//     github: "https://github.com/SanjuBhunia99/Login_SignUp",
//   },
//   {
//     title: "StopWatch",
//     desc: "Stopwatch is a real-time web application used to measure and track elapsed time with start, stop, and reset functionality.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     image: stopwatch,
//     live: "https://stop-watchn.netlify.app/",
//     github: "https://github.com/SanjuBhunia99/StopWatch",
//   },
// ];

// const Project = () => {
//   const [showAll, setShowAll] = useState(false);

//   const visibleProjects = showAll ? projects : projects.slice(0, 4);

//   return (
//     <section
//       id="project"
//       className="scroll-mt-15 text-white text-center mb-10 px-3 sm:px-6 p-8"
//     >
//       <h2 className="text-xl sm:text-2xl underline font-semibold mb-6 p-4">
//         💼 Projects
//       </h2>
//       <div className="max-w-5xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {visibleProjects.map((p, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.15 }}
//               viewport={{ once: true }}
//               className="
//                 group relative rounded-xl overflow-hidden bg-black/20 backdrop-blur-md border border-black/10 hover:shadow-[0_0_22px_rgba(168,85,247,0.45)] hover:-translate-y-2 transition-all duration-300
//               "
//             >
//               <img
//                 src={p.image}
//                 className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
//               />

//               <div
//                 className="
//                   absolute inset-0 bg-black/70
//                   opacity-0 group-hover:opacity-100
//                   transition duration-300
//                   flex flex-col justify-center items-center
//                   text-center p-6
//                 "
//               >
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   {p.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm mb-4">{p.desc}</p>

//                 <div className="flex gap-3">
//                   <a
//                     href={p.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 text-sm rounded-md bg-purple-600 hover:bg-purple-700 text-white transition cursor-pointer"
//                   >
//                     Live Demo
//                   </a>

//                   <a
//                     href={p.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 text-sm rounded-md border border-purple-400 text-purple-300 hover:bg-purple-500/20 transition cursor-pointer"
//                   >
//                     GitHub
//                   </a>
//                 </div>
//               </div>

//               <div className="p-5 ">
//                 <h3 className="text-lg font-semibold text-white mb-2">
//                   {p.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-2">
//                   {p.tech.map((t, idx) => (
//                     <span
//                       key={idx}
//                       className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {projects.length > 4 && (
//           <div className="flex justify-center mt-16">
//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="px-8 py-3 text-sm tracking-widest uppercase rounded-full
//           bg-linear-to-r from-blue-400 to-cyan-500
//           text-white font-medium shadow-lg
//           hover:scale-105 transition-all duration-300"
//             >
//               {showAll ? "View Less" : "View More"}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Project;

import React, { useState } from "react";
import { motion } from "framer-motion";
import bookStore from "../../../assets/images/project/Book Store.jpg";
import ecommerce from "../../../assets/images/project/Cartify.png";
import proTask from "../../../assets/images/project/ProTask.jpg";
import birthday from "../../../assets/images/project/Birthday.jpg";
import ai_assistant from "../../../assets/images/project/Ai_Assistant.jpg";
import weather from "../../../assets/images/project/weather.jpg";
import image_editor from "../../../assets/images/project/image_editor.jpg";
import clock from "../../../assets/images/project/Clock.png";
import loginsignup from "../../../assets/images/project/LoginSignup.png";
import qrcode from "../../../assets/images/project/QR_Code.jpg";
import stopwatch from "../../../assets/images/project/Watch.png";

const projects = [
  {
    title: "Book Store App",
    desc: "BookStore is an online book shopping web application that allows users to explore, search, and manage books through a clean and interactive interface.",
    tech: ["MongoDB", "Express", "React", "Node"],
    image: bookStore,
    live: "https://book-store-two-rust.vercel.app",
    github: "https://github.com/SanjuBhunia99/Book-Store.git",
  },
  {
    title: "Ecommerce",
    desc: "E-Commerce Website is a modern online shopping platform where users can browse products, add items to the cart, and place orders through an interactive user interface.",
    tech: ["JavaScript", "React", "HTML5", "CSS3"],
    image: ecommerce,
    live: "https://soft-cranachan-7d8331.netlify.app/",
    github: "https://github.com/SanjuBhunia99/E-Commerce",
  },
  {
    title: "ProTask",
    desc: "TaskFlow is a modern task management web application that helps users organize, track, and manage daily tasks efficiently.",
    tech: ["MongoDB", "Express", "React", "Node"],
    image: proTask,
    live: "https://protask-frontend.vercel.app/",
    github: "https://github.com/SanjuBhunia99/ProTask.git",
  },
  {
    title: "Birthday Card",
    desc: "Birthday Wish Web App is a creative and interactive website designed to celebrate birthdays with beautiful animations, and personalized messages.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: birthday,
    live: "https://wishbirthday1205.netlify.app/",
    github: "https://github.com/sanjubhunia99/Birthday-Card",
  },
  {
    title: "Ai_Assistant",
    desc: "AI Assistant is a smart web application that interacts with users and responds to questions using Artificial Intelligence concepts and APIs.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ai_assistant,
    live: "https://aisriparna.netlify.app/",
    github: "https://github.com/sanjubhunia99/AI_Assistant",
  },
  {
    title: "Weather",
    desc: "Live Weather Application that shows real-time weather information using the user's current location.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: weather,
    live: "https://weather1205.netlify.app/",
    github: "https://github.com/sanjubhunia99/Weather_App",
  },
  {
    title: "Image Editor",
    desc: "Image Editor is a web-based application that allows users to edit images directly in the browser using JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: image_editor,
    live: "https://imageeditorsb.netlify.app/",
    github: "https://github.com/sanjubhunia99/Image-Editor",
  },
  {
    title: "Analog Clock",
    desc: "Analog Clock is a real-time clock web application that displays the current time using rotating hour, minute, and second hands just like a traditional wall clock.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: clock,
    live: "https://694fe8a894af8a00088e2c43--elegant-shortbread-d7f95d.netlify.app/",
    github: "https://github.com/SanjuBhunia99/Analog-clock",
  },
  {
    title: "QR_Code",
    desc: "QR Code Generator is a web application that allows users to generate QR codes instantly from text, links, or any custom input.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: qrcode,
    live: "https://qrcodesb.netlify.app/",
    github: "https://github.com/SanjuBhunia99/QR_COde.git",
  },
  {
    title: "Login-Signup Page",
    desc: "Login and Signup Form is a secure and responsive authentication interface that allows users to create accounts and log in to the application.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: loginsignup,
    live: "https://jovial-flan-df896a.netlify.app/",
    github: "https://github.com/SanjuBhunia99/Login_SignUp",
  },
  {
    title: "StopWatch",
    desc: "Stopwatch is a real-time web application used to measure and track elapsed time with start, stop, and reset functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: stopwatch,
    live: "https://stop-watchn.netlify.app/",
    github: "https://github.com/SanjuBhunia99/StopWatch",
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="project"
      className="scroll-mt-16 text-white text-center mb-10 px-4 sm:px-6 py-10"
    >
      <h2 className="text-xl sm:text-2xl underline font-semibold mb-8">
        💼 Projects
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {visibleProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="px-3 pt-5 pb-3 sm:px-5">
                <div className="relative mx-auto w-full max-w-115">
                  <div className="relative rounded-t-[18px] bg-[#1e1b4b] p-2 shadow-2xl ring-1 ring-white/15">
                  <div className="absolute left-1/2 top-2 z-30 h-4.5 w-18 -translate-x-1/2 rounded-b-xl bg-[#312e81] sm:h-5 sm:w-21">
                      <span className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-slate-800 ring-1 ring-slate-700"></span>
                    </div>

                    <div
                      onClick={() =>
                        setActiveProject(activeProject === i ? null : i)
                      }
                      className="group/screen relative aspect-16/10 cursor-pointer overflow-hidden rounded-[11px] bg-zinc-100"
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain transition-transform duration-500 group-hover/screen:scale-[1.02]"
                      />

                      <div
                        className={`absolute inset-0 flex flex-col justify-center bg-black/85 px-3 py-4 text-center transition-all duration-300 sm:px-4 sm:py-5 ${
                          activeProject === i
                            ? "opacity-100"
                            : "opacity-0 group-hover/screen:opacity-100"
                        }`}
                      >
                        <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">
                          {p.title}
                        </h3>

                        <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-gray-300 sm:text-sm">
                          {p.desc}
                        </p>

                        <div className="mb-4 flex flex-wrap justify-center gap-1.5">
                          {p.tech.map((t, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border border-cyan-400/25 bg-cyan-500/20 px-2.5 py-1 text-[10px] text-cyan-200 sm:text-xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="flex justify-center gap-2 sm:gap-3"
                        >
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`rounded-md px-3 py-2 text-xs font-medium text-white transition sm:px-4 ${
                              p.live === "#"
                                ? "pointer-events-none bg-gray-600 opacity-60"
                                : "bg-cyan-500 hover:bg-cyan-600"
                            }`}
                          >
                            Live Demo
                          </a>

                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border border-cyan-400 px-3 py-2 text-xs font-medium text-cyan-200 transition hover:bg-cyan-500/20 sm:px-4"
                          >
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="h-3 bg-[#060708]"></div>
                  </div>

                  <div className="relative mx-auto h-4 w-[108%] -translate-x-[4%] rounded-b-[18px] bg-linear-to-b from-[#3b4650] via-[#1d252d] to-[#05070a] shadow-[0_14px_28px_rgba(0,0,0,0.45)]">
                    <div className="absolute left-1/2 top-0 h-2 w-24 -translate-x-1/2 rounded-b-xl bg-linear-to-b from-[#6f7c87] to-[#2a333c]"></div>
                    <div className="absolute bottom-0 left-4 h-1 w-10 rounded-t bg-black/45"></div>
                    <div className="absolute bottom-0 right-4 h-1 w-10 rounded-t bg-black/45"></div>
                  </div>

                  <div className="mx-auto mt-1 h-2 w-[82%] rounded-full bg-black/35 blur-md"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => {
                setShowAll(!showAll);
                setActiveProject(null);
              }}
              className="px-8 py-3 text-sm tracking-widest uppercase rounded-full bg-linear-to-r from-blue-400 to-cyan-500 text-white font-medium shadow-lg hover:scale-105 transition-all duration-300"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
