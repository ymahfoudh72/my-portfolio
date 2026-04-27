export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold mb-8">
        About Me
      </h2>

      <p className="text-lg leading-8 mb-8">
        Frontend developer with 3 years of experience
        building web applications using Angular,
        TypeScript and modern frontend architecture.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-3">
            Frontend
          </h3>

          <p>
            Angular, TypeScript, RxJS
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-3">
            UI
          </h3>

          <p>
            Tailwind, Angular Material
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-3">
            Tools
          </h3>

          <p>
            Git, Docker, REST APIs
          </p>
        </div>
      </div>
    </section>
  );
}