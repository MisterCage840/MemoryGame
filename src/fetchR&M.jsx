import { useEffect } from "react"

export default function FetchTable({ url, characterList, setCharacterList }) {
  useEffect(() => {
    fetch(url + "/[1,2,3,4,5,6,7,9,10,11]", { mode: "cors" })
      .then((data) => data.json())
      .then((raw) => setCharacterList(raw))

    return () => console.log("Cleanup")
  }, [])

  function scramble() {
    let newArray = [...characterList]

    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }

    setCharacterList(newArray)
  }

  const images = characterList.map((character) => (
    <div key={character.id}>
      <img src={character.image} onClick={scramble} />
      {character.name}
    </div>
  ))
  return <div>{images}</div>
}
