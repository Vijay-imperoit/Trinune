import {Col, Container, Row} from "react-bootstrap";
import "./style.css";
const HeroSection2 = () => {
    return (
        <div className='section pb-0 if-white custom-blog-cursor'>
            <Container>
                <div className='blog-details-hero-section'>
                    <Row className='flex-center'>
                        <Col lg={6}>
                            <h1 className='title1'>
                                <span className='text-gradient-style2'>Emerging App Trends</span>
                                <br />
                                Developing an app in 2023? <br></br>9 awesome mobile app development trends to watch out for!
                            </h1>
                        </Col>
                        <Col lg={6} className='border-lg-start'>
                            <div className='card-body'>
                                <p className='text'>
                                    Developing an app in 2023? It's essential to keep up with the latest trends to stay
                                    competitive and efficient. In this guide, we explore the most exciting and emerging
                                    mobile app development trends that will shape the industry.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection2;
