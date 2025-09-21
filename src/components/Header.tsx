import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="font-bold">Epigone Wu</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
