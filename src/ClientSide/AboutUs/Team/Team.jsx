/* eslint-disable react/no-unescaped-entities */
import Footer from "../../Shared/Footer/Footer";

const Team = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("/images/neetTeam.jpg")`,
              filter: "brightness(.4)",
            }}
            className="bg-no-repeat bg-center bg-cover w-full  
h-[420px] flex justify-center items-center"
          ></div>

          <div
            className="absolute inset-0 flex flex-col  justify-center max-w-[750px] px-[30px]
    md:px-[32px] lg:px-[80px]  xl:px-[100px]  2xl:px-[150px] 
        "
          >
            <h1 className="headTwo text-white pb-[12px] font-semibold">
              Meet Our Team
            </h1>

            <p className=" bodyText text-white md:max-w-[550px] font-normal">
              At ABA Consulting, our team works collaboratively to deliver
              exceptional guidance, innovative solutions, and personalized care
              to empower autism centers and their communities.
            </p>
          </div>
        </div>

        <div className="sectionGap ">
          <div>
            <div className=" meet-experts">
              <div className="ourservices max-w-[900px]">
                <h1 className="menuText font-normal">Our team</h1>
                <h2 className="headTwo font-semibold mt-[30px]">
                  Meet the Experts
                </h2>
                <p className="text-[#0E0D0DCC] bodyText mt-[20px] font-inter mb-[50px]">
                  Our team of skilled professionals brings experience,
                  innovation, and dedication to help your business succeed. We
                  work closely with you to deliver tailored solutions and
                  achieve lasting results
                </p>
              </div>
            </div>
          </div>

          <div
            className="mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px] grid grid-cols-1  lg:grid-cols-2 gap-[30px]  lg:gap-[100px] justify-center items-center"
          >
            <div className=" overflow-hidden pb-[20px] lg:h-[700px] 2xl:h-[1000px] flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/h8ytJRR/Dorothea-image.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>

            <div>
              <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
                Dorothea. H
                <span className="text-[#FF8C00] font-normal menuText">
                  {" "}
                  <br />– QSP
                </span>
              </h1>
              <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
                Dorothea is a proud Minnesota native with an in-depth
                understanding of the state's health disparities. A passionate
                advocate, she has been instrumental in championing
                person-centered care training for service providers and
                healthcare professionals. Widely recognized by state
                policymakers as an authority on the design and implementation of
                culturally specific services, Dorothea has been pivotal in
                advancing culturally responsive care for diverse ethnic
                communities. She holds both a bachelor's and a master's degree
                from Augsburg University in Minnesota, where she specialized in
                the Diversity Social Work Advancement Program (DSWAP). As a
                Licensed Independent Clinical Social Worker, her expertise has
                been dedicated to expanding access to licensed mental health
                services, particularly for culturally and linguistically diverse
                communities, including people of color, immigrants, refugees,
                and LGBTQ+ individuals. Dorothea is privileged to join a
                distinguished team of health professionals committed to
                providing medically necessary, early, and intensive
                interventions for individuals with Autism Spectrum Disorder and
                related conditions.
              </p>
            </div>
          </div>

          <div
            className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px]  grid-cols-1  grid  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
          >
            <div className=" lg:hidden xl:hidden 2xl:hidden block  overflow-hidden  pb-[20px] lg:h-[700px] 2xl:h-[1000px]  flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/vLKSs5p/Barry-Image.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>
            <div>
              <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
                Barry Alexander
                <span className="text-[#FF8C00] font-normal menuText">
                  {" "}
                  <br />– Vice President of Development
                </span>
              </h1>
              <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
                Here the professional bio for Barry Alexander, M.A, LPCC,
                Qualified Supervising Professional Bachelor’s degree in Child
                Psychology from Metropolitan State University, Master’s degree
                in Counseling Psychology from the University of St. Thomas. I
                became a Licensed Professional Clinical Counselor (LPCC) in May
                2016 and have held the designation of Board-Certified Supervisor
                since 2020. I have five years of experience working as a
                therapist in the mental health unit at Allina Health, where I
                conducted assessments and developed treatment plans for adult
                patients with chronic mental health conditions, including
                depression, anxiety disorders, schizophrenia, and bipolar
                disorder. Additionally, I have seven years of experience at
                Wilder Foundation as an embedded school therapist, where I
                worked with middle school students identified with social and
                emotional stress disorders that contribute to academic struggles
                and behavioral issues both in school and at home. For three
                years, I served as a crisis therapist at Washburn Center for
                Children, assisting adolescents and their families who were
                recently released from the hospital following a mental health
                emergency. In this role, I provided resources, treatment, and
                support to facilitate access to long-term mental health
                services. Furthermore, I have three years of experience in
                private practice, where I supervised graduate students of color
                as they worked towards obtaining their professional licensures.
              </p>
            </div>

            <div className="hidden md:hidden lg:block  overflow-hidden   pb-[20px] lg:h-[700px] 2xl:h-[1000px]  flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/vLKSs5p/Barry-Image.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>
          </div>

          <div
            className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px] grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
          >
            <div className=" overflow-hidden  pb-[20px]  lg:h-[700px] 2xl:h-[1000px] flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/wdLPjwr/Fue-Headshot.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>

            <div>
              <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
                Fue. V
                <span className="text-[#FF8C00] font-normal menuText">
                  {" "}
                  <br />– QSP
                </span>
              </h1>
              <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
                Fue is a first-generation Hmong American who was born and raised
                in Saint Paul, MN. Being a first-generation Hmong American, Fue
                has had both personal and professional experience in the
                disparities of mental health within minority/immigrant
                populations. Fue received his Bachelors of Psychology from
                Gustavus Adolphus College in Saint Peter Minnesota in 2007. In
                2014, he got married and his first daughter was born. Motivated
                by his growing family and cultural focus towards family, Fue
                pursued his master’s in clinical psychology and in 2020 obtained
                it from Crown College in Minnesota. Now that he is a father of
                4, he understands, more than ever, the importance of early
                behavioral interventions/teaching/education and the profound
                impact that it has on the development of children. As a licensed
                professional clinical counselor, Fue has had experience working
                with various populations that struggle with a variety of mental
                health disorders. Fue understands that everyone’s’ life stories
                are unique, and because of this, he truly believes that an
                individualized, culturally responsive, & person-centered
                approach is the best approach to meeting the needs of his
                clients.
              </p>
            </div>
          </div>
          <div
            className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px] grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
          >
            <div className=" lg:hidden xl:hidden 2xl:hidden block overflow-hidden  pb-[20px] lg:h-[700px] 2xl:h-[1000px]  flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/w0w6LVp/Emily.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>
            <div>
              <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
                Emme. B
                <span className="text-[#FF8C00] font-normal menuText">
                  {" "}
                  <br />– Speech Therapy Program Director
                </span>
              </h1>
              <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
                Emme received her bachelor’s and master’s degree in
                Speech-Language Pathology at the University of Minnesota - Twin
                Cities and has been providing speech and language therapy since
                2020. Her credentials include a Minnesota state speech therapy
                license, the American Speech-Language-Hearing Association's
                certificate of clinical competence, as well as certification in
                the Picture Exchange Communication System (PECS) and the Beckman
                Oral Motor Protocol. Emme specializes in providing services to
                children with ASD in the areas of: receptive-expressive language
                development, speech sound production, motor speech disorders,
                alternative and augmentative communication, feeding, and more.
                The foundation of her clinical approach is helping individuals
                find their voice through child- and family-centered care.
              </p>
            </div>

            <div className=" hidden md:hidden lg:block overflow-hidden  pb-[20px] lg:h-[700px] 2xl:h-[1000px]  flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/w0w6LVp/Emily.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>
          </div>

          <div
            className="mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px]"
          >
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center">
              <div className=" overflow-hidden   pb-[20px] lg:h-[700px] 2xl:h-[1000px]  flex justify-center items-center z-10">
                <img
                  src="https://i.ibb.co.com/4PJ51j8/Geoffrey.jpg"
                  // className="w-full max-h-[450px] object-contain"
                  className="w-full h-full object-cover rounded-[8px]"
                  alt=""
                />
              </div>

              <div>
                <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
                  Geoffrey. Z
                  <span className="text-[#FF8C00] font-normal menuText">
                    {" "}
                    <br />– Clinical Director, LICSW, QSP
                  </span>
                </h1>
                <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
                  After his military career with the U.S. Marines was
                  unexpectedly cut short due to a brain injury, he redirected
                  his focus to academics, earning a BA in Psychology. He then
                  pursued graduate studies in Human Development and Family
                  Science at NDSU, where he specialized in parental interaction,
                  psychosocial development deviations, and prevention
                  strategies. Driven by a desire to further his expertise, he
                  completed a Master's in Social Work with a concentration in
                  advanced clinical practice. His career in behavioral health
                  has spanned various Minnesota programs, working with both
                  adults and children. Ultimately, he found his true passion in
                  the EIDBI field, where he now dedicates himself to early
                  intervention and setting the foundation for successful and
                  productive lives for children and families facing
                  neurodevelopmental and neurodivergent challenges.
                </p>
              </div>
            </div>
          </div>

          <div
            className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px]  grid-cols-1  grid  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
          >
            <div className=" lg:hidden xl:hidden 2xl:hidden block  overflow-hidden   pb-[20px] lg:h-[700px] 2xl:h-[1000px]  flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/TYDpgsJ/Jessica-image.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>
            <div>
              <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
                Jessica. N
                <span className="text-[#FF8C00] font-normal menuText">
                  {" "}
                  <br />– BCBA
                </span>
              </h1>
              <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
                Jessica has been a BCBA for four years and in the field of
                Applied Behavioral Analysis for 8 years. She attended the
                University of Houston where she received her Bachelors in
                Science in Psychology. She received her Masters degree at
                Arizona State University for Special Education (Applied
                Behavioral Analysis). Jessica has always had a passion for
                working with children. She has worked with individuals from 2
                years old to 22 years old during her time in ABA. Jessica has
                experience delivering services in a variety of settings such as
                in home, in clinic, and through telehealth. She is always
                learning to grow and learn alongside her clients!
              </p>
            </div>

            <div className="hidden md:hidden lg:block  overflow-hidden   pb-[20px] lg:h-[700px] 2xl:h-[1000px]  flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/TYDpgsJ/Jessica-image.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>
          </div>

          <div
            className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px] grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
          >
            <div className=" overflow-hidden   pb-[20px]  lg:h-[700px] 2xl:h-[1000px] flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/kGjDsFr/Marie-2.png"
                // src="./images/Marie.jpg"
                // className="w-[315px] md:w-full max-h-[450px] md:object-contain object:cover "
                className="w-full 2xl:w-[760px] h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>

            <div>
              <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
                Marie. H
                <span className="text-[#FF8C00] font-normal menuText">
                  {" "}
                  <br />– BCBA
                </span>
              </h1>
              <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
                Marie graduated with a Bachelor of Science in Psychology from
                McNeese State University in Lake Charles, Louisiana. She
                discovered Applied Behavior Analysis through internships, which
                led her to become a behavior therapist in 2014 at St. Nicholas
                Center for Children. Her passion for the field grew quickly,
                prompting her to pursue a Master's in Applied Behavior Analysis
                in 2017 at the Florida Institute of Technology. In 2018, she
                returned to Minnesota, where she continued her career path and
                became a Board Certified Behavior Analyst while working in
                schools in the Anoka-Hennepin area. Marie has always had a deep
                appreciation for the clinical and behavioral aspects of behavior
                analysis, especially in center-based therapy, and she has since
                returned to this focus.
              </p>
            </div>
          </div>
          <div
            className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px] grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
          >
            <div className=" lg:hidden xl:hidden 2xl:hidden block overflow-hidden  lg:h-[700px] 2xl:h-[1000px] pb-[20px]   flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/JyHwBZN/Marina.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>
            <div>
              <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
                Marina. P
                <span className="text-[#FF8C00] font-normal menuText">
                  {" "}
                  <br />– SLP
                </span>
              </h1>
              <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
                Marina is a Speech-Language Pathologist (SLP). She received her
                Bachelor's Degree in Communication Sciences and Disorders from
                UW - Eau Claire in 2017 and completed her Master's in
                Speech-Language Pathology from UW - River Falls in 2019. In
                2020, Marina moved to the Twin Cities area, where she spent over
                three years working at an autism center, providing
                Speech-Language Therapy to individuals aged 2 to 21. She has a
                passion for working with and educating others about Augmentative
                and Alternative Communication (AAC). Outside of her professional
                life, Marina enjoys spending time outdoors during the summer,
                hiking with her husband and dog, and relaxing with a good book.
              </p>
            </div>

            <div className=" hidden md:hidden lg:block overflow-hidden lg:h-[700px] 2xl:h-[1000px]  pb-[20px]   flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/JyHwBZN/Marina.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>
          </div>
          <div
            className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px] grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
          >
            <div className=" overflow-hidden   pb-[20px] lg:h-[700px] 2xl:h-[1000px]  flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/R6jLf6Y/Sharleen-image.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover rounded-[8px]"
                alt=""
              />
            </div>

            <div>
              <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
                Sharleen
                <span className="text-[#FF8C00] font-normal menuText">
                  {" "}
                  <br />– Vice President of Construction
                </span>
              </h1>
              <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
                An experienced project manager with an emphasis in multi-family
                residential, Kris brings over a decade of commercial
                construction experience to ABA Consultancy. Throughout his
                career, he’s overseen the completion of everything from market
                rate apartments to hotels, warehouses and medical office
                buildings. His deep knowledge in contract negotiation,
                estimating and construction management ensure every ABA
                Consultancy project is executed to the highest standards—on time
                and within budget.
              </p>
            </div>
          </div>

          <div
            className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px] grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
          >
            <div className=" lg:hidden xl:hidden 2xl:hidden block overflow-hidden lg:h-[700px] 2xl:h-[1000px]  pb-[20px]   flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/t23dvPD/Teddy.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover  rounded-[8px]"
                alt=""
              />
            </div>
            <div>
              <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
                Teddy. S
                <span className="text-[#FF8C00] font-normal menuText">
                  {" "}
                  <br />– Clinical Lead- Aspring BCBA
                </span>
              </h1>
              <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
                Teddy earned a Bachelor of Arts in Sociology from the University
                of North Dakota in 2019. Following his graduation, he was
                employed as a special education para in the Anoka-Hennepin Area
                until 2020, where he gained exposure to Applied Behavior
                Analysis (ABA) at Comfort Autism Center. Subsequently, he
                pursued a Master's of Education in Applied Behavior Analysis,
                culminating in his graduation in 2023, and is presently
                undergoing the BCBA certification process. As an accomplished
                EI-EIDBI Clinical Supervisor, Teddy posits extensive proficiency
                in early intervention, developmental, and behavioral
                intervention. His background in nurturing developmental
                milestones and enriching children's communication aptitudes
                enables him to offer substantial support to the vibrant clinical
                team at Sensory Speech & OT Therapy. With his ongoing pursuit of
                BCBA certification, Teddy remains steadfast in his dedication to
                evidence-based practices and comprehensive care. He specializes
                in devising tailored treatment plans, conducting comprehensive
                assessments, and executing effective interventions that
                seamlessly intertwine with speech and Occupation Services aims
                within broader developmental strategies. This methodology
                ensures an integrated and collaborative milieu that optimizes
                therapeutic results. At Sensory Speech & OT Therapy, Teddy is
                resolutely committed to harnessing his specialized expertise to
                enhance therapeutic outcomes and client contentment. By
                fostering a nurturing context that prioritizes advancement and
                progress, he aims to empower both children and their families in
                realizing substantial developmental milestones.
              </p>
            </div>

            <div className=" hidden md:hidden lg:block overflow-hidden lg:h-[700px] 2xl:h-[1000px]  pb-[20px]   flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/t23dvPD/Teddy.jpg"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover  rounded-[8px]"
                alt=""
              />
            </div>
          </div>

          <div
            className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px] grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
          >
            <div className=" overflow-hidden   pb-[20px] lg:h-[700px] 2xl:h-[1000px]  flex justify-center items-center z-10">
              <img
                src="https://i.ibb.co.com/6vTCNtv/Deshaa.png"
                // className="w-full max-h-[450px] object-contain"
                className="w-full h-full object-cover  rounded-[8px]"
                alt=""
              />
            </div>

            <div>
              <h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
                Dee’Sha. S
                <span className="text-[#FF8C00] font-normal menuText">
                  {" "}
                  <br />– Vice President of Construction
                </span>
              </h1>
              <p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
                With a Bachelor of Arts in Sociology from the University of
                Texas at San Antonio and a Master’s in Applied Behavior Analysis
                from National University in San Diego, Dee’Sha has dedicated her
                career to serving children with special needs across diverse
                settings. Dee’Sha has experience working with children aged 2 to
                16 in the community, school, home, and clinic environments.
                Currently, she focuses on early intervention in a clinic
                setting, where she is committed to providing high-quality care
                to help her patients reach their full potential. She is
                passionate about continuing her professional growth within the
                field and making a meaningful impact in the lives of those she
                serves. Dee’Sha looks forward to the opportunity to serve your
                family!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionGap bg-[#1a2633]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Team;
