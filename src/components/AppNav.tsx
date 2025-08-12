import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="p-4 bg-gray-200 flex gap-4 w-screen">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "text-red-800 font-bold underline"
            : ""
        }
      >
        Home 
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-blue-800 font-bold underline"
            : ""
        }
      >
        About
      </NavLink>
    </nav>
  );
}

export default AppNav;
