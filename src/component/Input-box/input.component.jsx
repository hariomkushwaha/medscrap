import React from "react";
import axios from 'axios';
import { Input,Button,Box,Heading,Center } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Cardlist } from "../card-list/card-list.component";

import "./input-box.styles.css";

class InputBox extends React.Component {


  state = {
    q: '',
    scraped:[]
  }

  handleChange = event => {
    this.setState({ q: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();

    const data = {
      q: this.state.q
    };
    // console.log(data);

    axios.post(`https://apithatscrape.herokuapp.com/API/scrape`, { data })
      .then(res => {
        this.setState({scraped:res.data})
        // console.log(this.state.scraped);
      })
      
  }

  render() {
    const { scraped } = this.state;
    return (
      <Box>
      <Center
      h="100px" color="black">
      <Heading>The Medium Scraper</Heading>
      </Center>
      <form onSubmit={this.handleSubmit}>
    
    <Input placeholder="search.." size="lg" 
    width="40%"
    top="20px"
    marginLeft="28%"
    name="q"
    onChange={this.handleChange}
    />
   
    <Button colorScheme="blue" size="lg" 
     top="20px"
    left="2px"
    type="submit"
    >
    <SearchIcon w={4} h={4} color="white" />
     
    </Button>
    </form>
      <div className='layout'>
      <Cardlist  scraped={scraped}/>
      </div>
    
    </Box>
    )
  }
}

export default InputBox;


