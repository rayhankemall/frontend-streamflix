/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const WatchlistPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [watchlist, setWatchlist] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("watchlist");
    if (stored) {
      setWatchlist(JSON.parse(stored));
    }
  }, []);

  const filteredMovies = watchlist.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-300">
      <main className="p-4">
        <section className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Watchlist</h1>
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

        {filteredMovies.length > 0 ? (
          <section className="mb-8">
            <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap hide-scrollbar pb-2">
              <div className="flex gap-3">
                {filteredMovies.map((movie) => (
                  <div
                    key={movie.id}
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
                    <div className="bg-zinc-100 py-1 px-1">
                      <h3 className="text-xs font-semibold text-center truncate">
                        {movie.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <p>No movies found in your watchlist.</p>
        )}
      </main>
    </div>
  );
};

export default WatchlistPage;