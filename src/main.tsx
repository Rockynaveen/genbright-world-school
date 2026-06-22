import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeroSection from './components/hero-section'
import Header from './components/common/header'
import Footer from './components/common/footer'
import LeaveSchoolSection from './components/cta-section'
import LearningWallsSection from './components/learning'
import FoundationsSection from './components/four-foundations'
// import BanyaraSection from './components/banyara-section'
import FamilyCampusCarousel from './components/carosueal'
import ParentQuestionsSection from './components/parents-section'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <ParentQuestionsSection/>
    < FoundationsSection/>
    {/* <BanyaraSection/> */}
    <LearningWallsSection />
    <LeaveSchoolSection/>
    <FamilyCampusCarousel/>
    <Footer />
  </StrictMode>,
)
