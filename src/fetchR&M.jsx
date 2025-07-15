import { useEffect } from "react"

export default function FetchTable({
  url,
  characterList,
  setCharacterList,
  clickedCharacters,
  setClickedCharacters,
  score,
  setScore,
  highscore,
  setHighscore,
}) {
  useEffect(() => {
    fetch(url + "/[1,2,3,4,5,6,7,9,10,11]", { mode: "cors" })
      .then((data) => data.json())
      .then((raw) => {
        const scrambled = scramble(raw)
        setCharacterList(scrambled)
      })
    return () => console.log("Cleanup")
  }, [])

  function scramble(arr) {
    let newArray = [...arr]

    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  function updateScore(char) {
    if (clickedCharacters.includes(char)) {
      setHighscore(score)
      setScore(0)
      setClickedCharacters([])
    } else setScore((prev) => prev + 1)
  }
  const images = characterList.map((character) => (
    <div key={character.id}>
      <img
        src={character.image}
        alt={character.name}
        onClick={() => {
          let scrambled = scramble(characterList)
          setCharacterList(scrambled)
          setClickedCharacters([...clickedCharacters, character])
          updateScore(character)
        }}
      />
    </div>
  ))

  return <div>{images}</div>
}
