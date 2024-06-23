import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ContextAPI from "./contexts/ContextAPI.jsx";
import AuthContex from "./contexts/AuthContex.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContex>
      <ContextAPI>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextAPI>
    </AuthContex>
  </React.StrictMode>
);
