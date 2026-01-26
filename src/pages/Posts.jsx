import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import { PostEditingModal } from "../components/PostEditingModal.jsx";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

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

  const savePost = async (payload) => {
    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts/${editingPost.id}`,
        payload,
      );
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === editingPost.id ? response.data : post,
        ),
      );

      setEditingPost(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full bg-stone-300 py-10">
      <div className="grid w-fit grid-cols-1 md:grid-cols-2 gap-4 py-10 mx-auto">
        {editingPost && (
          <PostEditingModal
            savePost={savePost}
            post={editingPost}
            cancelPostEditing={() => {
              setEditingPost(null);
            }}
          />
        )}
        {posts.map((post) => (
          <Card
            key={post.id}
            product={post}
            detailsBtn={true}
            handleBtnClick={() => {
              setEditingPost(post);
            }}
          />
        ))}
      </div>
    </div>
  );
}
