
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Welcome to TNT Tours</h1>
      <p>Your gateway to unforgettable travel experiences.</p>
      <button
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "1rem"
        }}
        onClick={() => alert("Booking coming soon!")}
      >
        Book a Tour
      </button>
    </div>
  );
}

export default App;
