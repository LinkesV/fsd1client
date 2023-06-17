import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { data } from '../App'
import { useContext } from 'react'


function MovieTable() {
    const [value,setValue] = useContext(data);
    const [movies, setMovies] = useState([])
    useEffect(() => {
        try {
            fetch("http://localhost:4000/getmovies", {
                method: "GET",
                headers: {
                    'Access-Control-Allow-Origin': true,
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                return res.json()
            })
                .then((data) => {
                    setMovies(data)
                })
        }
        catch (err) {
            console.log(err)
        }
    }, [value])
    // const [movies,] = useContext(data);

    const handleDelete = (id) => {
            try {
                fetch('http://localhost:4000/movies/'+id, {
                    method: "DELETE",
                    headers: {
                        'Access-Control-Allow-Origin': true,
                        'Content-Type': 'application/json',
                    },
                }).then((data)=>{
                    console.log(data)
                    setValue(value+1)
                });
            }
            catch (err) {
                console.log(err)
            }
        }

    const handleUpdate = (id) => {
        try {
            fetch('http://localhost:4000/movies/'+id, {
                method: "PUT",
                headers: {
                    'Access-Control-Allow-Origin': true,
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({
                //     title:title,
                //     genre:genre,
                //     language:language,
                //     rating:rating,
                    // id: movies.length,
                // }),
            }).then((data)=>{
                console.log(data)
                setValue(value+1)
            });
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Movie Title</th>
                    <th>Genre</th>
                    <th>Language</th>
                    <th>Rating</th>

                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                {movies.map((movie) => {
                    return (
                        <tr className='tablerow' key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.language}</td>
                            <td>{movie.rating}</td>
                            <td><button onClick={() => { handleDelete(movie._id); console.log(movie._id)}}>Delete</button></td>
                            <td><button onClick={() => { handleUpdate(movie._id) }}>Update</button></td>

                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default MovieTable