import { useState } from "react";

const Drive = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize with 0 for the first FAQ

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordion1 = [
    {
      question: "Compliance Assistance",
      answer:
        "Our team offers expert guidance in understanding and adhering to both state and federal regulations. With monthly reviews, we ensure your operations remain consistently compliant, mitigating risks and fostering a culture of regulatory excellence.",
    },
    {
      question: "Mock Audit",
      answer:
        "Experience real-world audit scenarios with our pop-up mock audits. These exercises are designed to prepare your team for actual evaluations, enhancing their readiness and ensuring compliance standards are met effortlessly.",
    },
    {
      question: "Day-to-Day Service Supports",
      answer:
        "We provide ongoing support and educational resources, available 24/7. Our team is dedicated to assisting you in your daily operational needs, ensuring smooth and compliant business processes.",
    },
    {
      question: "Billing Review",
      answer:
        "Our meticulous billing review process examines your billed lines for accuracy and efficiency. Additionally, we offer billing training to enhance your team's skills, ensuring financial precision and integrity",
    },
  ];
  const accordion2 = [
    {
      question: "Expert staffing for guaranteed results",
      answer:
        "We offer a roster of highly qualified professionals, including Board Certified Behavior Analysts, Qualified Supervising Professionals, Occupational Therapists, and Speech Therapists. Not only do we guarantee their hours, but we also save you valuable time and resources in recruitment, ensuring that you have the best talent on your team.",
    },
    {
      question: "Quick CMDE completion guaranteed",
      answer:
        "Facilitating the completion of CMDE's if your current QSP doesn't have enough bandwidth to complete them We provide a 5-day guaranteed turn-around time.",
    },
    // {
    // 	question: "Expertise to build the things",
    // 	answer: "Duis vel massa eleifend, porta est non, feugiat metus.",
    // },
    // {
    // 	question: "Expertise to build the things",
    // 	answer: "Duis vel massa eleifend, porta est non, feugiat metus.",
    // },
  ];

  const accordion3 = [
    {
      question: "Comprehensive compliance and staffing solution",
      answer:
        "By choosing our Comprehensive Package, you're not just getting individual services; you're embracing a synergistic solution that blends compliance expertise with top-notch staffing. This package is tailored to keep your company ahead of compliance mandates while ensuring your team is staffed with the finest professionals in the industry.",
    },
    // {
    // 	question: "Expertise to build the things",
    // 	answer: "Duis vel massa eleifend, porta est non, feugiat metus.",
    // },
    // {
    // 	question: "Expertise to build the things",
    // 	answer: "Duis vel massa eleifend, porta est non, feugiat metus.",
    // },
    // {
    // 	question: "Expertise to build the things",
    // 	answer: "Duis vel massa eleifend, porta est non, feugiat metus.",
    // },
  ];

  return (
    <div
      className="grid grid-cols-1 gap-[50px] mt-[30px] px-[30px]
    md:mt-[32px] md:px-[32px]
    lg:px-[80px] lg:mt-[30px]
    xl:px-[100px] xl:mt-[80px]
    2xl:px-[150px] 2xl:mt-[80px]"
    >
      {/* First Copy */}
      <div
        id="assistance"
        className="grid grid-cols-1 xl:grid-cols-2 gap-[50px] items-center my-5"
      >
        {/* Image */}
        <div className="h-[400px] lg:h-[554px]">
          <img
            // src="https://incomparable-kashata-7a0767.netlify.app/images/serviceBoy.png"
            src="/images/serviceBoy.png"
            className="h-full w-full object-cover rounded-[8px]"
            alt=""
          />
        </div>
        {/* Text and Accordion */}
        <div className="rounded-lg">
          <h2 className="text-[#0E0D0DCC] font-semibold mb-[20px] headTwo leading-[40px]">
            Compliance Assistance
          </h2>
          <p className="text-[#0E0D0DCC]/[.8] mb-[20px] font-normal bodyText">
            ABA Consulting helps ensure your center stays compliant with state
            and federal regulations through expert guidance and monthly reviews,
            minimizing risks and keeping operations smooth and efficient.
          </p>
          <div className="space-y-4">
            {accordion1.map((item, index) => (
              <div key={index} className="">
                <button
                  className={`w-full flex justify-between items-center p-4 ${
                    activeIndex === index
                      ? "bg-[#FF8C00] text-white border-none"
                      : "bg-white hover:bg-gray-100 text-[#0E0D0DCC]/[.6] border border-[#CBD5E1] rounded-[8px]"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-normal bodyText">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="p-4 text-[#0E0D0DCC]/[.8] bg-white font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Copy */}
      <div
        id="solutions"
        className="grid grid-cols-1 xl:grid-cols-2 gap-[50px] items-center my-5"
      >
        {/* Image */}
        <div className="h-[400px] lg:h-[554px] order-1 xl:order-2">
          <img
            // src="https://incomparable-kashata-7a0767.netlify.app/images/serviceBoy.png"
            src="/images/Staffing.jpg"
            className="h-full w-full object-cover rounded-[8px]"
            alt=""
          />
        </div>
        {/* Text and Accordion */}
        <div className="rounded-lg order-2 xl:order-1">
          <h2 className="text-[#0E0D0DCC] font-semibold mb-[20px] headTwo leading-[40px]">
            Staffing Solutions
          </h2>
          <p className="text-[#0E0D0DCC]/[.8] mb-[20px] font-normal bodyText">
            We provide qualified professionals, including BCBAs, QSPs, OTs, and
            Speech Therapists, guaranteeing staffing hours and streamlining the
            hiring process to meet your center’s needs, along with quick CMDE
            completion.
          </p>
          <div className="space-y-4">
            {accordion2.map((item, index) => (
              <div key={index} className="">
                <button
                  className={`w-full flex justify-between items-center p-4  ${
                    activeIndex === index
                      ? "bg-[#FF8C00] text-white border-none"
                      : "bg-white hover:bg-gray-100 text-[#0E0D0DCC]/[.6] border border-[#CBD5E1] rounded-[8px]"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-normal bodyText">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="p-4  text-[#0E0D0DCC]/[.8] bg-white font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Copy */}
      <div
        id="package"
        className="grid grid-cols-1 xl:grid-cols-2 gap-[50px] items-center my-5"
      >
        {/* Image */}
        <div className="h-[400px] lg:h-[554px]">
          <img
            // src="https://incomparable-kashata-7a0767.netlify.app/images/serviceBoy.png"
            src="/images/Comprehensive.jpg"
            className="h-full w-full object-cover rounded-[8px]"
            alt=""
          />
        </div>
        {/* Text and Accordion */}
        <div className="rounded-lg">
          <h2 className="text-[#0E0D0DCC] font-semibold mb-[20px] headTwo leading-[40px]">
            Comprehensive Package
          </h2>
          <p className="text-[#0E0D0DCC]/[.8] mb-[20px] font-normal bodyText">
            Our all-in-one package combines Compliance Assistance, Mock Audits,
            Day-to-Day Support, Billing Review, and Staffing Solutions, ensuring
            your center is always compliant, well-staffed, and efficient.
          </p>
          <div className="space-y-4">
            {accordion3.map((item, index) => (
              <div key={index} className="">
                <button
                  className={`w-full flex justify-between items-center p-4 ${
                    activeIndex === index
                      ? "bg-[#FF8C00] text-white border-none"
                      : "bg-white hover:bg-gray-100 text-[#0E0D0DCC]/[.6] border border-[#CBD5E1] rounded-[8px]"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-normal bodyText">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="p-4 text-[#0E0D0DCC]/[.8] bg-white font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drive;
