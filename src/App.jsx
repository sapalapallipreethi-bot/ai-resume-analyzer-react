import "./App.css";
import { useState } from "react";


function App() {
  const [fileName, setFileName] = useState("No file selected");
  const [score, setScore] = useState("");
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
  onChange={(e) => {
  if (e.target.files.length > 0) {
    setFileName(e.target.files[0].name);
    setScore(85);
  }
}}
/>
<p>{fileName}</p>
{score && (
  <div className="score-card">
    {score && (
  <div className="suggestions">
    <h3>AI Suggestions</h3>

    <ul>
      <li>✅ Add more technical skills.</li>
      <li>✅ Include internship experience.</li>
      <li>✅ Improve ATS keywords.</li>
      <li>✅ Add GitHub and LinkedIn links.</li>
    </ul>
  </div>
)}
    <h2>ATS Score</h2>
    <h1>{score}%</h1>
  </div>
)}
        </div>
      </section>
    </>
  );
}

export default App;