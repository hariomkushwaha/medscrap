import React from "react";
import InputBox from "./component/Input-box/input.component";
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    
    <ChakraProvider>
    <InputBox/>
  </ChakraProvider>
  );
}

export default App;
