/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { movieCategories } from "@/utils/movies";
import { useRouter } from "next/navigation";

const ComedyPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();


      const movieCategories = [
  {
    title: "",
    movies: [
      {
        id: 9,
        title: "Spiderman No Way Home",
        image: "/movie/spiderman.jpg",
        slug: "spidermannowayhome",
      },
      {
        id: 11,
        title: "Free Guy",
        image: "/movie/free_guy.jpg",
        slug: "freeguy",
      },
      {
        id: 19,
        title: "The Fall Guy",
        image: "/movie/the_fall_guy.jpg",
        slug: "thefallguy",
      },
      {
        id: 20,
        title: "Hitman",
        image: "/movie/hitman.jpg",
        slug: "hitman",
      },
      {
        id: 25,
        title: "The Fantastic Four: First Steps",
        image: "/movie/fantastic_four_first_steps.jpg",
        slug: "thefantasticfourfirststeps",
      },
      {
        id: 28,
        title: "Lilo & Stitch",
        image: "/movie/lilo_and_stitch.jpg",
        slug: "lilostitch",
      },
      {
        id: 29,
        title: "How to Train Your Dragon",
        image: "/movie/how_to_train_your_dragon.jpg",
        slug: "howtotrainyourdragon",
      },
      {
        id: 30,
        title: "Happy Gilmore",
        image: "/movie/happy_gilmore.jpg",
        slug: "happygilmore",
      },
      {
        id: 31,
        title: "The Idea of You",
        image: "/movie/the_idea_of_you.jpg",
        slug: "theideaofyou",
      },
      {
        id: 32,
        title: "Anora",
        image: "/movie/anora.jpg",
        slug: "anora",
      },
      {
        id: 35,
        title: "The Greatest Hits",
        image: "/movie/the_greatest_hits.jpg",
        slug: "thegreatesthits",
      },
      {
        id: 36,
        title: "Elevator",
        image: "/movie/elevator.jpg",
        slug: "elevator",
      },
    ],
  },
  {
    title: "",
    movies: [
      {
        id: 39,
        title: "Pasutri Gaje",
        image: "/movie/pasutri_gaje.jpg",
        slug: "pasutrigaje",
      },
      {
        id: 43,
        title: "Jackass",
        image: "/movie/jackass.jpg",
        slug: "jackass",
      },
      {
        id: 44,
        title: "Kejar Mimpi GASPOL",
        image: "/movie/kejar_mimpi.jpg",
        slug: "kejarmimpigaspol",
      },
      {
        id: 45,
        title: "Agak Laen",
        image: "/movie/agak_laen.jpg",
        slug: "agaklaen",
      },
      {
        id: 46,
        title: "The Hangover (2009)",
        image: "/movie/hangover.jpg",
        slug: "thehangover2009",
      },
      {
        id: 47,
        title: "Superbad (2007)",
        image: "/movie/superbad.jpg",
        slug: "superbad2007",
      },
      {
        id: 48,
        title: "Dumb and Dumber (1994)",
        image: "/movie/dad.jpg",
        slug: "dumbanddumber1994",
      },
      {
        id: 49,
        title: "Deadpool (2016)",
        image: "/movie/deadpool.jpg",
        slug: "deadpool2016",
      },
      {
        id: 50,
        title: "My Stupid Boss (2016)",
        image: "/movie/msb.jpg",
        slug: "mystupidboss2016",
      },
      {
        id: 51,
        title: "Warkop DKI Reborn: Jangkrik Boss!",
        image: "/movie/dki.jpg",
        slug: "warkopdkirebornjangkrikboss",
      },
      {
        id: 52,
        title: "Kung Fu Hustle (2004)",
        image: "/movie/hustle.jpg",
        slug: "kungfuhustle2004",
      },
      {
        id: 53,
        title: "Hello Ghost (2010)",
        image: "/movie/ghost.jpg",
        slug: "helloghost2010",
      },
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
            <div
              key={`${title}-${movie.id}`}
              className="group rounded overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105 w-36 flex-shrink-0"
              onClick={() => movie.slug && router.push(`/watch/${movie.slug}`)}
              title={movie.title}
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

  // Filter movies pada semua kategori
  const filteredCategories = movieCategories.map((category) => ({
    ...category,
    movies: category.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.movies.length > 0); 

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <main className="p-4">
        <section className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Genre : Comedy</h1>
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

export default ComedyPage;