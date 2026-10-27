import { Link } from 'react-router'

function Login() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-slate-900">
          Autentificare
        </h1>

        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg border border-slate-300 p-3"
              placeholder="email@exemplu.ro"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-slate-700">
              Parola
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-lg border border-slate-300 p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
          >
            Conectare
          </button>
        </form>

        <Link to="/" className="mt-6 block text-center text-sm text-blue-600">
          Inapoi la pagina principala
        </Link>
      </div>
    </main>
  )
}

export default Login