import avatarImage from "./assets/avatar-noble.jpg";
import "./App.css";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={avatarImage} className="avatar" alt="Avatar Image" />
        </a>
      </div>
      <h1>Noble Axiom</h1>
      <h2>Atlanta, United States</h2>

      <Buttons />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
