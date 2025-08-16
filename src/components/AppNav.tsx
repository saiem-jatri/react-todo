import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="p-4 bg-gray-200 flex gap-4 w-screen">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `px-3 py-1 rounded transition ${
            isActive
              ? "text-white bg-blue-200 font-bold"
              : "text-gray-600 hover:text-blue-200"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-3 py-1 rounded transition ${
            isActive
              ? "text-white bg-blue-200 font-bold"
              : "text-gray-600 hover:text-blue-200"
          }`
        }
      >
        About
      </NavLink>
    </nav>
  );
}

export default AppNav;
