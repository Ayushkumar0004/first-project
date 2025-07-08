import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [section, setSection] = useState('home');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleSectionChange = (newSection) => {
    if (newSection === section) return;
    setAnimate(false);
    setTimeout(() => {
      setSection(newSection);
      setAnimate(true);
    }, 50);
  };

  useEffect(() => {
    setAnimate(true);
  }, [section]);

  if (!loggedIn) {
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>🔐 Login</h2>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1 className="logo">MyApp</h1>
        <div className="nav-buttons">
          <button onClick={() => handleSectionChange('home')}>Home</button>
          <button onClick={() => handleSectionChange('contact')}>Contact</button>
          <button onClick={() => handleSectionChange('about')}>About</button>
          <button onClick={() => handleSectionChange('user')}>User</button>
          <button onClick={() => setDarkMode(prev => !prev)}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </nav>
      <div className={`content ${animate ? 'fade-in' : ''}`}>
        <div className="content-box">
          {section === 'home' && <p>🏠 Welcome to the Home Page!</p>}
          {section === 'contact' && <p>📞 Reach us at: jerry@gmail.com</p>}
          {section === 'about' && <p>ℹ️ This is a beautiful React app example with a navbar.</p>}
          {section === 'user' && <p>👤 User Profile: JERRY</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
