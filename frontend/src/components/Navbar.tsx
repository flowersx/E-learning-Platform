import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <nav className="bg-slate-900 px-8 py-4 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between">

        <Link to="/" className="text-xl font-bold">
          E-Learning Platform
        </Link>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'hover:text-blue-400'
            }
          >
            Acasa
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'hover:text-blue-400'
            }
          >
            Dashboard
          </NavLink>

          <Link
            to="/login"
            className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
          >
            Autentificare
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar