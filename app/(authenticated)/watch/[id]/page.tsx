"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";

const movies = [
  {
    id: "kiminonawa",
    title: "Kimi no Na wa",
    videoUrl: "https://odvidhide.com/embed/a6otjvciu1pm",
    synopsis: "Kimi no Na wa (Your Name) is a Japanese animated film that tells the story of two teenagers, Taki and Mitsuha, who mysteriously start switching bodies without knowing each other. Mitsuha is a small village girl who wants to experience city life, while Taki is a city boy who is busy with his daily activities. Over time, they try to understand and live each other's lives, leaving messages and traces in each other's worlds. However, there is a big secret that connects them, related to a natural event that threatens Mitsuha's village. The film explores themes of fate, love, and time, with stunning visuals and an emotional story, carrying the audience along on their journey to find each other amidst distance and time.",
  },
  {
    id: "suzume",
    title: "Suzume",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "weatheringwithyou",
    title: "Weathering With You",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "byousoku5centimeter",
    title: "Byousoku 5 Centimeter",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "silentvoice",
    title: "Silent Voice",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "helloworld",
    title: "Hello world",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "avatarthewayofwater",
    title: "Avatar The Way Of Water",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "demoncity",
    title: "Demon City",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "spidermannowayhome",
    title: "Spiderman No Way Home",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "joecrist",
    title: "Joe Crist",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "freeguy",
    title: "Free Guy",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "dune",
    title: "Dune",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "extraction",
    title: "Extraction",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "dilan1983",
    title: "Dilan 1983",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "silentzone",
    title: "Silent Zone",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "novocainenopain",
    title: "Novocaine No Pain",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "electricstate",
    title: "Electric State",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "backinaction",
    title: "Back in Action",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "thefallguy",
    title: "The Fall Guy",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "hitman",
    title: "Hitman",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "thegorge",
    title: "The Gorge",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "promisedhearts",
    title: "Promised Hearts",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "thesmashingmachine",
    title: "The Smashing Machine",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "thunderbolts",
    title: "Thunderbolts",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "thefantasticfourfirststeps",
    title: "The Fantastic Four: First Steps",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "missionimpossiblethefinalreckoning",
    title: "Mission: Impossible The Final Reckoning",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "pacificrim",
    title: "Pacific Rim",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "liloandstitch",
    title: "Lilo & Stitch",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "howtotrainyourdragon",
    title: "How to Train Your Dragon",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "happygilmore",
    title: "Happy Gilmore",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "theideaofyou",
    title: "The Idea of You",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "anora",
    title: "Anora",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "onswifthorses",
    title: "On Swift Horses",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "flymetothemoon",
    title: "Fly Me to the Moon",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "thegreatesthits",
    title: "The Greatest Hits",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "elevator",
    title: "Elevator",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "followourheart",
    title: "Follow Our Heart",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "ancikadiayangbersamaku1995",
    title: "Ancika: Dia yang Bersamaku 1995",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "pasutrigaje",
    title: "Pasutri Gaje",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "mynameislohkiwan",
    title: "My Name is Loh Kiwan",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "lovestuck",
    title: "Love Stuck",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "thewayiloveyou",
    title: "The Way I Love You",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "jackass",
    title: "Jackass",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "kejarmimpigaspol",
    title: "Kejar Mimpi GASPOL",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "agaklaen",
    title: "Agak Laen",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "thehangover2009",
    title: "The Hangover (2009)",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "superbad2007",
    title: "Superbad (2007)",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "dumbanddumber1994",
    title: "Dumb and Dumber (1994)",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "deadpool2016",
    title: "Deadpool (2016)",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "mystupidboss2016",
    title: "My Stupid Boss (2016)",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "warkopdkirebornjangkrikboss",
    title: "Warkop DKI Reborn: Jangkrik Boss!",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "kungfuhustle2004",
    title: "Kung Fu Hustle (2004)",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "helloghost2010",
    title: "Hello Ghost (2010)",
    videoUrl: "",
    synopsis: ".",
  },
];

type Comment = {
  username: string;
  text: string;
  rating: number;
};

export default function WatchPage() {
  const params = useParams();
  const id = params?.id as string;

  const movie = movies.find((m) => m.id === id);

  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      username: "Admin StreamFlix", // ganti ini nanti kalau pakai auth
      text: comment,
      rating,
    };
    setComments([newComment, ...comments]);
    setComment("");
    setRating(5);
  };

  if (!movie) {
    return <div className="text-center mt-20 text-xl">Movie not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video */}
      <div className="w-full aspect-video">
        <iframe
          src={movie.videoUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; encrypted-media"
          scrolling="no"
          title={movie.title}
        ></iframe>
      </div>

      {/* Detail */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-300 mb-4">{movie.synopsis}</p>

        {/* Form Komentar */}
        <form onSubmit={handleSubmit} className="mb-6 space-y-2">
          <textarea
            className="w-full p-2 text-black rounded"
            rows={3}
            placeholder="Write your comments..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <div className="flex items-center gap-2">
            <label>Rating:</label>
            <select
              className="text-black rounded"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>
                  {r} ⭐
                </option>
              ))}
            </select>
            <button type="submit" className="bg-zinc-600 px-3 py-1 rounded">
              Send
            </button>
          </div>
        </form>

        {/* Komentar */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Comment</h2>
          {comments.length === 0 && <p className="text-gray-400">No comments yet.</p>}
          {comments.map((c, idx) => (
            <div key={idx} className="bg-zinc-800 p-3 rounded">
              <p className="font-semibold">{c.username}</p>
              <p className="text-yellow-400">{c.rating} ⭐</p>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
