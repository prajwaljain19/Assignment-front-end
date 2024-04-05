import React from "react";
import Navigationbar from "./components/header";
import Homepage from "./components/Home";
import Recommendedshow from "./components/Recommendedshow";

function App() {
  return (
    <div>
      <Navigationbar />
      <Homepage />
      <Recommendedshow />
    </div>
  );
}

export default App;
