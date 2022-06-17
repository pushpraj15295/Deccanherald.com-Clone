import React from 'react'
import style from "../Components/style.module.css"
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'





const Footer = () => {
  return (
    <>
    <div  className={style.fullDiv} >

    <Box bg='#0087a8' w='1349' h="308"  p={4} color='black' className={style.footerDiv}>
    
     <div className={style.footerMainDiv} >
        <div>
          
            <Link to ="/about">    <h5>NATIONAL</h5> </Link>
            <hr></hr>
            <Link to ="/about">   <p>North and Central</p> </Link>
            <Link to ="/about">   <p>Politics</p> </Link>
            <Link to ="/about">  <p>South</p> </Link>
            <Link to ="/about">  <p>East and Northeast</p> </Link>
            <Link to ="/about">  <p> West</p> </Link>
        </div>

  
        <div>
        <Link to ="/about">   <h5>  KARNATAKA</h5> </Link>
            <hr/>
            <Link to ="/about">   <p>Top Stories</p> </Link>
            <Link to ="/about">   <p>Politics</p> </Link>
            <Link to ="/about"> <p>Districts</p> </Link>
        </div>
    
        <div>
        <Link to ="/about">   <h5>BENGALURU</h5> </Link>
            <hr/>
            <Link to ="/about">  <p>Top Stories</p> </Link>
            <Link to ="/about">  <p>Bengaluru Crime</p> </Link>
            <Link to ="/about"> <p>Politics</p> </Link>
            <Link to ="/about">  <p>Infrastructure</p> </Link>
            <Link to ="/about"> <p>Life in the City</p> </Link>
        </div>
 
        <div>
        <Link to ="/about">   <h5>SPORTS</h5> </Link>
            <hr/>
            <Link to ="/about">  <p>Cricket</p> </Link>
            <Link to ="/about">   <p>Formula 1 with DH</p> </Link>
            <Link to ="/about">  <p>Football</p> </Link>
            <Link to ="/about">  <p>Tennis</p> </Link>
            <Link to ="/about">  <p>Sportscene</p> </Link>
            <Link to ="/about">   <p>Other Sports</p> </Link>
         
         </div>
        <div>
 
        <Link to ="/about">   <h5>BUSINESS</h5> </Link>
            <hr/>
            <Link to ="/about">   <p>Business News</p> </Link>
            <Link to ="/about">   <p>Family Finance</p> </Link>
            <Link to ="/about">   <p>Technology</p> </Link>
            <Link to ="/about">   <p>DH Wheels</p> </Link>
        </div>
    
        <div>
        <Link to ="/about">   <h5>MULTIMEDIA</h5> </Link>
            <hr/>
            <Link to ="/about">   <p>Videos</p> </Link>
            <Link to ="/about">   <p>Photos</p> </Link>
        </div>

  
        <div>
        <Link to ="/about"> <h5>OPINION</h5> </Link>
            <hr/>
            <Link to ="/about"> <p>DH Views</p> </Link>
            <Link to ="/about"> <p>Editorials</p> </Link>
            <Link to ="/about"> <p>Panorama</p> </Link>
            <Link to ="/about"> <p>Comment</p> </Link>
            <Link to ="/about">  <p>In Perspective</p> </Link>
            <Link to ="/about">  <p>Right in the Middl</p> </Link>
        </div>
    
        <div>
        <Link to ="/about">  <h5>  ENTERTAINMENT</h5> </Link>
            <hr/>
            <Link to ="/about">   <p>Entertainment News</p> </Link>
            <Link to ="/about">  <p>DH Showtime</p> </Link>
            <Link to ="/about">  <p>DH Talkies</p> </Link>
            <Link to ="/about"> <p>Arts, Books & Culture</p> </Link>
        </div>

     </div>
       <div className={style.IPLDiv}>
     
       <Link to= "/about"><h5>IPL RIGHTS SOLD FOR RS 48,390 CR</h5></Link>
       <Link to= "/about"><h5>CHINA LIFTS VISA BAN ON INDIANS </h5></Link>
       <Link to= "/about"><h5>ARMED FORCES UNVEIL 'AGNIPATH' SCHEME</h5></Link>
       <Link to= "/about"><h5>AI FINED RS 10L</h5></Link>
       <Link to= "/about"><h5>DH PHOTO GALLERIES</h5></Link>

       </div>
   
   </Box>

   <Box bg='white' w='1349' h="308"  p={4} color='black' className={style.footerDiv}>

    <div className={style.downBox}>
        <div>
            <h6>DH PICKS</h6>
            <hr />
           <Link to = "/about"><p>China lifts 2-year Covid-19 visa ban on Indians</p></Link>
           <Link to = "/about"><p>It's sold! Viacom18, Star bag IPL rights for Rs 48K cr</p></Link>
           <Link to = "/about"><p>PM-Kisan website loophole risked 11 crore Aadhaar IDs</p></Link>
           <Link to = "/about"><p>Love is blind & stronger than parents' love: K'taka HC</p></Link>
           <Link to = "/about"><p>BJP's stance on history gets thumbs down from Nitish</p></Link>
            
            </div>
        <div>
        <h6>LATEST STORIES</h6>
        <hr />
           <Link to = "/about"><p>One can't tread path of trade on empty stomach: Goyal</p></Link>
           <Link to = "/about"><p>ED summons Anil Parab in money laundering case</p></Link>
           <Link to = "/about"><p>'Oppn wants Gopalkrishna Gandhi as Prez candidate'</p></Link>
           <Link to = "/about"><p>'BJP delaying J&K polls as it is scared of AAP'</p></Link>
           <Link to = "/about"><p>Co-oprate with ED probe, Surya tells Gandhis</p></Link>
        </div>
        <div>
        <h6>TRENDING NEWS</h6>
        <hr />
           <Link to = "/about"><p>K'taka okays bid to build 20.5 km metro line to Hosur</p></Link>
           <Link to = "/about"><p>People gather in support of Nupur Sharma in Ahmedabad</p></Link>
           <Link to = "/about"><p>Prophet row: Unease within BJP over action on leaders</p></Link>
           <Link to = "/about"><p>Supa Dam goes dry, opens floodgates of memories</p></Link>
           <Link to = "/about"><p>Bengaluru sees 3-fold rise in Covid cases</p></Link>
        </div>
        <div className={style.vl}></div>
         
        <div>
        <h6>DOWNLOAD DH APP</h6>
        <hr />
        <div className={style.imgDiv} >
           <Link to = "/about"><img src="https://www.deccanherald.com/sites/deccanherald.com/modules/dynamicfooter/images/android.svg" alt="" /></Link>
           <Link to = "/about"><img src="https://www.deccanherald.com/sites/deccanherald.com/modules/dynamicfooter/images/ios.svg" alt="" /></Link>
           </div>
           <Link to = "/about"><h6>SERVICES</h6></Link>
           <hr></hr>
            <div>
               
            <span>About </span>
              <span>Epaper </span><span>Archives </span><span>Sitemap</span><span>Classifieds </span><span>Contact</span>
             
            </div>
            <h6>Our Group Project </h6>
            <hr></hr>
            <span>Printers Mysore  </span><span>Prajavani </span><span>Sudha</span><span>Mayura </span><span>Exam Mastermind</span>
        </div>

    
    </div>

   </Box>

   <Box bg='#0087a8' w='1349' h="50px"  p={4} color='black' className={style.down}> 
     <div>
        <span>© 2022 The Printers (Mysore) Private Ltd.</span>
     </div>
     <div>
        <Link to="/about"><img src="https://www.deccanherald.com/sites/deccanherald.com/modules/dynamicfooter/images/fb-white.svg" alt="" /></Link>
        <Link to="/about"><img src="https://www.deccanherald.com/sites/deccanherald.com/modules/dynamicfooter/images/twit-white.svg" alt="" /></Link>
        <Link to="/about"><img src="https://www.deccanherald.com/sites/deccanherald.com/modules/dynamicfooter/images/insta-white.svg" alt="" /></Link>
        <Link to="/about"><img src="https://www.youtube.com/channel/UCHDXXHPrz-1GVbK_qk82hBQ" alt="" /></Link>
     </div>
     </Box>
     
    </div>
    </>
  )
}

export default Footer
