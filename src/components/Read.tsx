import { Link } from "react-router-dom";

const Read = () => {
  return (
    <div className="flex flex-col items-start h-[875px] h-full w-full bg-black ">
      <div className="relative flex flex-col items-start mt-[180px] justify-start w-full mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 mx-auto">
          Japanese Readings
        </h1>
        <div className="flex flex-row gap-10 px-6 py-4 relative z-10 items-center justify-center mx-auto mt-10 text-white text-left">
          <Link to="/reader">
            <div className="p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px] flex flex-col justify-end items-center">
              <h2 className="text-3xl font-semibold mb-2">N5</h2>
              <img
                src="/fiveLeaf.png"
                alt="Five Leaf"
                className="w-full h-[150px] object-cover mb-[15px]"
              />
            </div>
          </Link>
          {/* N4 Section */}
          <Link to="/reader" state={{ level: "N4" }}>
            <div className="p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px] flex flex-col justify-end items-center">
              <h2 className="text-3xl font-semibold mb-2">N4</h2>
              <img
                src="/fourLeaf.png"
                alt="Four Leaf"
                className="w-full h-[150px] object-cover mb-[15px]"
              />
            </div>
          </Link>
          {/* N3 Section */}
          <Link to="/reader" state={{ level: "N3" }}>
            <div className="p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px] flex flex-col justify-end items-center">
              <h2 className="text-3xl font-semibold mb-2">N3</h2>
              <img
                src="/threeLeaf.png"
                alt="Three Leaf"
                className="w-full h-[150px] object-cover mb-[15px]"
              />
            </div>
          </Link>
          {/* N2 Section */}
          <Link to="/reader" state={{ level: "N2" }}>
            <div className="p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px] flex flex-col justify-end items-center">
              <h2 className="text-3xl font-semibold mb-2">N2</h2>
              <img
                src="/twoLeaf.png"
                alt="Two Leaf"
                className="w-full h-[150px] object-cover mb-[15px]"
              />
            </div>
          </Link>
          {/* N1 Section */}
          <Link to="/reader" state={{ level: "N1" }}>
            <div className="p-4 rounded-lg bg-white text-black shadow-lg w-[250px] h-[250px] flex flex-col justify-end items-center">
              <h2 className="text-3xl font-semibold mb-2">N1</h2>
              <img
                src="/oneLeaf.png"
                alt="One Leaf"
                className="w-full h-[150px] object-cover mb-[15px]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
