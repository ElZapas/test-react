export default function ListarNotas() {

  const posts = [
    {
      id: 1,
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 4,
      title: 'Post 4',
      body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
  ];

  return (
    <>
      <div>app</div>
      {posts.map((post) => (<div key={post.id}>
        <h2>Posts: {post.title}</h2>
        <p>bodys {post.body}</p>
      </div>))}
    </>

    
  )
}