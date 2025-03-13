import { IMG_CDN_URL } from "../Util/constants";


const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="MovieCard" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;