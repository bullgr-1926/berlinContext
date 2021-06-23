import {useContext} from 'react'
import { MovieContext } from '../context/MovieContext'

const NavBar =() => {
const [movies] = useContext(MovieContext)

  return <h1> My NavBar have movies {movies.length}  </h1>
}


export default NavBar
