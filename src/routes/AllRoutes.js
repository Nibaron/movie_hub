import { Routes, Route} from "react-router-dom";
import {MovieList, MovieDetail, Search, PageNotFound} from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
                <Route path="/" element={ <MovieList /> } />
                <Route path="Movie/:id" element={ <MovieDetail /> } />
                <Route path="MovieSearch" element={ <Search /> } />
                <Route path="*" element={ <PageNotFound /> } />
    </Routes>
  )
}
