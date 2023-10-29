import { useEffect, useState } from "react";
import CardField from "./components/CardField";
import "./index.css";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [alreadyClicked, setAlreadyClicked] = useState([]);

  const addAlreadyClicked = (id) => {
    if (alreadyClicked.includes(id)) {
      setAlreadyClicked([]);
    } else {
      setAlreadyClicked([...alreadyClicked, id]);
    }
  };

  if (highScore < alreadyClicked.length) {
    setHighScore(alreadyClicked.length);
  }

  return (
    <>
      <h1>Score: {alreadyClicked.length}</h1>
      <h1>High Score: {highScore}</h1>
      <CardField addAlreadyClicked={addAlreadyClicked}></CardField>
    </>
  );
}

export default App;
