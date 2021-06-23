import {useContext} from 'react'
import { MovieContext } from '../context/MovieContext'


const MovieList = () => {
    const [movies] = useContext(MovieContext)
    console.log(movies)

    return(
        <>
            {movies.map((movie, index) => {
               return(
                   <div key={index}>
               <p>{movie.name}</p>
               <p>{movie.price}</p>
                    </div >
            )})}
        </>
    )


}

export default MovieList