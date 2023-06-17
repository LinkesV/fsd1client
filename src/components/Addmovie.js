import React from 'react'
import { useState } from 'react'
import { data } from '../App'
import { useContext } from 'react'

function Addmovie() {

    const [value,setValue] = useContext(data);

    const [title,setTitle] = useState('')
    const [genre,setGenre] = useState('')
    const [language,setLanguage] = useState('')
    const [rating,setRating] = useState('')

    const handleClick = ()=>{
        try{
            fetch("http://localhost:4000/movies", {
            method: "POST", 
            headers: {
                'Access-Control-Allow-Origin':true,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title:title,
                genre:genre,
                language:language,
                rating:rating,
                // id: movies.length,
            })
        })
        .then((data)=>{
            console.log(data)
            setValue(value + 1)
        })
    
        // setMovies([...movies,{
        //     title:title,
        //     genre:genre,
        //     language:language,
        //     rating:rating,
        //     id: movies.length,
        // }])
        setTitle('');
        setGenre('');
        setLanguage('');
        setRating('');
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <input type='text' placeholder='Movie Title' value={title}onChange={(e)=>setTitle(e.target.value)}/>
        <input type='text' placeholder='Genre' value={genre}onChange={(e)=>setGenre(e.target.value)}/>
        <input type='text' placeholder='Language' value={language}onChange={(e)=>setLanguage(e.target.value)}/>
        <input type='text' placeholder='Rating' value={rating}onChange={(e)=>setRating(e.target.value)}/>
        <button onClick={handleClick}>Add Movie</button>
    </div>
  )
}

export default Addmovie