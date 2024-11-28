import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Nav from "./components/Nav.jsx";
import "./output.css";
import "animate.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>
);
