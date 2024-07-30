import './App.css'
import LandingPage from './components/export/landing-page'
import Navbar from './components/export/navbar'
import Footer from './components/export/footer';
function App() {

  return (
    <>
    <div className='navbar'>
    <Navbar >
      </Navbar>
    </div>
    <LandingPage></LandingPage>
      <Footer/>
    </>
  )
}

export default App
