const projects = [
  {
    title: "E-Learning Platform",
    description:
      "Learning management platform with dashboards, forms and course management.",
    tech: "Angular • NgRx • Material"
  },

  {
    title: "E-Commerce Application",
    description:
      "Analytics dashboard with authentication and role management.",
    tech: "Angular • Charts • APIs"
  },

  {
    title: "Component Library",
    description:
      "Reusable UI components and dynamic form controls.",
    tech: "Angular • TypeScript"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
         <div key={index}  className="p-8
            rounded-3xl
            border
            shadow-lg
            hover:-translate-y-2
            hover:shadow-xl
            transition
            duration-300 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="mb-4">
              {project.description}
            </p>

            <p className="font-medium mb-6">
              {project.tech}
            </p>

            <button className="border px-4 py-2 rounded-xl">
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}