import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// scss
import "./index.scss";

// context
import ContextProvider from "./context/appContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
