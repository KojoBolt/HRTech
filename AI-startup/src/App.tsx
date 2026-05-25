import { useState } from "react";
import Header from "./components/Header/header"
import JobInputForm from "./components/JobInputForm/JobInputForm"
import LoadingState from "./components/LoadingState/LoadingState";
import QuestionDisplay from "./components/QuestionDisplay/QuestionDisplay";
import { fetchInterviewQuestions } from "./services/groqService";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<string[]>([]);
  const [jobTitle, setJobTitle] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (title: string) => {
    setLoading(true);
    setError("");
    setQuestions([]);
    setJobTitle(title);

    try {
      const result = await fetchInterviewQuestions(title);
      setQuestions(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <JobInputForm onSubmit={handleSubmit} isLoading={loading} />
      {error && (
        <div className="max-w-xl mx-auto px-4 mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      {loading && <LoadingState />}
      {questions.length > 0 && (
        <QuestionDisplay jobTitle={jobTitle} questions={questions} />
      )}
    </div>
  )
}

export default App