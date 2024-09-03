import './App.css'
import About from './components/About/About'
import ArtigosCientificos from './components/ArtigosCientificos/ArtigosCientificos'
import ComoFunciona from './components/ComoFunciona/ComoFunciona'
import CTASection from './components/CTA/CTASection.JSX'
import Equipe from './components/Equipe/Equipe'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Service from './components/Service/Service'


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <ComoFunciona/>
      <ArtigosCientificos/>
      <Equipe/>
      <CTASection/>
      <Footer/>
    </>
  )
}

export default App
