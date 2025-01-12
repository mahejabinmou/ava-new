const Application = () => {
  return (
    <div className="sectionGap ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[46px]  items-center">
        <div className=" ">
          <img
            src="/Images/ab.png"
            alt=""
            className="h-[250px] sm:h-[388px] 2xl:h-[600px] w-full object-cover  rounded-[16px]"
          />
        </div>
        <div>
          <h1 className="headTwo text-[#0E0D0D]/[.8]  pb-[12px]">
            Application Submission Process:
          </h1>
          <p className="bodyText  text-[#0E0D0D]/[.8]">
            For candidates to apply, please create a section on the website that
            can be filled out via an application form. Once completed, they can
            attach a resume and submit it directly to our company email at
          </p>
          {/* <p className="text-[#FF8C00] underline">Info@abaconsulting.org</p> */}
          <a
            href="mailto:Info@abaconsulting.org"
            className="text-[#FF8C00] underline"
          >
            Info@abaconsulting.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default Application;
