import { useEffect, useState } from "react";
import Movies from "./Movies";
import Loading from "./Loading";
import { genres } from "../utils/genres";

const API_KEY = import.meta.env.VITE_API_KEY;
const POPULAR_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [currentGenre, setCurrentGenre] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(POPULAR_API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
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
          setIsLoading(false);
        });
    }
  };

  // console.log(genres)
  const genreList =
    genres.genres &&
    genres.genres.map((genre) => {
      return (
        <option key={genre.id} value={genre.id}>
          {currentGenre === genre.name ? `${genre.name} (current)` : genre.name}
        </option>
      );
    });

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

  const setYear = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    setCurrentYear(e.target.value);
    console.log("a");
  };

  const setGenre = (e) => {
    e.preventDefault();
    setCurrentGenre(e.target.value);
  };

  // filter with genre or year or both.

  const filterMovies = (e) => {
    e.preventDefault();

    const filteredMovies =
      currentGenre === "" && currentYear === ""
        ? movies.results
        : currentGenre === "" && currentYear !== ""
        ? movies.results.filter((movie) =>
            movie.release_date.includes(currentYear)
          )
        : currentGenre !== "" && currentYear === ""
        ? movies.results.filter((movie) =>
            movie.genre_ids.includes(parseInt(currentGenre))
          )
        : movies.results.filter(
            (movie) =>
              movie.genre_ids.includes(parseInt(currentGenre)) &&
              movie.release_date.includes(currentYear)
          );

    setFilteredMovies(filteredMovies);
  };

  const displayMovies =
    filteredMovies.length > 0 ? filteredMovies : movies.results;

  return (
    <main
      className="
        my-8 mx-auto max-w-7xl
        p-2
        font-mono
        "
    >
      <div className="my-4 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-gray-400 p-4">
        <form
          className="flex w-full flex-wrap
        justify-end gap-4 md:w-auto
        "
          onSubmit={handleOnSubmit}
        >
          <input
            type="text"
            name="search"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" first-letter: grow rounded-lg border border-gray-300 p-2 text-sm
            
            "
            placeholder="Search for a movie"
          />
          <button
            type="submit"
            className="rounded-md bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        <form
          className="flex w-full flex-wrap justify-end 
        gap-4  md:w-auto
        "
          onSubmit={filterMovies}
        >
          <select
            name="genre"
            id="genre"
            onChange={setGenre}
            className="grow cursor-pointer rounded-md border border-gray-300 p-2 text-sm"
          >
            <option value="">Genre</option>
            {genreList}
          </select>

          <select
            name="year"
            id="year"
            onChange={setYear}
            className="grow cursor-pointer rounded-md border border-gray-300 p-2 text-sm"
          >
            <option value="">Release Date</option>
            {yearList}
          </select>

          <button
            type="submit"
            className="rounded-md  bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700
            
            "
          >
            Filter
          </button>
        </form>
      </div>

      <p></p>
      <div>{isLoading ? <Loading /> : <Movies movies={displayMovies} />}</div>
    </main>
  );
};

export default Main;
