import { getAllMovies, getMovie, searchAllMovies } from "../../axios/axios"
import { GETALLMOVIES, GETMOVIEDETAILS, GETSEARCHEDMOVIES } from "../Types"

export const getAllMoviesAction = (page) => {
    return async (dispatch) => {

        const res = await getAllMovies(page);
        dispatch({
            type: GETALLMOVIES,
            data: res.results,
            pages: res.total_pages
        })
    }

}
export const getMovieDetailsAction = (id) => {
    return async (dispatch) => {
        const res = await getMovie(id);
        dispatch({
            type: GETMOVIEDETAILS,
            data: res
        })
    }

}

export const getSearchedMovieAction = (txt) => {
    return async (dispatch) => {
        const res = await searchAllMovies(txt);
        dispatch({
            type: GETSEARCHEDMOVIES,
            data: res.results,
            pages:res.total_pages
        })
    }
}
