import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutExamfly = () => {
  useEffect(() => {
    const slider1 = tns({
      container: ".mobile-slider2",
      loop: true,
      autoplayDirection: "forward",
      items: 1,
      speed: 2500,
      autoplay: true,
      autoplayHoverPause: true,
      mouseDrag: true,
      autoplayTimeout: 3000,
      swipeAngle: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      gutter: 10,
      responsive: {
        540: {
          items: 2,
          gutter: 10,
        },
        768: {
          items: 2,
          gutter: 10,
        },
        1024: {
          items: 3,
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
      <section className="section custom-blog-cursor">
        <Container className="text-center">
          <h2 className="mb-3 fs-32 fw-700">
            About <span className="examfly-primary-color">Examfly</span>
          </h2>
          <p className="fs-20">
            Examfly tailored for the busy modern learner, redefines professional
            exam learning through innovative education tech. In acknowledgement
            of the challenges encountered by the modern, time-pressed learner,
            Examfly has devised a learning model designed to adapt and cater to
            these obstacles.
          </p>
          <p className="fs-20">
            It uses expert collaborations in subjects, software, animation, and
            gaming to create an engaging, adaptable learning experience,
            strategically crafted to optimise skill acquisition and
            reinforcement. Trusted by leading firms including EY, PWC and
            Deloitte, it’s praised for making learning quicker, flexible and
            effective.
          </p>
        </Container>
      </section>

      <section className="section bg_color-5 custom-blog-cursor">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-lg-6 text-lg-start align-self-center mb-4 mb-lg-0 py-lg-4">
              <h2 className="text-lg-start fs-32 mb-3 fw-700">
                The founder with a vision
              </h2>
              <p className="fs-20">
                The idea of Examfly was conceived when the Founder Deirdre
                Lyons, who had always been an exceptional student, tried to
                study for an exam along with her full-time job. She realised how
                difficult and taxing it could be.
              </p>
              <p className="fs-20">
                She says,{' '}
                <span className="fw-600">
                  “It never leaves you though, just how difficult these exams
                  can be. You’re working full-time and then trying to get your
                  head into books and lectures. It’s a very passive way of
                  learning.”
                </span>
              </p>
              <p className="fs-20">
                Lyons then delved into educational psychology, utilising
                innovative methods like gamification and data analytics to
                create an “active learning” platform.
              </p>
              <p className="fs-20">
                This platform integrates animated explainer videos and visual
                learning aids like decision trees, mind maps, and personalised
                flashcards for effective revision. Additionally, Examfly offers
                a self-assessment tool, aiding users in optimising their study
                schedules by understanding their learning patterns.
              </p>
            </div>
            <div className="col-lg-6">
              <AnimatedImageWithOpacity
                className="h-100 w-100 br-15px lazy"
                loading="lazy"
                src={IMAGES.examflyFounder}
                width="600"
                height="704"
                alt="The founder with a vision"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="journey"
        className="section custom-blog-cursor"
      >
        <div className="container py-8 py-md-13">
          <div className="text-center mb-5">
            <h2 className="fs-32 fw-700">Examfly’s journey with us</h2>
          </div>

          {/* UI/UX Phase */}
          <div className="row align-items-stretch mb-3">
            <div className="col-lg-6  text-lg-start align-self-center mb-4 mb-lg-0 py-lg-4">
              <h3 className="fs-26 fw-600 mb-4">UI/UX phase</h3>
              <p className="fs-20">
                During this phase, we prioritised an intuitive design for both
                the admin dashboard and user apps. The admin interface was
                meticulously crafted for efficient administrative control,
                integrating comprehensive analytics, user management, and
                content oversight seamlessly.
              </p>
              <p className="fs-20">
                Meanwhile, the user app for iOS and Android platforms focused on
                providing easy access to animated educational content,
                decision-making tools, and personalised study aids, ensuring an
                engaging learning experience.
              </p>
            </div>
            <div className="col-lg-6 order-lg-first">
              <AnimatedImageWithOpacity
                className="fit-img lazy"
                loading="lazy"
                src={IMAGES.examflyUIUX}
                width="600"
                height="439"
                alt="UI/UX phase"
              />
            </div>
          </div>

          {/* Development Phase */}
          <div className="row align-items-stretch mb-4">
            <div className="col-lg-6 text-lg-start align-self-center mb-4 mb-lg-0 py-lg-4">
              <h3 className="fs-26 fw-600 mb-4">Development phase</h3>
              <p className="fs-20">
                During the development phase, we concentrated on enhancing the
                user experience by implementing robust backend systems for
                efficient data processing, storage, and real-time updates.
              </p>
              <p className="fs-20">
                Utilising advanced algorithms and analytics, we implemented
                performance analysis tools. These features offered instant,
                personalised feedback based on user performance, aiming to
                reinforce learning effectively.
              </p>
            </div>
            <div className="col-lg-6">
              <AnimatedImageWithOpacity
                className="fit-img lazy"
                loading="lazy"
                src={IMAGES.examflyDev}
                width="600"
                height="439"
                alt="Development phase"
              />
            </div>
          </div>

          {/* DevOps Integration Phase */}
          <div className="row align-items-stretch mb-4">
            <div className="col-lg-6 text-lg-start align-self-center mb-4 mb-lg-0 py-lg-4">
              <h3 className="fs-26 fw-600 mb-4">DevOps integration phase</h3>
              <p className="fs-20">
                We prioritised an automated deployment pipeline utilising
                continuous integration and deployment (CI/CD) methodologies.
                Implementing IaC allowed for swift, error-free updates and
                ensured consistent environments across development, testing, and
                production stages.
              </p>
              <p className="fs-20">
                Additionally, leveraging cloud technologies and containerisation
                techniques like Docker, enhanced scalability, enabling the
                platform to efficiently accommodate expanding user bases.
              </p>
            </div>
            <div className="col-lg-6 order-lg-first">
              <AnimatedImageWithOpacity
                className="fit-img lazy"
                loading="lazy"
                src={IMAGES.examflyDevOps}
                width="600"
                height="439"
                alt="DevOps integration phase"
              />
            </div>
          </div>

          {/* Quality Assurance Phase */}
          <div className="row align-items-stretch mb-4">
            <div className="col-lg-6 text-lg-start align-self-center mb-4 mb-lg-0 py-lg-4">
              <h3 className="fs-26 fw-600 mb-4">Quality assurance phase</h3>
              <p className="fs-20">
                During the Quality Assurance phase, a dedicated team rigorously
                tested Examfly to ensure seamless functionality. Continuous
                testing integration, employing automated frameworks, upheld
                product stability across diverse devices.
              </p>
              <p className="fs-20">
                Extensive User Acceptance Testing (UAT) gathered direct feedback
                from users, enabling iterative refinements aligned with user
                preferences, ensuring optimal alignment with their needs and
                expectations.
              </p>
            </div>
            <div className="col-lg-6">
              <AnimatedImageWithOpacity
                className="fit-img lazy"
                loading="lazy"
                src={IMAGES.examflyQA}
                width="600"
                height="439"
                alt="Quality assurance phase"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="section bg_color--5 custom-blog-cursor"
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fs-32 fw-700">
              Features that make the platform unique!
            </h2>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-6 d-flex mb-4">
              <div className="card border-0 shadow-none br-10 w-100">
                <div className="card-body p-lg-40">
                  <AnimatedImageWithOpacity
                    src={IMAGES.examflyAnimated}
                    className="img-fluid lazy mb-2"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Animated explainer videos"
                  />
                  <h3 className="fs-22 fw-700 mb-2">
                    Animated explainer videos
                  </h3>
                  <p className="mb-0">
                    We incorporated animated explainer videos that simplify
                    complex topics visually. These videos offer practical
                    explanations embedded with real-life contexts, making
                    learning engaging and accessible.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex mb-4">
              <div className="card border-0 shadow-none br-10 w-100">
                <div className="card-body p-lg-40">
                  <AnimatedImageWithOpacity
                    src={IMAGES.examflyGames}
                    className="img-fluid lazy mb-2"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Interactive games"
                  />
                  <h3 className="fs-22 fw-700 mb-2">Interactive games</h3>
                  <p className="mb-0">
                    We included interactive games to test knowledge in
                    innovative ways, not only encouraging practical learning but
                    also transforming skill enhancement into an entertaining
                    experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex mb-4">
              <div className="card border-0 shadow-none br-10 w-100">
                <div className="card-body p-lg-40">
                  <AnimatedImageWithOpacity
                    src={IMAGES.examflyPerfomance}
                    className="img-fluid lazy mb-2"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Performance analysis"
                  />
                  <h3 className="fs-22 fw-700 mb-2">Performance analysis</h3>
                  <p className="mb-0">
                    Examfly’s performance analysis offers instant, personalized
                    feedback tailored to interactions, guiding users on areas
                    requiring focus. This analysis serves as a helpful tool for
                    continuous improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex mb-4">
              <div className="card border-0 shadow-none br-10 w-100">
                <div className="card-body p-lg-40">
                  <AnimatedImageWithOpacity
                    src={IMAGES.examflyBoard}
                    className="img-fluid lazy mb-2"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Organisation-wise Leaderboard"
                  />
                  <h3 className="fs-22 fw-700 mb-2">
                    Organisation-wise Leaderboard
                  </h3>
                  <p className="mb-0">
                    Examfly features an organization-specific leaderboard,
                    enabling employees to track performance through points and
                    rankings, fostering healthy competition and encouraging
                    users to strive for higher positions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="rn-portfolio-area ptb--80 pb-xl-0 bg_color--1 custom-blog-cursor">
          <div className="portfolio-sacousel-inner">
            <div className="row justify-content-center mb-5 mb-sm-0">
              <div className="col-lg-9 text-center">
                <h2 className="fs-32 fw-700 mb-3">
                  We introduced badges to keep things <br className="br-xl" />
                  even more interesting!
                </h2>
                <p className="fs-20">
                  We understand that keeping working professionals engaged is
                  not an easy task. Therefore, we introduced badges for every
                  milestone and achievement to keep the users coming back for
                  more.
                </p>
              </div>
            </div>

            <div className="mobile-slider2">
              {[
                {
                  img: IMAGES.examfly1,
                  title: 'Happens to all of us',
                  description: 'Answering all questions wrong on a quiz.',
                },
                {
                  img: IMAGES.examfly2,
                  title: 'First Quiz',
                  description:
                    'Provided once a user finishes their first quiz.',
                },
                {
                  img: IMAGES.examfly3,
                  title: 'First Multi-Step',
                  description: 'Provided on finishing first Multi-step game.',
                },
                {
                  img: IMAGES.examfly4,
                  title: 'First Bucket',
                  description: 'Provided on finishing your first Buckets game.',
                },
                {
                  img: IMAGES.examfly5,
                  title: 'First Fruit Machine',
                  description: 'Completing your first Fruit Machine game.',
                },
                {
                  img: IMAGES.examfly6,
                  title: 'First Paragraphs',
                  description:
                    'Get this after finishing your first Paragraphs game.',
                },
                {
                  img: IMAGES.examfly7,
                  title: 'Model Student',
                  description: 'Answering all questions correctly on a quiz.',
                },
                {
                  img: IMAGES.examfly8,
                  title: 'First Video',
                  description:
                    'Users get this after watching their first Video.',
                },
                {
                  img: IMAGES.examfly9,
                  title: 'One-Arm Bandit',
                  description: 'All questions correct on a Fruit Machine game.',
                },
                {
                  img: IMAGES.examfly10,
                  title: 'Super-Stepper',
                  description:
                    'Answering all questions for all the steps in a multi-step.',
                },
                {
                  img: IMAGES.examfly11,
                  title: 'Paratrooper',
                  description:
                    'All words in the correct place in a Paragraph game.',
                },
                {
                  img: IMAGES.examfly12,
                  title: 'Bucketeer',
                  description:
                    'All the items in the correct place in a Buckets game.',
                },
              ].map((badge, index) => (
                <div
                  className="slider-item br-10"
                  key={index}
                >
                  <div className="p-4 px-lg-3 py-md-5 border br-10 text-center">
                    <img
                      src={badge.img}
                      className="d-inline-block lazy mb-3"
                      loading="lazy"
                      width="140"
                      height="140"
                      alt={badge.title}
                    />
                    <h3 className="text-blue text-center">{badge.title}</h3>
                    <p className="mb-0 text-center">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="meeting">
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-lg-6 align-self-center text-center text-lg-start py-lg-4">
                <h2 className="fs-30 fw-500">
                  We always prefer meeting our clients in person to better
                  understand their objectives and challenges. Here’s our team
                  with Examfly’s Founder, <br className="br-xl" />
                  Deirdre Lyons in Ireland.
                </h2>
              </div>
              <div className="col-lg-6 order-lg-first">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.examflyMeeting}
                  width="600"
                  height="339"
                  alt="clients meeting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="challenges">
        <div className="ptb--80 custom-blog-cursor">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 mx-auto">
                <div className="text-center mb-5">
                  <h2 className="mb-3 fs-32 fw-700">
                    Feature development challenges
                  </h2>
                  <p>
                    Developing Examfly’s distinctive features encountered
                    multifaceted hurdles. Crafting animated explainer videos
                    demanded condensing complex subjects without compromising
                    depth, while interactive games required merging educational
                    content with engaging gameplay. Implementing real-time
                    performance analysis posed intricate data processing
                    challenges, ensuring swift and accurate feedback.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-9 text-center pb-5">
                <AnimatedImageWithOpacity
                  className="img-fluid lazy"
                  src={IMAGES.examflyChallenges}
                  loading="lazy"
                  width="1020"
                  height="574"
                  alt="Feature development challenges"
                />
              </div>
              <div className="col-lg-11 mx-auto">
                <div className="section-title text-center">
                  <p>
                    Creating organisation-specific leaderboards necessitated
                    stringent privacy measures, and designing an enticing badge
                    system involved striking a delicate balance between
                    recognition and educational goals, all while maintaining
                    user engagement and learning effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="glimpes">
        <div>
          <div className="ptb--80 bg_color--5 custom-blog-cursor">
            <div className="container">
              <div className="mb-4 text-center">
                <h2 className="fs-32 fw-700 mb-3">
                  Here’s a glimpse into what users have to say!
                </h2>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6 col-xl-4 d-flex mb-4 mb-xl-0">
                  <div className="card border-0 shadow-none br-10 w-100">
                    <div className="card-body p-lg-30">
                      <p className="mb-3">
                        “I wish I’d had this when I was doing my exams!”
                      </p>
                      <div className="d-flex align-items-center">
                        <AnimatedImageWithOpacity
                          className="img-fluid lazy"
                          loading="lazy"
                          src={IMAGES.examflyBig4}
                          width="55"
                          height="55"
                          alt="Big 4 L&D Lead"
                        />
                        <h3 className="fs-18 fw-600 ms-2 mb-0">
                          Big 4 L&D Lead
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xl-4 d-flex mb-4 mb-xl-0">
                  <div className="card border-0 shadow-none br-10 w-100">
                    <div className="card-body p-lg-30">
                      <p className="mb-3">
                        “It’s very specific to our exams and there’s nothing out
                        there like it.”
                      </p>
                      <div className="d-flex align-items-center">
                        <AnimatedImageWithOpacity
                          className="img-fluid lazy"
                          loading="lazy"
                          src={IMAGES.examflyBig4}
                          width="55"
                          height="55"
                          alt="Big 4 Trainee"
                        />
                        <h3 className="fs-18 fw-600 ms-2 mb-0">
                          Big 4 Trainee
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xl-4 d-flex">
                  <div className="card border-0 shadow-none br-10 w-100">
                    <div className="card-body p-lg-30">
                      <p className="mb-4">
                        “Examfly provide a refreshing learning experience.”
                      </p>
                      <div className="d-flex align-items-center">
                        <AnimatedImageWithOpacity
                          className="img-fluid lazy"
                          loading="lazy"
                          src={IMAGES.examflyBig4}
                          width="55"
                          height="55"
                          alt="Big 4 Trainee"
                        />
                        <h3 className="fs-18 fw-600 ms-2 mb-0">
                          CA Ireland, Diploma in Taxation Student
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="rn-portfolio-area ptb--80  custom-blog-cursor">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <h2 className="fs-32 fw-700 mb-4 text-center">
                    Check its fantastic achievements
                  </h2>
                  <ul className="liststyle bullet row">
                    <li className="col-lg-6 mb-2">
                      Topped the Best New Start-Up category in the
                      InterTradeIreland Seedcorn Investor Competition.
                    </li>
                    <li className="col-lg-6 mb-2">
                      The project received backing from the Bolton Trust and
                      Enterprise Ireland.
                    </li>
                    <li className="col-lg-6 mb-2">
                      Examfly was also named a Bronze Winner in the The Ireland
                      National Startup Awards 2021
                    </li>
                    <li className="col-lg-6 mb-2">
                      Brought a 10% improvement in pass rates YOY with one
                      cohort.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feddback">
        <div className="ptb--80 examfly-primary-bg custom-blog-cursor">
          <div className="container testimonial-examfly-card">
            <p className="fs-22 fw-400 mb-4">
              Their tailored solutions and profound understanding of educational
              technology exceeded our expectations. Their innovative approach,
              coupled with dedication to excellence, made them indispensable to
              our success.
            </p>
            <Row className="align-items-center gx-lg-3">
              <Col sm="auto">
                <AnimatedImageWithOpacity
                  className="img-fluid rounded-circle"
                  src={IMAGES.examflyCEO}
                  width="70"
                  height="70"
                  alt="avtar"
                  loading="lazy"
                />
              </Col>
              <Col>
                <h4 className="fs-18 fw-500 mb-1">Deirdre Lyons</h4>
                <h5 className="fs-14 fw-400 mb-0">
                  CEO and Founder of Examfly
                </h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="portfolio-style3 portfolio-card portfolio-lightbrown section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.donaghmoreMuseumLogo}
                  width="185"
                  height="77"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  Lay your eyes on 300 years old artefacts coming to life at
                  Donaghmore Museum!
                </p>
                <a
                  href="/donaghmore"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-scoreboard-view grid-donaghmore-view">
                <div className="div1 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.donaghmoreFive}
                    width="500"
                    height="253"
                    alt="scoreboard"
                    loading="lazy"
                  />
                </div>
                <div className="div2 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.donaghmoreMobileTwo}
                    width="191"
                    height="281"
                    alt="donaghmore"
                    loading="lazy"
                  />
                </div>
                <div className="div3 text-start align-items-start py-3 px-4">
                  <p className="fw-500">Increased Attraction</p>
                  <p className="fw-normal">By 50% all over the world!</p>
                </div>
                <div className="div4 text-start align-items-start py-3 px-4">
                  <p className="fw-500">Gained national recognition</p>
                  <p className="fw-normal">
                    First of its kind in rural Ireland.
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

export default AboutExamfly;
