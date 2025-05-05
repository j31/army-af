import './App.css';
import logo from './ArmyAF.png'; // Put your image in /src folder

export default function App() {
  return (
    <div className="container">
      <img src={logo} alt="Army AF Apps Logo" className="logo" />
      <h1>Tap, click, done.</h1>
      <p className="tagline">
        Army AF Apps.
      </p>

      <a
  href="https://armyaf.vercel.app/"
  className="button"
>
  ✪ &nbsp;&nbsp;Try Army AF  &nbsp;&nbsp;|&nbsp;&nbsp;<b>Inventory</b>  →
</a>

<p></p><p></p>

      <div className="card">
        <h2>The details...</h2>
        <ul>
        <li><b>Easy win</b>.&nbsp;  Faster inventories, fewer errors.</li>
        <li><b>Command-aligned</b>.&nbsp;  Seamlessly fits SOPs and your existing workflows.</li>
        <li><b>Secure & simple</b>.&nbsp;  No CAC, no .mil login, no red tape.</li>
        <li><b>Field-ready</b>.&nbsp;  Mobile-first and offline-capable.</li>
        <li><b>Army AF</b>.&nbsp;  Designed by soldiers, for soldiers.</li>
        </ul>
      </div>

      <footer>
        &copy; 2025 Army AF Apps — Stronger apps are harder to kill.&trade;
      </footer>
    </div>
  );
}