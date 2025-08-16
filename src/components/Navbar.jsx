
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-300 font-bold"
      : "hover:text-blue-200";

  return (
<nav className="bg-gray-600 p-8 text-white flex gap-6 justify-end text-xl">
      <NavLink to="/" className={linkClasses}>Home</NavLink>
      <NavLink to="/about" className={linkClasses}>About</NavLink>
      <NavLink to="/users" className={linkClasses}>Users</NavLink>
    </nav>
  );
}
