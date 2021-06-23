import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";


const MovieForm = () => {

    const [movies, setMovies] = useContext(MovieContext)
    const [dataMovie, setDataMovie] = useState({
        name : '',
        price : 0
    })

    const onChangeMovie = (e) => {
        let keyname = e.target.name
        let keyvalue = e.target.value
        setDataMovie((previous) => {
            return{
                ...previous,
                [keyname] : keyvalue
            }
        })
    }


    const addMovie = (e) => {
        e.preventDefault()
        setMovies([...movies, {name : dataMovie.name, price : `$${dataMovie.price}`}])

    }

    return(
        <form onSubmit={addMovie} >
            <input type='text' name='name'value={dataMovie.name} onChange={onChangeMovie} />
            <input type='number' name='price' value={dataMovie.price} onChange={onChangeMovie}/>
            <button type='submit'>
                Add movie
            </button>
        </form>
    )
}

export default MovieForm