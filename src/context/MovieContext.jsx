import {useState, createContext} from 'react'

export const MovieContext = createContext()

export const MovieController = (props) => {

    const [movies, setmovies] = useState([
        {
        name : 'Scary Movie',
        price : '$6'
    }, 
    {
        name :'Armageddon',
        price : '$4'
    }, 
    {
        name : 'Godfather',
        price : '$10'
    },
    {
        name : 'Old boy',
        price : '$5'
    }
])

return(
    <MovieContext.Provider value={[movies, setmovies]}>
            {props.children}
    </MovieContext.Provider>
)


}