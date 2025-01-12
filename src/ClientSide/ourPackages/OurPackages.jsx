import Footer from "../Shared/Footer/Footer";
import OurPackagesBanner from "./OurPackagesBanner/ourPackagesBanner";
import ServicePackage from "./ServicePackage/ServicePackage";

const OurPackages = () => {
  return (
    <div>
      <OurPackagesBanner></OurPackagesBanner>
      <ServicePackage></ServicePackage>
      <div className="sectionGap bg-[#1a2633]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default OurPackages;
