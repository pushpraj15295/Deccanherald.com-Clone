import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Navbar.modules.css"
import img from "./deccan logo(291).png"
import {Link} from "react-router-dom"
import { HamburgerIcon } from '@chakra-ui/icons'

// import { AiOutlineAlignRight } from 'react-icons/ai';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'



const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div className='navbar_container'>
      <div  className='navbar_containerA'  >
      <div  className='navbar_container1' >

       <HamburgerIcon  w={8} h={8} marginRight={10} ref={btnRef} colorScheme='teal' onClick={onOpen} />
       <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        // className="drawer1"
        
        
       
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader style={{backgroundColor: "#116f87"}}> <Link to="/" className="btn1 btn2">Home</Link></DrawerHeader>

          <DrawerBody  style={{backgroundColor: "#116f87"}}>
            {/* <Input placeholder='Type here...' /> */}
            <div className='navbar_container5'>
     
      <Link to="/national" className="btn1">National</Link>
      <Link to="/entertentment" className="btn1">Entertentment</Link>
      <Link to="/technology" className="btn1">Technology</Link>
      <Link to="/us" className="btn1">Us</Link>
      <Link to="/sport" className="btn1">Sport</Link>
      <Link to="/business" className="btn1">Business</Link>
      <Link to="/science" className="btn1">Science</Link>

    </div>
          </DrawerBody>
{/* 
          <DrawerFooter>
            
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>


        <img src={img} style={{width:"200px"}} />
        
      </div>
      <div className='navbar_container2'>
      <Link to="/" className="btn">Home</Link>
      <Link to="/national" className="btn">National</Link>
      <Link to="/entertentment" className="btn">Entertentment</Link>
      <Link to="/technology" className="btn">Technology</Link>
      <Link to="/us" className="btn">Us</Link>
      <Link to="/sport" className="btn">Sports</Link>
      <Link to="/business" className="btn">Business</Link>
      <Link to="/science" className="btn">Science</Link>

      {/* <Link to="/national/*" className="btn">Tests</Link> */}


     


        {/* <button type="button" className="btn">Home</button> */}
        {/* <button type="button" className="btn">Global</button> */}
        {/* <button type="button" className="btn">National</button>
        <button type="button" className="btn">Sports</button>
        <button type="button" className="btn">Business</button>
        <button type="button" className="btn">Entertainment</button>
        <button type="button" className="btn">Science & Env</button>
        <button type="button" className="btn">Videos</button> */}
         {/* <button type="button" className="btn">Specials</button> */}

    </div>
    <div className='navbar_container3'>
      <p style={{color:"red"}}>News</p>
      <p>Newsletters</p>
    {/* <button type="button" className="btn btn-link">News</button>
    <button type="button" className="btn btn-link">Newsletters</button> */}

    </div>
    
    </div>
    </div>
  )
}

export default Navbar