import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/home/Home";
import { Error } from "./pages/error/Error";
import { Review } from "./pages/review/Review";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/review", element: <Review /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
