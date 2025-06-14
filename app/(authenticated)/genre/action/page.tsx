/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const ActionPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

      const movieCategories = [
  {
    title: "",
    movies: [
      {
        id: 7,
        title: "Avatar The Way Of Water",
        image: "/movie/avatar.jpg",
        slug: "avatarthewayofwater",
      },
      {
        id: 8,
        title: "Demon City",
        image: "/movie/demon_city.jpg",
        slug: "demoncity",
      },
      {
        id: 9,
        title: "Spiderman No Way Home",
        image: "/movie/spiderman.jpg",
        slug: "spidermannowayhome",
      },
      {
        id: 10,
        title: "Joe Crist",
        image: "/movie/joe_crist.jpg",
        slug: "joecrist",
      },
      {
        id: 11,
        title: "Free Guy",
        image: "/movie/free_guy.jpg",
        slug: "freeguy",
      },
      {
        id: 12,
        title: "Dune",
        image: "/movie/dune.jpg",
        slug: "dune",
      },
      {
        id: 13,
        title: "Extraction",
        image: "/movie/extraction.jpg",
        slug: "extraction",
      },
      {
        id: 15,
        title: "Silent Zone",
        image: "/movie/silent_zone.jpg",
        slug: "silentzone",
      },
      {
        id: 16,
        title: "Novocaine No Pain",
        image: "/movie/novocaine.jpg",
        slug: "novocainenopain",
      },
      {
        id: 17,
        title: "Electric State",
        image: "/movie/electric_state.jpg",
        slug: "electricstate",
      },
      {
        id: 18,
        title: "Back in Action",
        image: "/movie/back_in_action.jpg",
        slug: "backinaction",
      },
    ],
  },
  {
    title: "",
    movies: [
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
        id: 23,
        title: "The Smashing Machine",
        image: "/movie/the_smashing_machine.jpg",
        slug: "thesmashingmachine",
      },
      {
        id: 24,
        title: "Thunderbolts",
        image: "/movie/thunderbolts.jpg",
        slug: "thunderbolts",
      },
      {
        id: 25,
        title: "The Fantastic Four: First Steps",
        image: "/movie/fantastic_four_first_steps.jpg",
        slug: "thefantasticfourfirststeps",
      },
      {
        id: 26,
        title: "Mission: Impossible The Final Reckoning",
        image: "/movie/mission_impossible_the_final_reckoning.jpg",
        slug: "missionimpossiblethefinalreckoning",
      },
      {
        id: 27,
        title: "Pacific Rim",
        image: "/movie/pacific_rim.jpg",
        slug: "pacificrim",
      },
      {
        id: 28,
        title: "Lilo & Stitch",
        image: "/movie/lilo_and_stitch.jpg",
        slug: "lilostitch",
      },
      {
        id: 29,
        title: "Mad Max: Fury Road (2015)",
        image: "/movie/madmax.jpg",
        slug: "madmaxfuryroad2015",
      },
      {
        id: 30,
        title: "Gladiator (2000)",
        image: "/movie/gladiator.jpg",
        slug: "gladiator2000",
      },
      {
        id: 31,
        title: "How to Train Your Dragon",
        image: "/movie/how_to_train_your_dragon.jpg",
        slug: "howtotrainyourdragon",
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
            <h1 className="text-3xl font-bold mb-2">Genre : Action</h1>
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

export default ActionPage;