
const ProgressBar = () => {


  return (
    <>
      { (
        <div  className="items-center w-[300px]">
          <div className="w-full p-1 bg-black/5 rounded-xl min-h-2">
            <div
              className="h-2 bg-orange-500 rounded-full"
              style={{ width: `$0%` }}
            />
          </div>

          <div className="ml-3 text-sm font-medium text-gray-600">
            0%
          </div>
        </div>
      )}
    </>
  );
};

export default ProgressBar;
