import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       <Header />
//       <Outlet />
//       <Footer />
//       <Flashcard />
//     </div>
//   );
// }

// export default App;
