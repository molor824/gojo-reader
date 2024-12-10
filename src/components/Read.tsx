import React from "react";

const Read = () => {
  return (
    <div className="flex flex-col items-start h-full w-full bg-black">
      <div className="relative flex flex-col items-start justify-start w-full mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 mx-auto">Japanese Readings</h1>
        <div className="flex flex-row gap-10 px-6 py-4 relative z-10 items-center justify-center mx-auto mt-10 text-white text-left">
          <div className="flex items-center justify-center p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px]">
            <h2 className="text-[40px] font-semibold mb-2">N5</h2>
          </div>
          <div className="flex items-center justify-center p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px]">
            <h2 className="text-[40px] font-semibold mb-2">N4</h2>
          </div>
          <div className="flex items-center justify-center p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px]">
            <h2 className="text-[40px] font-semibold mb-2">N3</h2>
          </div>
          <div className=" flex items-center justify-center p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px]">
            <h2 className="text-[40px] font-semibold mb-2">N2</h2>
          </div>
          <div className="flex items-center justify-center p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px]">
            <h2 className="text-[40px] font-semibold mb-2">N1</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
