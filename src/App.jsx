import avatarImage from "./assets/avatar-noble.jpg";
import "./css/App.css";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <form className="form">
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={avatarImage} className="avatar" alt="Avatar Image" />
          </a>
        </div>
        <h1>Noble Axiom</h1>
        <h2>Atlanta, United States</h2>
        <h3>Fullstack Developer and advid reader</h3>

        <Buttons />

        <p className="read-intructions">
          Click avatar image to learn more about React used for this app
        </p>
      </form>
    </>
  );
}

export default App;
