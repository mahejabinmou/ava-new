/* eslint-disable no-unused-vars */
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const EmployeementApplication = () => {
	const form = useRef();
	const [formData, setFormData] = useState({
		name: "",
		date: "",
		address: "",
		city: "",
		state: "",
		zip: "",
		phoneType: [], // Mobile/Home/Work checkboxes
		veteran: "",
		education: [], // High School, Trade School, etc.
		professionalOrgs: "",
		licenseNumber: "",
		licenseState: "",
		workEligibility: "",
		backgroundCheck: "",
		felony: "",
		felonyExplanation: "",
		position: "",
		startDate: "",
		availability: [], // Full Time, Part Time
		status: [], // Regular, Temporary, Seasonal
		shift: [], // Days, Evenings, etc.
		desiredPay: "",
		overtime: "",
		essentialFunctions: "",
		skills: "",
		references: [], // List of references
	});
	const [file, setFile] = useState(null);

	// Handle input field changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Handle checkbox selections
	const handleCheckboxChange = (e, field) => {
		const { value, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[field]: checked
				? [...prev[field], value]
				: prev[field].filter((item) => item !== value),
		}));
	};

	// Handle file upload
	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	// Handle form submission
	const sendEmail = (e) => {
		e.preventDefault();

		const formDataToSend = new FormData();
		for (const [key, value] of Object.entries(formData)) {
			if (Array.isArray(value)) {
				formDataToSend.append(key, value.join(", "));
			} else {
				formDataToSend.append(key, value);
			}
		}
		// if (file) {
		// 	formDataToSend.append("file", file);
		// }

		emailjs
			.sendForm(
				"service_te3fsdb", // EmailJS service ID
				"template_0cy1uhe", // EmailJS template ID
				form.current,
				"gO7MDxHFsFaBgMGxV" // EmailJS public key
			)
			.then(
				(result) => {
					alert("Application submitted successfully!");
					e.target.reset();
				},
				(error) => {
					alert("Failed to submit the application. Please try again.");
				}
			);
	};

	return (
		<div className="sectionGap">
			<form ref={form} onSubmit={sendEmail} className=" ">
				<div className="p-2 ">
					<h1 className="text-center employCardHead mb-6">
						Employment Application
					</h1>

					<div className="p-6 border  rounded cardText">
						{/* Personal Data Section */}
						<div className="mb-6">
							<h2 className="font-semibold mb-4">Personal Data</h2>
							<div className="grid grid-cols-1 gap-4">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
									<div>
										<label className="block mb-4">
											Name (Last/First/Middle):
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleChange}
											className="w-full border border-gray-300 rounded p-2"
											placeholder="Enter your name"
											required
										/>
									</div>
									<div>
										<label className="block mb-4">Date:</label>
										<input
											type="date"
											name="date"
											value={formData.date}
											onChange={handleChange}
											required
											className="w-full border border-gray-300 rounded p-2"
										/>
									</div>
								</div>

								<label className="block mb-1">Street Address:</label>
								<input
									type="text"
									name="address"
									value={formData.address}
									onChange={handleChange}
									required
									className="w-full border border-gray-300 rounded p-2"
									placeholder="Enter your address"
								/>
							</div>
							<div className="grid grid-cols-1 lg:grid-cols-3 md:gap-[10px]  gap-0 mt-4">
								<div>
									<label className="block mb-4">City:</label>
									<input
										type="text"
										name="city"
										value={formData.city}
										onChange={handleChange}
										required
										className="w-full border border-gray-300 rounded p-2"
									/>
								</div>
								<div>
									<label className="block mb-4">State:</label>
									<input
										type="text"
										name="state"
										value={formData.state}
										onChange={handleChange}
										required
										className="w-full border border-gray-300 rounded p-2"
									/>
								</div>
								<div>
									<label className="block mb-4">Zip:</label>
									<input
										type="text"
										name="zip"
										value={formData.zip}
										onChange={handleChange}
										required
										className="w-full border border-gray-300 rounded p-2"
									/>
								</div>
							</div>
						</div>

						{/* Phone and Veteran Status */}
						<div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
							<div>
								<label className="block mb-1">Phone #:</label>
								<div className="flex items-center gap-4">
									<label>
										<input
											type="checkbox"
											value="Mobile"
											onChange={(e) => handleCheckboxChange(e, "phoneType")}
											className="mr-2"
										/>
										Mobile
									</label>
									<label>
										<input
											type="checkbox"
											value="Home"
											onChange={(e) => handleCheckboxChange(e, "phoneType")}
											className="mr-2"
										/>
										Home
									</label>
									<label>
										<input
											type="checkbox"
											value="Work"
											onChange={(e) => handleCheckboxChange(e, "phoneType")}
											className="mr-2"
										/>
										work
									</label>
								</div>
							</div>
							<div>
								<label className="block mb-1">Are you a Veteran?</label>
								<div className="flex items-center gap-4">
									<label>
										<input type="radio" name="veteran" className="mr-2" />
										Yes
									</label>
									<label>
										<input type="radio" name="veteran" className="mr-2" />
										No
									</label>
								</div>
							</div>
						</div>

						{/* Level of Education */}
						<div className="mb-6">
							<label className="block mb-1">
								Level of Education Completed:
							</label>
							<div className="flex flex-col lg:flex-row lg:items-center gap-4">
								<label>
									<input type="checkbox" className="mr-2" />
									High School
								</label>
								<label>
									<input type="checkbox" className="mr-2" />
									Trade School
								</label>
								<label>
									<input type="checkbox" className="mr-2" />
									College
								</label>
								<label>
									<input type="checkbox" className="mr-2" />
									Graduate
								</label>
								<label>
									<input type="checkbox" className="mr-2" />
									other
								</label>
							</div>
						</div>

						{/* Professional Organizations */}
						<div className="mb-6">
							<label className="block mb-4">Professional Organizations:</label>
							<input
								type="text"
								className="w-full border border-gray-300 rounded p-2"
							/>
						</div>

						{/* Driver's License */}
						<div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
							<div>
								<label className="block mb-4">
									Driver&apos;s License Number:
								</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
							<div>
								<label className="block mb-4">Issued in What State:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
						</div>

						{/* Additional Questions */}
						<div className="mb-6 flex flex-col lg:flex-row gap-[30px]">
							<label className="block mb-1">
								Are you legally eligible to work in the US?
							</label>
							<div className="flex items-center gap-4">
								<label>
									<input
										type="radio"
										name="work_eligibility"
										className="mr-2"
									/>
									Yes
								</label>
								<label>
									<input
										type="radio"
										name="work_eligibility"
										className="mr-2"
									/>
									No
								</label>
							</div>
						</div>

						<div className="mb-6 flex flex-col lg:flex-row gap-[30px]">
							<label className="block mb-1">
								If selected for employment, are you willing to submit to a
								background check?
							</label>
							<div className="flex items-center gap-4">
								<label>
									<input
										type="radio"
										name="background_check"
										className="mr-2"
									/>
									Yes
								</label>
								<label>
									<input
										type="radio"
										name="background_check"
										className="mr-2"
									/>
									No
								</label>
							</div>
						</div>
						<div className="mb-6 ">
							<label className="block mb-4 ">
								Have you been convicted of a felony?(Conviction will not
								necessarily disqualify an applicant from employment)
							</label>
							<div>
								<div className="flex items-center gap-4">
									<label>
										<input type="radio" name="felony" className="mr-2" />
										Yes
									</label>
									<label>
										<input type="radio" name="felony" className="mr-2" />
										No
									</label>
								</div>

								<div className="mt-4">
									<label className="block mb-4">If yes, please explain:</label>
									<textarea
										className="w-full border border-gray-300 rounded p-2"
										rows="3"
									></textarea>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* position */}

				<div className="p-2 ">
					<div className=" p-6 border cardText rounded">
						<h2 className="employCardHead mb-4">Position</h2>

						{/* Position Applying For and Start Date */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
							<div>
								<label className="block mb-4">Position Applying For:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
									placeholder="Enter position"
								/>
							</div>
							<div>
								<label className="block mb-4">Available Start Date:</label>
								<input
									type="date"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
						</div>

						{/* Availability and Status */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
							<div>
								<label className="block mb-1">Availability:</label>
								<div className="flex items-center gap-4">
									<label>
										<input type="checkbox" className="mr-2" />
										Full Time
									</label>
									<label>
										<input type="checkbox" className="mr-2" />
										Part Time
									</label>
								</div>
							</div>
							<div>
								<label className="block mb-1">Status:</label>
								<div className="flex items-center gap-4">
									<label>
										<input type="checkbox" className="mr-2" />
										Regular
									</label>
									<label>
										<input type="checkbox" className="mr-2" />
										Temporary
									</label>
									<label>
										<input type="checkbox" className="mr-2" />
										Seasonal
									</label>
								</div>
							</div>
						</div>

						{/* Shift */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
							<div>
								<label className="block mb-1">Shift:</label>
								<div className="flex items-center gap-4">
									<label>
										<input type="checkbox" className="mr-2" />
										Days
									</label>
									<label>
										<input type="checkbox" className="mr-2" />
										Evenings
									</label>
								</div>
							</div>
							<div>
								<label className="block mb-1">Shift:</label>
								<div className="flex items-center gap-4">
									<label>
										<input type="checkbox" className="mr-2" />
										Graveyard
									</label>
									<label>
										<input type="checkbox" className="mr-2" />
										Swing
									</label>
									<label>
										<input type="checkbox" className="mr-2" />
										Weekends
									</label>
								</div>
							</div>
						</div>

						{/* Desired Pay and Overtime */}
						<div className="grid  grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-16 mb-6">
							<div>
								<label className="block mb-4">Desired Pay:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
									placeholder="Enter desired pay"
								/>
							</div>
							<div>
								<label className="block mb-4">Will you work overtime?</label>
								<div className="flex items-center gap-4">
									<label>
										<input type="radio" name="overtime" className="mr-2" />
										Yes
									</label>
									<label>
										<input type="radio" name="overtime" className="mr-2" />
										No
									</label>
								</div>
							</div>
						</div>

						{/* Essential Functions */}
						<div className="mb-6">
							<label className="block mb-4">
								Have you been told or read the essential functions of the job
								and can you perdiv them?
							</label>
							<div className="flex items-center gap-4">
								<label>
									<input
										type="radio"
										name="essential_functions"
										className="mr-2"
									/>
									Yes
								</label>
								<label>
									<input
										type="radio"
										name="essential_functions"
										className="mr-2"
									/>
									No
								</label>
							</div>
						</div>
					</div>
				</div>

				{/* Education */}

				<div className="p-2 ">
					<div className=" p-6 border cardText rounded">
						<h1 className="employCardHead mb-4">Education</h1>
						{/* large */}
						<div className="hidden lg:block">
							{/* Table Header */}
							<div className="grid grid-cols-4 border-b border-gray-500 font-semibold text-center p-2">
								<div className="border-r border-gray-500">School Name</div>
								<div className="border-r border-gray-500">Location</div>
								<div className="border-r border-gray-500">Degree Received</div>
								<div>Major</div>
							</div>

							{/* Table Rows */}
							<div className="grid grid-cols-4 gap-0 border-b border-gray-500 p-2">
								<div className="border-r border-gray-500">
									<input
										type="text"
										className="w-full border-none p-2 focus:ring-0"
										placeholder="Enter school name"
									/>
								</div>
								<div className="border-r border-gray-500">
									<input
										type="text"
										className="w-full border-none p-2 focus:ring-0"
										placeholder="Enter location"
									/>
								</div>
								<div className="border-r border-gray-500">
									<input
										type="text"
										className="w-full border-none p-2 focus:ring-0"
										placeholder="Enter degree"
									/>
								</div>
								<div>
									<input
										type="text"
										className="w-full border-none p-2 focus:ring-0"
										placeholder="Enter major"
									/>
								</div>
							</div>

							{/* Additional Row */}
							<div className="grid grid-cols-4 gap-0 border-b border-gray-500 p-2">
								<div className="border-r border-gray-500">
									<input
										type="text"
										className="w-full border-none p-2 focus:ring-0"
										placeholder="Enter school name"
									/>
								</div>
								<div className="border-r border-gray-500">
									<input
										type="text"
										className="w-full border-none p-2 focus:ring-0"
										placeholder="Enter location"
									/>
								</div>
								<div className="border-r border-gray-500">
									<input
										type="text"
										className="w-full border-none p-2 focus:ring-0"
										placeholder="Enter degree"
									/>
								</div>
								<div>
									<input
										type="text"
										className="w-full border-none p-2 focus:ring-0"
										placeholder="Enter major"
									/>
								</div>
							</div>
						</div>

						{/* phone */}
						<div className="block lg:hidden">
							{/* Table Header */}
							<div className="grid grid-cols-1  font-semibold text-center p-2">
								<div>
									<h1 className="mb-4 cardText">School Name</h1>
									<div>
										<input
											type="text"
											className="w-full border-none p-2 focus:ring-0"
											placeholder="Enter school name"
										/>
									</div>
									<div>
										<input
											type="text"
											className="w-full border-none p-2 focus:ring-0"
											placeholder="Enter school name"
										/>
									</div>
								</div>

								<div>
									<h1 className="mb-4 mt-4 cardText">Location</h1>
									<div>
										<input
											type="text"
											className="w-full border-none p-2 focus:ring-0"
											placeholder="Enter location"
										/>
									</div>
									<div>
										<input
											type="text"
											className="w-full border-none p-2 focus:ring-0"
											placeholder="Enter location"
										/>
									</div>
								</div>

								<div>
									<h1 className="mb-4 mt-4 cardText">Degree Received</h1>
									<div>
										<input
											type="text"
											className="w-full border-none p-2 focus:ring-0"
											placeholder="Enter degree"
										/>
									</div>
									<div>
										<input
											type="text"
											className="w-full border-none p-2 focus:ring-0"
											placeholder="Enter degree"
										/>
									</div>
								</div>
								<div>
									<h1 className="mb-4 mt-4 cardText">Major</h1>
									<div>
										<input
											type="text"
											className="w-full border-none p-2 focus:ring-0"
											placeholder="Enter major"
										/>
									</div>
									<div>
										<input
											type="text"
											className="w-full border-none p-2 focus:ring-0"
											placeholder="Enter major"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Skills Section */}
						<div className="mt-6">
							<label className="block mb-4 font-semibold">
								List any special skills or experiences that you feel would help
								you in the position that you are applying for:
							</label>
							<textarea
								className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-[#397CCA]"
								rows="4"
								placeholder="Enter your skills or experiences here"
							></textarea>
						</div>
					</div>
				</div>

				{/* Work */}

				<div className=" p-6 mt-4 rounded-lg border">
					<h2 className="employCardHead mb-4">Work History</h2>
					<div className="space-y-6  cardText">
						{/* Job 1 */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block font-medium mb-4">Job Title:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className="block font-medium mb-4">Start Date:</label>
									<input
										type="date"
										className="w-full border border-gray-300 rounded p-2"
									/>
								</div>
								<div>
									<label className="block font-medium mb-4">End Date:</label>
									<input
										type="date"
										className="w-full border border-gray-300 rounded p-2"
									/>
								</div>
							</div>
						</div>

						<div>
							<label className="block font-medium mb-4">Company Name:</label>
							<input
								type="text"
								className="w-full border border-gray-300 rounded p-2"
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div>
								<label className="block font-medium mb-4">City:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
							<div>
								<label className="block font-medium mb-4">State:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
							<div>
								<label className="block font-medium mb-4">Zip:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
						</div>

						<div>
							<label className="block font-medium mb-4">Phone #:</label>
							<input
								type="text"
								className="w-full border border-gray-300 rounded p-2"
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block font-medium mb-4">
									Starting Salary:
								</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
							<div>
								<label className="block font-medium mb-4">Ending Salary:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
						</div>

						<div>
							<label className="block font-medium  mb-4">Duties:</label>
							<textarea className="w-full border border-gray-300 rounded p-2 h-24"></textarea>
						</div>

						<div>
							<label className="block font-medium  mb-4">
								Reason for Leaving:
							</label>
							<input
								type="text"
								className="w-full border border-gray-300 rounded p-2"
							/>
						</div>

						<div>
							<label className="block font-medium mb-4">
								May we contact your present employer?
							</label>
							<div className="flex items-center space-x-4">
								<label className="flex items-center">
									<input type="radio" name="contactEmployer" className="mr-2" />{" "}
									Yes
								</label>
								<label className="flex items-center">
									<input type="radio" name="contactEmployer" className="mr-2" />{" "}
									No
								</label>
							</div>
						</div>

						<hr className="my-6" />

						{/* Repeat fields for Job 2 */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block font-medium mb-4">Job Title:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className="block font-medium mb-4">Start Date:</label>
									<input
										type="date"
										className="w-full border border-gray-300 rounded p-2"
									/>
								</div>
								<div>
									<label className="block font-medium mb-4">End Date:</label>
									<input
										type="date"
										className="w-full border border-gray-300 rounded p-2"
									/>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block font-medium  mb-4">Company Name:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
							<div>
								<label className="block font-medium mb-4">
									Supervisors Name:
								</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
						</div>

						<div className="p-4 mt-4 border border-gray-300">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block font-medium mb-4">City:</label>
									<input
										type="text"
										className="w-full border border-gray-300 rounded p-2"
									/>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<label className="block font-medium mb-4">State:</label>
										<input
											type="text"
											className="w-full border border-gray-300 rounded p-2"
										/>
									</div>
									<div>
										<label className="block font-medium mb-4">Zip:</label>
										<input
											type="text"
											className="w-full border border-gray-300 rounded p-2"
										/>
									</div>
								</div>
							</div>

							<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 items-center">
								<div>
									<label className="block font-medium mb-4">Phone #:</label>
									<input
										type="text"
										className="w-full border border-gray-300 rounded p-2"
									/>
								</div>

								<div>
									<label className="block font-medium mb-4">
										Starting Salary:
									</label>
									<input
										type="text"
										className="w-full border border-gray-300 rounded p-2"
									/>
								</div>

								<div>
									<label className="block font-medium mb-4">
										Ending Salary:
									</label>
									<input
										type="text"
										className="w-full border border-gray-300 rounded p-2"
									/>
								</div>
							</div>
						</div>

						<div>
							<label className="block font-medium  mb-4">Duties:</label>
							<textarea className="w-full border border-gray-300 rounded p-2 h-24"></textarea>
						</div>
						<div>
							<label className="block font-medium  mb-4">
								Reason for Leaving:
							</label>
							<input
								type="text"
								className="w-full border border-gray-300 rounded p-2"
							/>
						</div>

						{/* References */}
						<h3 className="text-md font-bold mb-4">References</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
							<div>
								<label className="block font-medium mb-4">Name:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
							<div>
								<label className="block font-medium mb-4">Phone:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
							<div>
								<label className="block font-medium mb-4">
									Relationship to You:
								</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
						</div>

						{/* Certification */}
						<div className="mt-6">
							<p className="text-sm">
								I certify that the facts set forth in this Application for
								Employment are true and complete to the best of my knowledge. I
								understand that if I am employed, false statements, omissions,
								or misrepresentations may result in my dismissal.
							</p>
						</div>

						{/* Signature Section */}
						<div className="grid grid-cols-1 md:grid-cols-3  mt-4 gap-4">
							<div>
								<label className="block font-medium mb-4">Printed Name:</label>
								<input
									type="text"
									className="w-full border border-l-gray-300 rounded p-2"
								/>
							</div>
							<div>
								<label className="block font-medium mb-4">Signature:</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
							<div>
								<label className="block font-medium mb-4">Date:</label>
								<input
									type="date"
									className="w-full border border-gray-300 rounded p-2"
								/>
							</div>
						</div>

						<div className="mt-4">
							<label className="block font-medium mb-4">Upload Your CV:</label>
							<input
								type="file"
								// name="file"
								accept=".pdf,.doc,.docx"
								onChange={handleFileChange}
								className="w-full border border-gray-300 rounded p-2"
							/>
							{/* <p className="text-sm text-gray-500 mt-1">
                Accepted formats: .pdf, .doc, .docx
              </p> */}
						</div>

						<button
							type="submit"
							className="group flex max-w-[175px] items-center px-3 py-2 gap-1 border-[1px] border-[#397CCA] rounded-[8px] mt-[30px] text-[18px] font-semibold text-[#397CCA] hover:bg-[#397CCA] hover:text-white transition duration-300"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EmployeementApplication;
