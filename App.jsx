import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("login");

  const showSection = (id) => {
    setActiveSection(id);
  };

  return (
    <div className="container">

      {/* LOGIN */}
      {activeSection === "login" && (
        <div className="section active">
          <h2>🔐 Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={() => showSection("dashboard")}>Login</button>
        </div>
      )}

      {/* DASHBOARD */}
      {activeSection === "dashboard" && (
        <div className="section active">
          <h2>📊 Dashboard</h2>
          <div className="card">Mentors : 10</div>
          <div className="card">Review Requests : 5</div>
          <div className="card">Completed Reviews : 3</div>

          <button onClick={() => showSection("mentor")}>
            Next: Search Mentor
          </button>
        </div>
      )}

      {/* SEARCH MENTOR */}
      {activeSection === "mentor" && (
        <div className="section active">
          <h2>🔍 Search Mentor</h2>

          <input type="text" placeholder="Search Mentor" />

          <div className="card">
            <b>Arjun Patel</b>
            <br />
            Python & AI ⭐⭐⭐⭐⭐
          </div>

          <button onClick={() => showSection("booking")}>
            Book Session
          </button>
        </div>
      )}

      {/* BOOK SESSION */}
      {activeSection === "booking" && (
        <div className="section active">
          <h2>📅 Book Session</h2>

          <input type="date" />
          <input type="time" />

          <button onClick={() => showSection("submitCode")}>
            Confirm Booking
          </button>
        </div>
      )}

      {/* SUBMIT CODE */}
      {activeSection === "submitCode" && (
        <div className="section active">
          <h2>💻 Submit Code</h2>

          <input type="text" placeholder="Student Name" />

          <select>
            <option>Python</option>
            <option>Java</option>
            <option>JavaScript</option>
            <option>C++</option>
          </select>

          <textarea placeholder="Paste your code here"></textarea>

          <button onClick={() => showSection("reviewTrack")}>
            Submit Code
          </button>
        </div>
      )}

      {/* TRACK REVIEW */}
      {activeSection === "reviewTrack" && (
        <div className="section active">
          <h2>📈 Track Review</h2>

          <p>Status: Under Review ⏳</p>

          <div className="progress">
            <div className="progress-bar">80%</div>
          </div>

          <button onClick={() => showSection("feedback")}>
            View Feedback
          </button>
        </div>
      )}

      {/* FEEDBACK */}
      {activeSection === "feedback" && (
        <div className="section active">
          <h2>📝 Mentor Feedback</h2>

          <div className="card">
            ✔ Good Coding Structure
            <br />
            ✔ Proper Variable Names
            <br />
            ✔ Clean Formatting
            <br />
            <br />
            Suggestions:
            <br />
            • Add Comments
            <br />
            • Improve Error Handling
          </div>

          <button onClick={() => showSection("score")}>
            Get Score
          </button>
        </div>
      )}

      {/* SCORE */}
      {activeSection === "score" && (
        <div className="section active">
          <h2>🏆 Project Score</h2>

          <div className="card">
            Final Score : <b>92 / 100</b>
          </div>

          <button onClick={() => showSection("certificate")}>
            Download Certificate
          </button>
        </div>
      )}

      {/* CERTIFICATE */}
      {activeSection === "certificate" && (
        <div className="section active">
          <div className="certificate">
            <h1>🏅 Certificate of Completion</h1>

            <br />

            <h2>Reshma Maddu</h2>

            <p>
              Successfully completed the Code Review & Mentorship Program
            </p>

            <br />

            <h3>Score : 92/100</h3>

            <br />

            <button
              className="download"
              onClick={() => window.print()}
            >
              Download Certificate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

