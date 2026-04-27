import About from "./src/components/About";
import Navbar from "./src/components/Navbar";
import Projects from "./src/components/Projects";
import Contact from "./src/components/contact";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar />

     <section className="min-h-screen flex items-center justify-center px-6">
  <div className="max-w-5xl mx-auto text-center">

    <p className="mb-4 text-sm tracking-widest uppercase">
      Frontend Developer
    </p>

    <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
      Building modern
      <br />
<span className="text-blue-600">
web experiences
</span>    </h1>

    <p className="text-xl max-w-2xl mx-auto mb-10">
      Angular developer crafting scalable interfaces,
      clean architecture and user-focused products.
    </p>

    <div className="flex justify-center gap-4">
      <button className="bg-black text-white px-8 py-4 rounded-2xl shadow-lg">
        View Projects
      </button>

      <button className="border px-8 py-4 rounded-2xl">
        Contact Me
      </button>
    </div>

  </div>
</section>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}