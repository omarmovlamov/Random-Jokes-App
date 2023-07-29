import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [jokes, setJokes] = useState("");
  const getApi = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    setJokes(response.data);
  };
  return (
    <div className="App">
      <div className="header">
        <button onClick={getApi}>Show Random Jokes</button>
      </div>
      <div className="main">
        {jokes === "" ? (
          <p>Click the button and see the joke</p>
        ) : (
          <p>{jokes.value}</p>
        )}
      </div>
    </div>
  );
}

export default App;
