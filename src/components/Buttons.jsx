import React from "react";

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
      <button onClick={() => (window.location.href = "https://www.google.com")}>
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
      <button onClick={() => (window.location.href = "https://www.github.com")}>
        GitHub
      </button>

      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default Buttons;
