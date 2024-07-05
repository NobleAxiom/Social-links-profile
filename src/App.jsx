import { useState } from "react";
import avatarImage from "./assets/avatar-noble.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={avatarImage} className="avatar" alt="Avatar Image" />
        </a>
      </div>
      <h1>Noble Axiom</h1>
      <h2>Atlanta, United States</h2>
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => (window.location.href = "https://www.google.com")}
        >
          Google
        </button>
        <button
          onClick={() => (window.location.href = "https://www.facebook.com")}
        >
          Facebook
        </button>
        <button
          onClick={() => (window.location.href = "https://www.twitter.com")}
        >
          Twitter
        </button>
        <button
          onClick={() => (window.location.href = "https://www.linkedin.com")}
        >
          LinkedIn
        </button>
        <button
          onClick={() => (window.location.href = "https://www.github.com")}
        >
          GitHub
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
