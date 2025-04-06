import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import AnimatedImageWithOpacity from "../../../global/AnimatedImageWithOpacity";
import { IMAGES } from "../../../utils/staticJSON";
import EBookModal from "../../pages/e-book";

const EBookSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='custom-blog-cursor mb-4 pb-4'>
      <Container className='mb-4'>
        <div className='card card-linear-style1-web2 overflow-hidden custom-blog-cursor-white'>
          <div className='card-body pe-lg-0'>
            <Row className='align-items-center gy-4'>
              <Col lg={9}>
                <h3 className='title-3'>
                  🚀 Unlock the Future of Digital Innovation
                </h3>
                <Row>
                  <Col lg={9} className='mb-2'>
                    <p className='fs-20 mb-4'>
                      Discover cutting-edge insights, strategies, and expert
                      knowledge in this exclusive eBook. Elevate your business
                      with the latest in technology, AI, and digital
                      transformation. Download now and stay ahead in the IT
                      revolution!
                    </p>
                    <span
                      className='btn btn-light d-flex align-items-center justify-content-center custom-cursor'
                      onClick={openModal}
                      style={{ height: "50px", width: "160px" }}
                    >
                      Dowanload Now
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col lg={3} className='text-center text-lg-start animated-img'>
                <div className=''>
                  <AnimatedImageWithOpacity
                    src={IMAGES.ebookOpen}
                    width='auto'
                    height='200'
                    alt='Download eBook'
                    loading='lazy'
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      {/* Render the modal */}
      <EBookModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default EBookSection;
