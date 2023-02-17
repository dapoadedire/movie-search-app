import poster404 from "../assets/poster404.jpg";
import { Link } from "react-router-dom";
import { genres } from "../utils/genres";
import React from "react";
import MoviesNotFound from "./MoviesNotFound";

const Movies = ({ movies }) => {
  return (
    <>
      {movies.length ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => {
            return (
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                className="overflow-hidden rounded-lg border border-gray-300 p-2 hover:shadow-lg"
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : poster404
                  }
                  alt={movie.title}
                  className="
                    h-80
                    w-full rounded-lg
                    object-cover
                  "
                />
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-bold leading-tight text-gray-800">
                    {movie.title}
                  </h2>
                  <p className="mb-2 text-sm text-gray-700">
                    {movie.genre_ids.map((genreId, index) => {
                      const genre = genres.genres.find(
                        (genre) => genre.id === genreId
                      );
                      return genre ? (
                        <React.Fragment key={genre.id}>
                          {genre.name}
                          {index < movie.genre_ids.length - 1 ? ", " : ""}
                        </React.Fragment>
                      ) : null;
                    })}
                  </p>
                  <p className="text-sm text-gray-700">{movie.release_date}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <MoviesNotFound />
      )}
    </>
  );
};

export default Movies;
