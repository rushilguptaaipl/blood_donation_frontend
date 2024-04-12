import './App.css';
import Donation from './pages/donation/donation';
import {Routes , Route , BrowserRouter } from 'react-router-dom';
import Emergency from './pages/emergency/emergency';
import Home from './pages/home/home'

function App() {
  return (
   <>  
    <div> 
        <BrowserRouter>
          <Routes>
            <Route path="/donation" element={<Donation />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
   </>
  );
}

export default App;
