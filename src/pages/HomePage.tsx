import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutSection from "../components/About/AboutSection";
import RecommendationSection from "../components/AnimalRecommendation/RecommendationSection";
import ArticleSection from "../components/Article/ArticleSection";
import DrugSection from "../components/Drug/DrugSection";
import NavButtons from "../components/NavButtons/NavButtons";
import OfferSection from "../components/Offers/OfferSection";
import ServiceSection from "../components/Service/ServiceSection";
import SubscriptionSection from "../components/SubscriptionSection/SubscriptionSection";
import Footer from "../components/Footer/Footer";

interface HomePageProps {
  width: number
}
const HomePage: React.FC<HomePageProps> = ({width}) => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar width={width} />
      <AboutSection />
      <NavButtons />
      <OfferSection />
      <ServiceSection />
      <ArticleSection />
      <DrugSection />
      <RecommendationSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
