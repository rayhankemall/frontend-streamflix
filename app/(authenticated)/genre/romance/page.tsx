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
      title: " ",
      movies: [
        { id: 1, title: "Kimi No Nawa", image: "/movie/kimi_no_nawa.jpg" },
        { id: 2, title: "Suzume", image: "/movie/suzume.jpg" },
        { id: 3, title: "Weathering With You", image: "/movie/tenki_no_ko.jpg" },
        { id: 4, title: "5 CM", image: "/movie/5cm.jpg" },
        { id: 5, title: "Silent Voice", image: "/movie/silent_voice.jpg" },
        { id: 6, title: "Hello World", image: "/movie/hello_world.jpg" },
        { id: 14, title: "Dilan 1983", image: "/movie/dilan_1983.jpg" },
        { id: 21, title: "The Gorge", image: "/movie/the_gorge.jpg" },
      ],
    },
    {
      title: "",
      movies: [
        
       
        { id: 21, title: "The Gorge", image: "/movie/the_gorge.jpg" },
        { id: 22, title: "Promised Hearts", image: "/movie/promised_hearts.jpg" },
        { id: 31, title: "The Idea of You", image: "/movie/the_idea_of_you.jpg" },
        { id: 32, title: "Anora", image: "/movie/anora.jpg" },
        { id: 33, title: "On Swift Horses", image: "/movie/on_swift_horses.jpg" },
        { id: 34, title: "Fly Me to the Moon", image: "/movie/fly_me_to_the_moon.jpg" },
        { id: 35, title: "The Greatest Hits", image: "/movie/the_greatest_hits.jpg" },
        { id: 36, title: "Elevator", image: "/movie/elevator.jpg" },
       
       
      ],
    },
    {
      title: "",
      movies: [
      
        { id: 37, title: "Follow Our Heart", image: "/movie/follow_our_heart.jpg" },
        { id: 38, title: "Ancika: Dia yang Bersamaku 1995", image: "/movie/ancika_1995.jpg" },
        { id: 39, title: "Pasutri Gaje", image: "/movie/pasutri_gaje.jpg" },
        { id: 40, title: "My Name is Loh Kiwan", image: "/movie/my_name_is_loh_kiwan.jpg" },
        { id: 41, title: "Love Stuck", image: "/movie/love_stuck.jpg" },
        { id: 42, title: "The Way I Love You", image: "/movie/the_way_i_love_you.jpg" },
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
          <h1 className="text-3xl font-bold mb-2">ROMANCE</h1>
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
