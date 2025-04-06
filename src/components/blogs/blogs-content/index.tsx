import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
const BlogMain = () => {
  return (
    <div className="section if-white pb-0 custom-blog-cursor">
      <Container>
        <div className="blog-hero-section-blogs">
          <Row className="flex-center">
            <Col lg={5}>
              <h1 className="title1 fw-bold">
                <span className="text-gradient-style2">Tech Talks</span>
                <br />
                Dive Into Our Blogs
              </h1>
            </Col>
            <Col
              lg={7}
              className="border-lg-start"
            >
              <div className="card-body">
                <div className="text">
                  Browse through the technical knowledge about latest trends and
                  technologies our experienced team would like to share with
                  you.
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BlogMain;
