"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";


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
    synopsis: "Seventeen-year-old Suzume lives a quiet life in a small town in Kyushu. One day, she meets a mysterious young man who is searching for a door. Curious, she follows him and discovers a weathered door standing alone in the ruins of a mountain. Drawn by an invisible force, Suzume reaches out and opens it—unleashing disasters across Japan. Soon, more doors begin to open around the country, each connected to catastrophes from the past. Suzume must join the young man, now transformed into a small chair by a mischievous cat spirit, in a race against time to close these doors and prevent further devastation. As she journeys across Japan, Suzume confronts grief, loss, and the lingering impact of natural disasters—but also finds courage, connection, and hope in the face of overwhelming odds.",
  },
  {
    id: "weatheringwithyou",
    title: "Weathering With You",
    videoUrl: "",
    synopsis: "Sixteen-year-old Hodaka runs away from his remote island home to Tokyo, where he struggles to find work and shelter. He eventually finds a job at a small occult magazine, investigating strange weather phenomena. Amid Tokyo’s unusually rainy season, he meets Hina, a bright and strong-willed girl who has the mysterious ability to clear the skies and bring sunlight through prayer. As the two grow closer, they use Hina’s power to help others and bring moments of sunshine to the city. However, they soon discover that this miraculous gift comes at a great cost. Faced with impossible choices and the forces of nature, Hodaka and Hina must decide what they are willing to sacrifice for love and for each other.",
  },
  {
    id: "byousoku5centimeter",
    title: "Byousoku 5 Centimeter",
    videoUrl: "",
    synopsis: "Byousoku 5 Centimeter follows the poignant story of Takaki Tōno and Akari Shinohara, two close friends who develop a deep bond during childhood but are gradually separated by distance as their families move to different parts of Japan. Despite their longing and promises to stay in touch, time and life pull them further apart. Told in three interconnected segments—“Cherry Blossom,” “Cosmonaut,” and “5 Centimeters per Second”—the film explores the emotional distance between people, the passage of time, and the quiet, often painful beauty of unfulfilled love. Through breathtaking visuals and subtle storytelling, it captures the melancholy and nostalgia of growing up and growing apart.",
  },
  {
    id: "silentvoice",
    title: "Silent Voice",
    videoUrl: "",
    synopsis: "A Silent Voice follows a young boy named Shoya Ishida who bullies a deaf girl, Shoko Nishimiya, during elementary school. Years later, he is filled with guilt and seeks redemption by finding her and attempting to make amends. The story explores themes of bullying, disability, forgiveness, and the journey toward self-acceptance and healing."
  },
  {
    id: "helloworld",
    title: "Hello world",
    videoUrl: "",
    synopsis: "Hello World is a sci-fi romance where high school student Naomi Katagaki meets a future version of himself who tells him he must save a girl named Ruri from a tragic fate. As Naomi works to alter the future, he discovers secrets about his world, leading to a mind-bending journey through time and love."
  },
  {
    id: "avatarthewayofwater",
    title: "Avatar The Way Of Water",
    videoUrl: "",
    synopsis: "Set more than a decade after the events of the first film, Avatar: The Way of Water follows Jake Sully and Neytiri as they raise their family on Pandora. When a new threat emerges, they seek refuge with the oceanic Metkayina clan and must learn the ways of the water to survive and protect their loved ones from human invaders."
  },

  {
    id: "demoncity",
    title: "Demon City",
    videoUrl: "",
    synopsis: "Demon City tells the story of a young swordsman named Kyoya who is thrust into a battle against a demonic warlord threatening to destroy Tokyo. With help from allies and the spirit of a fallen hero, Kyoya ventures into the ruined city to stop the growing evil and save the world from darkness."
  },

  {
    id: "spidermannowayhome",
    title: "Spiderman No Way Home",
    videoUrl: "",
    synopsis: "After Peter Parker's identity as Spider-Man is revealed to the world, he turns to Doctor Strange for help. But the spell goes awry, opening the multiverse and bringing in villains from other dimensions. Peter must face these foes and learn what it truly means to be Spider-Man while making the ultimate sacrifice."
  },

  {
    id: "joecrist",
    title: "Joe Crist",
    videoUrl: "",
    synopsis: "Joe Crist follows a mysterious man with a troubled past who finds himself entangled in a high-stakes conflict that forces him to confront his darkest secrets. As he navigates betrayal and redemption, Joe must decide what kind of man he truly wants to be."
  },

  {
    id: "freeguy",
    title: "Free Guy",
    videoUrl: "",
    synopsis: "Free Guy centers on a bank teller named Guy who discovers he is a background character in a violent open-world video game. Gaining self-awareness, he decides to become the hero of his own story, rewriting the rules and fighting to save his digital world from deletion."
  },

  {
    id: "dune",
    title: "Dune",
    videoUrl: "",
    synopsis: "Dune tells the epic tale of Paul Atreides, a gifted young man born into a noble family, who is thrust into a deadly conflict over the desert planet Arrakis, the only source of the universe’s most valuable substance, spice. As he faces betrayal and prophecy, Paul must embrace his destiny to save his people and the future of humanity."
  },

  {
    id: "extraction",
    title: "Extraction",
    videoUrl: "",
    synopsis: "In Extraction, Tyler Rake, a fearless black-market mercenary, is hired to rescue the kidnapped son of an international crime lord. Trapped in a deadly city and outnumbered, Tyler fights to survive and complete the mission, confronting his own demons along the way."
  },

  {
    id: "dilan1983",
    title: "Dilan 1983",
    videoUrl: "",
    synopsis: "Dilan 1983 explores the early life of Dilan, a charismatic young man navigating adolescence, friendship, and his first experiences with love. Set against the backdrop of Bandung in the 1980s, the film provides insight into the moments that shaped his personality before meeting Milea."
  },

  {
    id: "silentzone",
    title: "Silent Zone",
    videoUrl: "",
    synopsis: "Silent Zone follows a group of scientists and soldiers who investigate a mysterious area where communication and technology cease to function. As they delve deeper, they uncover disturbing truths that challenge the boundaries of science, faith, and human survival."
  },

  {
    id: "novocainenopain",
    title: "Novocaine No Pain",
    videoUrl: "",
    synopsis: "In Novocaine No Pain, a troubled dentist spirals into paranoia and chaos after becoming involved with a seductive patient and discovering a conspiracy that threatens his career and life. The film is a dark comedy filled with twists, betrayal, and psychological tension."
  },

  {
    id: "electricstate",
    title: "Electric State",
    videoUrl: "",
    synopsis: "Electric State is set in a retro-futuristic world where a teenage girl and her robot travel across a decaying America in search of her missing brother. Along the way, they uncover the secrets of a forgotten war and a powerful technology that could change everything."
  },

  {
    id: "backinaction",
    title: "Back in Action",
    videoUrl: "",
    synopsis: "Back in Action is an action-comedy about two former spies who are forced out of retirement for one last mission. As they reconnect through chaos and danger, they rediscover their chemistry both on and off the battlefield."
  },

  {
    id: "thefallguy",
    title: "The Fall Guy",
    videoUrl: "",
    synopsis: "The Fall Guy follows a veteran stuntman who is drawn into a real-life mystery when the star of the movie he’s working on goes missing. Juggling death-defying stunts and a growing conspiracy, he must solve the case and save the production from disaster."
  },

  {
    id: "hitman",
    title: "Hitman",
    videoUrl: "",
    synopsis: "Hitman follows Agent 47, a genetically engineered assassin, as he becomes entangled in a deadly conspiracy that forces him to question his past and fight for his own survival while taking down powerful enemies."
  },

  {
    id: "thegorge",
    title: "The Gorge",
    videoUrl: "",
    synopsis: "The Gorge is a thriller about a soldier and a woman who find themselves trapped in a remote canyon, forced to confront their inner demons and a dangerous threat while fighting for their lives."
  },

  {
    id: "promisedhearts",
    title: "Promised Hearts",
    videoUrl: "",
    synopsis: "Promised Hearts tells the story of two lovers separated by fate and circumstance who struggle to keep their promise to each other despite the obstacles life throws their way."
  },

  {
    id: "thesmashingmachine",
    title: "The Smashing Machine",
    videoUrl: "",
    synopsis: "The Smashing Machine is a documentary chronicling the rise and struggles of Mark Kerr, a legendary mixed martial arts fighter, exploring his battles inside and outside the ring."
  },

  {
    id: "thunderbolts",
    title: "Thunderbolts",
    videoUrl: "",
    synopsis: "Thunderbolts assembles a team of antiheroes and reformed villains who are given a chance at redemption by undertaking covert missions that test their loyalty and morality."
  },

  {
    id: "thefantasticfourfirststeps",
    title: "The Fantastic Four: First Steps",
    videoUrl: "",
    synopsis: "This origin story follows the Fantastic Four as they gain their extraordinary powers and learn to work together to confront threats that endanger humanity."
  },

  {
    id: "missionimpossiblethefinalreckoning",
    title: "Mission: Impossible The Final Reckoning",
    videoUrl: "",
    synopsis: "Ethan Hunt and his team face their most dangerous mission yet as they race against time to stop a global catastrophe orchestrated by a ruthless enemy."
  },

  {
    id: "pacificrim",
    title: "Pacific Rim",
    videoUrl: "https://gdriveplayer.to/embed2.php?link=dL24JRMeNcGRKvikxQ3dQgRwvqhtZlnAJwoBPASJKWq4A%252F%252Fnv%252FhRMFJfkjna8faNcFZmPtxIEA0HUwvXQVGg6yNg0iLDkgeQLq4RNX4wluKaVRUIWaxATufwbZS6yxHtnAGg7j8Xeo1zGG3d05Wq2Dv1Rjnn%252FukRrvDutQtTUlEBh8gchLioDsysOf5dEO4JfNfvFOWjnLW13LdetOpwxA4fBHnoSUeevCJ9m3mMUtOyz6BVUfEq7HM94qL0IjD2ZFBW2fTu8hV2R%252BslIxxuHqB0JbAYaKRXwTiXvapSx%252FXw%253D%253D",
    synopsis: "In a future where giant monsters called Kaiju rise from the ocean, humanity builds giant robots piloted by two pilots to fight back and save the world from destruction."
  },

  {
    id: "liloandstitch",
    title: "Lilo & Stitch",
    videoUrl: "",
    synopsis: "Lilo & Stitch is a heartwarming story about a young Hawaiian girl and her mischievous alien pet who learns the true meaning of family and friendship."
  },

  {
    id: "howtotrainyourdragon",
    title: "How to Train Your Dragon",
    videoUrl: "",
    synopsis: "A young Viking named Hiccup befriends a feared dragon, challenging his tribe's prejudices and forging a new path for humans and dragons to coexist peacefully."
  },

  {
    id: "happygilmore",
    title: "Happy Gilmore",
    videoUrl: "",
    synopsis: "Happy Gilmore is a comedy about a failed hockey player who discovers an unexpected talent for golf and uses his unique style to compete in the pro circuit to save his grandmother's house."
  },

  {
    id: "theideaofyou",
    title: "The Idea of You",
    videoUrl: "",
    synopsis: "This romantic drama explores the unexpected relationship between a woman in her 30s and a young pop star, challenging social norms and personal boundaries."
  },

  {
    id: "anora",
    title: "Anora",
    videoUrl: "",
    synopsis: "Anora is a fantasy adventure about a young woman who discovers her magical heritage and embarks on a quest to save her kingdom from dark forces."
  },

  {
    id: "onswifthorses",
    title: "On Swift Horses",
    videoUrl: "",
    synopsis: "Set in the 1950s American West, this drama explores complex relationships and secrets among a group of people bound by love, ambition, and betrayal."
  },

  {
    id: "flymetothemoon",
    title: "Fly Me to the Moon",
    videoUrl: "",
    synopsis: "Fly Me to the Moon follows the journey of three young flies who stow away on Apollo 11 and experience the first manned moon landing from an unexpected perspective."
  },

  {
    id: "thegreatesthits",
    title: "The Greatest Hits",
    videoUrl: "",
    synopsis: "The Greatest Hits follows the story of a once-famous rock band attempting a comeback while dealing with personal conflicts and past regrets that threaten their reunion."
  },

  {
    id: "elevator",
    title: "Elevator",
    videoUrl: "",
    synopsis: "Elevator is a suspense thriller about a group of strangers trapped in a malfunctioning elevator, revealing their secrets and fighting to survive as tensions rise."
  },

  {
    id: "followourheart",
    title: "Follow Our Heart",
    videoUrl: "",
    synopsis: "Follow Our Heart is a romantic drama about two people from different worlds who overcome obstacles and discover love by following their hearts."
  },

  {
    id: "ancikadiayangbersamaku1995",
    title: "Ancika: Dia yang Bersamaku 1995",
    videoUrl: "https://emturbovid.com/t/665178e9dce55",
    synopsis: "This Indonesian drama tells the story of Ancika and her struggles with love, family, and societal expectations in 1995 Jakarta."
  },

  {
    id: "pasutrigaje",
    title: "Pasutri Gaje",
    videoUrl: "",
    synopsis: "Pasutri Gaje is a comedy about a quirky married couple navigating the ups and downs of married life with humor and heart."
  },

  {
    id: "mynameislohkiwan",
    title: "My Name is Loh Kiwan",
    videoUrl: "",
    synopsis: "My Name is Loh Kiwan is a biographical drama about the life of a determined young man overcoming challenges to achieve his dreams."
  },

  {
    id: "lovestuck",
    title: "Love Stuck",
    videoUrl: "",
    synopsis: "Love Stuck is a romantic comedy about two people who find themselves unexpectedly stuck together and falling in love through a series of comedic mishaps."
  },

  {
    id: "thewayiloveyou",
    title: "The Way I Love You",
    videoUrl: "",
    synopsis: "This heartfelt romance explores the complexities of love and self-discovery as two souls navigate their feelings and the obstacles in their way."
  },

  {
    id: "jackass",
    title: "Jackass",
    videoUrl: "",
    synopsis: "Jackass is a wild and outrageous reality comedy featuring a group of friends performing dangerous and hilarious stunts and pranks."
  },

  {
    id: "kejarmimpigaspol",
    title: "Kejar Mimpi GASPOL",
    videoUrl: "",
    synopsis: "Kejar Mimpi GASPOL is an inspiring Indonesian film about chasing dreams, perseverance, and the spirit of never giving up despite hardships."
  },

  {
    id: "agaklaen",
    title: "Agak Laen",
    videoUrl: "",
    synopsis: "Agak Laen is a coming-of-age story focusing on a young person's journey to find their identity and place in the world amidst challenges."
  },
  {
    id: "thehangover2009",
    title: "The Hangover (2009)",
    videoUrl: "",
    synopsis: "The Hangover is a comedy about a bachelor party gone wrong in Las Vegas, where three friends try to piece together the previous night's wild events to find their missing buddy."
  },
  {
    id: "superbad2007",
    title: "Superbad (2007)",
    videoUrl: "",
    synopsis: "Superbad is a coming-of-age teen comedy following two high school friends trying to enjoy their last days before graduation with awkward and hilarious adventures."
  },
  {
    id: "dumbanddumber1994",
    title: "Dumb and Dumber (1994)",
    videoUrl: "",
    synopsis: "Dumb and Dumber is a slapstick comedy about two dimwitted friends on a cross-country road trip full of ridiculous mishaps and misunderstandings."
  },
  {
    id: "deadpool2016",
    title: "Deadpool (2016)",
    videoUrl: "",
    synopsis: "Deadpool follows Wade Wilson, a former special forces operative turned mercenary who gains accelerated healing powers and uses his dark humor and skills to seek revenge."
  },
  {
    id: "mystupidboss2016",
    title: "My Stupid Boss (2016)",
    videoUrl: "",
    synopsis: "My Stupid Boss is a comedy-drama about the struggles of employees dealing with an eccentric and demanding boss, blending humor with heartfelt moments."
  },
  {
    id: "warkopdkirebornjangkrikboss",
    title: "Warkop DKI Reborn: Jangkrik Boss!",
    videoUrl: "",
    synopsis: "A reboot of the classic Indonesian comedy, following three friends in their slapstick adventures filled with humor, chaos, and friendship."
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
    synopsis: "A touching comedy-drama about a man who, after a suicide attempt, starts seeing four ghosts who teach him valuable lessons about life and love."
  },
];

type Comment = {
  username: string;
  text: string;
  rating: number;
  movieId: string;
};

type SubmitComment = {
  text: string;
  rating: number;
  movieId: string;
};

export default function WatchPage() {
  const params = useParams();
  const id = params?.id as string;

  const movie = movies.find((m) => m.id === id);

  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  // ✅ Ambil komentar saat halaman dibuka
  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:4000/comments/${id}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Gagal ambil komentar", err));
  }, [id]);

  // ✅ Kirim komentar ke backend
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const newComment: SubmitComment = {
    text: comment,
    rating,
    movieId: id,
  };

  try {
   const token = localStorage.getItem("access_token");
if (!token) {
  alert("Kamu belum login!");
  return;
}

const res = await axios.post("http://localhost:4000/comments", newComment, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});


    setComments([res.data, ...comments]);
    setComment("");
    setRating(5);
  } catch (err) {
    console.error("Gagal kirim komentar", err);
  }
};


  if (!movie) {
    return <div className="text-center mt-20 text-xl">Movie not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
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
