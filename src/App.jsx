import './App.css'
import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Stats from './components/stats.jsx'
import ToolsSection from './components/toolsSection.jsx'
import Steps from './components/steps.jsx'
import Pricing from './components/pricing.jsx'
import FooterInfo from './components/footerInfo.jsx'
import { useState } from 'react'
import { ToastContainer} from 'react-toastify';
import Footer from './components/footer.jsx'

function App() {

  const [cartItems, setCartItems] = useState([])
  return (
    <>
      <Header cartItems={cartItems} />
      <Hero/>
      <Stats/>
      <ToolsSection cartItems={cartItems} setCartItems={setCartItems} />
      <Steps/>
      <Pricing/>
      <FooterInfo/>
      <ToastContainer />
      <Footer/>
    </>
  )
}

export default App
