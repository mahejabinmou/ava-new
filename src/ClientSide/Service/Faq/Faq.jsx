import { useState } from "react";

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(0); // Initialize with 0 for the first FAQ

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const accordion1 = [
		{
			question:
				"With the new licensing requirements for BCBAs in Minnesota, does my agency still need a QSP?",
			answer:
				"YES- all ABA agencies are STILL required to maintain and have an affiliated  QSP although starting January 1, 2025, all behavior analysts providing Early Intensive Developmental and Behavioral Intervention (EIDBI) services in Minnesota are required to hold a valid Minnesota behavior analyst license and submit proof of licensures to Minnesota Health Care Programs (MHCP). Licensing is overseen by the Minnesota Board of Psychology, which provides detailed application information and requirements.",
		},
		{
			question: "What makes you different from other firms?",
			answer:
				"It's simple: our team has completed 23 state audits, giving us a deeper understanding of compliance and regulatory standards than any other company or individual. Additionally, ABA Consulting LLC offers a unique benefit to any agency contracting our QSPs or BCBAs. You can request in-person visitations from our Director of QSPs and our Director of BCBAs during any week you need a second opinion, clinical support, or additional assistance. This means you get access to a second QSP and BCBA, at no additional cost—yes, you read that correctly. These professionals are available for up to 20 hours a week, completely free of charge. Lastly, we are not fans of remote work. We believe in being on-site, actively observing operations, meeting with staff, and interacting with families and clients to ensure the highest level of support and care. Our QSPs and BCBAs are deeply committed to ensuring that clients are engaged in the community. They work closely with you to plan community-based activities, select appropriate settings, and build tailored clinical programs around those activities. Additionally, our team joinsyou during these events and trains your staff to implement these programs effectively, ensuring that children have meaningful, real-world experiences that promote growth and development within the community.We are also deeply person-centered and committed to supporting your agency in every aspect of its operations. If you're a new agency looking for office space, you can tap into our network of realtor brokerage firms at no additional cost. Our partners will assist you in finding a space that meets your specific needs and requirements, and they'll even join you on property tours—completely free of charge.  We also offer valuable support by connecting you with our network of trusted accounting and bookkeeping firms, helping you manage your finances efficiently. Additionally, we can help minimize the costs of your EHR system through our partnership with Rethink BH. This collaboration provides you with access to affordable, high-quality EHR solutions, allowing you to streamline your operations and focus on delivering exceptional care toyour clients. These valuable service is available exclusively through our partnership with ABA Consulting LLC, further demonstrating our commitment to your success. We are more than just astaffing firm; we go above and beyond to provide comprehensive support, ensuring your agency thrives in all aspects of operations",
		},
		{
			question:
				"I am interested in utilizing a QSP and BCBA from ABA Consulting LLC, but I’m unsure how to affiliate them through the MN-its' system or via fax and since one mistake could result in a billing suspension. Would your company be able to submit the affiliation paperwork on my behalf?",
			answer:
				"Since affiliations through DHS can take up to 30 days, it is crucial to submit affiliation documentation accurately and promptly to avoid service gaps or billing suspensions. Our agency can handle the extensive affiliation paperwork on your behalf, ensuring it is completed correctly.We charge a small fee of $250 to cover the overhead costs of having our intake and regulatoryWe charge a small fee of $250 to cover the overhead costs of having our intake and regulatory department manage and submit the documentation.To proceed with this process, please email the following information to info@abaconsulting.org:your agency's full name, DBA (Doing Business As), FEIN (Federal Employer Identification Number), MN Tax ID, physical address, and the full names of all owners (First, Middle, Last), along with their date of birth (DOB) and Social Security Number (SSN). Additionally, please provide the company’s phone number, fax number, NPI (National Provider Identifier), the effective date of when the company was established, and the termination date for the previous QSP and BCBA. This information is essential to ensure a smooth and efficient submission process",
		},
		{
			question:
				"Do the BCBA and QSP provided by your agency offer billable hours?",
			answer:
				"Yes, our QSPs will ensure that a minimum of 50% of contracted hours are billable using the following codes: H0032, 97151, 97155, and/or 97156. Our BCBAs also utilize these codes and will ensure that a minimum of 70% of contracted hours are billable lthough there are weeks where we exceed these benchmarks, these percentages represent the average billable hours. Because certain activities involved in the delivery of services, such as supervision, training, and administrative tasks, may not be directly billable under these codes. These non-billable activities are essential for maintaining high-quality care, compliance, and staff development but do not meet the specific criteria for reimbursement. By setting these minimum billable hour targets, we ensure that a substantial portion of time spent on client care is reimbursed while maintaining the necessary support and oversight for optimal service delivery",
		},
		{
			question:
				"Can my agency utilize your QSP services without engaging your BCBA services? And can I choose a 3-month or 6-month contract term?",
			answer:
				"No- as part of our standard practice, we require all agencies to include our Qualified Supervising Professional (QSP), alongside our BCBA. We do not engage in half-clinical supervisory arrangements, as we believe both behavioral and clinical supervision should be integrated to ensure comprehensive care, aligning with our standards.We do require a minimum 1-year contract term. We believe in fostering long-term partnerships and a more tailored approach that aligns with your agency's larger vision. A longer commitment allows us to provide the best ongoing support and ensure consistent, high-quality services for your clients.",
		},
		{
			question:
				"I had a negative experience with my current/previous QSPs or BCBAs. If I'm under a 1-year contract with ABA Consulting LLC, do you allow replacements if the therapists placed with my company do not meet the required standards?",
			answer:
				"At ABA Consulting LLC, we pride ourselves on providing therapists (QSPs, BCBAs, SLPs, OTs) of the highest caliber. Our professionals are experienced, effective leaders with excellent communication skills, and they are capable of making a positive impact at any site. We maintain unparalleled standards, and to ensure we meet them, we conduct 30-day, 60-day, and 90-day check-ins after placing any therapist at a location. These check-ins help us identify potential communication gaps, workflow issues, transition challenges, and other barriers to success—addressing concerns proactively before they become problems.If an agency encounters any issues with a therapist, we ask to be notified in advance at info@abaconsulting.org so we can create an action plan. Our Director of QSPs will visit the site to assess the situation and collaborate on solutions. Similarly, our Director of BCBAs will conduct a separate visit to engage with the team and ensure the issue is thoroughly addressed. If, after the review process, no actionable solution is identified, we offer the option of a replacementprovider at the 6-month mark (or sooner if needed). We have a dedicated and extensive team ready to ensure your agency receives the best possible support.",
		},
		{
			question: "How soon can you place a QSP and/or BCBA at my agency?",
			answer:
				"We can guarantee placement within seven business days, depending on factors such as the region, required hours, and other specific needs. We prioritize timely and efficient placements to ensure your agency receives the support it requires.",
		},
		{
			question: "How long does your team take to complete a CMDE and/or ITP?",
			answer:
				"Once the center provides the necessary intake documentation, and the provider conducts a formal evaluation—we ensure that the final report is completed within 5 business days. In 2024, we completed 307 assessments, achieving an 91.68% approval rate on the first submission. After addressing any pending requests for the second submission, we attained a 100% approval rate through Attrezo.",
		},
		{
			question:
				"Do your monthly retainer agreements increase if my agency onboard additional clients?",
			answer:
				"The pricing for our services depends on the number of clients at your center. We offer different pricing models based on client count: for 0-2 clients, we provide one pricing model; for 3-4 clients, another; for 5-10 clients, a different model; and for 10-20 clients, a separate pricing structure. For instance, if your agency starts with 5 clients and signs a contract with ABA Consulting LLC, and then grows to 8 clients within 6 months, the pricing in your existing agreement will remain unchanged. However, if your client count increases to 11 clients after 8 months, the pricing will adjust accordingly.This increase in pricing is due to the additional supervision required as your client base expands. With more clients, the BCBA/QSP needs to update the learning tree, conduct observations of both new and existing clients, and train behavior technicians. To ensure adequate support, we typically recommend and require 2 hours of direct time per client at the respective location.",
		},
		{
			question: "Can the QSP and/or BCBA do in-home vists'?",
			answer:
				"No, our QSPs and BCBAs do not conduct in-home visits due to liability concerns. Our services are designed to be provided in controlled, professional settings to ensure the safety of both clients and staff. We prioritize maintaining a secure environment for all involved while delivering the highest standard of care.In-home visits can present several challenges, particularly related to liability concerns. First, there are potential risks associated with the safety of both the client and the provider when conducting services in an uncontrolled home environment. Unpredictable conditions, such as unsafe living spaces, pets, or unfamiliar surroundings, can create hazards. Additionally, there may be issues around maintaining confidentiality and ensuring compliance with HIPAA regulations in private homes, as the environment may not be secure or private enough to meet professional standards. Another challenge is the consistency and quality of service delivery. In-home visits may involve distractions or interruptions that could affect the provider’s ability to deliver services in line with established treatment plans. There is also the potential for miscommunication between family members, clients, and providers in informal settings",
		},
		{
			question:
				"I am interested in applying for an EI-EIDBI agency license through MN DHS. Do you assist new companies with the licensing process?",
			answer:
				"Yes, we have successfully assisted numerous centers in Minnesota with the licensing process. We can help with both staffing and the necessary paperwork to enroll your agency and ensure it meets all licensing requirements. Feel free to schedule a consultation through our booking link, and we can discuss the specific details and requirements needed to get your agency licensed.",
		},
	];

	return (
		<div
			className="grid grid-cols-1 gap-[50px] sectionGap w-full h-auto"
			// style={{
			// 	backgroundImage: `url("/images/faq.png")`,
			// 	backgroundSize: "cover",
			// 	backgroundPosition: "center",
			// 	backgroundRepeat: "no-repeat",
			// }}
		>
			<div>
				{/* First Copy */}
				<div
					id="assistance"
					className="grid grid-cols-1 gap-[50px] justify-center items-center"
				>
					{/* Image */}
					{/* <div className="h-[400px] lg:h-[554px]">
            <img
              // src="https://incomparable-kashata-7a0767.netlify.app/images/serviceBoy.png"
              src="/images/serviceBoy.png"
              className="h-full w-full object-cover rounded-[8px]"
              alt=""
            />
          </div> */}
					{/* Text and Accordion */}
					<div className="rounded-lg">
						<h2 className="text-black text-center font-semibold mb-[50px] headTwo leading-[40px]">
							Frequently Asked Question
						</h2>
						{/* <p className="mx-auto text-center  max-w-[772px] text-[#FFFFFF]/[.80] mb-[20px] font-normal bodyText">
              Unlock the power of digital marketing to attract more customers.
              Our tailored strategies focus on increasing your online presence,
              engaging your target audience, and driving conversions to help
              your business grow.
            </p> */}
						<div className="space-y-4">
							{/* {accordion1.map((item, index) => (
                <div key={index} className=" rounded-[8px]">
                  <button
                    className={`w-full border border-[#CBD5E1]/[.6] flex justify-between rounded-[8px] items-center p-4  ${
                      activeIndex === index
                        ? "bg-[#FF8C00] text-white border-none rounded-b-none"
                        : "bg-transparent text-[#FFFFFF]/[.80]  "
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-normal bodyText text-left">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 transform ${
                        activeIndex === index
                          ? " rotate-180 "
                          : "text-[#FFFFFF]/[.80]"
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
                    <div className="p-4 text-[#0E0D0D]/[.6 rounded-[8px] rounded-t-none  bg-[#F9F9F9] font-normal">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))} */}

							<div className="space-y-5">
								{accordion1.map((item, index) => (
									<div key={index} className="rounded-[8px]">
										<button
											className={`w-full border border-[#CBD5E1] flex justify-between rounded-[8px] items-center p-4 ${
												activeIndex === index
													? "bg-[#FF8C00] text-white border-none rounded-b-none"
													: "bg-transparent text-[#000]"
											}`}
											onClick={() => toggleFAQ(index)}
										>
											<span className="font-normal bodyText text-left">
												{item.question}
											</span>
											<div className="flex-shrink-0 w-5 h-5">
												{" "}
												{/* Fixed size container */}
												<svg
													className={`transform ${
														activeIndex === index ? "rotate-180" : "text-[#000]"
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
											</div>
										</button>
										{activeIndex === index && (
											<div className="p-4 text-[#0E0D0D]/[.8] rounded-[8px] rounded-t-none bg-[#F9F9F9] font-normal">
												{item.answer}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
