import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-800 px-4 text-center text-white">
      <div className="mb-8 flex items-center justify-center gap-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img className="h-24 w-24" src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            className="h-24 w-24 animate-spin"
            src={reactLogo}
            alt="React logo"
            style={{ animationDuration: '10s' }}
          />
        </a>
      </div>

      <h1 className="mb-8 text-6xl font-bold">Vite + React</h1>

      <button
        className="mb-6 rounded-lg bg-neutral-950 px-6 py-2 font-mono text-sm text-white transition hover:bg-neutral-900"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>

      <p className="mb-5 text-sm text-neutral-400">
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p className="text-sm text-neutral-500">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
