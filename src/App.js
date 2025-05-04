import './App.css';
import logo from './ArmyAF.png'; // Put your image in /src folder

export default function App() {
  return (
    <div className="container">
      <img src={logo} alt="Army AF Apps Logo" className="logo" />
      <h1>Army AF Apps</h1>
      <p className="tagline">
        Tap, click, done.
      </p>

      <div className="card">
        <h2>The details...</h2>
        <ul>
          <li>Zero-install apps — mobile-friendly and works offline</li>
          <li>No .mil account or CAC required</li>
          <li>Data export via CSV/XLS for Army workflows</li>
          <li>Built by soldiers, for soldiers</li>
        </ul>
      </div>

      <a href="https://yourdomain.com/Army-AF/inventory" className="button">
        🚀 Try Army-AF/Inventory →
      </a>

      <footer>
        &copy; 2025 Army AF Apps — Stronger apps are harder to kill.
      </footer>
    </div>
  );
}