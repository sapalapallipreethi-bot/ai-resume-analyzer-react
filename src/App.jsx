import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScoreCard from "./components/ScoreCard";
import Suggestions from "./components/Suggestions";

function App() {
  const [fileName, setFileName] = useState("No file selected");
  const [score, setScore] = useState("");

  return (
    <>
      <Navbar />

      <Hero />

      <div className="hero">
        <button>Upload Resume</button>
<input
  type="file"
  accept=".pdf,.doc,.docx"
  onChange={(e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setScore(85);
    }
  }}
/>

<p>{fileName}</p>
        <br />
        <br />

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => {
            if (e.target.files.length > 0) {
              setFileName(e.target.files[0].name);
              setScore(85);
            }
          }}
        />

        <p>{fileName}</p>

        {score && (
          <>
            <ScoreCard score={score} />
            <Suggestions />
          </>
        )}
      </div>
    </>
  );
}

export default App;