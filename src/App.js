
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layouts/Layout';
import Home from './Components/Pages/Home';
import { About } from './Components/Pages/About';

import { BackgroundBeams } from './Components/BackgroundBerams';
import { Contact } from './Components/Pages/Contact';
import ProductPage from './Components/Pages/ProductPage';
import AdminLogin from './Admin/pages/AdminLogin';
import AdminDashboard from './Admin/pages/AdminDashborad';




function App() {
 
  return (
   <>
   <BrowserRouter>
   <BackgroundBeams classname='bg-black h-screen'/>
    <Routes>
    <Route path="/AdminLogin" element={<AdminLogin />} /> 
    <Route path="/AdminDashboard" element={<AdminDashboard />} /> 
  
      
    <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} /> 
    <Route path="/About" element={<About />} /> 
    <Route path="/Contact" element={<Contact />} /> 
    <Route path="/Product" element={<ProductPage />} /> 



    </Route>
    </Routes>
   </BrowserRouter> 
  
   </>
  );
}

export default App;





   
  


