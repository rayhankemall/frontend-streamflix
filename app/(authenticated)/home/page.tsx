"use client";

const HomePage = () => {
  const dummyMovies = [
    { id: 1, title: "Inception", image: "/inception.jpg" },
    { id: 2, title: "Avengers", image: "/avengers.jpg" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Welcome to StreamFlix</h1>
        <p className="text-lg text-gray-300">Temukan film favoritmu!</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Film Populer</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dummyMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={movie.image} alt={movie.title} className="w-full" />
              <div className="p-2">
                <h3 className="text-lg font-medium">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
