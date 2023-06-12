import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BookProvider>
    </BrowserRouter>
  </React.StrictMode>
);
