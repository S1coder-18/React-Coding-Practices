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
        <table className="table-data">
          <thead>
            <tr>
              <th>title</th>
              <th>content</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
          return (
            <tr key={post.id} className="post-list">
              <td className="title">{post.title}</td>
              <td>{post.body}</td>
            </tr>
          );
        })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default DataFetch;
