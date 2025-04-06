import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const BespokeSolutions2 = () => {
  return (
    <div className="section custom-blog-cursor">
      <Container>
        <Row className="gy-4 align-items-lg-stretch">
          <Col xs={12}>
            <div className="title-box text-center">
              <h2 className="title-2">
                Why Settle for Off-the-Shelf When You Can Have Bespoke?
              </h2>
            </div>
          </Col>
          <Col lg={6} className="order-lg-last">
            <AnimatedImageWithOpacity
              className="img-fluid fit-img"
              src={IMAGES.Mockup}
              width="586"
              height="412"
              alt="image"
              loading="lazy"
            />
          </Col>
          <Col lg={6} className="align-self-lg-center">
            <div className="card-body">
              <h3 className="title-4 mb-4">
                Bespoke Software- Custom-Crafted Software Tailored to Your
                Unique Needs
              </h3>
              <p className="mb-4">
                Bespoke software provides a precise fit for your unique business
                requirements, ensuring you stand out from the competition.
              </p>
              <p className="mb-0">
                With bespoke solutions, you gain flexibility and scalability
                that adapts as your business evolves, offering long-term value
                and efficiency. It’s an investment in tailored functionality
                that grows with you, improving performance and security every
                step of the way.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BespokeSolutions2;
