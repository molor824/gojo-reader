import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Outlet />
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
