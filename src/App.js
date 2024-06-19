
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layouts/Layout';
import Home from './Components/Pages/Home';




function App() {
 
  return (
   <>
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} /> 
    


    </Route>
    </Routes>
   </BrowserRouter> 
  
   </>
  );
}

export default App;





   
  


