/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const movieCategories = [
    {
      title: "Movie Yang Disarankan :",
      movies: [
        { id: 1, title: "Kimi No Nawa", image: "/movie/kiminonawa.jpg" },
        { id: 2, title: "Suzume", image: "/movie/suzume.jpg" },
        { id: 3, title: "Avatar The Way Of Water", image: "/movie/avatar.jpg" },
        { id: 4, title: "5 CM", image: "/movie/5cm.jpg" },
        { id: 5, title: "Electric State", image: "/movie/electricstate.jpg" },
        { id: 6, title: "Spiderman", image: "/movie/spiderman.jpg" },
        { id: 7, title: "Joe Crist", image: "/movie/joecrist.jpg" },
        { id: 8, title: "Demon City", image: "/movie/demoncity.jpg" },
        { id: 9, title: "Tenki No Ko", image: "/movie/tenkinoko.jpg" },
        { id: 10, title: "Hello World", image: "/movie/helloworld.jpg" },
        { id: 11, title: "Movie 11", image: "/movie/movie11.jpg" },
        { id: 12, title: "Movie 12", image: "/movie/movie12.jpg" },
        { id: 13, title: "Movie 13", image: "/movie/movie13.jpg" },
        { id: 14, title: "Movie 14", image: "/movie/movie14.jpg" },
        { id: 15, title: "Movie 15", image: "/movie/movie15.jpg" },
      ],
    },
    {
      title: "Kategori 2:",
      movies: [
        { id: 16, title: "Movie 16", image: "/movie/movie16.jpg" },
        { id: 17, title: "Movie 17", image: "/movie/movie17.jpg" },
        { id: 18, title: "Movie 18", image: "/movie/movie18.jpg" },
        { id: 19, title: "Movie 19", image: "/movie/movie19.jpg" },
        { id: 20, title: "Movie 20", image: "/movie/movie20.jpg" },
        { id: 21, title: "Movie 21", image: "/movie/movie21.jpg" },
        { id: 22, title: "Movie 22", image: "/movie/movie22.jpg" },
        { id: 23, title: "Movie 23", image: "/movie/movie23.jpg" },
        { id: 24, title: "Movie 24", image: "/movie/movie24.jpg" },
        { id: 25, title: "Movie 25", image: "/movie/movie25.jpg" },
        { id: 26, title: "Movie 26", image: "/movie/movie26.jpg" },
        { id: 27, title: "Movie 27", image: "/movie/movie27.jpg" },
        { id: 28, title: "Movie 28", image: "/movie/movie28.jpg" },
        { id: 29, title: "Movie 29", image: "/movie/movie29.jpg" },
        { id: 30, title: "Movie 30", image: "/movie/movie30.jpg" },
      ],
    },
    {
      title: "Kategori 3:",
      movies: [
        { id: 31, title: "Movie 31", image: "/movie/movie31.jpg" },
        { id: 32, title: "Movie 32", image: "/movie/movie32.jpg" },
        { id: 33, title: "Movie 33", image: "/movie/movie33.jpg" },
        { id: 34, title: "Movie 34", image: "/movie/movie34.jpg" },
        { id: 35, title: "Movie 35", image: "/movie/movie35.jpg" },
        { id: 36, title: "Movie 36", image: "/movie/movie36.jpg" },
        { id: 37, title: "Movie 37", image: "/movie/movie37.jpg" },
        { id: 38, title: "Movie 38", image: "/movie/movie38.jpg" },
        { id: 39, title: "Movie 39", image: "/movie/movie39.jpg" },
        { id: 40, title: "Movie 40", image: "/movie/movie40.jpg" },
        { id: 41, title: "Movie 41", image: "/movie/movie41.jpg" },
        { id: 42, title: "Movie 42", image: "/movie/movie42.jpg" },
        { id: 43, title: "Movie 43", image: "/movie/movie43.jpg" },
        { id: 44, title: "Movie 44", image: "/movie/movie44.jpg" },
        { id: 45, title: "Movie 45", image: "/movie/movie45.jpg" },
      ],
    },
  ];

  const MovieRow = ({
    title,
    movies,
  }: {
    title: string;
    movies: { id: number; title: string; image: string }[];
  }) => (
    <section className="mb-8">
      {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
      <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap hide-scrollbar pb-2">
        <div className="flex gap-3">
          {movies.map((movie) => (
            <div
              key={`${title}-${movie.id}`}
              className="group rounded overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105 w-36 flex-shrink-0"
            >
              <div className="relative w-full aspect-[2/3] bg-gray-300 dark:bg-gray-800">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 py-1 px-1">
                <h3
                  className="text-xs font-semibold text-center truncate"
                  title={movie.title}
                >
                  {movie.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <main className="p-4">
        <section className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Welcome to StreamFlix</h1>
          <p className="text-lg">Temukan Movie Favoritmu!</p>
        </section>

        {movieCategories.map((category, index) => (
          <MovieRow
            key={index}
            title={category.title}
            movies={category.movies}
          />
        ))}
      </main>
    </div>
  );
};

export default HomePage;
