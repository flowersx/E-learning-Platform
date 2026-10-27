import { Link } from 'react-router'

function Home() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <h1 className="text-4xl font-bold">
        E-Learning Platform
      </h1>

      <p className="mt-4 max-w-xl text-slate-300">
        O platforma educationala cu un agent conversational
        inteligent care adapteaza invatarea la fiecare student.
      </p>

      <Link
        to="/login"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700"
      >
        Autentificare
      </Link>
    </main>
  )
}

export default Home