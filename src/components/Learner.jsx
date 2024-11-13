import React from "react";
import Score from "./Score";

function Learner({ learner }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <h3>Scores:</h3>
      {learner.scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </div>
  );
}

export default Learner;
