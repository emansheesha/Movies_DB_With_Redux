import { GETALLMOVIES, GETMOVIEDETAILS, GETSEARCHEDMOVIES } from "../Types"
const initialValue = { movies: [], pages: 0 }
export const Reducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'GETALLMOVIES':
            return { movies: action.data, pages: action.pages }
        case 'GETMOVIEDETAILS':
            return { movies: action.data }
        case 'GETSEARCHEDMOVIES':
            return { movies: action.data, pages: action.pages }
        default:
            return state
    }

}