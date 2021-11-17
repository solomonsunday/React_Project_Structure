import React from "react";
import Header from "../components/Header/Header";
import HomeBodyTop from "../components/Home/HomeBodyTop";
import BodyNav from "../components/BodyNav/BodyNav";
import BottomAboutSection from "../components/BottomAboutSection/BottomAboutSection";
import DealsSection from "../components/Product/DealsSection";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import DoubleImage from "../components/ImageCard/DoubleImage";
import SingleImage from "../components/ImageCard/SingleImage";
import Footer from "../components/Footer/Footer";
// import { connect } from "react-redux";

let homeImgs = {
  shoe: "/images/imageSection/ShoesAd.png",
  youghurt: "/images/imageSection/youghurtAd.png",
  megaSale: "/images/imageSection/megaSale.png",
  nailPolish: "/images/imageSection/nailPolish.png",
  blackFriday: "/images/imageSection/blackFridayImage.png",
};

function Home() {
  return (
    <div>
      <Header />
      <div className="body__wrapper putAtMiddle">
        <HomeBodyTop />
        <BodyNav />
        <DealsSection title="Recommended for you" className1="" className2="bgWhite" sliceFrom={0} sliceTo={6}/>
        <DealsSection title="Deals of The Day" className1="dealsSectionTwo" className2="bgRed" sliceFrom={0} sliceTo={6}/>
        <SingleImage img={homeImgs.blackFriday} />
        <FeaturedSection />
        <DoubleImage img1={homeImgs.shoe} img2={homeImgs.youghurt} linksTo="fashion"/>
        <DealsSection title="Deals of The Day" className1="dealsSectionTwo" className2="bgYellow" sliceFrom={0} sliceTo={6}/>
        <DealsSection title="Deals of The Day" className1="dealsSectionTwo" className2="bgGreen" sliceFrom={0} sliceTo={6}/>
        <DoubleImage img1={homeImgs.megaSale} img2={homeImgs.nailPolish} linksTo="fashion"/>
        <BottomAboutSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;