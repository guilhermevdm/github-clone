import React from "react";
import "./App.css";
import { Header, Content } from "./components";
import { Container, Box } from "@material-ui/core";


function App() {
  return (
    <div style={{  height: 900}}>
      <Header></Header>
      <Content></Content>
      
    </div>
  );
}

export default App;
