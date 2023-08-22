import React from 'react'
import './Cards.css'
import { Col, Row } from 'react-bootstrap'
import man from '../../images/man.jpeg'
import { Link } from 'react-router-dom'
import { getAllMoviesAction } from '../../Redux/Actions/Actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
const Cards = () => {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getAllMoviesAction()) }, [])
    const moviesState = useSelector(state => state.movies);
    useEffect(() => { setMovies(moviesState) }, [moviesState])
    return (
        <Row>
            {
            movies?.length > 1 ?
                (
                    movies?.map(moviee =>
                    <Col md={3} xm={6} xs={12} key={moviee.id}>
                        <Link to={`/movie/${moviee.id}`}>
                            <div className='card'>
                                <img className='movie_img d-flex justify-content-center align-items-center'
                                    src={`https://image.tmdb.org/t/p/w500/` + moviee.poster_path} alt='img' />
                                <div className='description d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div>
                                            <span>اسم الفيلم :</span>
                                            <span>{moviee.title}</span>
                                        </div>
                                        <div>
                                            <span> تاريخ الأصدار :</span>
                                            <span>{moviee.release_date}</span>
                                        </div>

                                        <div>
                                            <span>عدد المقيمين  :</span>
                                            <span>{moviee.vote_count}</span>
                                        </div>
                                        {/* <div>
                                <span>الوصف  :</span>
                                <span>{moviee.overview}</span>
                        </div> */}
                                        <div>
                                            <span> التقييم :</span>
                                            <span>{moviee.vote_average}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col >)
                    ) 
                    : (<p>noo movies to show</p>)
            }


        </Row >

    )
}

export default Cards
