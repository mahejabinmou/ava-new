import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

export default function ConsultationForm() {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.74)" }}
        >
          <div
            className="w-full max-w-[1140px] relative p-8 md:p-[56px] md:pt-[50px] max-h-[96vh] overflow-y-auto bg-white shadow-lg sm:p-8 border-[1px] rounded-xl"
            style={{ border: "1px solid rgba(0, 0, 0, 0.20)" }}
          >
            <MdOutlineCancel
              className="absolute right-8 cursor-pointer"
              size={20}
              onClick={() => setIsOpen(false)}
            />

            <h2 className="mb-4 text-center text-[#0E0D0D] text-[20px] md:text-[30px] font-semibold">
              Book Free Consultation
            </h2>
            <div className="flex justify-center">
              <p
                className="mb-6 text-center text-[16px] font-inter leading-[24px] max-w-[626px]"
                style={{ color: "rgba(14, 13, 13, 0.80)" }}
              >
                Your next breakthrough is just a consultation away. Click below
                to schedule your session and discover how we can empower your
                success!
              </p>
            </div>

            <form className="mt-6 md:mt-12 flex flex-col gap-[28px]">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[18px] text-black font-semibold"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter full name"
                  className=" block w-full  mt-3 text-[16px] font-inter border-[1px] rounded-[6px] border-[#CBD5E1] p-3   "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[18px] text-black font-semibold"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                  className="block w-full  mt-3 text-[16px] font-inter border-[1px] rounded-[6px] border-[#CBD5E1] p-3 "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[18px] text-black font-semibold"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter phone number"
                  className="block w-full  mt-3 text-[16px] font-inter border-[1px] rounded-[6px] border-[#CBD5E1] p-3 "
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-[18px] text-black font-semibold"
                >
                  Date *
                </label>
                <select
                  id="date"
                  className="block w-full  mt-3 text-[16px] font-inter border-[1px] rounded-[6px] border-[#CBD5E1] p-3 "
                >
                  <option>Select a date</option>
                  <option>January 1, 2024</option>
                  <option>January 2, 2024</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[18px] text-black font-semibold"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Describe your question"
                  className="block mt-3 w-full text-[16px] font-inter border-[1px] rounded-[6px] border-[#CBD5E1] p-3 "
                ></textarea>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#397CCA] gap-1 rounded-lg py-3 px-7 text-white 
                  hover:bg-[#397dcad3] flex items-center justify-center"
                >
                  <span className="text-[18px] font-semibold ">Submit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 17.6L15.6 8L7 8L7 6L19 6L19 18L17 18L17 9.4L7.4 19L6 17.6Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
