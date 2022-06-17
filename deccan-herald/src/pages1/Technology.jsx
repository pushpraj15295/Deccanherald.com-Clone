import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Technology.module.css'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'



const Technology = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  //   axios
  //     .get(
  //       "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b4a2302a208d497c84c94fa9944caf08"
  //     )
  //     .then((response) => {
  //       console.log(response);

  //       setData(response.data.articles);
  //     });
  // }, []);

  if(data.length ===0){
    const API="0262fcb147b7460fa66ab22d917cb183"
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${API}`)
.then((response) => {
  console.log(response)

  setData(response.data.articles)
})
  }
},[])


  return (
    <>
<div style={{marginLeft:"50px",marginTop:"50px" }}>
    <Breadcrumb>
<BreadcrumbItem>
<BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='#'>Technology</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</div>


<div style={{borderBottom:"1px solid rgb(154, 149, 149)",marginLeft:"50px"}}>
<Tabs variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'green.400', fontWeight:"bold" , fontSize:"30px", paddingRight:"40px"}}>Technology</Tab>
    <Tab >NEWST</Tab>
    <Tab >LERNABLE</Tab>
    <Tab >HIKE</Tab>
    <Tab> EXACT </Tab>
    
    
  </TabList>
  
</Tabs>
</div>



    <h1 className={styles.tech_heading}>TECHNOLOGY</h1>
    <img src="https://tpc.googlesyndication.com/simgad/3634379493742236003?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkKcNbZ25NwWiFcn-yR-Q9Jgu83XA" alt=""  className={styles.tech_heading}/>
    {/* top static div */}
      <div className={styles.tech_topdiv}>
        <div  className={styles.tech_inner}>
           <h1 className={styles.tech_head}>Indian B-schools must start imbuing research culture</h1>
           <p>14th Jun 2022</p>
        </div>
        <div>
           <div className={styles.tech_innerCont}>
            <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/14/file7ezfkpt5q614g6cvf53-1117837-1655147701.jpg?itok=tXp2Qfyf" alt="" />
            <h1>Art of doing more with less time</h1>
           </div>
           <div  className={styles.tech_innerCont}>
            <img src="https://www.deccanherald.com/sites/dh/files/card_placeholder/Small_horizontal.png" alt="" />
            <h1>Paramedical courses:Emerging field with job prospects</h1>
           </div>
        </div>
        <div  className={styles.tech_inner}>
          <h1 className={styles.tech_head}>Indian B-schools must start imbuing research culture</h1>
           <p>14th Jun 2022</p>
        </div>
      </div>

    {/* top2 static div */}
      <div className={styles.tech_topdiv2}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/06/12/862803-01-02-1-1117394-1654976995.jpg?itok=-OkZj6Zw" alt="" />
        <h1 className={styles.tech_imghead}>Sagarmala project well underway in Gujarat</h1>
      </div>
      

      <div className={`  ${styles.mapMainDiv}`}>


        {/* left div */}
      <div className={`row ${styles.mapLeftDiv}`}>      
       {
      data.map((value,index) => {
         return (
         <div className='col-4' key={index}>
         <div className="card" style={{width:  "18rem",margin: "10px",height:"300px",fontSize:"15px"}}>
        <img src={value.urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
        <Link to={`/technology/${index}`}> <h5 className="card-title">{value.title}</h5></Link>
        {/* <h5 className="card-title">{value.title}</h5> */}
        {/* <p className="card-text">{value.description}</p>

        <a href="#" className="btn btn-primary">Main News</a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        {/* right div start */}

        <div className={styles.mapRightDiv}>
            <div>
              <div className={styles.National_imgdiv}>
              <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/06/16/rajbhavan2-1-1118593-1655363458.jpg?itok=16cUder7" alt="" />
              <h1>Committie drafting State Education Policy Stalin</h1>
              <p>16th Jun 2022</p></div>
              <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/06/15/pti05272022000254b-1-1118409-1655303164.jpg?itok=mXZvOMzX" alt=""  className={styles.National_imgdiv}/>
              <div className={styles.National_imgdiv}>
              <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/06/15/protest-istock-1118436-1655310474.jpg?itok=NKW29EUf" alt="" />
              <h1>Jamaat-e-Islami Hind to campaign in WB against 'hatred'....</h1>
              <p>15th Jun 2022</p></div>
              <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/06/15/iit-madras-pti-1-1113478-1653816063-1-1115806-1654520171-1-1118392-1655299602.jpg?itok=n0vnuQN5" alt=""  className={styles.National_imgdiv}/>
            </div>
        </div>

      </div>

   
    
    </>
  );
};

export default Technology;
