import { useState } from "react";

interface JobInputFormProps {
  onSubmit: (jobTitle: string) => void;
  isLoading: boolean;
}

const JobInputForm = ({ onSubmit, isLoading }: JobInputFormProps) => {
  const [jobTitle, setJobTitle] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = () => {
    // Basic validation
    if (!jobTitle.trim()) {
      setError("Please enter a job title.");
      return;
    }

    setError("");
    onSubmit(jobTitle);
  };

  return (
    <div className="max-w-xl mx-auto px-4">

      {/* Input Field */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          Job Title
        </label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="e.g. Customer Success Manager"
          disabled={isLoading}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     text-gray-900 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     disabled:bg-gray-100 disabled:cursor-not-allowed"
        />

        {/* Inline Error */}
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="mt-4 w-full py-3 px-6 bg-blue-600 text-white font-semibold 
                   rounded-lg hover:bg-blue-700 transition-colors duration-200
                   disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {isLoading ? "Generating..." : "Generate Questions"}
      </button>

    </div>
  );
};

export default JobInputForm;