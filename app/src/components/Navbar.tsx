export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      <h1 className="text-xl font-bold">
        Yasmine.dev
      </h1>

      <ul className="flex gap-6">
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}