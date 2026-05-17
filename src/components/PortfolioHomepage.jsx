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
      title: "API Tracer Management System",
      description:
        "A real-time API monitoring dashboard built using the MERN stack with request latency tracking and log monitoring.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/tanmai1223/finalProject",
      live: "https://apitracer.netlify.app",
      image: "/images/api-tracer.png",
    },
    {
      title: "Restaurant Management System",
      description:
        "A full-stack restaurant ordering and admin dashboard application with real-time order management.",
      tech: ["MERN", "REST APIs", "MongoDB"],
      github: "https://github.com/tanmai1223/fullstack",
      live: "https://restaurantpp.netlify.app",
      image: "/images/restaraunt.png",
    },
    {
      title: "Memories Social App",
      description:
        "A social media-style MERN application supporting authentication, media uploads, and CRUD operations.",
      tech: ["React", "Express", "MongoDB"],
      github: "https://github.com/tanmai1223/memories",
      live: "https://mymemoriesp.netlify.app",
      image: "/images/memories.png",
    },
    {
      title: "Note Maker Application",
      description:
        "A responsive React-based note management application with LocalStorage persistence, reusable components, and real-time state updates.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/tanmai1223/notemaker",
      live: "https://notemakerpro.netlify.app",
      image: "/images/notemaker.png",
    },
  ];

  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "REST APIs",
    "Git",
    "Postman",
    "HTML",
    "CSS",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white px-4 sm:px-6 lg:px-10 py-8 overflow-x-hidden">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-16">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-2 text-sm text-green-400 w-fit">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for Full Stack Developer Roles
          </div>
          <p className="text-green-400 uppercase tracking-widest text-sm">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-green-400">Tanmai</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl leading-8">
            Fresher Full Stack Developer specializing in MERN stack development.
            Passionate about building scalable web applications, dashboards, and
            modern user experiences through real-world projects.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/tanmai1223"
              target="_blank"
              className="bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-2xl font-semibold text-black"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/htanmai"
              target="_blank"
              className="border border-green-400 hover:bg-green-500 hover:text-black transition px-6 py-3 rounded-2xl font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="w-72 h-72 rounded-3xl overflow-hidden border-4 border-green-500 shadow-2xl bg-zinc-900">
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

      {/* About */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6 text-green-400">About Me</h2>

        <div className="bg-zinc-900 rounded-3xl p-8 shadow-xl">
          <p className="text-gray-300 leading-8 text-lg">
            I'm an aspiring Full Stack Developer and recent graduate with
            hands-on experience building MERN stack applications including
            dashboards, monitoring systems, and social media platforms. I enjoy
            creating clean user interfaces, scalable backend systems, and
            practical real-world solutions through code.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-green-400">Tech Stack</h2>
          <p className="text-gray-400 mt-2">
            Technologies and tools I use to build full stack applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-green-400">
              Featured Projects
            </h2>
            <p className="text-gray-400 mt-2">
              Real-world full stack applications built using the MERN stack.
            </p>
          </div>

          <a
            href="https://github.com/tanmai1223"
            target="_blank"
            className="border border-green-400 hover:bg-green-500 hover:text-black transition px-5 py-3 rounded-2xl font-semibold text-center"
          >
            View GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-400 transition shadow-xl flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-7 mb-6 flex-1">
                  {project.description}
                </p>

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

                <div className="flex gap-3 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 text-center bg-green-500 hover:bg-green-400 transition text-black px-5 py-3 rounded-xl font-semibold"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 text-center border border-green-400 hover:bg-green-500 hover:text-black transition px-5 py-3 rounded-xl font-semibold"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto py-16">
        <div className="bg-zinc-900 rounded-3xl p-10 text-center border border-zinc-800">
          <h2 className="text-4xl font-bold mb-6 text-green-400">
            Download Resume
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Download my latest ATS-optimized resume for Full Stack Developer
            roles.
          </p>

          <a
            href="/Hekkadka_Tanmai_Resume.pdf"
            download
            className="inline-block bg-green-500 hover:bg-green-400 transition text-black px-8 py-4 rounded-2xl font-semibold mb-12"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16">
        <div className="bg-zinc-900 rounded-3xl p-10 text-center border border-zinc-800">
          <h2 className="text-4xl font-bold mb-6 text-green-400">
            Let's Connect
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Currently looking for Full Stack Developer, MERN Stack Developer,
            and Software Engineer opportunities.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-10">
            <a
              href="mailto:htanmai23@gmail.com?subject=Portfolio%20Contact"
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
