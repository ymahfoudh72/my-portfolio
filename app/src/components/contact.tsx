export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >
      <div className="max-w-4xl mx-auto text-center rounded-3xl border shadow-xl p-16">

        <p className="uppercase tracking-widest text-sm mb-4">
          Contact
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Let’s build
          <br />
          something together.
        </h2>

        <p className="text-lg mb-10 max-w-2xl mx-auto">
          I’m open to frontend opportunities,
          freelance projects, and collaborations.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:yourmail@email.com"
            className="bg-black text-white px-8 py-4 rounded-2xl"
          >
            Email Me
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="border px-8 py-4 rounded-2xl"
          >
            GitHub
          </a>

          <a
            href="https://tn.linkedin.com/in/yassmine-mahfoudh-090749153?trk=people-guest_people_search-card"
            target="_blank"
            className="border px-8 py-4 rounded-2xl"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}