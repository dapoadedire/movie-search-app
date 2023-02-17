const Header = () => {
  return (
      <header
          className="py-8 text-center font-serif border-b border-gray-500"
      >
          <div>
              <h1
                  className="
        mb-4 text-4xl font-bold
        text-gray-900 sm:text-5xl
      "
              >
                  MovieFinder
              </h1>

              <p className="text-lg text-gray-700 sm:text-xl">
                  Find Your Next Favorite Movie
              </p>
          </div>
      </header>

  );
};

export default Header;
