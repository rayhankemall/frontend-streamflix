/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const TrendingPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

      const movieCategories = [
  {
    title: "",
    movies: [
      {
        id: 18,
        title: "Agak Laen",
        image: "/movie/agak_laen.jpg",
        slug: "agaklaen"
      },
      {
        id: 13,
        title: "Ancika: Dia yang Bersamaku 1995",
        image: "/movie/ancika_1995.jpg",
        slug: "ancikadiayangbersamaku1995"
      },
      {
        id: 9,
        title: "Anora",
        image: "/movie/anora.jpg",
        slug: "anora"
      },
      {
        id: 3,
        title: "Avatar The Way Of Water",
        image: "/movie/avatar.jpg",
        slug: "avatarthewayofwater"
      },
      {
        id: 20,
        title: "Back in Action",
        image: "/movie/back_in_action.jpg",
        slug: "backinaction"
      },
      {
        id: 12,
        title: "Dune",
        image: "/movie/dune.jpg",
        slug: "dune"
      },
      {
        id: 21,
        title: "Electric State",
        image: "/movie/electric_state.jpg",
        slug: "electricstate"
      },
      {
        id: 26,
        title: "Elevator",
        image: "/movie/elevator.jpg",
        slug: "elevator"
      },
      {
        id: 22,
        title: "Fly Me to the Moon",
        image: "/movie/fly_me_to_the_moon.jpg",
        slug: "flymetothemoon"
      },
      {
        id: 27,
        title: "Follow Our Heart",
        image: "/movie/follow_our_heart.jpg",
        slug: "followourheart"
      },
      {
        id: 5,
        title: "Free Guy",
        image: "/movie/free_guy.jpg",
        slug: "freeguy"
      },
      {
        id: 4,
        title: "Happy Gilmore",
        image: "/movie/happy_gilmore.jpg",
        slug: "happygilmore"
      }
    ]
  },
  {
    title: "",
    movies: [
      {
        id: 31,
        title: "Hello World",
        image: "/movie/hello_world.jpg",
        slug: "helloworld"
      },
      {
        id: 11,
        title: "Hitman",
        image: "/movie/hitman.jpg",
        slug: "hitman"
      },
      {
        id: 8,
        title: "Lilo & Stitch",
        image: "/movie/lilo_and_stitch.jpg",
        slug: "liloandstitch"
      },
      {
        id: 16,
        title: "Love Stuck",
        image: "/movie/love_stuck.jpg",
        slug: "lovestuck"
      },
      {
        id: 1,
        title: "Mission: Impossible The Final Reckoning",
        image: "/movie/mission_impossible_the_final_reckoning.jpg",
        slug: "missionimpossiblethefinalreckoning"
      },
      {
        id: 15,
        title: "My Name is Loh Kiwan",
        image: "/movie/my_name_is_loh_kiwan.jpg",
        slug: "mynameislohkiwan"
      },
      {
        id: 14,
        title: "Pasutri Gaje",
        image: "/movie/pasutri_gaje.jpg",
        slug: "pasutrigaje"
      },
      {
        id: 30,
        title: "Promised Hearts",
        image: "/movie/promised_hearts.jpg",
        slug: "promisedhearts"
      },
      {
        id: 6,
        title: "Spiderman No Way Home",
        image: "/movie/spiderman.jpg",
        slug: "spidermannowayhome"
      },
      {
        id: 7,
        title: "The Smashing Machine",
        image: "/movie/the_smashing_machine.jpg",
        slug: "thesmashingmachine"
      },
      {
        id: 2,
        title: "Thunderbolts",
        image: "/movie/thunderbolts.jpg",
        slug: "thunderbolts"
      },
      {
        id: 10,
        title: "Joe Crist",
        image: "/movie/joe_crist.jpg",
        slug: "joecrist"
      }
    ]
  },
  {
    title: "",
    movies: [
      {
        id: 28,
        title: "The Fantastic Four: First Steps",
        image: "/movie/fantastic_four_first_steps.jpg",
        slug: "thefantasticfourfirststeps"
      },
      {
        id: 19,
        title: "The Fall Guy",
        image: "/movie/the_fall_guy.jpg",
        slug: "thefallguy"
      },
      {
        id: 29,
        title: "The Gorge",
        image: "/movie/the_gorge.jpg",
        slug: "thegorge"
      },
      {
        id: 25,
        title: "The Greatest Hits",
        image: "/movie/the_greatest_hits.jpg",
        slug: "thegreatesthits"
      },
      {
        id: 24,
        title: "The Idea of You",
        image: "/movie/the_idea_of_you.jpg",
        slug: "theideaofyou"
      },
      {
        id: 23,
        title: "On Swift Horses",
        image: "/movie/on_swift_horses.jpg",
        slug: "onswifthorses"
      },
      {
        id: 32,
        title: "The Way I Love You",
        image: "/movie/the_way_i_love_you.jpg",
        slug: "thewayiloveyou"
      },
      {
        id: 17,
        title: "Novocaine No Pain",
        image: "/movie/novocaine.jpg",
        slug: "novocainenopain"
      },
      {
        id: 34,
        title: "Kimi No Nawa",
        image: "/movie/kimi_no_nawa.jpg",
        slug: "kiminonawa"
      },
      {
        id: 35,
        title: "Suzume",
        image: "/movie/suzume.jpg",
        slug: "suzume"
      },
      {
        id: 36,
        title: "Weathering With You",
        image: "/movie/tenki_no_ko.jpg",
        slug: "weatheringwithyou"
      },
      {
        id: 37,
        title: "Silent Voice",
        image: "/movie/silent_voice.jpg",
        slug: "silentvoice"
      }
    ]
  }
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
            <h1 className="text-3xl font-bold mb-2">Trending Movies</h1>
          </div>

          <Input
            size="small"
            placeholder="Search movie..."
            prefix={<SearchOutlined />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-48 bg-white text-black"
          />
        </section>

        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <MovieRow key={index} title={category.title} movies={category.movies} />
          ))
        ) : (
          <p>No movie match your search.</p>
        )}
      </main>
    </div>
  );
};

export default TrendingPage;