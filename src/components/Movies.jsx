import poster404 from "../assets/poster404.jpg";

// const a = {
//     "adult": false,
//     "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
//     "genre_ids": [
//         28,
//         12,
//         878
//     ],
//     "id": 505642,
//     "original_language": "en",
//     "original_title": "Black Panther: Wakanda Forever",
//     "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
//     "popularity": 4646.778,
//     "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
//     "release_date": "2022-11-09",
//     "title": "Black Panther: Wakanda Forever",
//     "video": false,
//     "vote_average": 7.5,
//     "vote_count": 3132
// }

import { genres } from "../utils/genres";

//  const genres = {
//     "genres": [
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 12,
//             "name": "Adventure"
//         },
//         {
//             "id": 16,
//             "name": "Animation"
//         }
//     ]}

const Movies = ({ movies }) => {

    return (

        <div
            className="flex flex-wrap items-center justify-center
            gap-4
            "
        >

            {

                movies.map((movie) => {
                    return (
                        <div
                            key={movie.id}
                            className="flex flex-col items-center justify-center rounded-lg
                                                    border border-gray-300 p-4 
                                        
                                        "
                        >
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                        : poster404
                                }
                                alt={movie.title}
                                className="mb-4 h-96 w-64 rounded-lg shadow-lg"
                            />
                          
                           

                            <div>
                                <h2
                                    className="mb-2 w-64 text-ellipsis text-lg font-medium "
                                >{movie.title}
                                </h2>
                                <p className="
                            mb-2
                                                    w-64 text-ellipsis text-sm">
                                    {
                                        movie.overview.length > 100
                                            ? movie.overview.slice(0, 100) + "..."
                                            : movie.overview

                                    }
                                </p>




                                <p
                                    className="mb-2 flex w-64 flex-wrap justify-center text-ellipsis text-sm"
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
                                    className="mb-2 w-64 text-ellipsis text-sm"
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