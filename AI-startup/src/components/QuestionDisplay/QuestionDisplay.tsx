import QuestionCard from "../QuestionCard/QuestionCard";

interface QuestionDisplayProps {
  questions: string[];
  jobTitle: string;
}

const QuestionDisplay = ({ questions, jobTitle }: QuestionDisplayProps) => {
  return (
    <div className="max-w-xl mx-auto px-4 mt-8">

      {/* Result Header */}
      <p className="text-center text-sm text-gray-500 mb-6">
        Showing interview questions for{" "}
        <span className="font-semibold text-blue-600">{jobTitle}</span>
      </p>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            question={question}
            index={index}
          />
        ))}
      </div>

    </div>
  );
};

export default QuestionDisplay;