import React from "react";
import InputBox from "./component/Input-box/input.component";
import { ChakraProvider } from "@chakra-ui/react"
// import "./App.css"

function App() {
  return (
    
    <ChakraProvider>
    <div className="back">
    <InputBox />
    </div>
  </ChakraProvider>
  );
}

export default App;
