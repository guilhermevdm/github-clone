import React from "react";
import "./App.css";
import { Header, NavBar, PinnedItems } from "./components";

function App() {
  return (
    <div style={{ height: 900 }}>
      <NavBar></NavBar>
      <Header></Header>
      <PinnedItems></PinnedItems>
    </div>
  );
}

export default App;
