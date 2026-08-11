import { Avatar } from './components/Avatar/Avatar';
import { Logo } from './components/Logo/Logo';
import './styles.css';


function App() {
  return (
    <>
      <header>
        <Logo />
        <Avatar />
      </header>
      <main>
        <input placeholder="Search for restaurants" />
        <section></section>
      </main>
      <footer>
        <p>Privacy Policy</p>
        <p className="corporation">2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </>
  )
}

export default App
