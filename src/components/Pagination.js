import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getAllMovies } from "../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllMoviesAction } from "../Redux/Actions/Actions";


const Pagination = () => {
    const [pageCount,setPageCount]=useState(0)
    const dispatch = useDispatch();
    const handlePageChange = (page) => {
        dispatch(getAllMoviesAction(page))
    }
    const pages = useSelector(state => state.pages);
    useEffect(()=>{setPageCount(pages)},[pages])
    const handlePageClick = (data) => {
        const page = data.selected + 1;
        handlePageChange(page);
    };
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            // pageCount={pageCount}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    );
};

export default Pagination;
