import { Col, Container, Row, Image, Card, Carousel, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { success, error } from "../../pages/toast";
import { errorMessages, validationMessages } from "../../../utils/validationMessages";
import { APIS } from "../../../api/apiEndPoints";
import { trimInput, validateField } from "../../../utils/validations";
import { removePathHistory } from "../../../utils/localStorage";
import { ToastMessage } from "../../../utils/toast";
import APICallService from "../../../api/apiCallService";
import "./style.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PhoneInput, {
  parsePhoneNumber,
  getCountryCallingCode,
} from 'react-phone-number-input';
import confetti from "canvas-confetti";

interface FormData {
  name: string;
  email: string;
  phone: string;
  budget?: string;
  message: string;
  visitedPages?: string[];
  currentPage?: string;
  phoneCountry: string;
}

interface Errors {
  name: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
}

interface ValidationErrors {
  name: boolean;
  email: boolean;
  phone: boolean;
}

const BlogDetailsSkeleton = () => {
  return (
    <>
      <div className="section pb-0 if-white custom-blog-cursor">
        <Container>
          <div className="blog-details-hero-section">
            <Row className="flex-center">
              <Col lg={6}>
                <h1 className="title1">
                  <span className="text-gradient-style2">
                    <Skeleton height={40} count={2} />
                  </span>
                </h1>
              </Col>
              <Col lg={6} className="border-lg-start">
                <div className="card-body">
                  <Skeleton count={3} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="section custom-blog-cursor">
        <Container>
          <Row>
            <Col lg={8}>
              <Skeleton height={229} className="mb-30" />
              <Skeleton count={10} className="mb-2" />
            </Col>
            <Col lg={4}>
              <Card className="rounded-3 sticky-lg-top top-5">
                <Card.Body className="p-lg-4">
                  <h4 className="fs-20 fw-500 mb-20">
                    <Skeleton width={250} />
                  </h4>
                  <Row className="gy-4 gx-20">
                    {[1, 2, 3].map((index) => (
                      <Col lg={12} key={index}>
                        <Skeleton height={40} />
                      </Col>
                    ))}
                    <Col xs={12}>
                      <Skeleton height={100} />
                    </Col>
                    <Col xs={12}>
                      <Skeleton height={40} width={120} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const CombinedSection = () => {
   const { url } = useParams();
    useEffect(() => {
      fetchBlogDetails(url);
    }, [url]);
  const location = useLocation();
  const navigate = useNavigate();
  const [blogDetails, setBlogDetails] = useState<any>(null);
  const [loading,setLoading] = useState(false);
  const [selectedCountry,setSelectedCountry] = useState<any>('IN')

  const initialState = {
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
    scheduleMeeting: "",
    visitedPages: [location.pathname],
    currentPage: location.pathname,
    phoneCountry: "+91",
  };

  const [formData, setFormData] = useState<FormData | any>(initialState);
  const [errors, setErrors] = useState<Errors | any>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  const [validationErrors, setValidationErrors] = useState<ValidationErrors | any>({
    name: false,
    email: false,
    phone: false,
  });

  const fetchBlogDetails = async (typeUrl: any) => {
    setLoading(true);
    let params = {
      URL: typeUrl
    }
    const apiCallService = new APICallService(APIS.BLOG_DETAIL, params);
    const response = await apiCallService.callAPI();
    // if (response.error) {
    //   navigate("blogs");
    // }else{
    //   setBlogDetails(response);
    // }
    if (response) {
      if(response?.record == false){
        navigate("/blogs");
      }else{
        setBlogDetails(response);
      }
    }
    // if (response) {
    //   setBlogDetails(response);
    // }
    setLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target;
    let newValue = trimInput(name, value);
    let newFormData = { ...formData };
    newFormData[name] = newValue;
    let errorData2 = { ...errors };
    errorData2[name] = false;
    let error = validateField(name, value);
    let errorData = { ...validationErrors };
    errorData[name] = error;
    setFormData(newFormData);
    setErrors(errorData2);
    setValidationErrors(errorData);
  };

  const handlePhoneChange = (value: any) => {
    if (!value) {
      setFormData((prevData: any) => ({
        ...prevData,
        phone: '',
      }));
      return;
    }
    try {
      const phoneNumber = parsePhoneNumber(value);
      setFormData((prevData: any) => ({
        ...prevData,
        phoneCountry: phoneNumber
          ? `+${phoneNumber.countryCallingCode}`
          : prevData.phoneCountry,
        phone: phoneNumber ? phoneNumber.nationalNumber : '',
      }));
      let errorData2 = { ...errors };
      errorData2.phone = false;
      setErrors(errorData2)
    } catch (error) {
      console.error('Error parsing phone number:', error);
    }
  };
  const handleCountryChange = (country: any) => {
    setSelectedCountry(country);
    if (country) {
      const newCountryCode = `+${getCountryCallingCode(country)}`;
      setFormData((prevData: any) => ({
        ...prevData,
        phoneCountry: newCountryCode,
        phone: prevData.phone,
      }));
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedFormData = { ...formData };
    if (!formData.budget || formData.budget === "0") {
      delete sanitizedFormData.budget;
    }
    let newErrors: { [key: string]: boolean } = {};
    let isValid = true;
    const fieldsToValidate = ["name", "email", "phone", "message"];
    const button = e.currentTarget as HTMLButtonElement;
    const rect = button.getBoundingClientRect();

    for (const key of fieldsToValidate) {
      if (!formData[key as keyof FormData] || errors[key]) {
        newErrors[key] = true;
        isValid = false;
      }
      if (validationErrors[key]) {
        isValid = false;
      }
    }
    setErrors(newErrors);
    if (isValid) {
      try {
        const apiService = new APICallService(APIS.CONTACTUS, sanitizedFormData);
        const response = await apiService.callAPI();
        if (response) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: {
              x: (rect.left + rect.width / 2) / window.innerWidth,
              y: (rect.top + rect.height / 2) / window.innerHeight,
            },
            zIndex:2500
          });
          success(ToastMessage.ContactUsAdd);
          setFormData(initialState);
          setSelectedCountry('IN');
          setErrors({
            name: false,
            email: false,
            phone: false,
            message: false,
          });
          removePathHistory();
        }
      } catch (err: any) {
        error(err);
      }
    }
  };

  if (loading) {
    return <BlogDetailsSkeleton />;
  }

  return (
    <>
    <div className="section pb-0 if-white custom-blog-cursor">
      <Container>
        <div className="blog-details-hero-section">
          <Row className="flex-center">
            <Col lg={6}>
              <h1 className="title1">
                <span className="text-gradient-style2">
                {blogDetails?.title}
                </span>
                <br />
                {/* Everything You Need To Know for Your Next Successful Project */}
              </h1>
            </Col>
            <Col
              lg={6}
              className="border-lg-start"
            >
              <div className="card-body">
                <p className="text">
                  {blogDetails?.subTitle}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    <div className="section custom-blog-cursor">
      <Container>
        <Row>
          <Col lg={8}>
            {
            // loading ? (
            //   <p>Loading...</p>
            // ) : 
            blogDetails ? (
              <>
                <Carousel interval={3000} indicators={false} controls={false}>
                  {blogDetails.attachments.map((image: any, index: number) => (
                    <Carousel.Item key={index}>
                      <Image
                        className="img-fluid mb-30 blog-details-full-img"
                        src={image.image}
                        width="737"
                        height="229"
                        alt={`blog-image-${index}`} 
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                {/* <h1>{blogDetails.title}</h1> */}
                <div 
                className="text-dark mt-2 fix-width-img"
                dangerouslySetInnerHTML={{ __html: blogDetails.description }} />
              </>
            ) : (
              // <p>No blog details found.</p>
              <></>
            )
            }
          </Col>
          <Col lg={4}>
            <Card className="rounded-3 sticky-lg-top top-5 ">
              <Card.Body className="p-lg-4">
                <h4 className="fs-20 fw-500 mb-20">Got a Question? Drop it here!</h4>
                <form>
                  <Row className="gy-4 gx-20">
                    <Col lg={12}>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full name"
                        onChange={handleInputChange}
                        value={formData.name}
                      />
                      {errors.name && <p className="text-danger fs-6">{errorMessages.name}</p>}
                      {validationErrors.name && (
                        <p className="text-danger fs-6">{validationMessages.name}</p>
                      )}
                    </Col>
                    <Col lg={12}>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                      {errors.email && <p className="text-danger fs-6">{errorMessages.email}</p>}
                      {validationErrors.email && (
                        <p className="text-danger fs-6">{validationMessages.email}</p>
                      )}
                    </Col>
                    <Col lg={12}>
                      {/* <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone number"
                        onChange={handleInputChange}
                        value={formData.phone}
                      /> */}
                       <Form.Group
                            className="mb-1"
                            controlId="phoneInput"
                          >
                            <PhoneInput
                              id="phoneInput"
                              className='form-control'
                              international
                              countryCallingCodeEditable={false}
                              defaultCountry={selectedCountry}
                              value={`${formData.phoneCountry}${formData.phone}`}
                              onChange={handlePhoneChange}
                              onCountryChange={handleCountryChange}
                            />
                          </Form.Group>
                      {errors.phone && <p className="text-danger fs-6">{errorMessages.phone}</p>}
                      {validationErrors.phone && (
                        <p className="text-danger fs-6">{validationMessages.phone}</p>
                      )}
                    </Col>
                    <Col xs={12}>
                      <textarea
                        name="message"
                        className="form-control"
                        cols={3}
                        rows={4}
                        placeholder="Your Message Here!"
                        onChange={handleInputChange}
                        value={formData.message}
                      ></textarea>
                      {errors.message && (
                        <p className="text-danger fs-6">{errorMessages.message}</p>
                      )}
                    </Col>
                    <Col xs={12}>
                      <button
                        type="button"
                        className="fs-16 fw-500 btn btn-primary text-white custom-cursor"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </Col>
                  </Row>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default CombinedSection;