import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';
import APICallService from '../../../api/apiCallService';
import { APIS } from '../../../api/apiEndPoints';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
 
const CareerCardSkeleton = () => {
  return (
    <div className="card position-card2-careers mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <Skeleton circle width={64} height={64} />
          <span className="tech-name ms-3">
            <Skeleton width={150} />
          </span>
        </div>
        <div className="tech-des mt-3">
          <p className="text-edited">
            <Skeleton count={3} />
          </p>
        </div>
      </div>
      <div className="card-footer">
        <div className="experience">
          <Skeleton width={150} />
        </div>
        <Skeleton width={100} height={40} />
      </div>
    </div>
  );
};

const HiringSection = () => {
  const navigate = useNavigate();
  const [careerList,setCareerList] = useState<any>([]);
  const [loading, setLoading] = useState(true);
 
   useEffect(() => {
      fetchData();
    }, []);
 
  const fetchData = async () => {
    setLoading(true);
    const apiCallService = new APICallService(APIS.CAREER_LIST);
    const response = await apiCallService.callAPI();
    if (response) {
      setCareerList(response.records);
    }
    setLoading(false);
  };
 
 
  return (
    <div className="section custom-blog-cursor">
      <Container>
        <div className="card open-position-careers">
          <div className="card-body">
            <Row className="gy-4">
              <Col lg={5}>
                <div className="sticky-lg-top top-50">
                  <span className="text-with-pill flush">We’re Hiring!</span>
                  <h2 className="title-2">Interested in joining the team?</h2>
                </div>
              </Col>
              <Col lg={7}>
              {loading ? (
                  // Show 3 skeleton cards while loading
                  <>
                    {[1, 2, 3].map((index) => (
                      <CareerCardSkeleton key={index} />
                    ))}
                  </>
                ) : ( 
              careerList.map((career: any) => (
                <div className="card position-card2-careers">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={career.image}
                      alt="nodejs"
                      width="64"
                      height="64"
                    />
                    <span className="tech-name">{career.title}</span>
                  </div>
                  <div className="tech-des">
                    <p className="text-edited">
                    {career.description}
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="experience">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      width="24"
                      height="24"
                      src={IMAGES.briefcase}
                      alt=""
                    />
                  Experience: {career.experience}
                  </div>
                  <button
                    className="btn btn-outline-primary fs-16 custom-cursor"
                    onClick={() => {
                      navigate(`/career-details/${career.URL}`);
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
             ))
            )}
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};
 
export default HiringSection;