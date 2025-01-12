import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
// import Navbar from "./ClientSide/Shared/Navbar/Navbar";
// import Footer from "./ClientSide/Shared/Footer/Footer";
import AboutUs from "./ClientSide/AboutUs/AboutUs";
import ChooseUs from "./ClientSide/AboutUs/ChooseUs/ChooseUs";
import Team from "./ClientSide/AboutUs/Team/Team";
import ConsultationForm from "./ClientSide/BookConsultancy/BookConsultaion";
import ContactUs from "./ClientSide/ContactUs/ContactUs";
import Home from "./ClientSide/Home/Home";
import Layout from "./ClientSide/Main";
import Service from "./ClientSide/Service/Service";
// import OurPackagesBanner from "./ClientSide/ourPackages/OurPackagesBanner/ourPackagesBanner";
import FAQ from "./ClientSide/FAQ/FAQ";
import OurPackages from "./ClientSide/ourPackages/ourPackages";
import Employment from "./ClientSide/Employment/Employment";
import EmployeeForm from "./ClientSide/EmployeeForm/EmployeeForm";

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
