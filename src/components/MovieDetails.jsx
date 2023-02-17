import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movie_id } = useParams();
  console.log(movie_id);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      setDetails(data);
    };
    fetchDetails();
  }, [movie_id]);

  return (
    <>
      <Header />
      <main
        className="
        my-8 mx-auto max-w-7xl
        p-2
        font-mono
        "
      >
        <Link to="/" className="px-4 py-2">
          <button className=" bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            Back to home
          </button>
        </Link>
        <div
          className="my-8 space-y-8 px-4 md:flex md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-1/2">
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              alt={details.title}
              className="w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-4 text-4xl font-bold">{details.title}</h1>
            <p className="text-lg font-medium leading-8">{details.overview}</p>
            <p className="mt-4 text-base font-medium">
              <span className="font-semibold">Release Date:</span>{" "}
              {details.release_date}
            </p>
            <p className="mt-2 text-base font-medium">
              <span className="font-semibold">Genres:</span>{" "}
              {details.genres &&
                details.genres.map((genre, index) => (
                  <span key={genre.id}>
                    {genre.name}
                    {index !== details.genres.length - 1 ? ", " : ""}
                  </span>
                ))}
            </p>
            <p className="mt-2 text-base font-medium">
              <span className="font-semibold">Language:</span>{" "}
              {details.original_language}
            </p>
            <p className="mt-2 text-base font-medium">
              <span className="font-semibold">Rating:</span>{" "}
              {details.vote_average}
            </p>
            <p className="mt-2 text-base font-medium">
              <span className="font-semibold">Produced by:</span>{" "}
              {details.production_companies &&
                details.production_companies.map((company, index) => (
                  <span key={company.id}>
                    {company.name}
                    {index !== details.production_companies.length - 1
                      ? ", "
                      : "."}
                  </span>
                ))}
            </p>
            <p className="mt-2 text-base font-medium">
              <span className="font-semibold">Production Countries:</span>{" "}
              {details.production_countries &&
                details.production_countries.map((country, index) => (
                  <span key={country.iso_3166_1}>
                    {country.name}
                    {index !== details.production_countries.length - 1
                      ? ", "
                      : "."}
                  </span>
                ))}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MovieDetails;
