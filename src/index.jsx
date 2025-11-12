import { createRoot } from "react-dom/client";
import "./index.css";
import RenderTest from "./renderTest";

createRoot(document.getElementById("my-app")).render(
  <div>
    <RenderTest />
  </div>
);
