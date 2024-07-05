import avatarImage from "./assets/avatar-noble.jpg";
import "./css/App.css";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <div className="form">
        <div>
          <a
            href="https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ"
            target="_blank"
          >
            <img src={avatarImage} className="avatar" alt="Avatar Image" />
          </a>
        </div>
        <p1>Noble Axiom</p1>
        <p2>Atlanta, United States</p2>
        <p3>Fullstack Developer and advid reader</p3>

        <Buttons />

        <p className="read-intructions">
          Click avatar image to learn more about FrontendMentor challenge used
          for this app
        </p>
      </div>
    </>
  );
}

export default App;
