import React from "react";
import { Box,Input,Button } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

function InputBox() {
  return (
    <Box>
    
    <Input placeholder="search.." size="lg" 
    width="40%"
    top="20px"
    marginLeft="25%"
    />
   
    <Button colorScheme="blue" size="lg"
    top="20px"
    left="2px"
    >
    <SearchIcon w={4} h={4} color="white" />
     
    </Button>
    </Box>
  );
}

export default InputBox;
