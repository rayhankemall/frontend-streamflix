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
  [
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },

  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
  {
    id: "",
    title: "",
    videoUrl: "",
    synopsis: ".",
  },
]
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
