import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./EntryForm.css";  // ✅ ← これを追加
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
