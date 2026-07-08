import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <header className="navbar">
        <h2>🤖 AI Resume Analyzer</h2>

        <nav>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <h1>Analyze Your Resume with AI</h1>

          <p>
            Get your ATS score, skill analysis and AI suggestions in seconds.
          </p>

          <button>Upload Resume</button>
          <input
  type="file"
  accept=".pdf,.doc,.docx"
  style={{ marginTop: "20px" }}
/>
        </div>
      </section>
    </>
  );
}

export default App;