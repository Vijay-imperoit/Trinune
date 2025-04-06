import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
const ContactUs = React.lazy(()=> import("../../landing-page/contact-us"));
const FormSection = () => {
  return (
    <div className="section form-get-section if-white pb-0 custom-blog-cursor">
      <Container>
        <Row>
          <Col
            lg={12}
            className="text-center"
          >
            <h2 className="title-2 fs-40 mb-2">Contact our team</h2>
            <p className="fs-35">Have a Project ?</p>
          </Col>
        </Row>
        <Row>
          <ContactUs isHome={true} />
        </Row>
        <Row>
          
        </Row>
      </Container>
    </div>
  );
};

export default FormSection;
