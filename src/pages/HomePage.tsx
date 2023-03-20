import React from 'react'
import AboutSection from '../components/About/AboutSection'
import ArticleSection from '../components/Article/ArticleSection'
import NavButtons from '../components/NavButtons/NavButtons'
import OfferSection from '../components/Offers/OfferSection'
import ServiceSection from '../components/Service/ServiceSection'
// import Header from '../components/Header'

const HomePage = () => {
  return (
    <div>
        {/* <Header /> */}
        <AboutSection />
        <NavButtons />
        <OfferSection />
        <ServiceSection />
        <ArticleSection />
    </div>
  )
}

export default HomePage