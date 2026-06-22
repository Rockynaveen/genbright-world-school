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
// import FamilyCampusCarousel from './components/carosueal'
import ParentQuestionsSection from './components/parents-section'
import FamiliesSection from './components/why-choose-us'
import BanayaraSection from './components/meet-banayra'
import CampusSection from './components/campus-section'
import ChildrenFirstSection from './components/learning-apparoach'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <ParentQuestionsSection/>
    <ChildrenFirstSection/>
    < FoundationsSection/>
    <BanayaraSection/>
    {/* <BanyaraSection/> */}
    <LearningWallsSection />
    <LeaveSchoolSection/>
    {/* <FamilyCampusCarousel/> */}
    <FamiliesSection/>
    <CampusSection/>
    <Footer />
  </StrictMode>,
)
