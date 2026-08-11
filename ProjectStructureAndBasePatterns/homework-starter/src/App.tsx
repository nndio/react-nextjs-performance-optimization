import { useState } from 'react';
import { Avatar } from './components/Avatar/Avatar';
import { Logo } from './components/Logo/Logo';
import { Search } from './components/Search/Search';
import './styles.css';


function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <header>
        <Logo />
        <Avatar />
      </header>
      <main>
        <Search
          value={search}
          onChange={setSearch}
        />
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
