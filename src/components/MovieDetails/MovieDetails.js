import React, { useState, useEffect } from 'react'
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { getMovie } from '../../axios/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieByIdAction, getMovieDetailsAction } from '../../Redux/Actions/Actions';
const MovieDetails = () => {
    const [movie, setMovie] = useState('');
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getMovieDetailsAction(id)) }, [])
    const movieState = useSelector(state => state.movies);
    useEffect(() => { setMovie(movieState) }, [movieState])

    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <Row className="w-100">
                            <Col md={6} xs={12}>
                                <img
                                    className="img-movie w-100"
                                    src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                                    alt="ascad"
                                />
                            </Col>
                            <Col md={6} xs={12}>
                                <div className="justify-content-center text-center  mx-auto">
                                    <p className="card-text-details border-bottom">
                                        اسم الفيلم: {movie.title}
                                    </p>
                                    <p className="card-text-details border-bottom">
                                        تاريخ الفيلم :{movie.release_date}
                                    </p>
                                    <p className="card-text-details border-bottom">
                                        عدد المقيمين : {movie.vote_count}
                                    </p>
                                    <p className="card-text-details border-bottom">
                                        التقييم :{movie.vote_average}
                                    </p>
                                </div>
                            </Col>
                        </Row>


                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary mx-2">
                            عوده للرئيسيه
                        </button>
                    </Link>
                    <a href={movie.homepage} >
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary">
                            مشاهده الفيلم
                        </button>
                    </a>
                </Col>
            </Row>
        </div>

    )
}

export default MovieDetails