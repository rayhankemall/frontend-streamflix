"use client";

const HomePage = () => {
  const dummyMovies = [
    { id: 1, title: "Kimi No Nawa", image: "/kiminonawa.jpg" },
    { id: 2, title: "Suzume", image: "/suzume.jpg" },
    { id: 3, title: "Avatar The Way Of Water", image: "/avatar.jpg" },
    { id: 4, title: "Jujutsu Kaisen 0", image: "/jujutsu.jpg" },
    { id: 5, title: "Naruto Shippuden", image: "/naruto.jpg" },
    { id: 6, title: "One Piece Film Red", image: "/onepiece.jpg" },
    { id: 7, title: "Weathering With You", image: "/weathering.jpg" },
    { id: 8, title: "Spirited Away", image: "/spirited.jpg" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Welcome to StreamFlix</h1>
        <p className="text-lg text-gray-300">Temukan Movie Favoritmu!</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Movie Yang DIsarankan</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          {dummyMovies.map((movie) => (
            <div
              key={movie.id}
              className="group rounded overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
            >
              <div className="relative w-full aspect-[2/3] bg-gray-800">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-gray-900 py-1 px-1">
                <h3 className="text-xs font-semibold text-center truncate" title={movie.title}>
                  {movie.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
