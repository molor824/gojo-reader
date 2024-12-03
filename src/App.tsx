import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Flashcard } from "./pages/Flashcart";
function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Outlet />
      <Footer />
      <Flashcard />
    </div>
  );
}

export default App;

