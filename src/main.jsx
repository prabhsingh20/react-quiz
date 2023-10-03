import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import { QuizProvider } from "./contexts/QuizContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuizProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </QuizProvider>
);
