import Link from "next/Link";
import { questionData } from "../../questions";

const Post = ({ quest }) => {
  return (
    <>
      <main>
        <Link href="/">
          <a>Home Page</a>
        </Link>
        <h1>{quest.question}</h1>
        <p>{quest.trueAnswer}</p>
      </main>
    </>
  );
};
export const getStaticPaths = async () => {
  const paths = questionData.map((quest) => ({
    params: { id: quest.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const que = questionData.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      quest: que[0],
    },
  };
};
export default Post;
