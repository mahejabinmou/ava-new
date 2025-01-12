import Footer from "../Shared/Footer/Footer";
import Benifit from "./Benifit/Benifit";
import Application from "./EmployBanner/Application/Application";
import EmployBanner from "./EmployBanner/EmployBanner";
import Opportunity from "./Opportunity/Opportunity";

const Employment = () => {
	return (
		<div>
			<EmployBanner></EmployBanner>
			<Opportunity></Opportunity>
			<Application></Application>
			<Benifit></Benifit>
			<div className="sectionGap bg-[#1a2633]">
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Employment;
