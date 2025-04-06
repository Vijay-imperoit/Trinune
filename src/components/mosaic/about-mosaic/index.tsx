import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutMosaic = () => {
  return (
    <>
      <section className="section pb-0 custom-blog-cursor">
        <Container className="text-center">
          <h2 className="fs-32 fw-700 mb-3 text-center">
            About <span className="mosaic-primary-color">Mosaic</span>
          </h2>
          <p className="fs-20">
            Mosaic Educator is an innovative platform focusing on early
            childhood care and education, with an emphasis on providing
            detailed, real-time updates to parents about their children’s daily
            activities and learning progress.
          </p>
          <p className="fs-20">
            The educator tool functions as an e-storybook for each child,
            pre-loaded with attendance records, personal care updates, and sleep
            checks. This personalised e-storybook showcases a child’s
            development through learning stories, incorporating videos,
            pictures, learning goals, and positive learning dispositions.
          </p>
          <p className="fs-20">
            Parents receive all these updates and communications instantly
            through the Mosaic Family App, ensuring they stay informed about
            their child’s developmental milestones in real time.
          </p>
        </Container>
      </section>

      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-lg-6 text-start align-self-center mb-4 mb-lg-0 py-lg-5">
                <h2 className="fs-30">The brain behind Mosaic</h2>
                <p className="fs-20">
                  Avril McMonagle is the brains behind Mosaic Educator. The idea
                  for Mosaic emerged from Avril’s deep involvement and
                  dedication to enhancing early childhood education. Being at
                  the forefront of pioneering initiatives aimed at improving the
                  sector locally, regionally, and nationally, she identified the
                  need for a tool that would revolutionise the way educators
                  record and communicate children’s daily activities to their
                  parents.
                </p>
                <p className="fs-20 fw-500">
                  Avril’s three-year tenure as the nominee of the Minister for
                  Children and Youth Affairs on the Council of the National
                  Council for Curriculum and Assessment further solidified her
                  commitment to shaping and improving early childhood education.
                </p>
                <p className="fs-20">
                  She has also actively contributed to shaping early childhood
                  policy development and has been significantly involved in
                  advocating for improvements in early education policy and
                  practice through her media engagement.
                </p>
              </div>
              <div className="col-lg-6">
                <AnimatedImageWithOpacity
                  className="img-fluid br-15px lazy"
                  loading="lazy"
                  src={IMAGES.mosaicFounder}
                  width="600"
                  height="604"
                  alt="The brain behind Mosaic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-lg-6 mb-4 mb-lg-0 align-self-center py-lg-5">
                <div className="text-start">
                  <h2 className="fs-30 mb-4">
                    Challenges that led to Mosaic’s development
                  </h2>
                </div>
                <ul className="liststyle bullet fs-20">
                  <li className="mb-3 mb-xl-4">
                    Childcare providers were burdened by time-consuming
                    paper-based recording systems, straining resources.
                  </li>
                  <li className="mb-3 mb-xl-4">
                    Parents wanted a source of communication and real-time
                    updates about their young children while away.
                  </li>
                  <li>
                    External Compliance Organizations demanded inclusive,
                    individualized, and parent-accessible recording systems to
                    meet quality standards.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-lg-first">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.mosaicChallenges}
                  width="600"
                  height="538"
                  alt="challenges and development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container py-8 py-md-13">
            <div className="mb-4">
              <h2 className="fs-32 text-center fw-bold">
                Mosaic’s journey with us
              </h2>
            </div>

            <div className="row align-items-stretch mb-4">
              <div className="col-lg-6 text-start text-lg-left align-self-center mb-4 mb-lg-0 py-lg-5">
                <h3 className="fs-28 mb-2">
                  UI/UX Design for educator & family app
                </h3>
                <p className="fs-20">
                  We designed streamlined user experiences for both the Mosaic
                  Educator and Mosaic Family Apps. For educators, we focused on
                  creating an interface that simplified recording a child’s
                  progress, updating care logs and communicating with parents,
                  making it intuitive and efficient. Meanwhile, for families,
                  the emphasis was on presenting information in an easily
                  accessible, understandable and engaging format.
                </p>
              </div>
              <div className="col-lg-6 order-lg-first">
                <AnimatedImageWithOpacity
                  className="fit-img  lazy"
                  loading="lazy"
                  src={IMAGES.mosaicUIUX}
                  width="600"
                  height="402"
                  alt="UI/UX Design"
                />
              </div>
            </div>
            <div className="row align-items-stretch mb-4">
              <div className="col-lg-6 text-start text-lg-left align-self-center mb-4 mb-lg-0 py-lg-5">
                <h3 className="fs-28 mb-2">
                  Development of Native iOS and Android Apps
                </h3>
                <p className="fs-20">
                  Following the design phase, we dedicated ourselves to building
                  separate, fully functional native applications for both iOS
                  and Android platforms. The Mosaic Educator App was
                  meticulously crafted to fulfil educators’ needs, facilitating
                  efficient recording and compilation of children’s activities.
                  Simultaneously, the Mosaic Family App was developed to deliver
                  real-time updates and insights to parents about their child’s
                  daily progress.
                </p>
              </div>
              <div className="col-lg-6">
                <AnimatedImageWithOpacity
                  className="fit-img  lazy"
                  loading="lazy"
                  src={IMAGES.mosaicDevelopment}
                  width="600"
                  height="402"
                  alt="Development"
                />
              </div>
            </div>
            <div className="row align-items-stretch mb-4">
              <div className="col-lg-6 text-start text-lg-left align-self-center mb-4 mb-lg-0 py-lg-5">
                <h3 className="fs-28 mb-2">
                  Interlinking apps for seamless communication
                </h3>
                <p className="fs-20">
                  Moreover, we ensured a seamless connection between the
                  Educator and Family Apps. This connectivity allowed for
                  instant and secure transmission of recorded data and updates
                  from educators to parents, enhancing communication and keeping
                  families closely informed about their child’s development.
                </p>
              </div>
              <div className="col-lg-6 order-lg-first">
                <AnimatedImageWithOpacity
                  className="fit-img  lazy"
                  loading="lazy"
                  src={IMAGES.mosaicInterlinking}
                  width="600"
                  height="402"
                  alt="Interlinking apps"
                />
              </div>
            </div>
            <div className="row align-items-stretch">
              <div className="col-lg-6 text-start text-lg-left align-self-center mb-4 mb-lg-0 py-lg-5">
                <h3 className="fs-28 mb-2">Quality assurance phase</h3>
                <p className="fs-20">
                  Before launch, our rigorous quality assurance phase verified
                  the reliability, security, and ease of use of both apps.
                  Through extensive testing, we assured educators and families
                  of a dependable platform that catered to their unique needs
                  while enabling effortless communication and information
                  sharing in a secure environment.
                </p>
              </div>
              <div className="col-lg-6">
                <AnimatedImageWithOpacity
                  className="fit-img  lazy"
                  loading="lazy"
                  src={IMAGES.mosaicQualityAssurance}
                  width="600"
                  height="402"
                  alt="Quality assurance phase"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="mb-5">
              <h2 className="fs-32 text-center fw-bold">
                Features that make the platform unique
              </h2>
            </div>
            <div className="row  justify-content-center text-center">
              <div className="col-md-6 d-flex mb-4 ">
                <div className="card shadow-none border-10 w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.mosaicChildProgress}
                      className="img-fluid  lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Child progress monitoring"
                    />
                    <h3 className="fs-22">Child progress monitoring</h3>
                    <p className="mb-0 fs-20">
                      Recording a child’s progress, documenting daily activities
                      and care logs. View and access recorded progress updates,
                      providing parents with insights into their child’s routine
                      and developmental milestones
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4 ">
                <div className="card shadow-none border-10 w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.mosaicPre}
                      className="img-fluid  lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Pre-populated"
                    />
                    <h3 className="fs-22">
                      Pre-populated early education templates
                    </h3>
                    <p className="mb-0 fs-20">
                      Templates tailored for various aspects of a child’s
                      learning journey including Assessment, Transition, Picture
                      Stories, Video Stories, Update Reports, Daily Care Logs,
                      and Group Learning Stories
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4 ">
                <div className="card shadow-none border-10 w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.mosaicCollaboration}
                      className="img-fluid  lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="collaboration"
                    />
                    <h3 className="fs-22">Tools for effective collaboration</h3>
                    <p className="mb-0 fs-20">
                      Messaging and events platforms facilitate seamless
                      communication among managers, educators, and parents. This
                      feature ensures efficient coordination and information
                      sharing among all involved parties.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4 ">
                <div className="card shadow-none border-10 w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.mosaicPartnerShip}
                      className="img-fluid  lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="partnership"
                    />
                    <h3 className="fs-22">
                      Effective partnership with parents
                    </h3>
                    <p className="mb-0 fs-20">
                      A communication system dedicated to sharing info and
                      updates. It also includes notifications about forthcoming
                      events or urgent notices, fostering partnerships between
                      educators and parents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-4 mb-md-0">
                <div className="card shadow-none border-10 w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.mosaicDownloadable}
                      className="img-fluid  lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Downloadable documents"
                    />
                    <h3 className="fs-22">Downloadable documents</h3>
                    <p className="mb-0 fs-20">
                      Provision of essential documents such as policies,
                      procedures, data protection guidelines, parental consent
                      forms, and quality educator tools.All resources are
                      readily available for access and download.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex ">
                <div className="card shadow-none border-10 w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.mosaicPhotoGallery}
                      className="img-fluid  lazy mb-2"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="photo gallery"
                    />
                    <h3 className="fs-22">Child photo gallery</h3>
                    <p className="mb-0 fs-20">
                      A secure, private location to store and share children’s
                      images and videos. This feature prioritises safety while
                      allowing parents and educators to celebrate and document a
                      child’s journey visually.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pb-5 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <h2 className="mb-4 fs-32 text-center fw-bold">
                    Here’s a glimpse into platform’s achievements!
                  </h2>

                  <ul className="liststyle bullet row fs-20">
                    <li className="col-lg-6 py-2">
                      Awarded as a leading startup at the Ireland Rising
                      Business Star Awards, acknowledging innovation and impact.
                    </li>
                    <li className="col-lg-6 py-2">
                      Provided support and guidance to over 1500 parents,
                      facilitating effective learning journeys for their
                      children.
                    </li>
                    <li className="col-lg-6 py-2">
                      Trusted by over 85 schools within a mere 5 months,
                      showcasing rapid acceptance and adoption within the
                      educational landscape.
                    </li>
                    <li className="col-lg-6 py-2">
                      Assisted over 5000 children in mastering new skills and
                      knowledge effectively, fostering skill-based learning
                      experiences.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="ptb--80 mosaic-primary-bg custom-blog-cursor">
          <div className="container testimonial-mosaic-card">
            <p className="fs-22 fw-400 mb-4">
              Feedback thus far has been excellent and the client base is happy.
              They’ve exceeded all expectations as the end product is
              professional & attractive. They have excellent project management,
              as they have a communicative, efficient, and effective team.
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.inPracticeMD}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">Avril McMonagle</h4>
                <h5 className="fs-14 fw-400 mb-0">Lead Consultant, Meantóir</h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="portfolio-style3 portfolio-card portfolio-lightpink section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.teachkloudLogo}
                  width="165"
                  height="88"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  An app for educators to focus on what they love! Saved 60%
                  time in admin & compliance!
                </p>
                <a
                  href="/teach-kloud"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-scoreboard-view grid-teachkloud-view">
                <div className="div1 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.teachkloudM5}
                    width="504"
                    height="308"
                    alt="scoreboard"
                    loading="lazy"
                  />
                </div>
                <div className="div2 pe-0 align-items-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid w-100"
                    src={IMAGES.teachkloudMobileLaptop}
                    width="329"
                    height="198"
                    alt="teachkloud"
                    loading="lazy"
                  />
                </div>
                <div className="div3 text-start align-items-start">
                  <p className="mb-1"> €750K Funding Raised</p>
                  <p className="fw-normal">
                    TeachKloud has €750K raised for early childhood services
                  </p>
                </div>
                <div className="div4 text-start align-items-start">
                  <p className="mb-1">Among Top 30</p>
                  <p className="fw-normal">Under 30 Irish Rising Stars</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutMosaic;
