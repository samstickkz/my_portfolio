import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Swal from 'sweetalert2'



import ReactGA from 'react-ga';
ReactGA.initialize('G-DNNJ8CLK35');
ReactGA.pageview(window.location.pathname + window.location.search);

Swal.fire({
  title: 'Welcome to my Portfolio!',
  text: 'Hey its Sam,  i built this with react, look around and tell me what you think',
  icon: 'success',
  confirmButtonText: 'Cool'
})
const app = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    {/* <Services/> */}
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default app