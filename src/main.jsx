import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutUs from "./ClientSide/AboutUs/AboutUs";
import ChooseUs from "./ClientSide/AboutUs/ChooseUs/ChooseUs";
import Team from "./ClientSide/AboutUs/Team/Team";
import ConsultationForm from "./ClientSide/BookConsultancy/BookConsultaion";
import ContactUs from "./ClientSide/ContactUs/ContactUs";
import EmployeeForm from "./ClientSide/EmployeeForm/EmployeeForm";
import Employment from "./ClientSide/Employment/Employment";
import FAQ from "./ClientSide/FAQ/FAQ";
import Home from "./ClientSide/Home/Home";
import Layout from "./ClientSide/Main";
import OurPackages from "./ClientSide/ourPackages/ourPackages";
import Service from "./ClientSide/Service/Service";
import "./index.css";

// Parent Layout Component

// Define routes
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/aboutUs",
				element: <AboutUs />,
			},
			{
				path: "/service",
				element: <Service />,
			},
			{
				path: "/consultation",
				element: <ConsultationForm></ConsultationForm>,
			},
			{
				path: "/contact",
				element: <ContactUs></ContactUs>,
			},
			{
				path: "/ChooseUs",
				element: <ChooseUs></ChooseUs>,
			},
			{
				path: "/employment",
				element: <Employment></Employment>,
			},
			{
				path: "/employmentForm",
				element: <EmployeeForm></EmployeeForm>,
			},
			{
				path: "/FAQ",
				element: <FAQ></FAQ>,
			},
			{
				path: "/ourTeam",
				element: <Team></Team>,
			},
			{
				path: "/ourPackages",
				element: <OurPackages></OurPackages>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
