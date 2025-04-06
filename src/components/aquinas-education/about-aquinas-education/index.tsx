import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutEquinas = () => {
  return (
    <>
      <section className="section pb-0 custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-bold mb-3 text-center">
            About{" "}
            <span className="aquinas-primary-color">Aquinas Education</span>
          </h2>
          <p className="fs-20 fw-400 text-center">
            Aquinas Education is an innovative platform that simplifies
            connecting schools with qualified teachers, TAs, and administrative
            staff in the UK and overseas. It streamlines staffing processes,
            making it easier to find candidates while offering features like
            attendance tracking and salary management.
          </p>
          <p className="fs-20 fw-400 mb-5 text-center">
            Revolutionising education staffing, Aquinas Education’s platform
            focuses on efficiency. This is delivered by leveraging a powerful
            hybrid tech-based system to streamline the recruitment process and
            match the right person to the right school seamlessly. By enhancing
            administrative procedures and making recruitment easier, it benefits
            schools and job seekers alike.
          </p>
          <div className="row text-center">
            <div className="col-lg-4 col-sm-6 d-flex mb-4">
              <div className="card shadow-none w-100 br-15px">
                <div className="card-body p-lg-30">
                  <p className="font--24 fw-600 text-black mb-1">
                    10k teachers
                  </p>
                  <h3 className="font--18 fw-600 mb-0">
                    Placed weekly on average!
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex mb-4">
              <div className="card shadow-none w-100 br-15px">
                <div className="card-body p-lg-30">
                  <p className="font--24 fw-600 text-black mb-1">
                    48,000 approx.
                  </p>
                  <h3 className="font--18 fw-600 mb-0">
                    Teaching hours placed every day!
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex mb-4">
              <div className="card shadow-none w-100 br-15px">
                <div className="card-body p-lg-30">
                  <p className="font--24 fw-600 text-black mb-1">
                    99% Satisfaction
                  </p>
                  <h3 className="font--18 fw-600 mb-0">ratio reported!</h3>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-lg-6 text-lg-left align-self-center p-4">
                <h2 className="fs-26 mb-3">
                  A vision to change the educational hiring landscape!
                </h2>
                <p className="fs-20">
                  Aquinas Education aspired to reshape the landscape of
                  educational hiring by recognising and addressing prevalent
                  challenges in the sector. They wanted to uproot the hurdles
                  that come in the way of swiftly placing qualified teachers and
                  helping educators find suitable positions. They realised that
                  these issues persisted due to outdated hiring methods and
                  inadequate job platforms. These shortcomings lead to delays,
                  inefficiencies, and increased administrative burdens.
                </p>
                <p className="fs-20">
                  The team at Aquinas Education identified these challenges and
                  committed to leveraging technology to pioneer a transformation
                  in staffing processes. Their vision was to create a
                  user-friendly platform that caters specifically to the
                  intricacies of education staffing.
                </p>
              </div>
              <div className="col-lg-6">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.aquinasHiring}
                  width="600"
                  height="630"
                  alt="educational hiring landscape!"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--1 custom-blog-cursor">
          <div className="container py-8">
            <div className="mb-5">
              <h2 className="fs-32 text-center fw-bold">
                Transformation to a next-gen platform
              </h2>
            </div>

            <div className="row align-items-stretch mb-4">
              <div className="col-lg-6 text-lg-left align-self-center mb-4">
                <h3 className="fs-26 mb-4">
                  From an outdated system unable to meet evolving needs
                </h3>
                <p className="fs-20">
                  Aquinas Education’s previous platform faced significant
                  challenges due to its outdated design, poor functionalities,
                  and a user journey that no longer aligned with the vision.
                </p>
                <p className="fs-20">
                  As times evolved, the platform struggled to fulfil the
                  changing needs of schools, educators, and administrative
                  professionals. Its inefficiencies were evident in its
                  inability to cater to the evolving requirements of these
                  stakeholders, prompting the team of Aquinas to seek a revamp
                  of the platform.
                </p>
              </div>
              <div className="col-lg-6 order-lg-first">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.aquinasMeet}
                  width="600"
                  height="481"
                  alt="Teacher meet evolving"
                />
              </div>
            </div>

            <div className="row align-items-stretch mb-5">
              <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-4">
                <h3 className="fs-26 mb-4">
                  To an efficient, cutting-edge and robust platform
                </h3>
                <p className="fs-20">
                  Recognising the deficiencies in their existing system, Aquinas
                  Education approached us with a clear vision to develop a new,
                  cutting-edge platform. This revamp aimed to create an
                  efficient, user-centric solution perfectly tailored to meet
                  the needs of both schools and educators.
                </p>
                <p className="fs-20">
                  The goal was to design and build a platform that would address
                  the specific pain points experienced by education
                  professionals, providing a seamless experience aligned with
                  the modern technological landscape.
                </p>
              </div>
              <div className="col-lg-6">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.aquinasRobust}
                  width="600"
                  height="481"
                  alt="Robust platform"
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-12 mx-auto">
                <div className="text-center mb-5">
                  <h2 className="fs-32 mb-3 fw-bold">
                    Development phase of Aquinas Education
                  </h2>
                  <p className="fs-20">
                    We collaborated closely, combining innovative ideas with
                    technical expertise to redefine the platform’s architecture
                    and functionalities. Rigorous testing and iterative design
                    processes were integral to ensure a seamless user
                    experience.
                  </p>
                  <p className="fs-20">
                    The development team meticulously crafted each feature,
                    focusing on precision in algorithm development for staff
                    matching, robust data encryption for privacy, and system
                    scalability to handle growing demands. The project witnessed
                    an intricate balance between technological advancements and
                    user-centric design principles.
                  </p>
                </div>
              </div>

              <div className="col-lg-10 text-center">
                <div className="row gx-6">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <AnimatedImageWithOpacity
                      className="img-fluid lazy"
                      loading="lazy"
                      src={IMAGES.aquinasTeacher}
                      width="494"
                      height="488"
                      alt="teacher"
                    />
                  </div>
                  <div className="col-lg-12 d-md-none mb-4 mb-md-0">
                    <p className="sub-title">
                      The development team meticulously crafted each feature,
                      focusing on precision in algorithm development for staff
                      matching, robust data encryption for privacy, and system
                      scalability to handle growing demands. The project
                      witnessed an intricate balance between technological
                      advancements and user-centric design principles.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <AnimatedImageWithOpacity
                      className="img-fluid lazy"
                      loading="lazy"
                      src={IMAGES.aquinasStudent}
                      width="494"
                      height="488"
                      alt="student"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="mb-5">
              <h2 className="fs-32 fw-bold text-center">
                Anticipated challenges in the project
              </h2>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none br-10 w-100 p-4">
                  <div className="card-body p-lg-30">
                    <h3 className="fs-22 fw-700 mb--10">
                      Algorithm precision and human interaction
                    </h3>
                    <p className="mb-0">
                      Developing an algorithm that accurately matches education
                      professionals with schools while preserving the
                      personalised touch required in staffing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none br-10 w-100 p-4">
                  <div className="card-body p-lg-30">
                    <h3 className="fs-22 fw-700 mb-2">
                      Integrated system complexity
                    </h3>
                    <p className="mb-0">
                      Designing an integrated system that manages attendance,
                      salary calculations, and data encryption, demanded
                      precision in data capture and secure handling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex mb-4 mb-md-0">
                <div className="card border-0 shadow-none br-10 w-100 p-4">
                  <div className="card-body p-lg-30">
                    <h3 className="fs-22 fw-700 mb-2">
                      Data privacy and security measures
                    </h3>
                    <p className="mb-0">
                      Implementing robust security measures to ensure stringent
                      data privacy protocols while maintaining accessibility for
                      authorised users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex">
                <div className="card border-0 shadow-none border-10 w-100 p-4">
                  <div className="card-body p-lg-30">
                    <h3 className="fs-22 fw-700 mb--10">
                      Platform scalability and performance
                    </h3>
                    <p className="mb-0">
                      Ensuring the platform’s capability to handle increased
                      user loads without compromising on performance or response
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="mb-5">
              <h2 className="fs-32 fw-bold text-center">
                Features that strengthened their vision
              </h2>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-md-6 col-xl-4 d-flex mb-4">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasBooking}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="76"
                      alt="Efficient Booking System"
                    />
                    <h3 className="fs-22 fw-700 mb-2">
                      Efficient Booking System
                    </h3>
                    <p className="mb-0 fs-20">
                      A platform that simplifies hiring educators akin to
                      booking an Uber. Schools have the ability to review
                      qualifications, engage in direct communication, and
                      efficiently hire prescreened education professionals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-4 d-flex mb-4">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasMatching}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="76"
                      alt="Two-Way Matching System"
                    />
                    <h3 className="fs-22 fw-700 mb-2">
                      Two-Way Matching System
                    </h3>
                    <p className="mb-0 fs-20">
                      The dynamic platform facilitates a two-way process where
                      educators find suitable roles while schools efficiently
                      identify qualified staff, ensuring mutual satisfaction in
                      placements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-4 d-flex mb-4">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasAlgorithm}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="76"
                      alt="Precise Algorithm"
                    />
                    <h3 className="fs-22 fw-700 mb-2">Precise Algorithm</h3>
                    <p className="mb-0 fs-20">
                      Building a sophisticated algorithm system to ensure
                      accurate matching between educators and schools,
                      optimising the placement process based on qualifications
                      and preferences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-4 d-flex mb-4">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasAttendance}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="76"
                      alt="Attendance Tracking"
                    />
                    <h3 className="fs-22 fw-700 mb-2">Attendance Tracking</h3>
                    <p className="mb-0 fs-20">
                      Integrated attendance tracking feature offering schools
                      real-time insights into staff attendance, streamlining
                      administrative processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-4 d-flex">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasSalary}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="76"
                      alt="Salary Management"
                    />
                    <h3 className="fs-22 fw-700 mb-2">Salary Management</h3>
                    <p className="mb-0 fs-20">
                      Robust salary management system providing efficient salary
                      calculations and secure handling of financial data,
                      ensuring accurate and timely payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="mb-5">
              <h2 className="fs-32 fw-bold text-center">
                Platforms we developed for Aquinas Education
              </h2>
            </div>

            <div className="row gy-6">
              <div className="col-lg-12 d-flex mb-4">
                <div className="card shadow-none rounded-4 w-100 card-border-gray br-15px">
                  <div className="card-body p-lg-40">
                    <div className="row align-items-stretch">
                      <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-4">
                        <h3 className="fs-26 fw-600 mb-4">
                          Admin web interface
                        </h3>
                        <p className="fs-20">
                          We created a comprehensive and user-friendly web
                          interface tailored for administrative purposes. This
                          interface empowers administrators with tools to
                          efficiently manage staffing, oversee placements, and
                          streamline administrative tasks.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <AnimatedImageWithOpacity
                          className="fit-img lazy"
                          loading="lazy"
                          src={IMAGES.aquinasAdminPlatform}
                          width="560"
                          height="296"
                          alt="Admin web interface"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 d-flex mb-4">
                <div className="card shadow-none rounded-4 w-100 card-border-gray br-15px">
                  <div className="card-body p-lg-40">
                    <div className="row align-items-stretch">
                      <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-4">
                        <h3 className="fs-26 fw-600 mb-4">
                          Web platform and app for schools
                        </h3>
                        <p className="fs-20">
                          We developed a unified platform accessible via web and
                          app interfaces, specifically designed to meet the
                          needs of schools. This platform provides schools with
                          a seamless experience to browse, search, and book
                          educators and administrative staff, offering
                          flexibility in accessing the platform.
                        </p>
                      </div>
                      <div className="col-lg-6 order-lg-first">
                        <AnimatedImageWithOpacity
                          className="fit-img lazy"
                          loading="lazy"
                          src={IMAGES.aquinasSchoolPlatform}
                          width="560"
                          height="296"
                          alt="Web platform schools"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Platform and App for Teachers */}
              <div className="col-lg-12 d-flex">
                <div className="card shadow-none rounded-4 w-100 card-border-gray br-15px">
                  <div className="card-body p-lg-40">
                    <div className="row align-items-stretch">
                      <div className="col-lg-6 text-lg-left align-self-center mb-4 mb-lg-0 py-lg-4">
                        <h3 className="fs-26 fw-600 mb-4">
                          Web platform and app for teachers
                        </h3>
                        <p className="fs-20">
                          For educators, we crafted a versatile platform
                          accessible through both web and app interfaces. This
                          interface equips educators with the ability to create
                          profiles, explore available roles, engage with
                          schools, and facilitate direct communication for job
                          placements.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <AnimatedImageWithOpacity
                          className="fit-img lazy"
                          loading="lazy"
                          src={IMAGES.aquinasTeacherPlatfrom}
                          width="560"
                          height="296"
                          alt="Web platform teachers"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Visit */}
      <section>
        <div className="ptb--80 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-lg-6 align-self-center text-lg-left py-lg-4 mb-4">
                <h2 className="fs-26 mb-3">
                  A moment from our visit to the client’s office!
                </h2>
                <p className="fs-20 text-black mb-0 lh-1-6 mr-5">
                  Visiting our client’s space is a top priority for us to better
                  understand their needs and operations!
                </p>
              </div>
              <div className="col-lg-6 order-lg-first">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.aquinasClientOffice}
                  width="300"
                  height="239"
                  alt="Clients office"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How does the platform work for schools */}
      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="mb-5">
              <h2 className="fs-32 text-center fw-bold">
                How does the platform work for schools?
              </h2>
            </div>
            <div className="row justify-content-center text-center">
              {/* Search and browse */}
              <div className="col-md-6 col-xl-4 d-flex mb-4 mb-xl-0">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasSearchBrowse}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Search and browse"
                    />
                    <h3 className="fs-22 mb-2">Search and browse</h3>
                    <p className="mb-0 fs-20">
                      Schools access a fully vetted pool of educators and
                      administrative staff through the platform. They can
                      effortlessly search based on their specific requirements,
                      from qualifications to availability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct booking */}
              <div className="col-md-6 col-xl-4 d-flex mb-4 mb-xl-0">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasDirectBooking}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Direct booking"
                    />
                    <h3 className="fs-22 mb-2">Direct booking</h3>
                    <p className="mb-0 fs-20">
                      Utilising the intuitive system, schools can directly book
                      educators and staff for their required dates. The
                      streamlined process allows for a quick and efficient
                      hiring experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Simplified engagement */}
              <div className="col-md-6 col-xl-4 d-flex">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40 px-lg-30">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasSimplifiedEngagement}
                      className="img-fluid lazy mb-2 mt-2"
                      loading="lazy"
                      width="85"
                      height="61"
                      alt="Simplified engagement"
                    />
                    <h3 className="fs-22 mb-2">Simplified engagement</h3>
                    <p className="mb-0 fs-20">
                      With a user-friendly interface, schools engage directly
                      with the chosen professionals, discussing needs,
                      confirming details, and finalising the hiring process
                      seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How does the platform work for professionals */}
      <section>
        <div className="ptb--80 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="mb-5">
              <h2 className="fs-32 text-blod text-center">
                How does the platform work for professionals?
              </h2>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-md-6 d-flex mb-4">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasRegistration}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="84"
                      height="70"
                      alt="Registration and profile setup"
                    />
                    <h3 className="fs-22 mb-2">
                      Registration and profile setup
                    </h3>
                    <p className="mb-0 fs-20">
                      Professionals register on the platform, setting up a
                      detailed profile specifying their qualifications, key
                      stages, and desired sectors for employment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex mb-4">
                <div className="card shadow-none border-10 w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasAccessOpportunities}
                      className="img-fluid lazy mb--15"
                      loading="lazy"
                      width="50"
                      height="70"
                      alt="Access to opportunities"
                    />
                    <h3 className="fs-22 mb-2">Access to opportunities</h3>
                    <p className="mb-0 fs-20">
                      Once registered, professionals gain access to a wide array
                      of job opportunities that match their qualifications and
                      preferences. They can browse and explore various roles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex mb-4">
                <div className="card shadow-none border-10 w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasDirectEngagement}
                      className="img-fluid lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Direct engagement"
                    />
                    <h3 className="fs-22 mb-2">Direct engagement</h3>
                    <p className="mb-0 fs-20">
                      Professionals engage directly with schools, discussing
                      roles, requirements, and confirming placements through the
                      platform. Aquinas Education strives to match professionals
                      with suitable roles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ongoing support */}
              <div className="col-md-6 d-flex mb-4">
                <div className="card shadow-none br-10 w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.aquinasOnGoingSupprot}
                      className="img-fluid lazy mb--15"
                      loading="lazy"
                      width="65"
                      height="70"
                      alt="Ongoing support"
                    />
                    <h3 className="fs-22 mb-2">Ongoing support</h3>
                    <p className="mb-0 fs-20">
                      Throughout the employment journey, Aquinas Education
                      maintains regular communication with professionals,
                      providing support and guidance, irrespective of their
                      placement status.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg-f4970c custom-blog-cursor">
          <div className="container testimonial-aquinas-card">
            <p className="fs-22 fw-400 mb-4">
              Working with their team was a delightful experience right from the
              beginning to the very end. They helped us reinvent our platform
              and made it future-proof, equipping it with great features and
              technology. Additionally, their innovative ideas and suggestions
              breathed new life into our concept.
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.aquinasDirector}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">Sam Leggitt</h4>
                <h5 className="fs-14 fw-400 mb-0">
                  Director - Aquinas Education
                </h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="portfolio-style2 portfolio-style7 portfolio-card portfolio-navy section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.nameDownLogo}
                  width="191"
                  height="38"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  Connecting parents and schools seamlessly for streamlined
                  admissions.
                </p>
                <a href="/namedown" className="btn bg-white custom-cursor">
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-keepappy-view grid-namedown-view">
                <div className="div1 ps-3 pe-0 justify-content-start">
                  <div className="pe-3">
                    <p className="mb-2 fs-15">Why NameDown?</p>
                    <p className="fs-15 fw-normal mb-4">
                      NameDown simplifies school admissions by allowing parents
                      to search, apply, & access resources and allows schools
                      manage profiles & applications.
                    </p>
                  </div>
                  <AnimatedImageWithOpacity
                    className="img-fluid ms-auto"
                    src={IMAGES.nameDownHalfLaptop}
                    width="405"
                    height="244"
                    alt="img"
                    loading="lazy"
                  />
                </div>
                <div className="div2 px-3">
                  <p className="mb-2 fs-15">Features</p>
                  <Row className="gy-2 mb-4">
                    <Col md={6} lg={12} xl={6}>
                      <div className="d-flex align-items-center gap-2">
                        <AnimatedImageWithOpacity
                          src={IMAGES.twoDistinctInterface}
                          width="20"
                          height="20"
                          alt="two-distinct"
                        />
                        <span className="fs-12 text-start">
                          Two Distinct Interface
                        </span>
                      </div>
                    </Col>
                    <Col md={6} lg={12} xl={6}>
                      <div className="d-flex align-items-center gap-2">
                        <AnimatedImageWithOpacity
                          src={IMAGES.userFriendlyDesign}
                          width="20"
                          height="20"
                          alt="user-friendly"
                        />
                        <span className="fs-12 text-start">
                          User Friendly Design
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.nameDownLaptop}
                    width="329"
                    height="199"
                    alt="img"
                    loading="lazy"
                  />
                </div>
                <div className="div3 px-3 align-items-start">
                  <p className="fs-15">
                    Schools on NameDown can register, customize forms, manage
                    applications, and update information efficiently.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutEquinas;
