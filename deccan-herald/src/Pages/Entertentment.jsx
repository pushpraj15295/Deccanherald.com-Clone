import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Entertentment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=6f43be9f49cf4702b914421834ff3c3e"
      )
      .then((response) => {
        console.log(response.data.articles, "response");

        setData(response.data.articles);
      });
  }, []);

    useEffect(() => {
      if(data.length === 0){

        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=6f43be9f49cf4702b914421834ff3c3e")
    .then((response) => {
      console.log(response)
    
      setData(response.data.articles)
    
    })

        
      }
    
    

    },[])

    return (
        <>
        
        <div className='container my-3'>
    
    {/* <button className='btn btn-primary'
    
      onClick={getNews}
      > ENtertenment News</button> */}
      </div>
      <div className="container">
      <div>
    <Breadcrumb>
<BreadcrumbItem>
<BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='#'>Entertentment</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</div>
<div style={{borderBottom:"1px solid rgb(154, 149, 149)"}}>
<Tabs variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'green.400', fontWeight:"bold" , fontSize:"30px", paddingRight:"40px"}}>Entertentment</Tab>
    <Tab >LATESTS</Tab>
    <Tab >POLITICS</Tab>
    <Tab >BLOCKBUSTER</Tab>
    <Tab> CELEBRITIES</Tab>
   
    
  </TabList>
  
</Tabs>
</div>
        <div className="row my-4">
          {data.map((value,index) => {
            return (
              <div className="col-3" key={index}>
                <div
                  className="card"
                  style={{
                    width: "15rem",
                    margin: "10px",
                    height: "300px",
                    fontSize: "15px",
                  }}
                >
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                  <Link to={`/entertentment/${index}`}> <h5 className="card-title">{value.title}</h5></Link>
                    {/* <h5 className="card-title">{value.title}</h5> */}
                    {/* <p className="card-text">{value.description}</p>
                     <a href="#" className="btn btn-primary">Main News</a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Entertentment;
