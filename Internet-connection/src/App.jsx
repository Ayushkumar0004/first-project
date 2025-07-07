import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [lastChecked, setLastChecked] = useState(new Date());
  const [ipData, setIpData] = useState(null);
  const [ping, setPing] = useState(null);
  const [history, setHistory] = useState([]);
  const [connectionType, setConnectionType] = useState('Unknown');

  const getIpLocation = async () => {
    try {
      const res = await fetch('https://ipapi.co/json');
      const data = await res.json();
      setIpData(data);
    } catch {
      setIpData(null);
    }
  };

  const checkPing = async () => {
    const start = performance.now();
    try {
      await fetch('https://www.google.com', { mode: 'no-cors' });
    } catch {}
    const end = performance.now();
    setPing(Math.round(end - start));
  };

  const checkConnection = async () => {
    setIsOnline(navigator.onLine);
    setLastChecked(new Date());
    updateHistory(navigator.onLine);
    await checkPing();
    getNetworkType();
  };

  const updateHistory = (status) => {
    const newEntry = {
      status: status ? 'Online' : 'Offline',
      time: new Date().toLocaleTimeString(),
    };
    setHistory((prev) => [newEntry, ...prev.slice(0, 4)]);
  };

  const getNetworkType = () => {
    const type = navigator.connection?.effectiveType || 'Unknown';
    setConnectionType(type.toUpperCase());
  };

  useEffect(() => {
    getIpLocation();
    checkConnection();

    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
      setLastChecked(new Date());
      updateHistory(navigator.onLine);
    };

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    const interval = setInterval(checkConnection, 15000);
    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className={`card ${isOnline ? 'online' : 'offline'}`}>
        <div className="signal-bars">
          <span className={isOnline ? 'bar active' : 'bar'}></span>
          <span className={isOnline ? 'bar active' : 'bar'}></span>
          <span className={isOnline ? 'bar active' : 'bar'}></span>
          <span className={isOnline ? 'bar active' : 'bar'}></span>
        </div>
        <h1>{isOnline ? '🟢 Online' : '🔴 Offline'}</h1>
        <p className="desc">{isOnline ? 'Connection looks great!' : 'You’re offline 😢'}</p>

        <div className="info-grid">
          <div><strong>Last Checked:</strong><br />{lastChecked.toLocaleTimeString()}</div>
          <div><strong>Ping:</strong><br />{ping} ms</div>
          <div><strong>Type:</strong><br />{connectionType}</div>
          {ipData && (
            <div><strong>Location:</strong><br />{ipData.city}, {ipData.country_code}</div>
          )}
        </div>

        <button className="btn-glow" onClick={checkConnection}>🔁 Recheck</button>

        <div className="history">
          <h4>📜 Connection History</h4>
          <ul>
            {history.map((entry, idx) => (
              <li key={idx}>[{entry.time}] - {entry.status}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
