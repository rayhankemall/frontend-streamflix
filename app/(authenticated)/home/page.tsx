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
        { id: 1, title: "Kimi No Nawa", image: "/kiminonawa.jpg" },
        { id: 2, title: "Suzume", image: "/suzume.jpg" },
        { id: 3, title: "Avatar The Way Of Water", image: "/avatar.jpg" },
        { id: 4, title: "5 CM", image: "/5cm.jpg" },
        { id: 5, title: "Electric State", image: "/silentzone.jpg" },
        { id: 6, title: "Spiderman", image: "/spiderman.jpg" },
        { id: 7, title: "Joe Crist", image: "/joecrist.jpg" },
        { id: 8, title: "Demon City", image: "/demoncity.jpg" },
        { id: 9, title: "Tenki No Ko", image: "/tenkinoko.jpg" },
        { id: 10, title: "Hello World", image: "/helloworld.jpg" },
        { id: 11, title: "", image: "/.jpg" },
        { id: 12, title: "", image: "/.jpg" },
        { id: 13, title: "", image: "/.jpg" },
        { id: 14, title: "", image: "/.jpg" },
        { id: 15, title: "", image: "/.jpg" },
      ],
    },
    {
      title: "",
      movies: [
        { id: 16, title: "", image: "/.jpg" },
        { id: 17, title: "", image: "/.jpg" },
        { id: 18, title: "", image: "/.jpg" },
        { id: 19, title: "", image: "/.jpg" },
        { id: 20, title: "", image: "/.jpg" },
        { id: 21, title: "", image: "/.jpg" },
        { id: 22, title: "", image: "/.jpg" },
        { id: 23, title: "", image: "/.jpg" },
        { id: 24, title: "", image: "/.jpg" },
        { id: 25, title: "", image: "/.jpg" },
        { id: 26, title: "", image: "/.jpg" },
        { id: 27, title: "", image: "/.jpg" },
        { id: 28, title: "", image: "/.jpg" },
        { id: 29, title: "", image: "/.jpg" },
        { id: 30, title: "", image: "/.jpg" },
      ],
    },
    {
      title: "",
      movies: [
        { id: 31, title: "", image: "/.jpg" },
        { id: 32, title: "", image: "/.jpg" },
        { id: 33, title: "", image: "/.jpg" },
        { id: 34, title: "", image: "/.jpg" },
        { id: 35, title: "", image: "/.jpg" },
        { id: 36, title: "", image: "/.jpg" },
        { id: 37, title: "", image: "/.jpg" },
        { id: 38, title: "", image: "/.jpg" },
        { id: 39, title: "", image: "/.jpg" },
        { id: 40, title: "", image: "/.jpg" },
        { id: 41, title: "", image: "/.jpg" },
        { id: 42, title: "", image: "/.jpg" },
        { id: 43, title: "", image: "/.jpg" },
        { id: 44, title: "", image: "/.jpg" },
        { id: 45, title: "", image: "/.jpg" },
      ],
    },
  ];

  const MovieRow = ({ title, movies }) => (
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
                <h3 className="text-xs font-semibold text-center truncate" title={movie.title}>
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
          <MovieRow key={index} title={category.title} movies={category.movies} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;
