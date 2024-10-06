import { useEffect, useState } from "react";


export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }
    , [])

  return (
    <>
      <div>Deseame suerte</div>
      {posts.map(post => (<div key={post.id}>
        <h2>Title: {post.title}</h2>
        <p>Body: {post.body}</p>
      </div>))}
    </>
  );
}




