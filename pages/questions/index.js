import Link from "next/Link";

export default function Questions({ questions }) {
  console.log(questions);
  return (
    <div>
      {questions.map((question) => (
        <Link key={question.id} href={`/questions/${question.id}`}>
          <a> {question.body}</a>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/questions`);
  const questions = res.json();
  return {
    props: {
      questions,
    },
  };
};
