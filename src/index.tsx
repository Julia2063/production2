import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

const root = createRoot(document.getElementById("root")); //на роутере - дает показывать суспенз при подгрузке чанков
root.render(
  <BrowserRouter unstable_useTransitions={false}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
