import { Container } from "react-bootstrap";
import "./App.css";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Container className="my-3">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<>
              <Cards />
              <Pagination />
            </>}>
            </Route>
            <Route path='/movie/:id' element={<MovieDetails />} > </Route>
          </Routes>
        </BrowserRouter>

      </Container>
    </div>
  );
}

export default App;
