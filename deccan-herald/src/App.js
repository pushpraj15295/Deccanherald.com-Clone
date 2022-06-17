
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';

import Footer from './Components/Footer';
import Home from './Pages/Home';
import  Navbar  from './Components/Navbar';

import Entertentment from './Pages/Entertentment';
import Business from './pages1/Business';
import National from './pages1/National';
import Science from './pages1/Science';
import Technology from './pages1/Technology';
import Us from './pages1/Us';
import Sport from './pages1/Sport';
import EntertainmentDetails from './Pages/EntertainmentDetails';
import BusinessDetails from './pages1/BusinessDetails';
import NationalDetails from './pages1/NationalDetails';
import TechnologyDetails from './pages1/TechnologyDetails';
import UsDetails from './pages1/UsDetails';
import SportDetails from './pages1/SportDetails';
// import { useParams } from 'react-router-dom';

// import Tests from './pages1/Tests';
// import Test from './pages1/Test';
import TopData from './Pages/TopData';



function App() {

  // console.log(useParams(),"useparam")
  return (
    <> 
    <div className='App'>
    
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/entertentment' element={<Entertentment />} />
      <Route path='/entertentment/:index' element={<EntertainmentDetails />} />
      

      <Route path='/business' element={<Business />} />
      <Route path='/business/:index' element={<BusinessDetails />} />

      <Route path='/national' element={<National />} />
      <Route path='/national/:index' element={<NationalDetails />} />

      <Route path='/science' element={<Science />} />
      {/* <Route path='/science/:index' element={<ScienceDetails />} /> */}

      <Route path='/technology' element={<Technology />} />
      <Route path='/technology/:index' element={<TechnologyDetails />} />

      <Route path='/us' element={<Us />} />
      <Route path='/us/:index' element={<UsDetails />} />

      <Route path='/sport' element={<Sport />} />
      <Route path='/sport/:index' element={<SportDetails />} />
      
      {/* <Route path ="/national/*" element = { <Tests/>} />
      <Route path =":id" element = { <Test/>} /> */}
    </Routes>
        
        <Footer/>
        </div>
      
      
    </>
  );
}

export default App;
