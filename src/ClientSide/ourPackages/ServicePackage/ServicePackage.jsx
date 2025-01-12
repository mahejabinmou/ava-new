const ServicePackages = () => {
	return (
		<div className="sectionGap">
			<h1 className="text-2xl font-bold text-center mb-8 headThree">
				Service Packages
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[12px]">
				{/* Operations Package */}
				<div>
					<div className="bg-[#FF8C00] rounded-lg rounded-b-none max-h-[72px] flex justify-center items-center">
						<h2 className="menuText font-semibold text-center text-white px-[30px] py-[24px]">
							Operations Package
						</h2>
					</div>

					<ul className="2xl:h-[420px] xl:h-[500px] lg:h-[350px] list-disc list-inside space-y-[10px] bg-white shadow-lg rounded-lg  rounded-t-none p-[20px] border border-gray-200">
						<li className="bodyText">Quarterly Mock Audits</li>
						<p className="smallBodyText">
							Our team conducts thorough mock audits (on a quarterly basis) for
							ABA agencies throughout the country, focusing on operations,
							compliance,and best practices. We work closely with agencies to
							identify gaps, ensure regulatory compliance, and provide
							actionable recommendations to optimize operations and improve
							service delivery
						</p>
						<li className="bodyText">Monthly Compliance Assistance</li>
						<p className="smallBodyText">
							Our team conducts thorough mock audits (on a quarterly basis) for
							ABA agencies throughout the country, focusing on operations,
							compliance challenges, improve processes, and maintain the highest
							standards of care
							{/* <span className="text-[#FF8C00] text-sm underline  inline-block">
                {" "}
                Read More
              </span> */}
						</p>
					</ul>
				</div>

				{/* Clinical Package */}
				<div>
					<div className="bg-[#FF8C00] rounded-lg rounded-b-none max-h-[72px] flex justify-center items-center">
						<h2 className="menuText font-semibold text-center text-white px-[30px] py-[24px]">
							Clinical Package
						</h2>
					</div>

					<ul className="2xl:h-[420px] xl:h-[500px] lg:h-[350px] list-disc list-inside space-y-2 bg-white shadow-lg rounded-lg rounded-t-none p-[20px] border border-gray-200">
						<li className="bodyText">Qualified Service Providers (QSPs)</li>
						<p className="smallBodyText">
							Our clinical approach offers agencies access to our extensive
							network of qualified clinical service providers (QSPs) with
							diverse backgrounds, including LICSW, LPCC, LMFT, NP, and PsyD.
							These professionals are based on-site and make weekly visitations
							to your office or center. ○They review and sign all session notes,
							provide observation and direction to your clinical staff, and
							develop tailored training pilot programs for your center.Our QSPs
							also conduct bi-weekly supervision meetings, provide family
							training, and coordinate with schools for children in IEP
							programs, ensuring holistic support across all settings.
							{/* <span className="text-[#FF8C00] text-sm underline  inline-block">
                {" "}
                Read More
              </span> */}
						</p>
					</ul>
				</div>

				{/* Rehabilitation Package */}
				<div>
					<div className="bg-[#FF8C00] rounded-lg rounded-b-none max-h-[72px] flex justify-center items-center">
						<h2 className="menuText font-semibold text-white px-[30px] py-[24px]">
							Rehabilitation Package
						</h2>
					</div>

					<ul className="2xl:h-[420px] xl:h-[500px] lg:h-[350px] list-disc list-inside space-y-2 bg-white shadow-lg rounded-lg rounded-t-none p-[20px] border border-gray-200">
						<li className="bodyText">SLPs and OTs </li>
						<p className="smallBodyText">
							Our agency is proudly contracted with a 3rd party agency (Sensory
							Speech & OT Therapy LLC), a leading rehabilitation provider that
							offers ABA clinics the opportunity to collaborate with
							speech-language pathologists, occupational therapists, and
							educators, ensuring a holistic and coordinated approach to
							treatment.If your center has a minimum of 8 clients on-site
							between 8 AM and 4 PM, we can develop a customized schedule for a
							speech-language pathologist (SLP) and anoccupational therapist
							(OT) to visit your facility and provide outpatient treatment for
							the individuals you serve.
						</p>
					</ul>
				</div>

				{/* Customized Service Package */}
				<div>
					<div className="bg-[#FF8C00] rounded-lg rounded-b-none max-h-[72px] flex justify-center items-center">
						<h2 className="menuText font-semibold text-white px-[30px] py-[24px]">
							Customized Service Package
						</h2>
					</div>

					<ul className="2xl:h-[420px] xl:h-[500px] lg:h-[350px] list-disc list-inside space-y-2 bg-white shadow-lg rounded-lg rounded-t-none p-[20px] border border-gray-200">
						<li className="bodyText">SLPs and OTs </li>
						<p className="smallBodyText">
							Our agency offers the flexibility to build a customized service
							package tailored to your specific needs. After a consultation
							meeting, we will work closely with your team to design a package
							that combines the services most beneficial to your agency, whether
							it’s mock audits, compliance assistance, clinical support, or
							rehabilitation services. This tailored approach ensures that you
							receive the right combination of services to optimize operations,
							enhance client care, and maintain regulatory compliance. Together,
							we’ll create a solution that aligns with your goals and supports
							the unique needs of your center.
						</p>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ServicePackages;
