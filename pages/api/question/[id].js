import { questions } from "../../../questions";

export default (req, res) => {
  const { id } = req.query;
  const question = questions.find((question) => question.id.toString() === id);
  if (question) {
    res.status(200).json(question);
  } else {
    res.status(404).json({ message: "error" });
  }
};
//dinamik sayfa oluşturduk
