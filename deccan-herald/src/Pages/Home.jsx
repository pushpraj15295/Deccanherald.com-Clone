import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import style from "../Pages/page.module.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import home from "../Pages/home.module.css"
import Top from "../Pages/Top"
import img from "../image/pic1.png"
import National from "../pages1/National";
import Business from "../pages1/Business";
import Sport from "../pages1/Sport";
import Technology from "../pages1/Technology";





const Home = () => {



//   const [topHeadLine, setTopHeadLine] = useState([]);
//   const [national, setNational] = useState([]);
//   const [bussiness, setBussiness] = useState([]);
//   const [tech, setTech] = useState([]);
//   useEffect(() => {
//     const getNews = () => {
//         // 
//         // "8567baa900c743778110f4f711896408"
//         const API = "0262fcb147b7460fa66ab22d917cb183"
//       // top head
//       if(topHeadLine.length === 0){

//         axios
//         .get(
//           `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`
//         )
//         .then((res) => {
//           // console.log(res.data.articles);
//           setTopHeadLine(res.data.articles);
//         });

//       //national
//       axios
//         .get(
//           `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API}&q=india`
//         )
//         .then((res) => {
//         //   console.log(res.data.articles);
//           setNational(res.data.articles);
//         });

//       // top bussiness
//       axios
//         .get(
//           `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API}`
//         )
//         .then((res) => {
//         //   console.log(res.data.articles);
//           setBussiness(res.data.articles);
//         });

//       // top Tech
//       axios
//         .get(
//           `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API}`
//         )
//         .then((res) => {
//         //   console.log(res.data.articles);
//           setTech(res.data.articles);
//         });
//     };

//       }
     

//     getNews();
//   }, []);

//   return (
//     <>

   
   
   
//       <h1 className={style.h1}>Top  </h1>
//       <div style = {{width:"30%"}}>
//       <img src={img} style = {{width:"100%"}}/>
//       </div>
      
//      <Top/>

//      {/* top story  */}
//      <div className = {home.topStory}>
//       <div className={`${style.homeBox} ${home.leftDiv} `}>
//         {topHeadLine.map(({ urlToImage, title }, index) => {
//           //  console.log(uuidv4())
//           return (
//                      <>
//              <div key={uuidv4()}  >
//             <Card style={{ width: "18rem" }}  >
//               <Card.Img variant="top" src={urlToImage} />
//               <Card.Body>
//                 {/* <Card.Title> Title</Card.Title> */}
//                 <Card.Text>{title}</Card.Text>
//                 {/* <Button variant="primary">Go somewhere</Button> */}
//               </Card.Body>
//             </Card>
//             </div>
//             </>
//           );
//         })}
//       </div>

//        {/* right div */}
//        <div className = {home.rightDiv}>

//         {/* up Box */}
//         <div>
//           <div>
//             <img src = "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/16/job-1118731-1655394588.png?itok=0ppa84iV"/>
//             <span>
//                Job crisis in making in Bengal as NREGA funds withheld
//              </span>
//           </div>
//           <div>
//           <img src = "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/16/061958-01-02-1-1118711-1655389835.jpg?itok=yygQULks"/>
//             <span>Prophet row: Fresh protest in Bangladesh
//              3 hrs ago</span>
//           </div>
//         </div>

//             {/* middle box */}
//         <div>
//           <div>
//           <img src = "https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/16/pen-istock-1118709-1655388285.jpg?itok=mNLtrdMS"/>
//             <span>Electors to use special pen for Presidential polls...</span>
            
//           </div>
//           <div>
//           <img src = "https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/16/pti992017000080a-1-1118695-1655385043.jpg?itok=e_Lkb3NZ"/>
//             <span>
//      BJP’s Varun Gandhi raises questions on Agnipath scheme
//           .</span>
//           </div>
//           <div>
//           <img src = "https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/16/pti06152022000096a-1-1118677-1655378984.jpg?itok=nhAQeVEb"/>
//             <span>Cong seeks meeting with Kovind over 'police atrocities'...</span>
//           </div>
//         </div>

//         {/* ////////////////last div */}
//         <div>
//           <img src="https://s2.dmcdn.net/v/U0O-t1YgkC6YLxgj2/x240" alt="" />
//         </div>
//       </div>

//       </div>
//       <h1 className={style.h1}>National  </h1>
//       <div className = {home.topStory}>
     
//       <div className={`${style.homeNational} ${home.nationalDiv}`}>
//         {national.map(({ urlToImage, title }, index) => {
//           //  console.log(uuidv4())
//           return (
//                      <>
//              <div key={uuidv4()} >
//             <Card style={{ width: "18rem" }}  >
//               <Card.Img variant="top" src={urlToImage} />
//               <Card.Body>
//                 {/* <Card.Title> Title</Card.Title> */}
//                 <Card.Text>{title}</Card.Text>
//                 {/* <Button variant="primary">Go somewhere</Button> */}
//               </Card.Body>
//             </Card>
//             </div>
//             </>
//           );
//         })}
//       </div>
//    {/* second div */}

//     <div></div>
//       </div>

//       <h1 className={style.h1}>Bussiness </h1>
//       <div className={style.homeBox}>
//         {bussiness.map(({ urlToImage, title }, index) => {
//            console.log(uuidv4())
//           return (
//                      <>
//              <div key={uuidv4()} >
//             <Card style={{ width: "18rem" }}  >
//               <Card.Img variant="top" src={urlToImage} />
//               <Card.Body>
//                 {/* <Card.Title> Title</Card.Title> */}
//                 <Card.Text>{title}</Card.Text>
//                 {/* <Button variant="primary">Go somewhere</Button> */}
//               </Card.Body>
//             </Card>
//             </div>
//             </>
//           );
//         })}
//       </div>

//  <h1 className={style.h1}>Technology</h1>
//       <div className = {home.topStory}>
     
//       <div className={`${style.homeBox} ${home.leftDiv} `}>
//         {tech.map(({ urlToImage, title }, index) => {
          
//           return (
//                      <>
//              <div key={uuidv4()} >
//             <Card style={{ width: "18rem" }}  >
//               <Card.Img variant="top" src={urlToImage} />
//               <Card.Body>
//                 {/* <Card.Title> Title</Card.Title> */}
//                 <Card.Text>{title}</Card.Text>
//                 {/* <Button variant="primary">Go somewhere</Button> */}
//               </Card.Body>
//             </Card>
//             </div>
//             </>
//           );
//         })}
//       </div>
//       {/* right div */}
//       <div  className = {home.rightDiv}>

//       <div className='topNews2'>
//           <div>
//           <h2>TOP STORIES</h2>
//           <span></span>
//           </div>
//           <div>
//        <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-vvamu62i56hm41i9huubaolko5-20220428004006.jpeg' alt=''></img>
//             <h3>PM Modi directs recruitment of 10 lakh people in next 1.5 years: PMO</h3>
//             <p>The direction from Modi came following a review of the status of human resources in all government departments and ministries</p>
      
//           </div>
//           <div>
//              <img src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-s702pclqh4p3l96s4vq358jct0-20220518215054.jpeg' alt=''></img>
//                <h3>KCR’s PPP to explain his bigger role to TRS leaders, cadres</h3>
//               <p>KCR would also explain why he did not try to forge a front and why the previous attempts to form fronts at the national level had failed</p>
//                </div>
              
      
//           </div>


         
      

//       </div>


      
//       </div>
      
    // </>
  // );


  return(
   <div>
    <Technology/>
    <National/>
    <Business/>
    <Sport/>
 
   </div>
  )
};

export default Home;
