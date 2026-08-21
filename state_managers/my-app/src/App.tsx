import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import { selectTheme, toggleTheme, } from "./features/theme/themeSlice"
import logo from "./logo.svg"

export const App = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const isDarkTheme = theme === "dark"

  return (
    <div
      className="App"
      style={{
        backgroundColor: isDarkTheme ? "#222" : "#fff",
        color: isDarkTheme ? "#fff" : "#222",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button
          type="button"
          onClick={() => dispatch(toggleTheme())}
        >
          {isDarkTheme ? "☀️ Light theme" : "🌙 Dark theme"}
        </button>

        <Counter />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Quotes />

        <span>
          <span>Learn </span>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>

          <span>, </span>

          <a
            className="App-link"
            href="https://redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>

          <span>, </span>

          <a
            className="App-link"
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>

          <span>, </span>

          <a
            className="App-link"
            href="https://react-redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>

          <span>, </span>

          <a
            className="App-link"
            href="https://reselect.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reselect
          </a>
        </span>
      </header>
    </div>
  )
}