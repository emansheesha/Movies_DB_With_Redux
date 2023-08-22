import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png';
import './NavbarComp.css'
import { getAllMoviesAction, getSearchedMovieAction } from '../../Redux/Actions/Actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
const NavbarComp = () => {
    const dispatch = useDispatch()
    const searchedMovies = (searchTxt) => {
        if (searchTxt) {
          dispatch(getSearchedMovieAction(searchTxt))
        }
        else {
          dispatch(getAllMoviesAction())
        }
      }
    return (
        <Navbar expand="lg" bg='dark'>
            <Container >
                <Row className='w-100 d-flex align-items-center '>
                    <Col xs={3} md={2} className='d-flex  justify-content-end'>
                        <div><img src={logo} alt='logo' className='logo-img' /></div>
                    </Col>
                    <Col xs={8} md={9}>
                        <Form className="w-100 ">
                            <Form.Control
                                type="search"
                                placeholder="  أبحث "
                                className="me-2 search-input"
                                aria-label="Search"
                                onChange={(e) => searchedMovies(e.target.value)}
                            />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;