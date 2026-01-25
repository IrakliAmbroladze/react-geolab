import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import { Modal } from "../components/Modal.jsx";
import { PostEditingModal } from "../components/PostEditingModal.jsx";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isEditingPost, setIsEditingPost] = useState(false);

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
  return (
    <div className="w-full h-full bg-stone-300 py-10">
      <div className="grid w-fit grid-cols-1 md:grid-cols-2 gap-4 py-10 mx-auto">
        {isEditingPost && <PostEditingModal />}
        {posts.map((p) => (
          <Card
            key={p.id}
            product={p}
            detailsBtn={true}
            setIsEditing={setIsEditingPost}
          />
        ))}
      </div>
    </div>
  );
}
