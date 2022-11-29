import React from "react";
import "dotenv/config";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "App";
import Dashboard from "components/views/Homepage";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
