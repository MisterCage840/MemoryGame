import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Score from "./score.jsx"
import Highscore from "./highscore.jsx"
import FetchTable from "./fetchR&M.jsx"
import { useSyncExternalStore } from "react"

function App() {
  const [score, setScore] = useState(0)
  const [highscore, setHighscore] = useState(0)
  const [characterList, setCharacterList] = useState([])
  const [clickedCharacters, setClickedCharacters] = useState([])
  const url = "https://rickandmortyapi.com/api/character"

  return (
    <div>
      <h1>Rick & Morty Memory Game</h1>
      <div className="allScoresContainer">
        <Score score={score} />
        <Highscore highscore={highscore} />
      </div>
      <FetchTable
        url={url}
        characterList={characterList}
        setCharacterList={setCharacterList}
        clickedCharacters={clickedCharacters}
        setClickedCharacters={setClickedCharacters}
        score={score}
        setScore={setScore}
        highscore={highscore}
        setHighscore={setHighscore}
      />
      <footer>
        © Designed by{" "}
        <a href="https://github.com/MisterCage840/MemoryGame" target={"_blank"}>
          MisterCage840
        </a>
      </footer>
    </div>
  )
}

export default App
