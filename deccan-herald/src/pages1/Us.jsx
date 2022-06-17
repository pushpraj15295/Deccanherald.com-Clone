import React,{useEffect, useState} from 'react'
import axios from 'axios'

// import Card from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const Us = () => {


  const[data,setData] =useState([])

    useEffect(() => {
    
    
    
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b4a2302a208d497c84c94fa9944caf08")
    .then((response) => {
      console.log(response)
    
      setData(response.data.articles)
    
    })
    },[]);

    return (
        <>

     
        <div className='container my-3'>
    
    {/* <button className='btn btn-primary'
    
      onClick={getNews}
      >US News</button> */}
        </div>
        <div className='container'>
        <div>
    <Breadcrumb>
<BreadcrumbItem>
<BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='#'>Us</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</div>
<div style={{borderBottom:"1px solid rgb(154, 149, 149)"}}>
<Tabs variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'green.400', fontWeight:"bold" , fontSize:"30px", paddingRight:"40px"}}>Us</Tab>
    <Tab >CENTRAL</Tab>
    <Tab >POLITICS</Tab>
    <Tab >ENVIRONMENT</Tab>
    <Tab> SCIENCE</Tab>
   
    
  </TabList>
  
</Tabs>
</div>
        <div className='row'>
           {
            data.map((value,index) => {
              return (
              
                <div className='col-3' key={index}>
    
                <div className="card" style={{width:  "15rem",margin: "10px",height:"300px",fontSize:"15px"}}>
                   <img src={value.urlToImage} className="card-img-top" alt="..."/>
                   <div className="card-body" style={{fontsize:""}}>
                   <Link to={`/us/${index}`}> <h5 className="card-title">{value.title}</h5></Link>
                     {/* <h5 className="card-title" >{value.title}</h5> */}
                  </div>
        </div>
        
                </div>
              );
            })
           }
    
          </div>
        </div>
        
        
        </>
      );

}

export default Us