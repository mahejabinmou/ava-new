import { MdArrowOutward } from "react-icons/md";

const GivingOurBussiness = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 sectionGap gap-[50px]  justify-center items-center">
      <div className="">
        <h1 className="pb-[20px]  headTwo text-[#0E0D0D] font-semibold">
          Giving your business some orignal ideas
        </h1>
        <p className="pb-[20px] text-[#0E0D0DCC]/[.8] bodyText font-normal">
          We believe in the power of collaboration and positivity. As optimists,
          we thrive on working together to achieve shared goals, turning
          challenges into opportunities and creating impactful solutions.
        </p>

        <button className="text-[#397CCA] hidden md:flex items-center p-3 gap-1 border-[1px] border-[#397CCA] hover:bg-[#397CCA] hover:text-white rounded-[8px] mt-[30px] text-[18px] font-semibold transition duration-300 ease-in-out hover:scale-105">
          Get in touch <MdArrowOutward />
        </button>
        {/* <button className="py-[12px] px-[24px] rounded-[8px] flex justify-end items-center gap-x-[4px] bg-[#397CCA] text-white">
          Get in touch <MdArrowOutward />
        </button> */}
      </div>

      <div className="hidden xl:block  lg:h-[370px] h-[300px]">
        <img src="/images/Strtch.png" className="h-full w-full " alt="" />
      </div>

      <div className="xl:hidden block  lg:h-[370px] h-[300px]">
        <img
          src="/images/StrtchPhone.png"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default GivingOurBussiness;
