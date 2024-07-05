import React from "react";
import "../css/Buttons.css";

const Buttons = () => {
  return (
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
        className="button"
        onClick={() => (window.location.href = "https://www.google.com")}
      >
        Google
      </button>
      <button
        className="button"
        onClick={() => (window.location.href = "https://www.facebook.com")}
      >
        Facebook
      </button>
      <button
        className="button"
        onClick={() => (window.location.href = "https://www.twitter.com")}
      >
        Twitter
      </button>
      <button
        className="button"
        onClick={() => (window.location.href = "https://www.linkedin.com")}
      >
        LinkedIn
      </button>
      <button
        className="button"
        onClick={() => (window.location.href = "https://www.github.com")}
      >
        GitHub
      </button>

      <p>Buttons link to external profile pages</p>
    </div>
  );
};

export default Buttons;
