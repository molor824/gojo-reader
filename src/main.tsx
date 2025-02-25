import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/home/Home";
import { Error } from "./pages/error/Error";
import { Review } from "./pages/review/Review";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import Read from "./pages/read/Read";
import Reader from "./pages/reader/Reader";
import About from "./pages/about/About";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/review", element: <Review /> },
      { path: "/read", element: <Read /> },
      { path: "/reader", element: <Reader /> },
      { path: "/about", element: <About />},
    ],
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new TypeError("Add your Clerk Publishable Key to the .env.local file");
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
