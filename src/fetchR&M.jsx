import {useEffect } from 'react'

export default function FetchTable({url, characterList,setCharacterList}){
    useEffect(()=>{fetch(url+"/[1,2]",{mode: "cors"}).then((data)=>data.json()).then((raw)=>setCharacterList(raw))
    
    return ()=> console.log("Cleanup")},[url,setCharacterList])

    const images = characterList.map((character)=> (
        <div key={character.id}><img src = {character.image}/></div>
    ))  
    return (
        <div>{images}</div>
    )
}