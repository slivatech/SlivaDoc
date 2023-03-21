import React from 'react'
import AboutSection from '../components/About/AboutSection'
import RecommendationSection from '../components/AnimalRecommendation/RecommendationSection'
import ArticleSection from '../components/Article/ArticleSection'
import DrugSection from '../components/Drug/DrugSection'
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
        <DrugSection />
        <RecommendationSection />
    </div>
  )
}

export default HomePage