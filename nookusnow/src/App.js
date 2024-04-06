import React from "react";
import Navigationbar from "./components/header";
import Homepage from "./components/Home";
import Recommendedshow from "./components/Recommendedshow";
import Upcomingevent from "./components/Upcomingevent";

function App() {
  return (
    <div>
      <Navigationbar />
      <Homepage />
      <Recommendedshow />
      <Upcomingevent />
    </div>
  );
}

export default App;
