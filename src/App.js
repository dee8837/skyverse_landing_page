import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Team from './Pages/Team';
import { Routes, Route } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './components/Footer';
// import Gotoup from './components/Gotoup';



function App() {
  return (
   <>
      
      <Navbar/>
      <Routes>
     
        {/* <Route path='/' element={<Navbar />}/>  */}
         <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Team' element={<Team />} />
        {/* </Route>  */}
                 
      </Routes> 
      {/* <Gotoup/>  */}
      <Footer/>
    </>
    
  )
}

export default App;
