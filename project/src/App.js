import './App.css';
import HomePage from './pages/HomePage';
import {Route, Routes} from   'react-router-dom';
import Particle from './components/Particle';
import NavigationBar from './components/global/NavigationBar';


function App() {
  return (
    <div>
      
      <NavigationBar />
      <Particle/>

      <Routes>
        <Route path= "" element={ <HomePage/> } />
      </Routes>
    
    </div>
  );
}

export default App;
