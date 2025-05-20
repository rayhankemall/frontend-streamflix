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
      title: " :",
      movies: [
       
        
       
        { id: 9, title: "Spiderman No Way Home", image: "/movie/spiderman.jpg" },
        { id: 11, title: "Free Guy", image: "/movie/free_guy.jpg" },
        { id: 19, title: "The Fall Guy", image: "/movie/the_fall_guy.jpg" },
        { id: 20, title: "Hitman", image: "/movie/hitman.jpg" },        
        { id: 25, title: "The Fantastic Four: First Steps", image: "/movie/fantastic_four_first_steps.jpg" },
        { id: 28, title: "Lilo & Stitch", image: "/movie/lilo_and_stitch.jpg" },
        { id: 29, title: "How to Train Your Dragon", image: "/movie/how_to_train_your_dragon.jpg" },
        { id: 30, title: "Happy Gilmore", image: "/movie/happy_gilmore.jpg" }
       
        
   
     
      ],
    },
    
    {
      title: "",
      movies: [
        { id: 31, title: "The Idea of You", image: "/movie/the_idea_of_you.jpg" },
        { id: 32, title: "Anora", image: "/movie/anora.jpg" },
     
       
        { id: 35, title: "The Greatest Hits", image: "/movie/the_greatest_hits.jpg" },
        { id: 36, title: "Elevator", image: "/movie/elevator.jpg" },
        
       
        { id: 39, title: "Pasutri Gaje", image: "/movie/pasutri_gaje.jpg" },
       
        
        { id: 43, title: "Jackass", image: "/movie/jackass.jpg" },
        { id: 44, title: "Kejar Mimpi GASPOL", image: "/movie/kejar_mimpi.jpg" },
        { id: 45, title: "Agak Laen", image: "/movie/agak_laen.jpg" },
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
              <div className="bg-gray-100 dark:bg-zinc-900 py-1 px-1">
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
          <h1 className="text-3xl font-bold mb-2">COMEDY</h1>
          <p className="text-lg">Find your favorite movie!</p>
        </section>

        {movieCategories.map((category, index) => (
          <MovieRow key={index} title={category.title} movies={category.movies} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;
