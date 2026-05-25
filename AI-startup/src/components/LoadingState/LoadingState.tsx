const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4">
      
      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 
                      rounded-full animate-spin" />

      {/* Message */}
      <p className="text-gray-500 text-sm font-medium animate-pulse">
        Generating your interview questions...
      </p>

    </div>
  );
};

export default LoadingState;