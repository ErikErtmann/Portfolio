import './App.css';
import HomePage from './pages/HomePage';
import {Route, Routes} from   'react-router-dom';
import Particle from './components/global/Particle';
import NavigationBar from './components/global/NavigationBar';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */


function App() {
  return (
    <div>
      
      <NavigationBar />
      <Particle/>

      <Routes>
        <Route path= "" element={ <HomePage/> } />
      </Routes>

      <div className='content' >
        <a className='block'id="about"></a>
        <About/>
      </div>

      <div className='content' >
      <a className='block'id="resume"></a>
        <Resume/>
      </div>

      <div className='content' >
      <a className='block'id="contact"></a>
       <Contact/>
      </div>

    </div>
  );
}

export default App;
