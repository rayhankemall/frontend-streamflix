import { useParams } from "next/navigation";

const WatchlistPage = () => {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="p-10 text-center text-xl">
      Genre: <strong>{slug}</strong>
    </div>
  );
};

export default WatchlistPage;
