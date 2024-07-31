import './App.css'
import LandingPage from './components/export/landing-page'
import Navbar from './components/export/navbar'
import Footer from './components/export/footer';
import { Routes, Route } from 'react-router-dom';
import { SignupFormDemo } from './components/export/signup-form';
import { LoginFormDemo } from './components/export/login-form';


function App() {
  return (
    <div>
      <div className='navbar'>
        
      <Navbar />
      </div>
      <Routes>
        <Route path="/home" element={<LandingPage/>} />
        <Route path="/get-started" element={<SignupFormDemo/>} />
        <Route path="/login" element={<LoginFormDemo/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
