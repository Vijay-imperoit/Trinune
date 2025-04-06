import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const HCServices = () => {
  return (
    <div className="section lasting-solutions-flutter custom-blog-cursor-white">
      <Container>
        <Row className="gy-5 align-items-start">
          <Col
            lg={5}
            className="sticky-lg-top top-50"
          >
            <h2 className="title-2 text-white mb-4">
              Our Innovative Healthcare services
            </h2>
            <p className="fs-20 fw-normal text-white mb-0">
              We will help you implement and maintain a tailored, cost-effective
              technology solution that supports your business goals and best
              meets your patients' needs.
            </p>
          </Col>
          <Col
            lg={7}
            className="development-services-flutter no-scroll text-white"
          >
            <div className="py-4">
              <div className="card-body">
                <h3 className="mb-3">Custom Healthcare Software Development</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  We deliver engaging patient experiences through our bespoke
                  healthcare software solutions. Our seasoned team possesses
                  extensive experience in crafting complex healthcare software
                  systems that enhance patient care and ensure improved medical
                  outcomes. As a dedicated service provider, we are committed to
                  delivering high-quality, intuitive software that meets the
                  custom needs of the healthcare industry.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Mobile healthcare applications</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Our software experts in the healthcare industry will help you
                  build and adopt a variety of mobile health applications; from
                  apps for practitioners and healthcare facilities – including
                  solutions for telehealth, billing, medical prescriptions, and
                  record management – to mobile applications for patients that
                  offer advanced features for health monitoring, medication
                  tracking, healthy living and wellness.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">AI-Powered Diagnostics</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  By integrating artificial intelligence (AI) into healthcare
                  workflows, we enable faster and more accurate diagnostic
                  processes. Our AI solutions analyze large datasets, identify
                  patterns, and generate actionable insights, assisting
                  healthcare providers in early detection of diseases,
                  predicting patient outcomes, and recommending treatment plans.
                  For example, AI-based tools can analyze radiology images,
                  detect anomalies, and provide real-time support to doctors.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Blockchain for Healthcare</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  We implement blockchain technology to enhance the security and
                  transparency of healthcare systems. From maintaining immutable
                  patient records to streamlining insurance claims and ensuring
                  drug traceability, blockchain solutions provide unparalleled
                  reliability in sensitive operations.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">EMR/EHR applications</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Create a comprehensive view of your patient's clinical data to
                  deliver consistently safer and better-quality care. We'll help
                  you develop and implement custom electronic health records
                  software that provides automated paperless medical workflows
                  and enables the interoperability of your systems. By
                  integrating EHR/EMR software solutions, you will boost your
                  efficiency and reduce your operational costs.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Healthcare CRM Solutions</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  We empower healthcare organizations with CRM platforms
                  designed to enhance patient interactions and streamline
                  workflows. From appointment scheduling and follow-ups to
                  personalized communication, our solutions ensure seamless
                  engagement. Our systems also provide actionable insights,
                  enabling healthcare providers to deliver a higher level of
                  patient care and satisfaction.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="mb-3">Patient and provider portalss</h3>
                <p className="fs-16 text-dark-gray mb-0">
                  Improve patient engagement, drive customer satisfaction and
                  increase the availability of health information with
                  accessible and easy-to-use patient portals. We provide custom
                  healthcare software development services, helping medical
                  organisations design and implement web platforms that
                  facilitate communication between patients and providers,
                  enable secure information exchange and simplify collaboration
                  across multiple facilities and departments. Your patients will
                  gain instant access to their healthcare information along with
                  the ability to book doctor appointments, review test results
                  and prescriptions, use billing functionality and much more.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HCServices;
