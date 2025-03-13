
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/newUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";



const Browse = () => {


  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  

    return (
      <div>
        <Header />
        <MainContainer/>
        <SecondContainer/>
      </div>
    );
  };
  
  export default Browse;
  