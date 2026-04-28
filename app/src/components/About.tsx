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
       Passionate FullSatck developer specialized in Angular, reusable components, responsive interfaces and enterprise applications.
      </p>

      <div className="grid md:grid-cols-1 gap-6">
        <div className="p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-3">
            Skills          </h3>

          <p>
            Angular,Jest
            TypeScript,
            RxJS,
            NgRx,
            Bootstrap,
            Tailwind CSS,
            .NET,
            Git  ,        </p>
        </div>

        
      </div>
    </section>
  );
}