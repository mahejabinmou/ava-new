// Data for DHS Enrollment Paperwork
const enrollmentPaperwork = {
	QSPs: [
		{
			name: "(DHS-4016)",
			link: "https://edocs.dhs.state.mn.us/lfserver/Public/DHS-4016-ENG-pform",
		},
		{
			name: "(DHS-4138)",
			link: "https://edocs.dhs.state.mn.us/lfserver/Public/DHS-4138-ENG",
		},
		{
			name: "(DHS-7120A)",
			link: "https://edocs.dhs.state.mn.us/lfserver/Public/DHS-7120A-ENG",
		},
		{
			name: "(DHS-7120C)",
			link: "https://edocs.dhs.state.mn.us/lfserver/Public/DHS-7120C-ENG",
		},
		{
			name: "(DHS-7120D)",
			link: "https://edocs.dhs.state.mn.us/lfserver/Public/DHS-7120D-ENG",
		},
	],
	BCBAs: [
		{
			name: "(DHS-4016)",
			link: "https://edocs.dhs.state.mn.us/lfserver/Public/DHS-4016-ENG-pform",
		},
		{
			name: "(DHS-4138)",
			link: "https://edocs.dhs.state.mn.us/lfserver/Public/DHS-4138-ENG",
		},
		{
			name: "(DHS-7120D)",
			link: "https://edocs.dhs.state.mn.us/lfserver/Public/DHS-7120D-ENG",
		},
	],
};

// Data for Required DHS State Trainings
const stateTrainings = [
	{
		title: "Mandated Reporter",
		description: "Complete the course here: Mandated Reporter Training",
		link: "https://mnchildwelfaretraining.com/training/mandated-reporting-training/",
	},
	{
		title: "Vulnerable Adults",
		description: "More details on training can be found here:",
		link: "https://registrationtraining.dhs.state.mn.us/?BusinessUnitID=18",
	},
	{
		title: "Cultural Responsiveness",
		description:
			"A Trainlink code is needed to complete this training- HR will send you such a code",
		// link: "https://example.com/training-topic",
	},
];

// bg-white rounded-[8px] border border-[#000000]/[.10] text-black

const Application = () => {
	return (
		<div className="sectionGap">
			<h1 className="text-center text-[#0E0D0D]/[.8] headTwo font-semibold mb-[60px] 2xl:mb-[50px] ">
				Application Submission Process
			</h1>
			<div className="bg-gray-100">
				{/* Section 1 */}
				<div className="space-y-6">
					{/* Employment Application Form */}
					<div className="flex flex-col sm:flex-row items-center bg-white rounded-[8px] border border-[#000000]/[.10] text-black p-4 space-y-4 sm:space-y-2">
						<p className="flex-grow employCardHead text-center sm:text-left">
							Employment application form
						</p>
						<button className="px-4 py-2 bg-white text-black rounded-[8px] border border-[#000000]/[.10] bodyText font-bold">
							<a href="/employmentForm" data-discover="true">
								Apply Now
							</a>
						</button>
					</div>

					{/* W4/19 Forms */}
					<div className="flex flex-col sm:flex-row items-center bg-white rounded-[8px] border border-[#000000]/[.10] text-black p-4 space-y-4 sm:space-y-2">
						<p className="flex-grow employCardHead text-center sm:text-left">
							W4/19 Forms
						</p>
						<div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
							<button className="px-4 py-2 bg-white text-black rounded-[8px] border border-[#000000]/[.10] bodyText font-bold">
								Form 1
							</button>
							<button className="px-4 py-2 bg-white text-black rounded-[8px] border border-[#000000]/[.10] bodyText font-bold">
								Form 2
							</button>
						</div>
					</div>
				</div>

				{/* Section 2 */}
				<div className="mt-20">
					<h2 className="text-xl font-semibold mb-6">
						DHS Enrollment Paperwork:
					</h2>

					{/* Parent Container for Responsiveness */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						{/* QSPs Column */}
						<div>
							<h3 className="my-2 lg:my-5 employCardHead">QSPs Form</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{enrollmentPaperwork.QSPs.map((item, index) => (
									<a
										key={index}
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="block bg-white text-black p-2 rounded-[8px] text-center bodyText font-bold"
									>
										{item.name}
									</a>
								))}
							</div>
						</div>

						{/* BCBAs Column */}
						<div>
							<h3 className="employCardHead my-2 lg:my-5">
								BCBAs, SLPs, and OTs Form
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{enrollmentPaperwork.BCBAs.map((item, index) => (
									<a
										key={index}
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="block bg-white text-black p-2 rounded-[8px] text-center bodyText font-bold"
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Section 3 */}
				<div className="mt-20">
					<h2 className="text-xl font-semibold mb-6">
						Required DHS State Trainings
					</h2>
					<div className="space-y-4">
						{stateTrainings.map((training, index) => (
							<details
								key={index}
								className="bg-white shadow rounded-[8px] p-4 cursor-pointer"
							>
								<summary className="benifitHead  text-black">
									{training.title}
								</summary>
								<p className="mt-2 bodyText">
									{training.description}{" "}
									<a
										href={training.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-500 underline hover:text-blue-700"
									>
										{training.link}
									</a>
								</p>
							</details>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Application;
