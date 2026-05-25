interface QuestionCardProps {
  question: string;
  index: number;
}

const QuestionCard = ({ question, index }: QuestionCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 
                    shadow-sm hover:shadow-md transition-shadow duration-200">
      
      {/* Question Number */}
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-8 bg-blue-600 text-white text-sm font-bold 
                         rounded-full flex items-center justify-center shrink-0">
          {index + 1}
        </span>
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          Question {index + 1}
        </span>
      </div>

      {/* Question Text */}
      <p className="text-gray-800 text-base leading-relaxed">
        {question}
      </p>

    </div>
  );
};

export default QuestionCard;