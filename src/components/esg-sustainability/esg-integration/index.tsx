import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { IMAGES } from '../../../utils/staticJSON';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const ESGIntegration = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <Row className="gy-4 align-items-lg-stretch">
          <Col
            xs={12}
            className="text-center title-box mb-0"
          >
            <h2 className="title-2 mb-4">
              Why should you focus on ESG integration?
            </h2>
          </Col>
          <Col
            lg={6}
            className="order-lg-last"
          >
            <AnimatedImageWithOpacity
              className="img-fluid fit-img"
              loading="lazy"
              width="562"
              height="619"
              src={IMAGES.esgPrinciple}
              alt="esg"
            />
          </Col>
          <Col
            lg={6}
            className="align-self-lg-center"
          >
            <div className="card-body">
              <h3 className="title-4 mb-4">
                Drive Resilience and Growth with ESG Principles.
              </h3>
              <p className="fs-20 mb-4">
                Incorporate ESG to foster innovation, ensure sustainability, and
                build trust with stakeholders for lasting impact and market
                leadership.
              </p>
              <p className="fs-20">
                Our ESG and sustainability strategy services are designed to
                guide businesses through the complexities of Environmental,
                Social, and Governance (ESG) practices. By addressing critical
                environmental challenges and embedding social responsibility
                into your operations, we unlock long-term growth opportunities
                for your organisation.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="gy-4 pt-4 ESG-services">
          <Col
            lg={4}
            className="d-flex"
          >
            <div className="card">
              <div className="card-body">
                <AnimatedImageWithOpacity
                  src={IMAGES.competitiveAdvantage}
                  className="img-fluid mb-2"
                  height="48"
                  width="48"
                  alt="Competitive Advantage"
                  loading="lazy"
                />
                <h3 className="title mb-2">Competitive Advantage</h3>
                <p className="pera mb-0">
                  Stand out, attract eco-conscious stakeholders, and drive
                  innovation.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            className="d-flex"
          >
            <div className="card">
              <div className="card-body">
                <AnimatedImageWithOpacity
                  src={IMAGES.operationalExcellence}
                  height="48"
                  width="48"
                  className="img-fluid mb-2"
                  alt="Operational excellence"
                  loading="lazy"
                />
                <h3 className="title mb-2">Operational excellence</h3>
                <p className="pera mb-0">
                  Reduce costs & enhance efficiency with sustainable energy &
                  supply chain practices.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            className="d-flex"
          >
            <div className="card">
              <div className="card-body">
                <AnimatedImageWithOpacity
                  src={IMAGES.socialEquity}
                  height="48"
                  width="48"
                  className="img-fluid mb-2"
                  alt="Social Equity"
                  loading="lazy"
                />
                <h3 className="title mb-2">Social Equity</h3>
                <p className="pera mb-0">
                  Build your brand with fair, safe, and inclusive practices that
                  boost engagement.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ESGIntegration;
