import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const AboutSureWash = () => {
  return (
    <>
      <section className="section pb-0 custom-blog-cursor">
        <Container className="text-center">
          <h2 className="fs-32 fw-700 mb-3">
            About <span className="surewash-primary-color">SureWash</span>
          </h2>
          <p className="fs-20 fw-400 mb-5">
            SureWash is an innovative leap forward in the field of public health
            education, particularly in the crucial area of hand hygiene.
            Recognising a significant gap in effective, engaging, and accessible
            handwashing education for children, SureWash stepped in to bridge
            this void.At its core, SureWash is not just about teaching the
            mechanics of thorough hand washing; it’s about instilling a lifelong
            habit that can significantly reduce the spread of infections,
            thereby supporting individual health and public well-being.
          </p>
        </Container>
      </section>

      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-lg-6 text-center text-lg-start align-self-center mb-4 mb-lg-0 py-lg-5">
                <h2 className="fs-30 mb-4">The Beginning of the Kids’ App</h2>
                <p className="fw-500 mb-3 fs-20">
                  The genesis of SureWash came from a collaboration with A
                  Germ’s Journey, an educational initiative spearheaded by
                  education specialist Prof. Sarah Younie and microbiologist Dr.
                  Katie Laird.
                </p>
                <p className="fs-20">
                  Recognising the need to make hand hygiene education both
                  memorable and effective for children, SureWash approached us
                  with this challenge. Our solution?
                </p>
                <p className="fs-20">
                  To incorporate AR and 3D games that would teach them
                  handwashing through an engaging experience, and captivate
                  young minds. Our close collaboration with the client brought
                  this vision to life, blending educational content with
                  interactive play.
                </p>
                <p className="fs-20">
                  This innovation, a hallmark of our development approach,
                  ensured that the app was not only educational but also
                  enjoyable, encouraging repeated use and deepening the learning
                  impact.
                </p>
              </div>
              <div className="col-lg-6">
                <AnimatedImageWithOpacity
                  className="fit-img lazy"
                  loading="lazy"
                  src={IMAGES.sureWashKidsApp}
                  width="600"
                  height="704"
                  alt="kids app"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg-darkcyan position-relative custom-blog-cursor">
          <div className="surewash-bg-property gamified gamified-left-position"></div>
          <div className="surewash-bg-property gamified gamified-right-position"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 mx-auto">
                <div className="mt-0 text-center mb-4">
                  <h2 className="fs-32 mb-3 text-white">
                    SureWash’s Gamified Learning Journey with Us
                  </h2>
                  <p className="text-white mx-lg-5 mb--20 fs-20">
                    When SureWash approached us, they presented an intriguing
                    challenge: to create a game-based learning experience that
                    would engrain the World Health Organization’s handwashing
                    techniques into the muscle memory of young users.
                  </p>
                  <p className="text-white fs-20">
                    The goal was clear – make the handwashing process so
                    intuitive that it becomes a natural part of a child’s
                    routine, increasing compliance and fostering lifelong
                    healthy habits. Therefore, we blended our edtech prowess and
                    kids-friendly design expertise to create a suite of games
                    that don’t just educate but also delight.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-11 text-center pb--40 mb-4">
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  loading="lazy"
                  src={IMAGES.sureWashLearningJourney}
                  width="920"
                  height="405"
                  alt="learning journey us"
                />
              </div>
              <div className="col-lg-10 mx-auto">
                <div className="mt-0 text-center">
                  <h2 className="fs-22 fw-500 my-4 text-white">
                    For these games, our team, equipped with expertise in 3D
                    structuring and animation, crafted a series of interactive
                    scenarios that mimic real-life situations.
                  </h2>
                  <p className="fs-20 text-white">
                    In one game, “Clean Hands, Dirty Hands,” children enter a 3D
                    environment where they’re presented with a critical choice
                    after using the toilet: eat food or wash their hands. As
                    they make their choice, the game unfolds, teaching them the
                    consequences of their actions in an immersive experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--1 position-relative custom-blog-cursor">
          <div className="surewash-bg-property handwash-position d-none d-md-block"></div>
          <div className="surewash-bg-property germs-position d-none d-md-block"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 mx-auto">
                <div className="mt-0 text-center mb-5">
                  <h2 className="fs-32 mb-4">
                    Questions pop up on the screen, prompting the children to
                    think about hand hygiene.
                  </h2>
                </div>
              </div>
              <div className="col-12 col-lg-10 text-center px-4 mb-4">
                <AnimatedImageWithOpacity
                  className="img-fluid lazy w-100"
                  loading="lazy"
                  src={IMAGES.sureWashHandHygiene}
                  width="1020"
                  height="605"
                  alt="hand hygiene"
                />
              </div>
              <div className="col-lg-10 my-2 text-center">
                <p className="mx-lg-5 mb-4 fs-20">
                  Each correct answer earns them rewards, while incorrect ones
                  offer a chance to learn and try again. This reinforcement of
                  correct behaviour is key to developing that crucial muscle
                  memory.
                </p>
                <h2 className="fs-22 fw-300">
                  Additional games like “Find the Germs” and “Classroom Game”{' '}
                  <br></br>
                  further reinforce the learning objectives.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ptb--80 bg_color--5 custom-blog-cursor">
          <div className="container">
            <div className="mt-0 mb-4">
              <h2 className="fs-32 text-center fw-bold">
                A Feature-rich Educational Experience for Kids
              </h2>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-md-4 d-flex mb-5">
                <div className="card shadow-none br-15px w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.sureWashEducationTechniques}
                      className="img-fluid  lazy mb--20"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Hand hygiene technique education"
                    />
                    <h3 className="fs-22 fw-300 mb-2">
                      Hand hygiene technique education
                    </h3>
                    <p className="mb-0 fs-20">
                      The app provides a comprehensive education in hand
                      hygiene. Visual guides and step-by-step instructions help
                      children follow WHO standards for effective handwashing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex mb-5">
                <div className="card shadow-none br-15px w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.sureWashEducationalGames}
                      className="img-fluid  lazy mb--20"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Educational hygiene games"
                    />
                    <h3 className="fs-22 fw-300 mb-2">
                      Educational hygiene games
                    </h3>
                    <p className="mb-0 fs-20">
                      Interactive games developed by our team teach children the
                      importance of cleanliness in a fun way. These games
                      challenge kids to identify germs and learn about the
                      consequences of poor hygiene.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex mb-5">
                <div className="card shadow-none br-15px w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.sureWashSongsPoems}
                      className="img-fluid  lazy mb--20"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Songs & poems"
                    />
                    <h3 className="fs-22 fw-300 mb-2">Songs & poems</h3>
                    <p className="mb-0 fs-20">
                      To make the learning process even more enjoyable, we’ve
                      included catchy songs and rhymes that reinforce
                      handwashing steps and hygiene principles, making them easy
                      to remember and fun to follow.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex mb-5">
                <div className="card shadow-none br-15px w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.sureWashHygieneCertificates}
                      className="img-fluid  lazy mb--20"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Hand hygiene certification"
                    />
                    <h3 className="fs-22 fw-300 mb-2">
                      Hand hygiene certification
                    </h3>
                    <p className="mb-0 fs-20">
                      Upon mastering the handwashing technique and completing
                      the educational modules, children receive a digital
                      certificate, acknowledging their accomplishment and
                      encouraging continued practice.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex mb-5">
                <div className="card shadow-none br-15px w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.sureWashFeedback}
                      className="img-fluid  lazy mb--20"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Real-time handwashing feedback"
                    />
                    <h3 className="fs-22 fw-300 mb-25">
                      Real-time handwashing feedback
                    </h3>
                    <p className="mb-0 fs-20">
                      Using AR technology, the app provides real-time feedback
                      on the handwashing process, allowing children to adjust
                      their technique and ensure their hands are cleaned
                      effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex mb-5">
                <div className="card shadow-none br-15px w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.sureWashStoryTelling}
                      className="img-fluid  lazy mb--20"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Interactive storytelling"
                    />
                    <h3 className="fs-22 fw-300 mb-2">
                      Interactive storytelling
                    </h3>
                    <p className="mb-0 fs-20">
                      We’ve woven essential hygiene lessons into captivating
                      stories where children can make choices that teach them
                      the consequences of their hygiene habits in a memorable
                      storytelling format.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex mb--30 mb-md--0">
                <div className="card shadow-none br-15px w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.sureWashHabitTracking}
                      className="img-fluid  lazy mb--20"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Hygiene habit tracking"
                    />
                    <h3 className="fs-22 fw-300 mb-2">
                      Hygiene habit tracking
                    </h3>
                    <p className="mb-0 fs-20">
                      The app includes a feature to track the frequency and
                      quality of the child’s handwashing over time, promoting
                      consistent practice and highlighting progress.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="card shadow-none br-15px w-100">
                  <div className="card-body p-lg-40">
                    <AnimatedImageWithOpacity
                      src={IMAGES.sureWashCustomisableAvatar}
                      className="img-fluid  lazy mb--20"
                      loading="lazy"
                      width="70"
                      height="70"
                      alt="Customisable avatars"
                    />
                    <h3 className="fs-22 fw-300 mb-2">Customisable avatars</h3>
                    <p className="mb-0 fs-20">
                      Kids can create and personalise their avatars, making the
                      learning experience unique to them and increasing their
                      engagement with the app’s content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-4 pb-5 bg_color--1 custom-blog-cursor">
          <div className="container">
            <div className="row text-center justify-content-center ">
              <div className="col-lg-10">
                <AnimatedImageWithOpacity
                  className="img-fluid lazy mb-4"
                  loading="lazy"
                  src={IMAGES.sureWashWho}
                  width="406"
                  height="124"
                  alt="world health organization"
                />
                <p className="mx-lg-5 mb--25 italic-font">
                  What sets SureWash apart is its foundation in scientifically
                  validated training technology, utilised in healthcare settings
                  globally. This technology, adapted for ‘SureWash: A Kid’s
                  Journey’, employs the World Health Organization’s (WHO) 6-step
                  handwashing technique, ensuring that the education provided is
                  not only engaging but also medically accurate and effective.
                </p>
                <p className="mx-lg-5 mb-0 italic-font">
                  This global and inclusive approach ensures that children from
                  various backgrounds can understand, appreciate, and apply the
                  lessons of hand hygiene in their daily lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
      <div className="rn-portfolio-area pt-4 pb-4 bg-darkcyan">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title mt-0">
                                <h2 className="fs-38 mb--20 text-white">A glimpse into what SureWash has achieved so far</h2>
                                <ul className="liststyle bullet bullet-white row">                                   
                                    <li className="col-lg-6 mt--30  font--22 text-white">Became members of The Leapfrog Group Partners Advisory Committee.</li>                                    
                                    <li className="col-lg-6 mt--30 mt-lg-0 font--22  text-white">Trained over 2 million people worldwide.</li>                               
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section> */}
      <section className="surewash-primary-bg custom-blog-cursor">
        <div className="ptb--80">
          <div className="container testimonial-surewash-card">
            <p className="fs-22 fw-400 mb-4">
              Their team took our concept and brought it to life in a way that
              really speaks to kids. They understand how to make learning fun,
              which is exactly what we needed. Our collaboration has been a
              game-changer for teaching hand hygiene, and the feedback from
              schools and parents has been overwhelmingly positive.
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
                <h4 className="fs-18 fw-500 mb-1">Cecil Ryan</h4>
                <h5 className="fs-14 fw-400 mb-0">Executive Chairman</h5>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="portfolio-style2 portfolio-card portfolio-greenapple section custom-blog-cursor">
        <Container className="my-5">
          <div className="title-box text-center mb-5">
            <h2 className="title-2 mb-0">Read Next</h2>
          </div>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <div className="info-card">
                <AnimatedImageWithOpacity
                  className="logo-img img-fluid"
                  src={IMAGES.mosaicLogo}
                  width="79"
                  height="90"
                  alt="logo"
                  loading="lazy"
                />
                <p className="main-text">
                  A platform where teachers can update parents about their
                  child’s daily activities
                </p>
                <a
                  href="/mosaic"
                  className="btn bg-white custom-cursor"
                >
                  Explore More
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-keepappy-view grid-mosaic-view">
                <div className="div1 justify-content-between pb-0">
                  <AnimatedImageWithOpacity
                    className="img-fluid ms-auto"
                    src={IMAGES.mosaicMobile}
                    width="220"
                    height="300"
                    alt="img"
                    loading="lazy"
                  />
                </div>
                <div className="div2">
                  <p>
                    Named Leading Startup at the Ireland Rising Business Star
                    Awards for innovation and impact.
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
                    Supported 1,500 parents, 85 schools, and 5,000 children in
                    effective learning and skill development within 5 months.
                  </p>
                </div>
                <div className="div4 pb-0 justify-content-end">
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.mosaicTwoMobile}
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

export default AboutSureWash;
