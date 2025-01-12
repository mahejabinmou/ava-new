/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
// import Faq from "../Service/Faq/Faq";
import Footer from "../Shared/Footer/Footer";

/* eslint-disable react/prop-types */
const Home = () => {
	return (
		<div className="bg-white">
			<div>
				<div className="bg-[url('/images/home/hero/homehero.png')] w-full min-h-[693px] pt-[1px] bg-no-repeat bg-cover pb-5">
					<div
						className=" px-[30px]
                    mt-[90px]
   md:mt-[90px] md:px-[32px]
   lg:px-[80px] lg:mt-[80px]
   xl:px-[100px] xl:mt-[100px]
   2xl:px-[150px] 2xl:mt-[100px] pt-[30px] text-[#0E0D0D]"
					>
						<div className=" ">
							<h1 className="headOne mb-[20px] font-outfit text-[#0E0D0D] max-w-[996px] 2xl:max-w-auto font-semibold">
								Helping You Give <br /> Therapy Beyond Belief
							</h1>
							<div className="flex justify-between flex-col md:flex-row gap-2">
								<div>
									<p className="max-w-[864px] bodyText">
										At the core of our identity is a resolute commitment to
										enhancing the lives of individuals with ASD through the
										power of ABA. We believe in fostering a world where every
										person, regardless of their unique abilities, has the
										opportunity to thrive and reach their fullest potential. Our
										mission is not merely a statement but a guiding principle
										that propels us forward each day.
									</p>

									<div className="hidden md:flex items-center">
										<button className="group flex max-w-[175px] items-center p-3 gap-1 border-[1px] border-[#397CCA] rounded-[8px] mt-[30px] text-[18px] font-semibold text-[#397CCA] hover:bg-[#397CCA] hover:text-white transition duration-300">
											Get a Quote
											<svg
												className="w-6 h-6 text-[#397CCA] group-hover:text-white transition duration-300"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M6 17.6L15.6 8L7 8L7 6L19 6L19 18L17 18L17 9.4L7.4 19L6 17.6Z"
													fill="currentColor"
												/>
											</svg>
										</button>
									</div>
								</div>

								{/* <div className="flex md:block w-full md:w-auto mt-4 md:mt-10 flex-col justify-center md:justify-normal">
                  <div className="max-w-[233px] lg:mx-auto">
                    <img
                      src="https://i.ibb.co.com/wMhTbtJ/ABA-image-Website-2.png"
                      alt="watchvideo"
                      className="max-w-[233px] mx-auto object-cover"
                    />
                    <div
                      className="rounded-b-[16px] py-[14px] bg-white"
                      style={{
                        boxShadow: "0px 1px 8.9px 0px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <button className="text-center w-full max-w-[233px] block smallBodyText">
                        Watch Intro Video
                      </button>
                    </div>
                  </div>
                </div> */}

								<div className="md:hidden flex lg:justify-center">
									<button className="group flex max-w-[175px] items-center p-3 gap-1 border-[1px] border-[#397CCA] rounded-[8px] mt-[30px] text-[18px] font-semibold text-[#397CCA] hover:bg-[#397CCA] hover:text-white transition duration-300">
										Get a Quote
										<svg
											className="w-6 h-6 text-[#397CCA] group-hover:text-white transition duration-300"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M6 17.6L15.6 8L7 8L7 6L19 6L19 18L17 18L17 9.4L7.4 19L6 17.6Z"
												fill="currentColor"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" sectionGap ">
					<div className="lg:block hidden">
						<div className=" grid grid-cols-1  lg:grid-cols-2 items-center  gap-[80px]  ">
							<div className="   ">
								<img
									src="https://i.ibb.co.com/b1DGfRm/consultant.jpg"
									className="w-full rounded-md"
								/>
							</div>
							<div className=" ">
								<div>
									<SectionIndicator status={"About Us"} />
									<h2 className=" headTwo mt-[30px] font-semibold">
										ABA Consulting <br /> is renowned for <br /> its expertise
									</h2>
									<p className="bodyText mt-[20px]">
										ABA Consulting is renowned for its expertise in assisting
										autism centers, ensuring their compliance and successful
										completion of numerous audits. At the heart of our work is a
										dedication to improving the lives of individuals with Autism
										Spectrum Disorder (ASD) through Applied Behavior Analysis
										(ABA). Our mission is deeply ingrained in our approach,
										guiding our every action. We envision a world where every
										person, regardless of their abilities, can thrive and
										achieve their full potential.
									</p>
									<div className="mt-[20px]">
										{/* <Link to="/aboutUs">
                      <button className="menuText font-semibold p-3 bg-[#397CCA] text-white flex items-center justify-between gap-1 rounded-[8px] transition duration-300 ease-in-out hover:bg-[#397CCA] hover:scale-105">
                        Learn More
                        <img
                          src="/images/home/hero/material-symbols_arrow-insert (1).svg"
                          alt=""
                        />
                      </button>
                    </Link> */}

										<Link to="/ChooseUs">
											<button className="group flex max-w-[175px] items-center p-3 gap-1 border-[1px] border-[#397CCA] rounded-[8px] mt-[30px] text-[18px] font-semibold text-[#397CCA] hover:bg-[#397CCA] hover:text-white transition duration-300">
												Learn More
												<svg
													className="w-6 h-6 text-[#397CCA] group-hover:text-white transition duration-300"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M6 17.6L15.6 8L7 8L7 6L19 6L19 18L17 18L17 9.4L7.4 19L6 17.6Z"
														fill="currentColor"
													/>
												</svg>
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* phone tab */}
					<div className=" lg:hidden block ">
						<div className=" gap-2">
							<img
								src="https://i.ibb.co.com/b1DGfRm/consultant.jpg"
								className="w-full rounded-md"
							/>
						</div>
						<div className="mt-[30px] ">
							<div>
								<SectionIndicator status={"About Us"} />
								<h2 className=" headTwo mt-[30px] font-semibold">
									ABA Consulting is renowned for its expertise
								</h2>
								<p className="bodyText mt-[20px]">
									ABA Consulting is renowned for its expertise in assisting
									autism centers, ensuring their compliance and successful
									completion of numerous audits. At the heart of our work is a
									dedication to improving the lives of individuals with Autism
									Spectrum Disorder (ASD) through Applied Behavior Analysis
									(ABA). Our mission is deeply ingrained in our approach,
									guiding our every action. We envision a world where every
									person, regardless of their abilities, can thrive and achieve
									their full potential.
								</p>
								<div className="mt-[20px]">
									<Link to="/aboutUs">
										<button className="group flex max-w-[175px] items-center p-3 gap-1 border-[1px] border-[#397CCA] rounded-[8px] mt-[30px] text-[18px] font-semibold text-[#397CCA] hover:bg-[#397CCA] hover:text-white transition duration-300">
											Learn More
											<svg
												className="w-6 h-6 text-[#397CCA] group-hover:text-white transition duration-300"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M6 17.6L15.6 8L7 8L7 6L19 6L19 18L17 18L17 9.4L7.4 19L6 17.6Z"
													fill="currentColor"
												/>
											</svg>
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*chooseUs  */}
				{/* <div className="sectionGap">
          <div className="whychooseus grid grid-cols-1 lg:grid-cols-2 items-center lg:justify-between  gap-[80px]">
            <div className="">
              <SectionIndicator status={"Choose us"} />
              <div className="">
                <h2 className="headTwo font-semibold mt-[30px]">
                  Why Aba counsulting
                </h2>
                <p className="text-[#0E0D0DCC] bodyText mt-[20px] font-inter">
                  With a track record of success and a commitment to excellence,
                  we bring expertise, innovation, and personalized strategies to
                  every project. Our goal is to help you overcome challenges,
                  seize opportunities, and achieve sustainable growth for your
                  business.
                </p>
                <div className="grid grid-cols-1 gap-[10px] lg:gap-0 lg:grid-cols-3 items-center justify-between mt-[20px]">
                  <div className="">
                    <span className="text-[#FF8C00] bodyText font-bold ">
                      10+
                    </span>
                    <p className="bodyText font-inter text-[#1F1E1ECC]/[.8] font-normal pt-[10px]">
                      years experience
                    </p>
                  </div>
                  <div>
                    <span className="text-[#FF8C00] bodyText font-bold ">
                      500+
                    </span>
                    <p className="pt-[10px] text-[#1F1E1ECC]/[.8] bodyText font-inter font-normal">
                      Trusted by clients
                    </p>
                  </div>
                  <div>
                    <span className="text-[#FF8C00] bodyText font-bold ">
                      Tailored{" "}
                    </span>
                    <p className="pt-[10px] text-[#1F1E1ECC]/[.8] bodyText font-inter font-normal">
                      solutions for business{" "}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <button className="group flex max-w-[175px] items-center p-3 gap-1 border-[1px] border-[#397CCA] rounded-[8px] mt-[30px] text-[18px] font-semibold text-[#397CCA] hover:bg-[#397CCA] hover:text-white transition duration-300">
                    Learn More
                    <svg
                      className="w-6 h-6 text-[#397CCA] group-hover:text-white transition duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 17.6L15.6 8L7 8L7 6L19 6L19 18L17 18L17 9.4L7.4 19L6 17.6Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-[50px] lg:mt-0 2xl:min-w-[700px] ">
              <img
                src="/images/home/hero/aunty.jpg"
                alt=""
                className="w-full "
              />
            </div>
          </div>
        </div> */}

				{/* <Faq /> */}

				{/* <div className="sectionGap">
          <div className="ourservices max-w-[900px]">
            <SectionIndicator status={"Our Service"} />
            <h2 className="text-[30px] headTwo font-semibold mt-[30px]">
              Our Services for You
            </h2>
            <p className="text-[#0E0D0DCC] bodyText mt-[20px] font-inter !text-[14px]">
              Our expert consultancy services are crafted to meet the unique
              challenges of your business. Whether you&apos; re looking to
              improve strategy, enhance operations, or boost growth, we’re here
              to help.
            </p>
          </div>
        </div>

        <Services /> */}

				{/* Meet the Experts */}
				{/* <div className="sectionGap meet-experts">
          <div className="ourservices max-w-[900px]">
            <SectionIndicator status={"Our Team"} />
            <h2 className="headTwo font-semibold mt-[30px]">
              Meet the Experts
            </h2>
            <p className="text-[#0E0D0DCC] bodyText mt-[20px] font-inter ">
              Our team of skilled professionals brings experience, innovation,
              and dedication to help your business succeed. We work closely with
              you to deliver tailored solutions and achieve lasting results
            </p>
          </div>
        </div> */}
				{/*  */}
				{/* <div
          className="  px-[30px]
    md:px-[32px]
   lg:px-[80px] 
   xl:px-[100px] 
   2xl:px-[150px]  mx-auto expert bg-[url('/images/home/hero/expertbg.png')] bg-cover bg-center bg-no-repeat min-h-[630px] xl:min-h-[630px] lg:min-h-[500px] mt-[30px] lg:mt-[50px]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg w-full"
              >
               
                <img
                  alt="experts"
                  src={expert.img}
                  className="group-hover:scale-110 transition-transform duration-500 w-full"
                />

                
                <div
                  className={`absolute inset-0 bg-[#6195d2] }  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}
                >
                  <div className="flex flex-col gap-3 items-center">
                    <img
                      src={expert.img}
                      className="w-[70px] h-[70px] rounded-full"
                    />
                    <div>
                      <p className="text-white text-[18px] text-center font-semibold">
                        Sarah Mim
                      </p>
                      <p className="bodyText mt-1 text-white font-inter text-center">
                        Language Life, Art Skills
                      </p>
                      <div className="flex items-center gap-[14px] mt-[14px] justify-center">
                        <img
                          src="/images/home/hero/socialIcons/mingcute_facebook-fill.svg"
                          alt="facebook"
                          className="cursor-pointer"
                        />
                        <img
                          src="/images/home/hero/socialIcons/ri_instagram-fill.svg"
                          className="cursor-pointer"
                          alt="Instagram"
                        />
                        <img
                          src="/images/home/hero/socialIcons/pajamas_twitter.svg"
                          className="cursor-pointer"
                          alt="twitter"
                        />
                        <img
                          src="/images/home/hero/socialIcons/mdi_linkedin.svg"
                          className="cursor-pointer"
                          alt="linkedin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
				{/*  */}
				<div className=" sectionGap grid grid-cols-1 xl:grid-cols-2 gap-[80px]    items-center ">
					<div className="">
						<img
							src="/images/testmonial.png"
							alt=""
							className=" w-full rounded-md"
						/>
					</div>

					<div className=" mt-0 md:mt-[30px]  ">
						<SectionIndicator status={"Testimonials"} />
						<h2 className="headTwo font-semibold mt-[30px]">
							What Our Clients Saying
						</h2>
						<p className="text-[#0E0D0DCC] bodyText mt-[20px] font-inter ">
							Partner with ABA Consulting to unlock seamless compliance,
							efficient staffing, and operational excellence. Let us handle the
							complexities so you can focus on delivering the best care for
							individuals with ASD.
						</p>
						<div
							className="p-5 rounded-[16px] xl:mt-[46px] lg:mt-[30px] mt-[46px] relative"
							style={{ backgroundColor: "rgba(57, 124, 202, 0.80)" }}
						>
							{/* <h4 className="menuText font-semibold text-white">John Cena</h4> */}
							<p className="font-inter md:bodyText text-[rgba(255,255,255,0.8)] mt-[10px]">
								“ABA Consulting has been a game-changer for our center. Their
								expertise in compliance and staffing has allowed us to focus on
								what truly matters—delivering quality care to individuals with
								ASD. The team is incredibly responsive and always goes above and
								beyond to ensure we’re on track. Thanks to their support, we’ve
								been able to streamline operations and reduce the stress of
								audits and staffing challenges.” <br />
								<br /> — Sarah L., Executive Director, Autism Care Center
							</p>
							<img
								src="/images/home/hero/koma.png"
								alt=""
								className="absolute top-0 right-[74px] -translate-y-1/2"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="sectionGap bg-[#1a2633]">
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Home;

export const SectionIndicator = ({ status }) => {
	return (
		<div className="flex">
			<div
				className="px-6 py-[6px] min-w-[143px] flex items-center gap-[10px] justify-between rounded-[16px]"
				style={{ backgroundColor: "rgba(255, 161, 0, 0.12)" }}
			>
				<p className="w-[10px] h-[10px] rounded-full bg-[#FF8C00]"></p>
				<p className="menuText font-semibold text-[#FF8C00]"> {status}</p>
			</div>
		</div>
	);
};
const data = [
	{
		title: "Compliance Assistance",
		icon: "/images/home/hero/headphone.svg", // Replace with a suitable icon or SVG
		items: [
			"Mock Audits",
			"Day to Day Services",
			"Billing Review",
			"Compliance Assistance",
		],
	},
	{
		title: "Staffing Solutions",
		icon: "/images/home/hero/man.svg", // Replace with a suitable icon or SVG
		items: [
			"Board Certified Behavior Analyst (BCBA)",
			"Qualified Supervising Professional (QSP)",
			"Occupational Therapist (OT) Speech Therapist",
		],
	},
	{
		title: "Comprehensive Package",
		icon: "/images/home/hero/public.svg", // Replace with a suitable icon or SVG
		items: [
			"Mock Audits",
			"Day to Day Services",
			"Billing Review",
			"Compliance Assistance",
			"Staffing Solutions",
		],
	},
];

export const Services = () => {
	return (
		<div className="bg-[#1B2633] text-white py-8 md:pt-8  min-[440px] mt-[30px] md:pb-[60px]">
			<div className="sectionGap flex-col gap-5 md:grid md:grid-cols-2 lg:flex-row !mt-0 mx-auto lg:flex lg:gap-[15px] xl:gap-[35px] justify-between">
				{data.map((service, index) => (
					<div
						key={index}
						className="flex gap-[15px] xl:gap-[35px] lg:items-start "
					>
						<div
							className={`flex flex-col mt-[50px] lg:mt-[32px]  ${
								index === data.length - 1 ? "justify-center" : ""
							}`}
						>
							<div className="text-4xl mb-[20px] lg:mb-4">
								<img src={service.icon} alt="icon" />
							</div>
							<h3 className="text-[24px] font-semibold text-nowrap mb-[10px]">
								{service.title}
							</h3>
							<ul className="space-y-2 text-[16px] font-inter mt-2">
								{service.items.map((item, i) => (
									<li
										key={i}
										className="text-sm list-none flex items-center gap-[13px]"
									>
										<span className="w-[9px] h-[9px] bg-[#D9D9D9] rounded-full"></span>
										<span className="opacity-[.8]">{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="w-[0.5px] h-[175px] mt-28 bg-white hidden lg:block"></div>
					</div>
				))}
				<div className="flex items-center Lg:justify-center mt-[30px] mb-[40px] lg:mb-0 lg:mt-0">
					<button className="xl:w-[151px] xl:h-[151px] w-[130px] h-[130px] flex flex-col justify-center items-center gap-[10px]  rounded-full bg-[#FF8C00] text-[18px] font-semibold">
						Learn More
						<img src="/images/home/hero/material-symbols_arrow-insert (2).svg" />
					</button>
				</div>
			</div>
		</div>
	);
};

export const experts = [
	{
		img: "/images/home/hero/experts/e1.jpg",
	},
	{
		img: "/images/home/hero/experts/e2.jpg",
	},
	{
		img: "/images/home/hero/experts/e3.jpg",
	},
	{
		img: "/images/home/hero/experts/e4.jpg",
	},
	{
		img: "/images/home/hero/experts/e5.jpg",
	},
	{
		img: "/images/home/hero/experts/e6.jpg",
	},
	{
		img: "/images/home/hero/experts/e7.jpg",
	},
	{
		img: "/images/home/hero/experts/e2.jpg",
	},
];
