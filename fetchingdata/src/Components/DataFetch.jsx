import { useEffect, useState } from "react";
import './DataFetch.css';
function DataFetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err.message);
      });
  }, []);

  return (
    <>
      <div>
        <h2> Users List</h2>
        {posts.map((post) => {
          return (
            <ol key={post.id} className="post-list">
              <li className="title">{post.title}</li>
              <li>{post.body}</li>
            </ol>
          );
        })}
      </div>
    </>
  );
}
export default DataFetch;
