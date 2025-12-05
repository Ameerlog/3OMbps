import './App.css'
import CTASection from './components/CTASection'
import FAQ from './components/Faqs'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from "./components/Hero"
import MoreSection from './components/More'
import Navigation from './components/NavBar'
import Contact from './components/Contact'
import Section from './components/Section'
import Interactive from './components/Paralax'
import AboutSection from './components/Problem'
import AnimationScroll from './components/ui/ScrollAnimation'
import HowItWorks from './components/Works'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LearnMore from './pages/LearMore'
import BookNowPage from './pages/BookNow'
import Pricing from './components/Pricing'
import Main from './components/Main'
import Explore from './pages/Explore'

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>

        <Route
          path="/"
          element={
            <>
         <Main/>
         <Pricing/>
             
              {/* <Hero /> */}
              
              <Section />
             
              <AnimationScroll />
              <AboutSection />
              <CTASection />
              <HowItWorks />
              <Interactive />
              
              <FAQ />
              <MoreSection />
              <Footer />
            </>
          }
        />

        <Route path="/tools" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/book-now" element={<BookNowPage />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
