import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const Opportunity = () => {
  const [active, setActive] = useState("Fulltime"); // Default active button is "Fulltime"

  const handleToggle = (type) => {
    setActive(type); // Update the active state based on the button clicked
  };
  return (
    <div
      className="px-[30px] md:px-[32px] lg:px-[80px]  xl:px-[100px]  2xl:px-[150px]
   mt-[30px]  md:mt-[30px] 
    lg:mt-[30px]
   xl:mt-[50px]
   2xl:mt-[50px]"
    >
      <div className="md:text-center text-left">
        <h1 className="headTwo font-semibold ">
          Employment Opportunities at ABA Consulting LLC
        </h1>
        <p className="text-[#0E0D0DCC] bodyText mt-[20px] font-inter max-w-[1032px] mx-auto">
          We are always looking for dedicated professionals to join our growing
          team at ABA Consulting LLC. If you're passionate about making a
          positive impact and advancing your career in a supportive environment,
          we'd love to hear from you. Below you will find the application
          process and all necessary documents for employment and our open
          positions
        </p>
      </div>

      <div className="mt-[40px] lg:mt-[50px] flex flex-col gap-[10px]">
        <div className="px-[20px] py-[24px] bg-[#FFFFFF] border border-[#000000]/[.1]    rounded-[8px] ">
          <div className="mt-[50px]">
            <img
              src="/images/ABA-Consulting-Logo.webp"
              alt=""
              className="h-[60px] w-[60px]  object-cover rounded-[50px]"
            />
            <h1 className="employCardHead text-[#0E0D0DCC] mt-[15px]">
              Qualified Supervising Professional (QSP):
            </h1>
            <p className=" cardText  mt-[15px]">
              The ideal candidate will have a completed Master’s degree and hold
              active independent clinical licensures (LICSW, LPCC, LMFT, NP,
              PsyD). Previous experience working with preschool-aged children or
              adolescents, preferably in a clinical setting, is required. A
              strong commitment to promoting diversity, multiculturalism, and
              inclusion is essential, with a focus on culturally responsive
              practices, internal self-awareness, and reflection. There are two
              caseload opportunities available: an Outpatient Caseload, where
              the therapist primarily provides individual and family therapy to
              children, adolescents, or adults, or a Split Caseload, which
              combines Early Childhood Day Treatment (group therapy) with
              Outpatient therapy (individual and family). Key responsibilities
              include implementing personalized and responsive treatment plans,
              conducting initial screenings and assessments to address clients’
              behavioral, emotional, and developmental needs, and writing
              concise assessments to recommend and refer clients for additional
              support. The therapist will also provide individual, family, and
              group therapy, as well as skills training. Collaboration and
              communication with a multidisciplinary team are essential, and
              accurate, timely documentation must be maintained.
            </p>
          </div>
          <hr className="text-[#000000]/[.1] my-[20px]" />
          <div className="flex flex-row gap-[10px] mt-[40px]">
            {/* <div className=" rounded-[30px] bg-[#397CCA]/[.2]  px-[24px] py-[10px]">
              <button className="bodyText text-[#397CCA]  flex justify-center items-center">
                Fulltime
              </button>
            </div>
            <div className=" rounded-[30px]  bg-[#397CCA]/[.2] px-[24px] py-[10px]">
              <button className="bodyText  text-[#397CCA] flex justify-center items-center">
                Remote
              </button>
            </div> */}
            <Link to="/employmentForm">
              <div
                className={`rounded-[30px] ${
                  active === "Fulltime" ? "bg-[#397CCA]" : "bg-[#397CCA]/[.2]"
                } px-[24px] py-[10px]`}
              >
                <button
                  onClick={() => handleToggle("Fulltime")}
                  className={`bodyText flex justify-center items-center ${
                    active === "Fulltime" ? "text-white" : "text-[#397CCA]"
                  }`}
                >
                  Apply Now
                </button>
              </div>
            </Link>
            {/* <div
              className={`rounded-[30px] ${
                active === "Remote" ? "bg-[#397CCA]" : "bg-[#397CCA]/[.2]"
              } px-[24px] py-[10px]`}
            >
              <button
                onClick={() => handleToggle("Remote")}
                className={`bodyText flex justify-center items-center ${
                  active === "Remote" ? "text-white" : "text-[#397CCA]"
                }`}
              >
                Remote
              </button>
            </div> */}
          </div>
        </div>

        <div className="px-[20px] py-[24px] bg-[#FFFFFF] border border-[#000000]/[.1] mt-[30px] lg:mt-[50px]  rounded-[8px] ">
          <div className="mt-[50px]">
            <img
              src="/images/ABA-Consulting-Logo.webp"
              alt=""
              className="h-[60px] w-[60px]  object-cover rounded-[50px]"
            />
            <h1 className="employCardHead text-[#0E0D0DCC] mt-[15px]">
              Board Certified Behavior Analyst (BCBA):
            </h1>
            <p className=" cardText  mt-[15px]">
              As a BCBA, you will develop and implement behavior intervention
              plans for individuals, particularly those with Autism Spectrum
              Disorders (ASD). Working closely with families and the
              interdisciplinary team, you’ll conduct assessments, analyze data
              to refine interventions, and provide training to both families and
              staff. Additionally, you’ll offer supervision to those pursuing
              certification and ensure that treatment plans are consistently
              applied across home and community settings. We are looking for
              candidates with BCBA or BCaBA certification (or expected soon),
              experience in developing behavior intervention plans and
              assessments, and a strong knowledge of ABA and positive behavior
              support. The ability to collaborate effectively with families and
              team members is essential. Preferred qualifications include
              experience with ASD and related concerns, familiarity with
              Minnesota behavioral health regulations, and strong communication
              and teamwork skills.
            </p>
          </div>
          <hr className="text-[#000000]/[.1] my-[20px]" />
          <div className="flex flex-row gap-[10px] mt-[40px]">
            {/* <div className=" rounded-[30px] bg-[#397CCA]/[.2] px-[24px] py-[10px]">
              <button className="bodyText text-[#397CCA]  flex justify-center items-center">
                Fulltime
              </button>
            </div>
            <div className=" rounded-[30px]  bg-[#397CCA]/[.2] px-[24px] py-[10px]">
              <button className="bodyText  text-[#397CCA] flex justify-center items-center">
                on-site
              </button>
            </div> */}

            <Link to="/employmentForm">
              <div
                className={`rounded-[30px] ${
                  active === "Fulltime" ? "bg-[#397CCA]" : "bg-[#397CCA]/[.2]"
                } px-[24px] py-[10px]`}
              >
                <button
                  onClick={() => handleToggle("Fulltime")}
                  className={`bodyText flex justify-center items-center ${
                    active === "Fulltime" ? "text-white" : "text-[#397CCA]"
                  }`}
                >
                  Apply Now
                </button>
              </div>
            </Link>
            {/* <div
              className={`rounded-[30px] ${
                active === "Remote" ? "bg-[#397CCA]" : "bg-[#397CCA]/[.2]"
              } px-[24px] py-[10px]`}
            >
              <button
                onClick={() => handleToggle("Remote")}
                className={`bodyText flex justify-center items-center ${
                  active === "Remote" ? "text-white" : "text-[#397CCA]"
                }`}
              >
                Remote
              </button>
            </div> */}
          </div>
        </div>

        <div className="px-[20px] py-[24px] bg-[#FFFFFF] border border-[#000000]/[.1] mt-[30px] lg:mt-[50px]  rounded-[8px] ">
          <div className="mt-[50px]">
            <img
              src="/images/ABA-Consulting-Logo.webp"
              alt=""
              className="h-[60px] w-[60px]  object-cover rounded-[50px]"
            />
            <h1 className="employCardHead text-[#0E0D0DCC] mt-[15px]">
              Occupational Therapist (OT):
            </h1>
            <p className=" cardText  mt-[15px]">
              As a occupational therapist (OT) you are providing services in
              collaboration with local ABA centers to support children and
              individuals with autism. Key responsibilities include conducting
              standardized assessments, screenings, and observations, and
              developing individualized treatment plans that cater to each
              client’s unique needs. The OT works closely with other
              professionals, including SLPs, BCBAs, psychologists, and social
              workers, to ensure comprehensive care. In addition, the OT is
              responsible for maintaining detailed records of patient progress,
              ensuring accurate and timely documentation, and collaborating with
              multidisciplinary teams to optimize treatment outcomes. The role
              also involves staying current with evidence-based practices in
              occupational therapy, effectively communicating with healthcare
              professionals, and applying knowledge of anatomy and physiology to
              address the underlying causes of patient disorders. A master’s or
              doctorate in Occupational Therapy and current OT licensures in MN
              are required for this position.
            </p>
          </div>
          <hr className="text-[#000000]/[.1] my-[20px]" />
          <div className="flex flex-row gap-[10px] mt-[40px]">
            {/* <div className=" rounded-[30px] bg-[#397CCA]/[.2] px-[24px] py-[10px]">
              <button className="bodyText text-[#397CCA]  flex justify-center items-center">
                Fulltime
              </button>
            </div>
            <div className=" rounded-[30px]  bg-[#397CCA]/[.2] px-[24px] py-[10px]">
              <button className="bodyText  text-[#397CCA] flex justify-center items-center">
                Remote
              </button>
            </div> */}

            <Link to="/employmentForm">
              <div
                className={`rounded-[30px] ${
                  active === "Fulltime" ? "bg-[#397CCA]" : "bg-[#397CCA]/[.2]"
                } px-[24px] py-[10px]`}
              >
                <button
                  onClick={() => handleToggle("Fulltime")}
                  className={`bodyText flex justify-center items-center ${
                    active === "Fulltime" ? "text-white" : "text-[#397CCA]"
                  }`}
                >
                  Apply Now
                </button>
              </div>
            </Link>
            {/* <div
              className={`rounded-[30px] ${
                active === "Remote" ? "bg-[#397CCA]" : "bg-[#397CCA]/[.2]"
              } px-[24px] py-[10px]`}
            >
              <button
                onClick={() => handleToggle("Remote")}
                className={`bodyText flex justify-center items-center ${
                  active === "Remote" ? "text-white" : "text-[#397CCA]"
                }`}
              >
                Remote
              </button>
            </div> */}
          </div>
        </div>

        <div className="px-[20px] py-[24px] bg-[#FFFFFF] border border-[#000000]/[.1] mt-[30px] lg:mt-[50px] rounded-[8px] ">
          <div className="mt-[50px]">
            <img
              src="/images/ABA-Consulting-Logo.webp"
              alt=""
              className="h-[60px] w-[60px]  object-cover rounded-[50px]"
            />
            <h1 className="employCardHead text-[#0E0D0DCC] mt-[15px]">
              Speech-Language Pathologist (SLP):
            </h1>
            <p className=" cardText  mt-[15px]">
              As an SLP, you will collaborate with ABA centers to support
              individuals with autism. Key responsibilities include conducting
              assessments, developing individualized treatment plans, and
              working closely with OTs, BCBAs, psychologists, and social workers
              to ensure comprehensive care. You will maintain accurate
              documentation of patient progress and collaborate with the team to
              optimize outcomes. The role also involves staying updated with
              evidence-based practices and applying knowledge of speech and
              language development to address communication disorders. A
              master’s degree in Speech-Language Pathology and current
              licensures in MN are required.
            </p>
          </div>
          <hr className="text-[#000000]/[.1] my-[20px]" />
          <div className="flex flex-row gap-[10px] mt-[40px]">
            {/* <div className=" rounded-[30px] bg-[#397CCA]/[.2] px-[24px] py-[10px]">
              <button className="bodyText text-[#397CCA]  flex justify-center items-center">
                Fulltime
              </button>
            </div>
            <div className=" rounded-[30px]  bg-[#397CCA]/[.2] px-[24px] py-[10px]">
              <button className="bodyText  text-[#397CCA] flex justify-center items-center">
                on-site
              </button>
            </div> */}

            <Link to="/employmentForm">
              <div
                className={`rounded-[30px] ${
                  active === "Fulltime" ? "bg-[#397CCA]" : "bg-[#397CCA]/[.2]"
                } px-[24px] py-[10px]`}
              >
                <button
                  onClick={() => handleToggle("Fulltime")}
                  className={`bodyText flex justify-center items-center ${
                    active === "Fulltime" ? "text-white" : "text-[#397CCA]"
                  }`}
                >
                  Apply Now
                </button>
              </div>
            </Link>
            {/* <div
              className={`rounded-[30px] ${
                active === "Remote" ? "bg-[#397CCA]" : "bg-[#397CCA]/[.2]"
              } px-[24px] py-[10px]`}
            >
              <button
                onClick={() => handleToggle("Remote")}
                className={`bodyText flex justify-center items-center ${
                  active === "Remote" ? "text-white" : "text-[#397CCA]"
                }`}
              >
                Remote
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center w-full mx-auto gap-[18px]  mt-[50px] ">
        <div className="px-[24px] py-[12px] hover:text-white text-[#397CCA] border border-[#397CCA] hover:bg-[#397CCA] rounded-[8px] flex justify-center items-center">
          <button className="flex justify-center items-center gap-x-[4px]">
            W4/19 Forms <MdOutlineFileDownload />
          </button>
        </div>
        <div className="px-[24px] py-[12px] hover:text-white text-[#397CCA] border border-[#397CCA] hover:bg-[#397CCA] rounded-[8px] flex justify-center items-center">
          <button className="flex justify-center items-center gap-x-[4px]">
            W4/19 Forms 2 <MdOutlineFileDownload />
          </button>
        </div>

        <Link to="/employmentForm">
          <div className="px-[24px] py-[12px]  hover:text-white text-[#397CCA] border border-[#397CCA] hover:bg-[#397CCA] rounded-[8px] flex justify-center items-center">
            <button className="flex  items-center gap-x-[4px]">
              Employment application form <MdOutlineFileDownload />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Opportunity;
