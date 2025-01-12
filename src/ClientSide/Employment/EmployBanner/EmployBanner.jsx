// import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./EmployBanner.css";
import Slider from "react-slick";

const joyItems = [
  {
    imgSrc: "https://i.ibb.co/fDZTC6q/wdw-1142-66c25b7e935d6.webp",
    LgImg: "/images/aboutB1.webp",
  },
  {
    imgSrc: "https://i.ibb.co/XtSvxZh/WDW-0921-1.webp",
    LgImg: "/images/aboutB2.webp",
  },

  {
    imgSrc: "https://i.ibb.co/Tv7T8ms/ent.webp",
    LgImg: "/images/aboutB1.webp",
  },
  {
    imgSrc: "https://i.ibb.co/x69TdwQ/A7406038-1.webp",
    LgImg: "/images/aboutB2.webp",
  },
  {
    imgSrc: "https://i.ibb.co/g6jTWB4/IMG-2009.webp",
    LgImg: "/images/aboutB1.webp",
  },

  {
    imgSrc: "https://i.ibb.co/PrnyML3/A7405947.webp",
    LgImg: "/images/aboutB2.webp",
  },
];

const EmployBanner = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 425,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },

  //     {
  //       breakpoint: 1440,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="  ">
      <div className="relative">
        <div
          style={{
            backgroundImage: `url("/appli.jpg")`,
            filter: "brightness(.4)",
          }}
          className="bg-no-repeat bg-center bg-cover  w-full  
h-[420px] flex justify-center items-center"
        ></div>

        <div
          className="absolute inset-0 flex flex-col  justify-center px-[30px]
    md:px-[32px] lg:px-[80px]  xl:px-[100px]  2xl:px-[150px] 
        "
        >
          <h1 className="headTwo text-white pb-[12px] font-semibold">
            Employment
          </h1>

          <p className=" bodyText text-white md:max-w-[650px] 2xl:pb-20 font-normal">
            Tailored solutions to enhance compliance, optimize operations, and
            improve care quality. Explore our options to find the perfect fit
            for your agency’s needs.
          </p>
        </div>
      </div>

      {/* slider */}
      {/* <div className="slider-container  relative top-[-50px]">
        <Slider {...settings}>
          {joyItems.map((item, index) => (
            <div key={index} className="px-2">
              <div>
                <div className="h-[314px]">
                  <img
                    className="h-full w-full object-cover rounded-[8px]"
                    src={item.LgImg}
                    alt={item.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default EmployBanner;
