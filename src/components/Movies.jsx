import poster404 from "../assets/poster404.jpg";
import { Link } from "react-router-dom";
import { genres } from "../utils/genres";

const Movies = ({ movies }) => {
    return (
        <div className="grid  grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4"
        >
            {
                movies.map((movie) => {
                    return (
                        <div key={movie.id}

                            className="flex w-full flex-col  items-center
                            border border-gray-300  p-2 hover:shadow-lg
                            ">
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                        : poster404
                                }
                                alt={movie.title}
                                className="mb-4 
                                
                                rounded-none
                                shadow-lg
                                sm:w-64 
                                md:w-72
                                lg:w-80"
                            />
                            <div
                            className="flex w-full flex-col items-center justify-center"
                            >
                                <h2
                                    className="mb-2  
                                    
                                    text-ellipsis text-sm font-bold "
                                >{movie.title}
                                </h2>              
                                <p className="mb-2 flex  flex-wrap items-start text-ellipsis text-sm">
                                    {movie.genre_ids.map((genreId) => {
                                        return (
                                            <span
                                                key={genreId}
                                                className="ml-2 text-blue-500"
                                            >
                                                {genres.genres.map((genre) => {
                                                    if (genre.id === genreId) {
                                                        return genre.name;
                                                    }
                                                })}
                                            </span>
                                        )
                                    })}
                                </p>
                                <p
                                    className="mb-2 text-ellipsis text-sm"
                                >
                               {movie.release_date}
                                </p>
                            </div>
                            <Link to={`/movie/${movie.id}`}
                            key={movie.id}
                                className="bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                            >
                                View Details
                            </Link>
                        </div>
                    );
                }
                )
            }
        </div>
    )
}


export default Movies;