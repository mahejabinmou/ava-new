import Footer from "../../Shared/Footer/Footer";

const ChooseUs = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("/images/choose.jpg")`,
              filter: "brightness(.4)",
            }}
            className="bg-no-repeat bg-center bg-cover w-full  
h-[420px] flex justify-center items-center"
          ></div>

          <div
            className="absolute inset-0 flex flex-col  justify-center max-w-[750px] px-[30px]
    md:px-[32px] lg:px-[80px]  xl:px-[100px]  2xl:px-[150px] 
        "
          >
            <h1 className="headTwo text-white pb-[12px] font-semibold">
              Why Choose Aba Consultation
            </h1>

            <p className=" bodyText text-white md:max-w-[550px] font-normal">
              At ABA Consulting, . Our mission is to equip autism centers with
              innovative strategies, expert guidance, and tailored resources
              that drive impactful outcomes.
            </p>
          </div>
        </div>
        <div
          className="pt-[80px] px-[30px]
   md:pt-[80px] md:px-[32px]
   lg:px-[80px] lg:pt-[80px]
   xl:px-[100px] xl:pt-[100px]
   2xl:px-[150px] 2xl:pt-[100px] "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-[60px] justify-center items-center">
            <div className="md:h-[588px] h-[350px] ">
              <img
                src="/images/chooseus.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="headTwo pb-[16px] text-[#0E0D0D]  font-outfit font-semibold">
                Why Choose Us
              </h1>
              <p className="bodyText text-[#0E0D0DCC]/[.8] pb-[16px]  font-normal">
                At ABA Consulting, we partner with autism centers to ensure
                excellence. Our expert team offers tailored solutions, from
                regulatory compliance to top-tier staffing, allowing you to
                focus on exceptional care. With guaranteed results like
                completing CMDEs in five days and audit-ready mock scenarios, we
                handle the challenges so you can thrive.
              </p>
              <p className="text-[#0E0D0D] pb-[14px] font-normal bodyText font-inter">
                <span className="text-[#FF8C00] font-semibold menuText font-inter">
                  1.Customized Solutions for Your Unique Needs:
                </span>{" "}
                We tailor our services to meet the specific goals and challenges
                of your agency. Whether it’s staffing, administrative support,
                or operational efficiency, we ensure our solutions align
                perfectly with your needs
              </p>

              <p className="text-[#0E0D0D] pb-[14px] font-normal bodyText font-inter">
                <span className="text-[#FF8C00] font-semibold menuText font-inter">
                  2.Proven Expertise in EI-EIDBI Services:
                </span>
                 With years of experience partnering with 30+ agencies, our
                skilled team of QSPs, BCBAs, SLPs, and OTs enhances both care
                quality and operational efficiency.
              </p>

              <p className="text-[#0E0D0D]  font-normal bodyText font-inter">
                <span className="text-[#FF8C00] font-semibold menuText font-inter">
                  2. Seamless Operations for Your Peace of Mind:
                </span>
                 We manage onboarding, affiliations, and administrative tasks,
                allowing you to focus on providing exceptional care.
              </p>
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

export default ChooseUs;
