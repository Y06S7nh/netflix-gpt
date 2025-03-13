import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer = () => {
    const movies = useSelector((store) => store.movies);
    return<div className=" bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.TrendingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
          </div>


    </div>;

};

export default SecondContainer;