import React from 'react';
import { Box,Heading,Text } from "@chakra-ui/react"
 
import "./card.styles.css";

export const Card = props => (
    <Box paddingTop="10px">
    
        <Box p={3} >
        <a href={props.scraped.Link}><Box
        p={5}
        shadow="lg"
        borderWidth="3px"
        flex="1"
        borderRadius="md"
        width={["100%","70%"]}
        className="card"
      >
        <Heading fontSize="xl" align="left">Title: {props.scraped.Title}</Heading>
        
        <Text mt={4} align="left">Author: {props.scraped.Author}</Text>
        <Text mt={4} align="left">Issued By: {props.scraped.Date}</Text>
        <Text mt={4} align="left">Views: {props.scraped.Views}</Text>
      </Box></a>
      </Box>
    </Box>
);