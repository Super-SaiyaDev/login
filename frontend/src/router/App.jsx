import React from "react";
import Login from "../components/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
