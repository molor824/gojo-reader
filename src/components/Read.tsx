import React from "react";

const Read = () => {
  return (
    <div className="flex flex-col items-start h-screen w-screen bg-gray-900">
      <div className="relative flex flex-col items-start justify-start w-full ">
        {/* Content */}
        <div className="px-6 py-12 relative z-10 text-white text-left ">

          {/* Levels in a Column */}
          <div className="flex flex-col items-start mb-10 bg-gray-900">
            {/* N5 Section */}
            <div className="m-4 p-4 rounded-lg bg-gray-900 text-white w-full max-w-md">
              <h2 className="text-3xl font-semibold mb-2">N5</h2>
              <p className="leading-tight">
                Content for N5 level goes here. This level covers basic grammar,
                vocabulary, and kanji.
              </p>
            </div>

            {/* N4 Section */}
            <div className="m-4 p-4 rounded-lg bg-gray-900 text-white w-full max-w-md">
              <h2 className="text-3xl font-semibold mb-2">N4</h2>
              <p className="leading-tight">
                Content for N4 level goes here. This level includes more complex
                grammar and vocabulary.
              </p>
            </div>

            {/* N3 Section */}
            <div className="m-4 p-4 rounded-lg bg-gray-900 text-white w-full max-w-md">
              <h2 className="text-3xl font-semibold mb-2">N3</h2>
              <p className="leading-tight">
                Content for N3 level goes here. This level focuses on
                intermediate grammar and kanji.
              </p>
            </div>

            {/* N2 Section */}
            <div className="m-4 p-4 rounded-lg bg-gray-900 text-white w-full max-w-md">
              <h2 className="text-3xl font-semibold mb-2">N2</h2>
              <p className="leading-tight">
                Content for N2 level goes here. This level covers advanced
                grammar and vocabulary.
              </p>
            </div>

            {/* N1 Section */}
            <div className="m-4 p-4 rounded-lg bg-gray-900 text-white w-full max-w-md">
              <h2 className="text-3xl font-semibold mb-2">N1</h2>
              <p className="leading-tight">
                Content for N1 level goes here. This level includes the most
                complex grammar and kanji.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
