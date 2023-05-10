import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/home";
import Businesses from "./pages/BusinessPage/BusinessPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUpPage/SignupPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/businesses" element={<Businesses />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
