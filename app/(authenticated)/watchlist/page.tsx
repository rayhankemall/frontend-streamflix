/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const WatchlistPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();


      const movieCategories = [
  {
    title: " ",
    movies: [
      { 
        id: 1, 
        title: "Kimi No Nawa", 
        image: "/movie/kimi_no_nawa.jpg", 
        slug: "kiminonawa" 
      },
      { 
        id: 2, 
        title: "Suzume", 
        image: "/movie/suzume.jpg", 
        slug: "suzume" 
      },
      { 
        id: 3, 
        title: "Weathering With You", 
        image: "/movie/tenki_no_ko.jpg", 
        slug: "weatheringwithyou" 
      },
      { 
        id: 4, 
        title: "Byousoku 5 Centimeter", 
        image: "/movie/5cm.jpg", 
        slug: "byousoku5centimeter" 
      },
      { 
        id: 5, 
        title: "Silent Voice", 
        image: "/movie/silent_voice.jpg", 
        slug: "silentvoice" 
      },
      { 
        id: 6, 
        title: "Hello World", 
        image: "/movie/hello_world.jpg", 
        slug: "helloworld" 
      },
      { 
        id: 14, 
        title: "Dilan 1983", 
        image: "/movie/dilan_1983.jpg", 
        slug: "dilan1983" 
      },
      { 
        id: 21, 
        title: "The Gorge", 
        image: "/movie/the_gorge.jpg", 
        slug: "thegorge" 
      },
      { 
        id: 37, 
        title: "Follow Our Heart", 
        image: "/movie/follow_our_heart.jpg", 
        slug: "followourheart" 
      },
      { 
        id: 38, 
        title: "Ancika: Dia yang Bersamaku 1995", 
        image: "/movie/ancika_1995.jpg", 
        slug: "ancikadiayangbersamaku1995" 
      },
      { 
        id: 10, 
        title: "Joe Crist", 
        image: "/movie/joe_crist.jpg", 
        slug: "joecrist" 
      },
      { 
        id: 40, 
        title: "My Name is Loh Kiwan", 
        image: "/movie/my_name_is_loh_kiwan.jpg", 
        slug: "mynameislohkiwan" 
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
        slug: "pasutrigaje" 
      },
      { 
        id: 24, 
        title: "Thunderbolts", 
        image: "/movie/thunderbolts.jpg", 
        slug: "thunderbolts" 
      },
      { 
        id: 44, 
        title: "Kejar Mimpi GASPOL", 
        image: "/movie/kejar_mimpi.jpg", 
        slug: "kejarmimpigaspol" 
      },
      { 
        id: 45, 
        title: "Agak Laen", 
        image: "/movie/agak_laen.jpg", 
        slug: "agaklaen" 
      },
      { 
        id: 46, 
        title: "The Hangover (2009)", 
        image: "/movie/hangover.jpg", 
        slug: "thehangover2009" 
      },
      { 
        id: 47, 
        title: "Superbad (2007)", 
        image: "/movie/superbad.jpg", 
        slug: "superbad2007" 
      },
      { 
        id: 48, 
        title: "Dumb and Dumber (1994)", 
        image: "/movie/dad.jpg", 
        slug: "dumbanddumber1994" 
      },
      { 
        id: 49, 
        title: "Deadpool (2016)", 
        image: "/movie/deadpool.jpg", 
        slug: "deadpool2016" 
      },
      { 
        id: 50, 
        title: "My Stupid Boss (2016)", 
        image: "/movie/msb.jpg", 
        slug: "mystupidboss2016" 
      },
      { 
        id: 51, 
        title: "Warkop DKI Reborn: Jangkrik Boss!", 
        image: "/movie/dki.jpg", 
        slug: "warkopdkirebornjangkrikboss" 
      },
      { 
        id: 52, 
        title: "Kung Fu Hustle (2004)", 
        image: "/movie/hustle.jpg", 
        slug: "kungfuhustle2004" 
      },
      { 
        id: 53, 
        title: "Hello Ghost (2010)", 
        image: "/movie/ghost.jpg", 
        slug: "helloghost2010" 
      },
    ],
  },
  {
    title: "",
    movies: [
      { 
        id: 18, 
        title: "Back in Action", 
        image: "/movie/back_in_action.jpg", 
        slug: "backinaction" 
      },
      { 
        id: 22, 
        title: "Promised Hearts", 
        image: "/movie/promised_hearts.jpg", 
        slug: "promisedhearts" 
      },
      { 
        id: 31, 
        title: "The Idea of You", 
        image: "/movie/the_idea_of_you.jpg", 
        slug: "theideaofyou" 
      },
      { 
        id: 32, 
        title: "Anora", 
        image: "/movie/anora.jpg", 
        slug: "anora" 
      },
      { 
        id: 33, 
        title: "On Swift Horses", 
        image: "/movie/on_swift_horses.jpg", 
        slug: "onswifthorses" 
      },
      { 
        id: 34, 
        title: "Fly Me to the Moon", 
        image: "/movie/fly_me_to_the_moon.jpg", 
        slug: "flymetothemoon" 
      },
      { 
        id: 35, 
        title: "The Greatest Hits", 
        image: "/movie/the_greatest_hits.jpg", 
        slug: "thegreatesthits" 
      },
      { 
        id: 36, 
        title: "Elevator", 
        image: "/movie/elevator.jpg", 
        slug: "elevator" 
      },
      { 
        id: 41, 
        title: "Love Stuck", 
        image: "/movie/love_stuck.jpg", 
        slug: "lovestuck" 
      },
      { 
        id: 42, 
        title: "The Way I Love You", 
        image: "/movie/the_way_i_love_you.jpg", 
        slug: "thewayiloveyou" 
      },
      { 
        id: 43, 
        title: "Jackass", 
        image: "/movie/jackass.jpg", 
        slug: "jackass" 
      },
      { 
        id: 29, 
        title: "Mad Max: Fury Road (2015)", 
        image: "/movie/madmax.jpg", 
        slug: "madmaxfuryroad2015" 
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
            <h1 className="text-3xl font-bold mb-2">My Watchlist</h1>
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

export default WatchlistPage;