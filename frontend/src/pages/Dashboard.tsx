import { Link } from 'react-router'

function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard student
        </h1>

        <p className="mt-3 text-slate-600">
          Aici vei putea urmari cursurile, progresul si recomandarile
          agentului conversational.
        </p>

        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Progres educational
          </h2>

          <p className="mt-2 text-slate-500">
            Nu exista inca date despre activitatea studentului.
          </p>
        </div>

        <Link to="/" className="mt-6 inline-block text-blue-600">
          Inapoi la pagina principala
        </Link>
      </div>
    </main>
  )
}

export default Dashboard