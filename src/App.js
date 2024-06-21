
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layouts/Layout';
import Home from './Components/Pages/Home';
import { About } from './Components/Pages/About';





function App() {
 
  return (
   <>
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} /> 
    <Route path="/About" element={<About />} /> 
    
    


    </Route>
    </Routes>
   </BrowserRouter> 
  
   </>
  );
}

export default App;





   
  


