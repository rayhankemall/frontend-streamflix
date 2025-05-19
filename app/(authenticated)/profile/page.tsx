"use client";

import React from "react";

export default function MovieProfilePage() {
  return (
    <main className="min-h-screen p-10 bg-white dark:bg-black dark:text-white transition-colors duration-300">
      <div className="min-h-screen flex flex-col md:flex-row max-w-9xl mx-auto">
        {/* Sidebar profile info */}
        <aside className="w-72 bg-gray-100 dark:bg-zinc-800 p-6 flex flex-col justify-between transition-colors duration-300 rounded-lg shadow-md md:mr-10 mb-6 md:mb-0">
          <div>
            <img
              src="logo.png"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center">Rayhan Kemal</h2>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Premium
            </p>

            <div className="mt-6 space-y-1 text-sm">
              <p>
                <strong>Location:</strong> Bekasi, Indonesia
              </p>
              <p>
                <strong>Movies Watched:</strong> 5
              </p>
              <p>
                <strong>Favorite Genres:</strong> Sci-Fi, Action
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">Progress</p>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <p className="text-xs mt-1">75% of your watchlist completed</p>
            </div>
          </div>
        </aside>

        {/* Main Profile Content */}
        <section className="flex-1">
          <h1 className="text-3xl font-bold mb-2">Hello, Kemal!!</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Welcome to your profile
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <StatBox label="Movies Watched" value="5" />
            <StatBox label="Watchlist" value="36" />
            <StatBox label="Reviews Written" value="0" />
            <StatBox label="Favorite Actors" value="5" />
          </div>

          <h1 className="text-2xl font-bold mb-4">History</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-stretch">
            <MovieCard
              title="Kimi No Nawa"
              rating="⭐ 4.5"
              image="/movie/kimi_no_nawa.jpg"
            />
            <MovieCard
              title="Hello World"
              rating="⭐ 5.0"
              image="/movie/hello_world.jpg"
            />
            <MovieCard
              title="Avatar The Way Of Water"
              rating="⭐ 5.0"
              image="/movie/avatar.jpg"
            />
            <MovieCard
              title="Spiderman No Way Home"
              rating="⭐ 4.8"
              image="/movie/spiderman.jpg"
            />
            <MovieCard
              title="Silent Zone"
              rating="⭐ 4.7"
              image="/movie/silent_zone.jpg"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 p-4 rounded-xl text-center shadow-md transition-colors duration-300">
      <p className="text-red-500 text-xl font-bold">{value}</p>
      <p className="text-sm text-gray-700 dark:text-gray-300">{label}</p>
    </div>
  );
}

function MovieCard({
  title,
  rating,
  image,
}: {
  title: string;
  rating: string;
  image: string;
}) {
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer group flex-col h-full">
      <div className="relative w-full aspect-[2/3]">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow justify-between">
        <h3 className="text-sm font-semibold truncate" title={title}>
          {title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{rating}</p>
      </div>
    </div>
  );
}
