import React from "react";
import { BrowserRouter } from "react-router-dom";

import Auth from "./containers/Auth/Auth";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Auth className="wh" />
    </BrowserRouter>
  );
}

export default App;
