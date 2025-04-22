"use client";

const HomePage = () => {
  const dummyMovies = [
    { id: 1, title: "Kimi No Nawa", image: "/kiminonawa.jpg" },
    { id: 2, title: "Avatar The Way Of Water", image: "/avatar.jpg" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Welcome to StreamFlix</h1>
        <p className="text-lg text-gray-300">Temukan Movie Favoritmu!</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Movie Populer</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dummyMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative w-full">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-lg font-medium text-center">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
