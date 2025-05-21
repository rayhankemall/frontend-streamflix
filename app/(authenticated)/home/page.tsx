/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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
      title: "Recommended Movies :",
      movies: [
        {
          id: 1,
          title: "Kimi No Nawa",
          image: "/movie/kimi_no_nawa.jpg",
          slug: "kiminonawa",
        },
        { id: 2, title: "Suzume", image: "/movie/suzume.jpg" },
        {
          id: 3,
          title: "Weathering With You",
          image: "/movie/tenki_no_ko.jpg",
        },
        { id: 4, title: "5 CM", image: "/movie/5cm.jpg" },
        { id: 5, title: "Silent Voice", image: "/movie/silent_voice.jpg" },
        { id: 6, title: "Hello World", image: "/movie/hello_world.jpg" },
        { id: 7, title: "Avatar The Way Of Water", image: "/movie/avatar.jpg" },
        { id: 8, title: "Demon City", image: "/movie/demon_city.jpg" },
        {
          id: 9,
          title: "Spiderman No Way Home",
          image: "/movie/spiderman.jpg",
        },
        { id: 10, title: "Joe Crist", image: "/movie/joe_crist.jpg" },
        { id: 11, title: "Free Guy", image: "/movie/free_guy.jpg" },
        { id: 12, title: "Dune", image: "/movie/dune.jpg" },
        { id: 13, title: "Extraction", image: "/movie/extraction.jpg" },
        { id: 14, title: "Dilan 1983", image: "/movie/dilan_1983.jpg" },
        { id: 15, title: "Silent Zone", image: "/movie/silent_zone.jpg" },
      ],
    },
    // kategori lain tanpa judul
    {
      title: "",
      movies: [
        { id: 16, title: "Novocaine No Pain", image: "/movie/novocaine.jpg" },
        { id: 17, title: "Electric State", image: "/movie/electric_state.jpg" },
        { id: 18, title: "Back in Action", image: "/movie/back_in_action.jpg" },
        { id: 19, title: "The Fall Guy", image: "/movie/the_fall_guy.jpg" },
        { id: 20, title: "Hitman", image: "/movie/hitman.jpg" },
        { id: 21, title: "The Gorge", image: "/movie/the_gorge.jpg" },
        {
          id: 22,
          title: "Promised Hearts",
          image: "/movie/promised_hearts.jpg",
        },
        {
          id: 23,
          title: "The Smashing Machine",
          image: "/movie/the_smashing_machine.jpg",
        },
        { id: 24, title: "Thunderbolts", image: "/movie/thunderbolts.jpg" },
        {
          id: 25,
          title: "The Fantastic Four: First Steps",
          image: "/movie/fantastic_four_first_steps.jpg",
        },
        {
          id: 26,
          title: "Mission: Impossible The Final Reckoning",
          image: "/movie/mission_impossible_the_final_reckoning.jpg",
        },
        { id: 27, title: "Pacific Rim", image: "/movie/pacific_rim.jpg" },
        { id: 28, title: "Lilo & Stitch", image: "/movie/lilo_and_stitch.jpg" },
        {
          id: 29,
          title: "How to Train Your Dragon",
          image: "/movie/how_to_train_your_dragon.jpg",
        },
        { id: 30, title: "Happy Gilmore", image: "/movie/happy_gilmore.jpg" },
      ],
    },
    {
      title: "",
      movies: [
        {
          id: 31,
          title: "The Idea of You",
          image: "/movie/the_idea_of_you.jpg",
        },
        { id: 32, title: "Anora", image: "/movie/anora.jpg" },
        {
          id: 33,
          title: "On Swift Horses",
          image: "/movie/on_swift_horses.jpg",
        },
        {
          id: 34,
          title: "Fly Me to the Moon",
          image: "/movie/fly_me_to_the_moon.jpg",
        },
        {
          id: 35,
          title: "The Greatest Hits",
          image: "/movie/the_greatest_hits.jpg",
        },
        { id: 36, title: "Elevator", image: "/movie/elevator.jpg" },
        {
          id: 37,
          title: "Follow Our Heart",
          image: "/movie/follow_our_heart.jpg",
        },
        {
          id: 38,
          title: "Ancika: Dia yang Bersamaku 1995",
          image: "/movie/ancika_1995.jpg",
        },
        { id: 39, title: "Pasutri Gaje", image: "/movie/pasutri_gaje.jpg" },
        {
          id: 40,
          title: "My Name is Loh Kiwan",
          image: "/movie/my_name_is_loh_kiwan.jpg",
        },
        { id: 41, title: "Love Stuck", image: "/movie/love_stuck.jpg" },
        {
          id: 42,
          title: "The Way I Love You",
          image: "/movie/the_way_i_love_you.jpg",
        },
        { id: 43, title: "Jackass", image: "/movie/jackass.jpg" },
        {
          id: 44,
          title: "Kejar Mimpi GASPOL",
          image: "/movie/kejar_mimpi.jpg",
        },
        { id: 45, title: "Agak Laen", image: "/movie/agak_laen.jpg" },
      ],
    },
  ];

  const MovieRow = ({
    title,
    movies,
  }: {
    title: string;
    movies: { id: number; title: string; image: string; slug?: string }[];
  }) => (
    <section className="mb-8">
      {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
      <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap hide-scrollbar pb-2">
        <div className="flex gap-3">
          {movies.map((movie) => (
            <Link
              key={`${title}-${movie.id}`}
              href={`/watch/${
                movie.slug || movie.title.toLowerCase().replace(/\s+/g, "")
              }`}
            >
              <div className="group rounded overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105 w-36 flex-shrink-0">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );

  const movies = [
    {
      id: "naruto",
      title: "Naruto Movie",
      image: "/movie/5cm.jpg", // ganti sesuai path gambar kamu
    },
  ];

  // Filter movies pada semua kategori
  const filteredCategories = movieCategories
    .map((category) => ({
      ...category,
      movies: category.movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.movies.length > 0);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <main className="p-4">
        <section className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome to StreamFlix</h1>
            <p className="text-lg">Find your favorite movie!</p>
          </div>

          {/* Search input di atas semua kategori */}
          <Input
            size="small"
            placeholder="Search movie..."
            prefix={<SearchOutlined />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-48  bg-white text-black"
          />
        </section>

        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <MovieRow
              key={index}
              title={category.title}
              movies={category.movies}
            />
          ))
        ) : (
          <p>No movie match your search.</p>
        )}
      </main>
    </div>
  );
};

export default HomePage;
