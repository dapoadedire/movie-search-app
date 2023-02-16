import { useEffect, useState } from "react";
import Movies from "./Movies";
import MoviesNotFound from "./NoResults";
import { genres } from "../utils/genres";


const API_KEY = import.meta.env.VITE_API_KEY;
const POPULAR_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [currentGenre, setCurrentGenre] = useState("");
    const [currentYear, setCurrentYear] = useState("");


    useEffect(() => {
        fetch(POPULAR_API_URL)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data);
            });
    }, []);

   
    const handleOnSubmit = (e) => {
        const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`;
        e.preventDefault();
        if (query) {
            fetch(SEARCH_API_URL)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data);
                    setFilteredMovies([]);
                    
                });
        }
    };

    

    

    // console.log(genres)
    const genreList = genres.genres && genres.genres.map((genre) => {
        return (
            <option key={genre.id} value={genre.id}>
                {
                    currentGenre === genre.name
                        ? `${genre.name} (current)`
                        : genre.name
                        
                }
            </option>
        );
    
    }
    )

    const yearArray = movies.results
        ?.map((movie) => {
            return movie.release_date?.slice(0, 4);
        })
        .sort()
        .reverse(); // Sort in descending order

    const yearList = [...new Set(yearArray)].map((year) => {
        return (
            <option key={year} value={year}>
                {year}
            </option>
        );
    });



    const setYear= (e)=> {
        e.preventDefault();
        // console.log(e.target.value)
        setCurrentYear(e.target.value);
        console.log("a")
    }


    const setGenre = (e) =>{
        e.preventDefault();
        setCurrentGenre(e.target.value);
    }

    

    // filter with genre or year or both.

    const filterMovies = (e) => {
        e.preventDefault();

        const filteredMovies = currentGenre === "" && currentYear === ""
            ? movies.results
            : currentGenre === "" && currentYear !== ""
                ? movies.results.filter((movie) => movie.release_date.includes(currentYear))
                : currentGenre !== "" && currentYear === ""
                    ? movies.results.filter((movie) => movie.genre_ids.includes(parseInt(currentGenre)))
                    : movies.results.filter((movie) => movie.genre_ids.includes(parseInt(currentGenre)) && movie.release_date.includes(currentYear));

        setFilteredMovies(filteredMovies);
    };




    
    const displayMovies = filteredMovies.length > 0 ? filteredMovies : movies.results;
    

    return (
        

          

        <main className="
        my-8 mx-auto max-w-7xl border
        ">
            

            <div
            className="border-b-2 border-gray-300"
            >
               
                    <form
                        action=""
                        className="mb-6 flex
                    flex-wrap items-center justify-center gap-4 p-4
                    "
                        onSubmit={handleOnSubmit}
                    >
                        <input
                            type="text"
                            name="search"
                            id="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="rounded-lg border border-gray-300 p-2"
                        />
                        <button type="submit"
                            className="rounded-lg bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                        >Search</button>
                    </form>

                    <form action=""
                        onSubmit={filterMovies}
                        className="mb-6 flex flex-wrap items-center justify-center gap-4 p-4">

                        <select name="genre" id="genre"
                            onChange={
                                setGenre
                            }
                            className="w-[150px] cursor-pointer rounded-lg border border-gray-300 p-2"

                        >
                            <option value="">All</option>
                            {genreList}
                        </select>

                        <select name="year" id="year"
                            onChange={
                                setYear
                            }
                            className="w-[100px] cursor-pointer rounded-lg border
                        border-gray-300 p-2
                        "

                        >
                            <option value="">All</option>
                            {yearList}

                        </select>

                        <button
                            type="submit"
                            className="rounded-lg bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                        >
                            Filter
                        </button>

                    </form>
            </div>
                <div
                    className="
                    mb-6 flex flex-wrap items-center justify-center gap-4 p-4
                    "
                >
                    <h2 className="mb-4 text-3xl font-bold">
                        {filteredMovies.length > 0
                            ? "Filtered Movies"
                            : "Popular Movies"}
                    </h2>
                    <p className="mb-2 text-lg">
                        {filteredMovies.length > 0
                            ? `Showing ${filteredMovies.length} movies`
                            : `Showing ${movies.results?.length} movies`}
                    </p>
                    <p className="text-lg">
                        {currentGenre !== "" && currentYear !== ""
                            ? <span>Genre: <span className="font-bold text-blue-500">{genres.genres.find((genre) => genre.id === parseInt(currentGenre)).name}</span> | Year: <span className="font-bold text-blue-500">{currentYear}</span></span>
                            : currentGenre !== "" && currentYear === ""
                                ? <span>Genre: <span className="font-bold text-blue-500">{genres.genres.find((genre) => genre.id === parseInt(currentGenre)).name}</span></span>
                                : currentGenre === "" && currentYear !== ""
                                    ? <span>Year: <span className="font-bold text-blue-500">{currentYear}</span></span>
                                    : ""
                        }
                    </p>
                </div>

<p>
    
</p>
         <div>
               {
                movies.results && movies.results.length > 0
                ? <Movies movies={displayMovies} />
                : <MoviesNotFound />

               }
               
         </div>
        </main>
    );
};


export default Main;

