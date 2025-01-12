import Footer from "../Shared/Footer/Footer";
import AboutBanner from "./AboutBanner/AboutBanner";
import CollaborateWithU from "./CollaborateWithU/CollaborateWithU";

const AboutUs = () => {
  return (
    <div className=" overflow-x-hidden">
      <AboutBanner></AboutBanner>
      {/* <ChooseUs></ChooseUs> */}
      <CollaborateWithU></CollaborateWithU>
      {/* <Team></Team> */}
      <div className="sectionGap bg-[#1a2633]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUs;
