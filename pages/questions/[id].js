import Link from "next/Link";

const Post = ({ post }) => {
  console.log();
  return (
    <>
      <main>
        <Link href="/">
          <a>Home Page</a>
        </Link>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
};
export async function getStaticPaths() {
  const posts = await fetch(`http://localhost:3000/api/questions`).then((r) =>
    r.json()
  );

  return {
    paths: posts.map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await fetch(
    `http://localhost:3000/api/questions${context.params.id}`
  ).then((r) => r.json());

  return {
    props: { post },
  };
}
export default Post;
