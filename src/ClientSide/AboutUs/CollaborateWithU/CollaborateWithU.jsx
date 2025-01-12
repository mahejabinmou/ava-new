const CollaborateWithU = () => {
  return (
    <div className="sectionGap ">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center">
        <div className=" overflow-hidden lg:h-[442px]  pb-[20px]   flex justify-center items-center z-10">
          <img
            src="/images/ribbon.png"
            className="w-full h-full object-cover "
            alt=""
          />
        </div>

        <div>
          <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
            We collaborate with you to tackle your key business priorities.
          </h1>
          <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
            At ABA Counsaltant we specialize in providing tailored consultancy
            services to help businesses thrive in a competitive world. With
            years of experience and a passion for driving success, we focus on
            delivering innovative solutions that meet your unique needs.Our
            mission is simple: to empower your business with the strategies and
            tools needed to achieve sustainable growth. Partner with us and take
            the next step toward achieving your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollaborateWithU;
