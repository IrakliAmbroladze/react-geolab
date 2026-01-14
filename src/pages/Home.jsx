import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.log("error is ", error);
      }
    };
    fetchData();
  }, []);
  console.log(posts);
  return (
    <div className="w-full h-full bg-stone-300 py-10">
      <div className="grid w-fit grid-cols-1 md:grid-cols-2 gap-4 py-10 mx-auto">
        {posts.map((p) => (
          <Card key={p.id} product={p} deleteBtn={false} />
        ))}
      </div>
    </div>
  );
}
