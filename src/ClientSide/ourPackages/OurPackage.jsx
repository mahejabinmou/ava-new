import Footer from "../Shared/Footer/Footer";
import OurPackageBanner from "./OurPackagesBanner/ourPackagesBanner";
import ServicePackage from "./ServicePackage/ServicePackage";

const OurPackage = () => {
	return (
		<div>
			<OurPackageBanner></OurPackageBanner>
			<ServicePackage></ServicePackage>
			<div className="sectionGap bg-[#1a2633]">
				<Footer></Footer>
			</div>
		</div>
	);
};

export default OurPackage;
