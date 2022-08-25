import React from "react";
import { LandingPage } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
