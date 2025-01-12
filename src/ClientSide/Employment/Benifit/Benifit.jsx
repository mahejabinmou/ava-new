const Benifit = () => {
  //     const [showMore, setShowMore] = useState(false);

  //   const handleReadMore = () => {
  //     setShowMore(!showMore);
  //   };
  return (
    <div className="sectionGap">
      <h1 className="text-center text-[#0E0D0D]/[.8] headTwo font-semibold mb-[30px] 2xl:mb-[50px] ">
        Here are the benefits I offer as a company
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        <div className="2xl:h-[550px] xl:h-[450px] px-[30px] pt-[30px] pb-[40px] bg-white rounded-[8px] border border-[#000000]/[.10]">
          <div className="w-[60px] h-[60px] rounded-full bg-[#FF8C00] flex justify-center items-center">
            <img
              src="/b1.png"
              alt=""
              className="w-[30px] h-[30px] object-cover"
            />
          </div>
          <h1 className="benifitHead pt-[20px]">Competitive Compensation</h1>
          <p className="benifitpara pt-[10px]">
            ABA Consulting LLC regularly conducts market analyses to ensure that
            we offer fair and competitive compensation to our staff.
          </p>
        </div>

        <div className="2xl:h-[550px] xl:h-[450px] px-[30px] pt-[30px] pb-[40px] bg-white rounded-[8px] border border-[#000000]/[.10]">
          <div className="w-[60px] h-[60px] rounded-full bg-[#FF8C00] flex justify-center items-center">
            <img
              src="/b2.png"
              alt=""
              className="w-[30px] h-[30px] object-cover"
            />
          </div>
          <h1 className="benifitHead pt-[20px]">
            Abundant Training and Learning Opportunities
          </h1>
          <p className="benifitpara pt-[10px]">
            At ABA Consulting LLC, we provide extensive on-the-job learning and
            supervision, along with a generous development and training fund,
            ensuring you have the best opportunities to learn and grow in your
            career.
          </p>
        </div>
        <div className="2xl:h-[550px] xl:h-[450px] px-[30px] pt-[30px] pb-[40px] bg-white rounded-[8px] border border-[#000000]/[.10]">
          <div className="w-[60px] h-[60px] rounded-full bg-[#FF8C00] flex justify-center items-center">
            <img
              src="/b3.png"
              alt=""
              className="w-[30px] h-[30px] object-cover"
            />
          </div>
          <h1 className="benifitHead pt-[20px]">Generous PTO & Holidays</h1>
          <p className="benifitpara pt-[10px]">
            We offer a generous benefits package that includes 80 hours of
            accrued PTO annually, allowing you to take the time you need for
            personal and family matters. Additionally, you will receive 10 paid
            holidays each year, ensuring you have ample time to relax and
            recharge.
          </p>
        </div>
        <div className="2xl:h-[550px] xl:h-[450px] px-[30px] pt-[30px] pb-[40px] bg-white rounded-[8px] border border-[#000000]/[.10]">
          <div className="w-[60px] h-[60px] rounded-full bg-[#FF8C00] flex justify-center items-center">
            <img
              src="/b4.png"
              alt=""
              className="w-[30px] h-[30px] object-cover"
            />
          </div>
          <h1 className="benifitHead pt-[20px]">Insurance Benefits</h1>
          <p className="benifitpara pt-[10px]">
            ABA Consulting LLC offers a comprehensive medical insurance plan in
            partnership with Health Partners, with coverage available at all
            their locations across Minnesota. While we provide access to our
            preferred network, we understand that flexibility is important. If a
            prospective employee has a different insurance plan, we offer
            reimbursement for their monthly premium to keep their existing
            coverage active, rather than switching to our preferred partner.
          </p>
        </div>
        <div className="2xl:h-[550px] xl:h-[450px] px-[30px] pt-[30px] pb-[40px] bg-white rounded-[8px] border border-[#000000]/[.10]">
          <div className="w-[60px] h-[60px] rounded-full bg-[#FF8C00] flex justify-center items-center">
            <img
              src="/b5.png"
              alt=""
              className="w-[30px] h-[30px] object-cover"
            />
          </div>
          <h1 className="benifitHead pt-[20px]">Hybrid Work Environment</h1>
          <p className="benifitpara pt-[10px]">
            At ABA Consulting LLC, we offer a flexible hybrid work environment,
            allowing you to balance both in-office and remote work. This
            arrangement provides the freedom to manage your work-life balance
            while still being connected with your team and contributing to the
            success of the organization.
          </p>
        </div>
        <div className="2xl:h-[550px] xl:h-[450px] px-[30px] pt-[30px] pb-[40px] bg-white rounded-[8px] border border-[#000000]/[.10]">
          <div className="w-[60px] h-[60px] rounded-full bg-[#FF8C00] flex justify-center items-center">
            <img
              src="/b5.png"
              alt=""
              className="w-[30px] h-[30px] object-cover"
            />
          </div>
          <h1 className="benifitHead pt-[20px]">
            Continuing Education & License Support
          </h1>
          <p className="benifitpara pt-[10px]">
            At ABA Consulting LLC, we are committed to your professional growth
            and ensuring your license remains active. To support this, we cover
            a portion of your Continuing Education Units (CEUs) as a clinician.
            This benefit helps you stay current with industry standards and
            advancements
            {/* <button className="text-[#FF8C00]">read more</button> */}
            {/* {!showMore ? (
              <button onClick={handleReadMore} className="text-[#FF8C00]">
                read more
              </button>
            ) : (
              <>
                Lorem ipsum dolor sit amet quas?
                <button
                  onClick={handleReadMore}
                  className="text-[#FF8C00] ml-2"
                >
                  read less
                </button>
              </>
            )} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
