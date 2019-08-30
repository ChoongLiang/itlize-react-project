import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Auth from "./Auth/Auth";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Auth className="wh" />
    </BrowserRouter>
  );
}

export default App;
