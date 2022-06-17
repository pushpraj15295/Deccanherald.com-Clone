import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./BusinessStyle.module.css";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Business = () => {
  const [business , setBusiness ] = useState([]);             

  useEffect(() => {

//     axios({

// //       url: "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ef816628ed504cd9b5a14971665bfb36",

//       url: "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f43be9f49cf4702b914421834ff3c3e",

//       method: "GET",
//     }).then((r) => {
//        setBusiness(r.data.articles);
//     });
//   });

    const API = "8567baa900c743778110f4f711896408"
    if(business.length ==0){
      axios({
        url: `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API}`,
        method: "GET",
      }).then((r) => {
         setBusiness(r.data.articles);
      });


    }
  
  },[]);


  return (

    <>
          <div style={{marginLeft:"50px",marginTop:"50px" }}> 
     <Breadcrumb>
<BreadcrumbItem>
<BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='#'>Business</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
           </div>
<div style={{borderBottom:"1px solid rgb(154, 149, 149)",marginLeft:"50px"}}>
<Tabs variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'green.400', fontWeight:"bold" , fontSize:"30px", paddingRight:"40px"}}>Business</Tab>
    <Tab >BUSINESS NEWS</Tab>
    <Tab >FAMILY FINANCE</Tab>
    <Tab >TECHNOLOGY</Tab>
    <Tab> DH WHEELS</Tab>
    
    
  </TabList>
  
</Tabs>
</div>
{/* topdiv */}




     <h2 className={styles.bheading}>BUSINESS NEWS</h2>
   <div className={styles.Business_static1}>

    {/* left bussiness div  */}
     <div>
    <img src="https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/06/15/rupee-pti-1118345-1655290335.jpg?itok=5k2oPrNT"/>

    </div>
 {/* left bussiness div  end  */}


 {/* center div  */}
    <div className={styles.business_static2}>
      <div className={styles.business_innerdiv}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/15/bse-reuters-1118339-1655289269.jpg?itok=hgao1kSV" alt="" />
        <p>Equities close in red for 4th day; Sensex drops</p>
      </div>
      <div className={styles.business_innerdiv}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/15/2022-05-16t075152z941931217rc268u98h25artrmadp3holcim-m-a-adani-groupjpg-1110649-1652950538-1116789-1654794081-1-1118337-1655289069.jpg?itok=plbtgLE7" alt="" />
        <p>Adani Group fastest in valuation growth at 88%</p>
      </div>
      <div className={styles.business_innerdiv}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/15/235282-01-02-1-1118332-1655287970.jpg?itok=5nxpKLl7" alt="" />
        <p>Gold marginally higher; silver climbs Rs 304</p>
      </div>
    </div>

    {/* center div end  */}

      {/* rigt div start  */}
      <div>
    <img src="https://s0.2mdn.net/simgad/16439295914880232124"/>
    </div>
    {/* right div end  */}

   </div>

   {/* bussiness add  */}
   <div>
   <img src="https://s0.2mdn.net/simgad/2659264650643740327" alt="" className={styles.business_adds} />
    </div>
    {/* <div className={styles.bcontainer}> */}

    

      <div className={styles.btopdiv}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/06/15/google-afp-1118338-1655289116.jpg?itok=jp3VaH97" />
        <div className={styles.bhead}>
          <h1>Google sidelines engineers who claims its all it sentient</h1>
        </div>
      </div>


      <div className={styles.business_bottom_div}>
      <div className={styles.bcontainer}>
      <div className={styles.bmaindiv}>

        {/* {business .map((e) => (
          <div className={styles.bmaindiv1}> */}

        {business.map((e,index) => (
          <div key={index}>

            <img src={e.urlToImage} className={styles.bcimg} />
            <Link to={`/business/${index}`}> <h5>{e.title}</h5></Link>
            {/* <h1>{e.title}</h1> */}
            <p>{e.publishedAt}</p>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.business_static4}>
      <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/05/02/royal-enfield-afp-1105741-1651476190.jpg?itok=iKPrYZnA" alt="" className={styles.business_static5}/>

      <img src="https://s0.2mdn.net/simgad/4319927416967513061" alt=""className={styles.business_static5} />

      <div className={styles.business_static2}>
      <div className={styles.business_innerdiv}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/15/nothing-phone1-teaser-2a-1118329-1655290009.jpg?itok=hmY7CWlR" alt="" />
        <p>Equities close in red for 4th day; Sensex drops</p>
      </div>
      <div className={styles.business_innerdiv}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/15/telecom-istock-1-1037497-1633455247-1072969-1642691092-1110212-1652810485-1116757-1654784508-1118308-1655285239.jpg?itok=piBp79eW" alt="" />
        <p>Adani Group fastest in valuation growth at 88%</p>
      </div>
      <div className={styles.business_innerdiv}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/15/google-maps-reuters-1118296-1655282243.jpg?itok=OZPdLy5p" alt="" />
        <p>Gold marginally higher; silver climbs Rs 304</p>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Business ;