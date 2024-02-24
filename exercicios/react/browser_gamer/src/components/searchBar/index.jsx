import React, {useState} from 'react'
import {FaSearch} from "react-icons/fa"
import './styles.css'

const SearchBar = ({setResults}) => {

    const [input, setInput] = useState("");

    const fetchData = (value)=>{
        fetch("http://localhost:3000/games")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((games) =>{
                return value && games && games.title && games.title.toLowerCase().includes(value)
            });
            setResults(results)
        });
    }

    const handleChange = (value)=>{
        setInput(value)
        fetchData(value)
    }

  return (
    <div className='SearchBar'>
    <div className='input-wrapper'>
        <FaSearch id='search-icon'/>
        <input type="text" placeholder='Type to search your game....' value={input} onChange={(e)=>handleChange(e.target.value)}
        />
    </div>
    </div>
  )
}

export default SearchBar