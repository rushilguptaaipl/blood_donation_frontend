import './App.css';
import Donation from './pages/donation/donation';
import { Router, Routes , Route , BrowserRouter } from 'react-router-dom';
import Emergency from './pages/emergency/emergency';

function App() {
  return (
   <>  
    <div> 
        <BrowserRouter>
          <Routes>
            <Route path="/donation" element={<Donation />} />
            <Route path="/emergency" element={<Emergency />} />
          </Routes>
        </BrowserRouter>
      </div>
   </>
  );
}

export default App;
