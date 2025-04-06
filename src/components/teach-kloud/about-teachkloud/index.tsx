import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { useEffect } from "react";
import { tns } from "tiny-slider";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutTeachkloud = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".my-slider-teachloud",
      loop: true,
      items: 1,
      speed: 3000,
      nonce: "1",
      autoplay: true,
      autoplayHoverPause: false,
      mouseDrag: true,
      autoplayTimeout: 3000,
      swipeAngle: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      gutter: 10,
      responsive: {
        640: {
          items: 1,
          gutter: 10,
        },
        768: {
          items: 4,
          gutter: 15,
        },
        1024: {
          items: 5,
          gutter: 20,
        },
      },
    });

    return () => {
      slider1.destroy();
    };
  }, []);
  return (
    <>
      <section className="section pb-0 custom-blog-cursor">
        <Container>
          <h2 className="fs-32 fw-700 mb-3 text-center">
            About <span className="surewash-primary-color">TeachKloud</span>
          </h2>
          <div className="row justify-content-center">
            <div className="col-9">
              <p className="fs-20 fw-400 mb-5 text-center">
                Europe’s preeminent nursery management software. Reduced 60% of
                paperwork for teachers so that they can truly focus on the main
                aspect - child’s learning! 📚
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <div className="py-5 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="row ">
              <div className="col-lg-11 mx-auto">
                <div className="text-center">
                  <h2 className="fs-32 fw-700 mb-3 text-center">
                    Problem statement{' '}
                  </h2>
                  <p className="fs-20">
                    The early childhood care and education sector has always
                    been drowned in excessive paperwork, communication struggles
                    with parents, and repetitive administrative tasks.
                  </p>
                  <p className="fs-20">
                    This challenging reality was also faced by Wendy Oke,
                    founder of TeachKloud and a distinguished Ph.D. graduate in
                    early childhood education and care. However, unwilling to
                    settle for the norm, she believed technology could simplify
                    & transform this sector for all.
                  </p>
                </div>
              </div>
              <div className="col-lg-11 mx-auto my-2">
                <div className="text-center">
                  <h4 className="fs-32 fw-700 mb-3 text-center">
                    The beginning of Teachkloud{' '}
                  </h4>
                  <p className="fs-20">
                    With this passion, Wendy set out to create a ground-breaking
                    solution that would streamline the daily tasks, cut down on
                    paperwork, and assist caregivers, educators and parents
                    better! But things don’t always turn out to be how we plan
                    them! 😕
                  </p>
                </div>
              </div>
              <div className="col-lg-11 mx-auto my-2">
                <div className="text-center">
                  <h4 className="fs-32 fw-700 mb-3 text-center">
                    Old version of TeachKloud - Here’s how it looked like before
                    we took over
                  </h4>
                  <p className="fs-20">
                    Before we came into the picture, TeachKloud was a platform
                    that had more bugs and downtime than helpful features! Poor
                    user experience, regular crashes and mediocre
                    functionalities were costing Wendy and her team, their
                    precious customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-6 mb-4">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.TeachKloudProcessing1}
                  alt="processing"
                />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.TeachKloudProcessing2}
                  alt="processing"
                />
              </div>
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.TeachKloudProcessing3}
                  alt="processing"
                />
              </div>
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.TeachKloudProcessing4}
                  alt="processing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-5 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="text-center">
                  <h2 className="fs-32 fw-700 mb-3 text-center">
                    But then finally, she made a switch and trusted us with her
                    powerful idea!
                  </h2>
                  <h4 className="fs-28">
                    The birth of future-proof TeachKloud platform
                  </h4>
                  <p className="fs-20">
                    This is how TeachKloud looks and works now! Effortlessly
                    engaging, seamlessly efficient and beautifully fast. That’s
                    the Square Root magic! ✨
                  </p>
                </div>
              </div>
              <div className="col-12 text-center">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.TeachKloudPlatform}
                  alt="teachkloudPlatform"
                  height={900}
                  width={900}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 mx-auto">
                <div className="text-center">
                  <h2 className="fs-32 fw-700 mb-3 text-center">
                    So what Exactly is TeachKloud?
                  </h2>

                  <p className="fs-20">
                    With 4 rich interfaces (admin, institute, teacher, parent),
                    1000+ screens, and its functionality-rich software,
                    TeachKloud simplifies the lives of early childhood education
                    service providers by managing all of their paperwork and
                    daily tasks on one unified robust platform.{' '}
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-11 text-center pb-5">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.TeachKloudApp}
                  alt="TeachKloudApp"
                  height={900}
                  width={900}
                />
              </div>
              <div className="col-lg-10 mx-auto">
                <div className="text-center ">
                  <p className="fs-20">
                    The platform automates administrative procedures such as
                    attendance tracking, staff scheduling and invoicing, while
                    also offering advanced features such as teaching plans,
                    learning journals, policies, accident forms, consent forms,
                    detailed risk assessments, and much more.{' '}
                  </p>
                  <p className="fs-20">
                    So, goodbye to time-consuming administrative tasks and
                    compliance struggles, and hello to an intuitive and
                    user-friendly platform that saves money, streamlines
                    workload, and allows for more time for the children in care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-5 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="fs-32 fw-700 mb-3 text-center">
                Challenges we faced{' '}
              </h2>
            </div>
            <div className="row  justify-content-center text-center">
              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none border-10 w-100  bg_color--5 p-4">
                  <div className="card-body text-center">
                    <h3 className="fs-20 mb-4">Complex Childcare Operations</h3>
                    <p className="fs-20">
                      Navigating diverse childcare procedures due to age
                      differences, activities, and regional policies. Extensive
                      research was done to understand processes and regulations
                      for adaptable software alignment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none border-10 w-100  bg_color--5  p-4">
                  <div className="card-body text-center">
                    <h3 className="fs-20 mb-4">Ensuring Data Security</h3>
                    <p className="fs-20">
                      TeachKloud handles sensitive data of children and
                      families. To safeguard against leaks and unauthorised
                      access, rigorous security measures and protocols were
                      implemented to ensure data privacy and protection.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none border-10 w-100  bg_color--5  p-4">
                  <div className="card-body text-center">
                    <h3 className="fs-20 mb-4">The Daunting Deadline</h3>
                    <p className="fs-20">
                      One of our lengthiest projects with 1200+ screens needed
                      completion within a tight, unbelievable timeframe of only
                      3 months! This demanded meticulous planning, resource
                      allocation, and efficient project management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none border-10 w-100  bg_color--5  p-4">
                  <div className="card-body text-center">
                    <h3 className="fs-20 mb-4">Driving User Adoption</h3>
                    <p className="fs-20">
                      Achieving widespread adoption was essential for
                      TeachKloud's success. Our team designed easy-to-use
                      software that catered to childcare providers, staff, and
                      parents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none border-10 w-100  bg_color--5 p-4">
                  <div className="card-body text-center">
                    <h3 className="fs-20 mb-4">
                      Meeting Regulatory Requirements
                    </h3>
                    <p className="fs-20">
                      Complying with regional regulations and childcare
                      standards was a pivotal challenge. The software was
                      meticulously developed to align with specific regulations
                      and ensure providers' adherence to legal requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-5 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="fs-32 fw-700 mb-3 text-center">Then & Now</h2>
              </div>
              <div className="col-md-12 mb-4 text-center">
                <AnimatedImageWithOpacity
                  className="img-fluid "
                  src={IMAGES.TeachKloudProcessing5}
                  alt="processing"
                  height={1200}
                  width={1200}
                />
              </div>
              <div className="col-md-12 text-center">
                <AnimatedImageWithOpacity
                  className="img-fluid "
                  src={IMAGES.TeachKloudProcessing6}
                  alt="processing"
                  height={1200}
                  width={1200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-5 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="fs-32 fw-700 mb-3 text-center">
                What we did: Features at a glance
              </h2>
            </div>
            <div className="row  justify-content-center text-center">
              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none border-10 w-100  bg_color--5 p-4">
                  <div className="card-body text-center">
                    <h3 className="fs-20 mb-4">Improved Communication</h3>
                    <p className="fs-20">
                      We incorporated advanced communication features, including
                      the ability to share instant messages, images, videos, and
                      documents, all in real-time. This allowed staff members to
                      share detailed information about children's activities
                      with parents, right from their eating habits to their
                      overall social behaviour.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none border-10 w-100  bg_color--5  p-4">
                  <div className="card-body text-center">
                    <h3 className="fs-20 mb-4">Enhanced Child Safety</h3>
                    <p className="fs-20">
                      We included accident recording software that provides a
                      paperless solution for care providers to efficiently
                      document any incidents. In addition, parents can be
                      notified instantly and asked for medical permissions,
                      which allows for quick responses in case of emergencies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none border-10 w-100  bg_color--5  p-4">
                  <div className="card-body text-center">
                    <h3 className="fs-20 mb-4">Streamlined Compliance</h3>
                    <p className="fs-20">
                      We made all the compliance requirements accessible in one
                      central location, from accident forms and safety policies
                      to consent forms and risk assessments, making it easier
                      than ever to stay organised and compliant.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none border-10 w-100  bg_color--5  p-4">
                  <div className="card-body text-center">
                    <h3 className="fs-20 mb-4">Saved Time & Resources</h3>
                    <p className="fs-20">
                      We power-packed TeachKloud with time-saving features.
                      Helpful functionalities such as attendance tracking,
                      learning journals, child observations, invoicing, and
                      payment collection, enable care providers to save up to 2
                      admin hours every day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4">
                <div className="card border-0 shadow-none border-10 w-100  bg_color--5 p-4">
                  <div className="card-body text-center">
                    <h3 className="fs-20 mb-4">Ensured Personalisation</h3>
                    <p className="fs-20">
                      We crafted an incredibly flexible platform that can be
                      tailored to meet specific requirements. We built an
                      interface that empowered staff members to easily map their
                      paperwork and tasks to meet their unique workflows,
                      schedules and child needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="teachkloud-primary-bg py-5 custom-blog-cursor">
        <div
          className="my-slider-teachloud"
          data-config='{
            "items": 2,
            "speed": 2000,
            "autoplayTimeout": 3000,
            "responsive": {
                "640": { "items": 1, "gutter": 10 },
                "768": { "items": 4, "gutter": 15 },
                "1024": { "items": 5, "gutter": 20 }
            }
        }'
        >
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.TeachKloudSlide1}
                  width="200"
                  height="200"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.TeachKloudSlide2}
                  width="200"
                  height="200"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.TeachKloudSlide3}
                  width="200"
                  height="200"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.TeachKloudSlide4}
                  width="200"
                  height="200"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.TeachKloudSlide5}
                  width="200"
                  height="200"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.TeachKloudSlide6}
                  width="200"
                  height="200"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={IMAGES.TeachKloudSlide7}
                  width="200"
                  height="200"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="rn-portfolio-area py-5 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h2 className="fs-32 fw-700 mb-3 text-center">
                    Achievements and Recognitions
                  </h2>
                  <p className="fs-20">
                    From handling 20,000 active users to being a national
                    finalist in Ireland’s Best Young Entrepreneur competition,
                    the team of TeachKloud has achieved many milestones.
                  </p>
                  <ul className="liststyle bullet row text-start mx-auto">
                    <li className="col-lg-6 fs-20">
                      TeachKloud has €750K raised for early childhood services
                    </li>
                    <li className="col-lg-6 mt-lg-0 fs-20">
                      Founder recognised as Forbes 30 under 30 Rising Business
                      Stars
                    </li>
                    <li className="col-lg-6 fs-20">
                      Featured in Silicon Valley's Start-up of the Week series
                    </li>
                    <li className="col-lg-6 fs-20">
                      National finalists for Ireland’s Best Young Entrepreneur
                      competition.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.TeachKloudWomenAward}
                  alt="women with award"
                  height={600}
                  width={600}
                />
                <p className="mt-2 text-center fw-600">Raised €750K funding!</p>
              </div>
              <div className="col-md-6 mt-4">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.TeachKloudTop30}
                  alt="Top 30 under 30 Irish Rising Stars"
                  height={600}
                  width={600}
                />
                <p className="mt-2 text-center fw-600">
                  Top 30 under 30 Irish Rising Stars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="ptb--80 teachkloud-primary-bg custom-blog-cursor">
          <div className="container testimonial-teachkloud-card">
            <p className="fs-22 fw-400 mb-4">
              Prior to engaging Impero, TeachKloud was operating a hosted
              platform for over 300+ schools which required modernisation.
              Impero were very quick to work with us to get a deep understanding
              of our business and challenges. We are now live with our new
              system which is awesome. They are not just an outsource
              development company, but an extension of our company!
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.TeachKloudFounder}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">Christopher Adjei-Ampofo</h4>
                <h5 className="fs-14 fw-400 mb-0">CTO, TeachKloud</h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="portfolio-style2 portfolio-card portfolio-bluesqueeze section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.examflyLogo}
                  width="170"
                  height="70"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  Ease tax and accounting studies for professionals with our
                  interactive platform.
                </p>
                <a
                  href="/examfly"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-keepappy-view grid-examfly-view">
                <div className="div1 justify-content-between pb-0">
                  <p>Revolutionizing Tax & Accounting Learning</p>
                  <AnimatedImageWithOpacity
                    className="img-fluid ms-auto"
                    src={IMAGES.examflyMobile}
                    width="220"
                    height="300"
                    alt="img"
                    loading="lazy"
                  />
                </div>
                <div className="div2">
                  <p>
                    Won Best New Start-Up at the InterTradeIreland Seedcorn
                    Investor Competition.
                  </p>
                </div>
                <div className="div3 align-items-start text-start">
                  <AnimatedImageWithOpacity
                    className="img-fluid mb-2"
                    src={IMAGES.target}
                    width="32"
                    height="32"
                    alt="target"
                    loading="lazy"
                  />
                  <p>
                    Examfly is supported by Bolton Trust and Enterprise Ireland,
                    won Bronze in 2021 and improved pass rates by 10%.
                  </p>
                </div>
                <div className="div4 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.examflyTwoMobile}
                    width="270"
                    height="318"
                    alt="img"
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutTeachkloud;
