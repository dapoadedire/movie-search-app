import poster404 from "../assets/poster404.jpg";


import { genres } from "../utils/genres";

const Movies = ({ movies }) => {

    return (

        <div
            className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >

            {

                movies.map((movie) => {
                    return (
                        <div key={movie.id}

                            className="flex w-full flex-col  items-center
                            p-4
                            "
                      
                        >
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                        : poster404
                                }
                                alt={movie.title}
                                className="mb-4 
                                w-full
                                rounded-none
                                shadow-lg"
                            />
                          
                           

                            <div
                            className="flex flex-col items-center justify-center w-full"
                            >
                                <h2
                                    className="mb-2  
                                    
                                    text-ellipsis text-sm font-medium "
                                >{movie.title}
                                </h2>
                                {/* <p className="
                            mb-2
                                                    w-64 text-ellipsis text-sm">
                                    {
                                        movie.overview.length > 100
                                            ? movie.overview.slice(0, 100) + "..."
                                            : movie.overview

                                    }
                                </p> */}




                                <p
                                    className="mb-2 flex  flex-wrap justify-center text-ellipsis text-sm"
                                >
                                    Genres:
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
                                    Release Date: {movie.release_date}
                                </p>
                            </div>
                            
                              
                              

                        </div>
                    );
                }
                )
            }

        </div>
    )
}


export default Movies;