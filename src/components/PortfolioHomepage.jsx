import { useState } from "react";

export default function PortfolioHomepage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("htanmai23@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const projects = [
    {
      title: "DocuChat AI",
      description:
        "A full-stack RAG-based PDF question-answering application using Gemini, Qdrant, and MongoDB. Users can upload PDFs, ask questions, and maintain contextual conversations for each document.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini",
        "Qdrant",
        "LangChain",
        "RAG",
      ],
      github: "https://github.com/tanmai1223/DocuChat_AI",
      live: "https://docuchatmern.netlify.app",
      image: "/images/docuchat.png",
    },

    {
      title: "AI Chatbot",
      description:
        "A full-stack AI chatbot built with the MERN stack featuring persistent chat history, multiple conversations, chat management, and Google Gemini API integration.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
      github: "https://github.com/tanmai1223/Chatbot",
      live: "https://chatbotmer.netlify.app",
      image: "/images/chatbot.png",
    },

    {
      title: "Inventory Management System",
      description:
        "A full-stack MERN inventory platform with JWT authentication, email OTP password recovery, product management, CSV bulk upload, stock tracking, analytics, and invoice generation.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Nodemailer",
        "Chart.js",
      ],
      github: "https://github.com/tanmai1223/Inventory_Management_System",
      live: "https://srmproj.netlify.app",
      image: "/images/inventory.png",
    },

    {
      title: "SMART - Railway Training Portal",
      description:
        "A full-stack document management portal for a Railway Training Institute that allows trainees to search and access study materials while administrators manage resources and metadata.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Vite"],
      github: "https://github.com/tanmai1223/SMART",
      live: "https://railwaymanual.netlify.app",
      image: "/images/smart.png",
    },

    {
      title: "Restaurant Management System",
      description:
        "A scalable MERN restaurant management platform featuring customer ordering, admin dashboard, authentication, inventory management, role-based authorization, and 20+ REST APIs.",
      tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "JWT"],
      github: "https://github.com/tanmai1223/Restaurant_Management_System",
      live: "https://restaurantpp.netlify.app",
      image: "/images/restaraunt.png",
    },

    {
      title: "API Tracer Management System",
      description:
        "A MERN-based API monitoring dashboard for tracking request latency, API logs, response status, errors, and API performance analytics.",
      tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      github: "https://github.com/tanmai1223/API_Tracer_Management_System",
      live: "https://apitracer.netlify.app",
      image: "/images/api-tracer.png",
    },

    {
      title: "Job Board Application",
      description:
        "A modern responsive job board built with React and Vite featuring job search, salary and experience filters, company profiles, saved jobs, applied jobs, and responsive layouts.",
      tech: ["React", "Vite", "React Router", "Context API", "CSS Modules"],
      github: "https://github.com/tanmai1223/Job_Board",
      live: "https://job-board-beta-three.vercel.app",
      image: "/images/job-board.png",
    },

    {
      title: "MERN Todo Application",
      description:
        "A full-stack Todo application demonstrating CRUD operations, Dockerized frontend and backend, Docker Compose, REST APIs, Postman testing, and GitHub Actions CI/CD.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Docker",
        "Docker Compose",
        "GitHub Actions",
      ],
      github: "https://github.com/tanmai1223/todo",
      live: "https://tododc.netlify.app",
      image: "/images/todo.png",
    },

    {
      title: "Memories App",
      description:
        "A full-stack MERN application for managing personal memories with JWT authentication, image uploads, Cloudinary storage, search, pagination, user profiles, and an admin dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
      github: "https://github.com/tanmai1223/Memories_App",
      live: "https://mymemoriesp.netlify.app",
      image: "/images/memories.png",
    },

    {
      title: "Note Maker Application",
      description:
        "A responsive React-based note management application with grouped notes, LocalStorage persistence, reusable components, React Hooks, and responsive design.",
      tech: ["React", "JavaScript", "HTML", "CSS", "LocalStorage"],
      github: "https://github.com/tanmai1223/Notemaker",
      live: "https://notemakerpro.netlify.app",
      image: "/images/notemaker.png",
    },
  ];

  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT",
    "Google Gemini API",
    "RAG",
    "Qdrant",
    "LangChain",
    "Docker",
    "GitHub Actions",
    "CI/CD",
    "Git",
    "Postman",
    "HTML5",
    "CSS3",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white px-6 sm:px-10 lg:px-16 xl:px-20 py-8 overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16 py-16">
        {/* Hero Content */}
        <div className="space-y-6 flex-1">
          <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-2 text-sm text-green-400 w-fit">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for Full Stack Developer Roles
          </div>

          <p className="text-green-400 uppercase tracking-widest text-sm">
            Full Stack Developer • MERN • AI Integration
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-green-400">Tanmai</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl leading-8">
            Full Stack Developer specializing in the MERN stack, with hands-on
            experience building scalable web applications, RESTful APIs, and
            AI-powered applications using Google Gemini API and RAG. Experienced
            in developing secure backend systems, database-driven applications,
            and responsive user interfaces. Focused on building practical
            solutions with clean architecture and modern software development
            practices.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/tanmai1223"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-2xl font-semibold text-black"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/htanmai"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 hover:bg-green-500 hover:text-black transition px-6 py-3 rounded-2xl font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-4 border-green-500 shadow-2xl bg-zinc-900">
            <img
              src="/profile.jpg"
              alt="Tanmai"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-green-500 text-black px-5 py-2 rounded-full font-semibold shadow-xl">
            MERN Developer
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="w-full max-w-[1600px] mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6 text-green-400">About Me</h2>

        <div className="bg-zinc-900 rounded-3xl p-8 shadow-xl">
          <p className="text-gray-300 leading-8 text-lg">
            I'm a Full Stack Developer with experience building production-ready
            MERN applications ranging from AI chatbots and RAG-based
            applications to inventory management systems, restaurant management
            platforms, and API monitoring dashboards. I enjoy designing scalable
            backend architectures, integrating AI capabilities, building RESTful
            APIs, and creating responsive frontend experiences. I'm continuously
            learning cloud technologies, DevOps, and modern software engineering
            practices.
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="w-full max-w-[1600px] mx-auto py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-green-400">Tech Stack</h2>

          <p className="text-gray-400 mt-2">
            Technologies and tools I use to build full-stack and AI-powered
            applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 rounded-2xl p-4 text-center border border-zinc-700 hover:border-green-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="w-full max-w-[1600px] mx-auto py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-green-400">
              Featured Projects
            </h2>

            <p className="text-gray-400 mt-2">
              Real-world full-stack applications focused on scalable backend
              systems, AI integration, REST APIs, and modern web development.
            </p>
          </div>

          <a
            href="https://github.com/tanmai1223"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-400 hover:bg-green-500 hover:text-black transition px-5 py-3 rounded-2xl font-semibold text-center"
          >
            View GitHub
          </a>
        </div>

        {/* 3 CARDS PER ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-400 transition shadow-xl flex flex-col"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-7 mb-6 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-green-500 hover:bg-green-400 transition text-black px-4 py-3 rounded-xl font-semibold"
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-green-400 hover:bg-green-500 hover:text-black transition px-4 py-3 rounded-xl font-semibold"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="w-full max-w-[1600px] mx-auto py-16">
        <h2 className="text-3xl font-bold text-green-400 mb-8">Achievements</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
            <h3 className="text-xl font-semibold mb-3">
              🏆 Hackathon Runner-up
            </h3>

            <p className="text-gray-400">
              Secured 2nd Runner-Up in Brillio Sparxelerate Hackathon.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
            <h3 className="text-xl font-semibold mb-3">🎓 B.Tech</h3>

            <p className="text-gray-400">Information Technology • CGPA 8.84</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
            <h3 className="text-xl font-semibold mb-3">🚀 MERN Developer</h3>

            <p className="text-gray-400">
              Built multiple production-ready MERN applications with AI
              integration.
            </p>
          </div>
        </div>
      </section>

      {/* ================= RESUME ================= */}
      <section className="w-full max-w-[1600px] mx-auto py-16">
        <div className="bg-zinc-900 rounded-3xl p-10 text-center border border-zinc-800">
          <h2 className="text-4xl font-bold mb-6 text-green-400">
            Download My Resume
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Download my latest resume showcasing my MERN, AI Integration, REST
            API, Docker, and CI/CD experience.
          </p>

          <a
            href="/Hekkadka_Tanmai_Resume.pdf"
            download
            className="inline-block bg-green-500 hover:bg-green-400 transition text-black px-8 py-4 rounded-2xl font-semibold"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="w-full max-w-[1600px] mx-auto py-16">
        <div className="bg-zinc-900 rounded-3xl p-10 text-center border border-zinc-800">
          <h2 className="text-4xl font-bold mb-6 text-green-400">
            Let's Connect
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Open to Full Stack Developer, Backend Developer, MERN Stack
            Developer, and Software Engineer opportunities. Let's build
            something impactful together.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-10">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=htanmai23@gmail.com&su=Portfolio%20Contact"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 transition text-black px-6 py-3 rounded-2xl font-semibold"
            >
              Email Me
            </a>

            <button
              onClick={copyEmail}
              className="border border-green-400 hover:bg-green-500 hover:text-black transition px-6 py-3 rounded-2xl font-semibold"
            >
              {copied ? "Email Copied!" : "Copy Email"}
            </button>

            <a
              href="https://www.linkedin.com/in/htanmai"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 hover:bg-green-500 hover:text-black transition px-6 py-3 rounded-2xl font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
