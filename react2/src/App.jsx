import { useState } from 'react';
import './App.css';

const moods = {
  "😄": { message: "You're Happy!", color: "#ffeaa7" },
  "😢": { message: "Feeling Sad?", color: "#74b9ff" },
  "😡": { message: "Angry Mode ON!", color: "#fab1a0" },
  "🥱": { message: "Sleepy... Zzz", color: "#dfe6e9" },
  "😍": { message: "You're in Love!", color: "#fd79a8" },
};

function App() {
  const [mood, setMood] = useState(null);
  const [userName, setUserName] = useState("");

  const handleMoodSelect = (emoji) => {
    const selected = moods[emoji];
    setMood(selected);
    alert(`${userName || "User"}, ${selected.message}`);
  };

  const handleReset = () => {
    setMood(null);
  };

  const handleSurprise = () => {
    const keys = Object.keys(moods);
    const randomEmoji = keys[Math.floor(Math.random() * keys.length)];
    handleMoodSelect(randomEmoji);
  };

  return (
    <div className="app" style={{ backgroundColor: mood?.color || "#f5f5f5" }}>
      <div className="card">
        <h1>🎭 Emoji Mood Selector</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="name-input"
        />

        <div className="emoji-list">
          {Object.keys(moods).map((emoji) => (
            <span key={emoji} onClick={() => handleMoodSelect(emoji)} className="emoji">
              {emoji}
            </span>
          ))}
        </div>

        {mood && (
          <h2 className="mood-message">
            {userName ? `${userName}, ` : ""}{mood.message}
          </h2>
        )}

        <div className="button-group">
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleSurprise}>Surprise Me</button>
        </div>
      </div>
    </div>
  );
}

export default App;
