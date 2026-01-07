import { useState, useEffect } from 'react';
import './App.css';
import Home from './app/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > (window.innerHeight - 65));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="App">
      <div className="App-container">
        <NavBar show={showNav} />
        <Home />
      </div>
      <footer className="credits">
        Icons by <a href="https://www.flaticon.com/authors/chanut" target="_blank" rel="noopener noreferrer">Chanut</a>
      </footer>
    </div>
  );
}

export default App;
