import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import MainPage from "./pages/MainPage";

const App: React.FC = (): JSX.Element => {

  return (
    <div>
      <MainPage />
    </div>
  );
};

export default App;
