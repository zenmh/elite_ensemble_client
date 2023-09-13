const Spinner = () => {
  return (
    <div className="h-screen w-screen flex  items-center justify-center">
      <div className="w-11 h-11 border-4 border-dashed rounded-full animate-spin dark:border-gray-300 border-gray-700 z-50" />
    </div>
  );
};

export default Spinner;
