import './App.css';
import "./input.css";
import { Routes,Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DatailsPage';
import Navbar from './components/Navbar';


function App()  {
  return (
    <div className="bg-gradient-to-b from-[#5567eb] to-[#59f405] h-screen">
      <Navbar />
      <Routes>
       <Route path="/" element={<LandingPage />}></Route>
       <Route path="/detsils" element={<DetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
