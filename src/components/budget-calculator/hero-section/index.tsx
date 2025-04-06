import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../../../utils/staticJSON";
import "./style.css";
import AnimatedImageWithOpacity from "../../../global/AnimatedImageWithOpacity";
import { useEffect, useState } from "react";
import { trimInput, validateField } from "../../../utils/validations";
import APICallService from "../../../api/apiCallService";
import { error, success } from "../../pages/toast";
import { APIS } from "../../../api/apiEndPoints";
import { ToastMessage } from '../../../utils/toast';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  budget?: string;
  message: string;
  visitedPages?: string[];
  currentPage?: string;
  phoneCountry: string;
}
interface Errors {
  name: boolean;
  email: boolean;
}
interface validationErrors {
  name: boolean;
  email: boolean;
}

const BudgetCalculatorHeroSection = () => {
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
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState("right");
  const [formData, setFormData] = useState<FormData | any>(initialState);
  const [errors, setErrors] = useState<Errors | any>({
    name: false,
    email: false,
  });
  const [validationErrors, setValidationErrors] = useState<
    validationErrors | any
  >({
    name: false,
    email: false,
  });
  const [selectedDevelopmentType, setSelectedDevelopmentType] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [selectedIndustryData,setSelectedIndustryData] = useState<any>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<any>([]);
  const [apps, setApps] = useState<any>([]);
  const [features, setFeatures] = useState([]);
  const [devData,setDevData] = useState<any>([])
  const [fetchLoading,setFetchLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    setFetchLoading(true)
      let apiService = new APICallService(APIS.BUDGET_LIST);
      let response = await apiService.callAPI();
      if (response) {
        setDevData(response.records);
      };
    setFetchLoading(false);
  };

  const handleDevelopmentTypeSelect = (type: any) => {
    setSelectedDevelopmentType(type);
    let temp = devData
      .filter((devtype: any) => devtype.development == type)
      .map((devtype: any) => devtype)
      .flat();
      console.log(temp);
    setApps(temp);
    handleStepClick(2,type);
  };

  const handleIndustrySelect = (appId: any) => {
    if (!selectedDevelopmentType) return;
    const appFeatures =
      apps.find((app: any) => app._id == appId)?.features || [];
    setSelectedIndustry(appId);
    let temp = [...selectedIndustryData, appId];
    setSelectedIndustryData(temp);
    setFeatures(appFeatures);
    setSelectedFeatures([]);
  };

  const handleFeatureSelect = (featureId: any) => {
    setSelectedFeatures((prevFeatures: any[]) =>
      prevFeatures.includes(featureId)
        ? prevFeatures.filter((id) => id !== featureId)
        : [...prevFeatures, featureId]
    );
  };

const handleStepClick = (step: any,type:any) => {
    if(fetchLoading){
      return;
    }
    switch (step) {
      case 2:
        if (!type) return;
        break;
      
      case 3:
        if (!type || apps.length > 0 && selectedIndustry.length === 0) return;
        break;
      
      case 4:
        if (!type || features.length > 0 && selectedFeatures.length === 0) return;
        break;
    }
    setActiveStep(step);
    if(step > activeStep){
      setDirection("right")
    }else if(step < activeStep){
      setDirection("left")
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    console.log(errorData,errorData2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: { [key: string]: boolean } = {};
    let isValid = true;
    const fieldsToValidate = ["name", "email"];

    for (const key of fieldsToValidate) {
      if (!formData[key as keyof FormData] || errors[key]) {
        newErrors[key] = true;
        isValid = false;
      }
      if (validationErrors[key]) {
        isValid = false;
      }
    }
    console.log('isvalid',isValid,newErrors);
    setErrors(newErrors);
    if (isValid) {
      setLoading(true);
      try {
        console.log('hiiiii',selectedIndustry,selectedFeatures)
        const payload = {
            name: formData.name,
            email: formData.email,
            development: selectedDevelopmentType || '',
            solution: [selectedIndustry].map((industry) => ({ reference: industry })),
            features: selectedFeatures.map((feature: any) => ({ reference: feature })),
          };
        console.log('payload',payload)
        const apiService = new APICallService(
          APIS.ADD_BUDGET,
          payload
        );
        const response = await apiService.callAPI();
        if (response) {
        //   triggerConfetti();
          success(ToastMessage.BudgetMsg);
          setFormData(initialState);
        //   setActiveTab(1);
          setErrors({
            name: false,
            email: false,
            phone: false,
            message: false,
          });
          navigate('/')
        //   removePathHistory();
        }
      } catch (err: any) {
        error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="hero-section-budget h-100 custom-blog-cursor">
        <Container>
          <Row className="justify-content-center">
            <Col
              lg={9}
              className={`mx-auto slider-section ${
                activeStep === 1 ? 'active-slide' : 'inactive-slide'
              } ${direction === 'right' ? 'slide-in-right' : 'slide-in-left'}`}
            >
              <div className="hero-contain pb-0">
                <div className="text-with-pill dark shimmer mt-5">
                  Get a quote in 3 simple clicks! ✨
                </div>
                <div className="content">
                  <div className="fs-1 main-title text-offwhite">
                    Tell us where you'd like to begin
                    <br />
                    Your journey starts here!
                  </div>
                </div>
                <Row className="justify-content-center budget-card gy-4">
                  <Col
                    sm="auto"
                    md={5}
                    // onClick={() => handleStepClick(2)}
                    onClick={() => {
                      handleDevelopmentTypeSelect(1);
                    }}
                    className="d-flex custom-cursor py-2"
                    // style={{
                    //   cursor: 'pointer',
                    // }}
                  >
                    <div
                      className="card"
                      onClick={() => {
                        handleDevelopmentTypeSelect(1);
                      }}
                    >
                      <div className="card-body">
                        <AnimatedImageWithOpacity
                          className="img-fluid mb-20"
                          src={IMAGES.mobileProgrammingBudget}
                          width="48"
                          height="48"
                          alt="icon"
                          loading="lazy"
                        />
                        <h3 className="title mb-2">Mobile App Development</h3>
                        <p className="sub-text">
                          Craft innovative mobile experiences for your audience,
                          anytime, anywhere.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    sm="auto"
                    md={5}
                    // onClick={() => handleStepClick(2)}
                    onClick={() => {
                      handleDevelopmentTypeSelect(2);
                    }}
                    className="d-flex custom-cursor py-2"
                    // style={{
                    //   cursor: 'pointer',
                    // }}
                  >
                    <div className="card">
                      <div className="card-body">
                        <AnimatedImageWithOpacity
                          className="img-fluid mb-20"
                          src={IMAGES.webDesignBudget}
                          width="48"
                          height="48"
                          alt="icon"
                          loading="lazy"
                        />
                        <h3 className="title mb-2">Web App Development</h3>
                        <p className="sub-text">
                          Build dynamic and scalable web solutions to elevate
                          your business online.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              lg={9}
              className={`mx-auto slider-section ${
                activeStep === 2 ? 'active-slide' : 'inactive-slide'
              } ${direction === 'right' ? 'slide-in-right' : 'slide-in-left'}`}
            >
              <div className="hero-contain">
                <div className="text-with-pill dark shimmer mt-5">
                  Great job! Only 2 clicks left 😌
                </div>
                <div className="content">
                  <div className="fs-1 main-title text-offwhite">
                    What kind of solution are you looking to create for{' '}
                    {selectedDevelopmentType == 1
                      ? 'Mobile App Development'
                      : 'Web App Development'}
                    ?
                  </div>
                </div>
                <Row className="justify-content-center gy-3">
                  {apps.map((app: any) => (
                     app?.features?.length > 0 ? (
                    <Col
                      key={app.id}
                      className="col-auto"
                      onClick={() => handleIndustrySelect(app._id)}
                    >
                      <div
                        className={`custom-cursor card mastery-card-web2 ${
                          selectedIndustry === app._id ? 'selected' : ''
                        }`}
                      >
                        <div className="box-icon">
                          <AnimatedImageWithOpacity
                            src={app.image}
                            width="28"
                            height="28"
                            alt={app.name}
                            loading="lazy"
                          />
                        </div>
                        <p className="card-text">{app.name}</p>
                      </div>
                    </Col>
                     ): null
                  ))}
                </Row>
              </div>
              <div
                className="text-center py-2"
                // style={{
                //   cursor: 'pointer',
                // }}
              >
                <span className="text-white custom-cursor fs-20 fw-bold"
                 onClick={() => handleStepClick(3, selectedDevelopmentType)}
                 >Move to next step</span>
              </div>
            </Col>
            <Col
              lg={9}
              className={`mx-auto slider-section ${
                activeStep === 3 ? 'active-slide' : 'inactive-slide'
              } ${direction === 'right' ? 'slide-in-right' : 'slide-in-left'}`}
            >
              <div className="hero-contain">
                <div className="text-with-pill dark shimmer mt-5">
                  Just 1 click away! 🤩
                </div>
                <div className="content">
                  <div className="fs-1 main-title text-offwhite">
                    Which features you want to integrate for{' '}
                    {
                      apps.find((app: any) => app._id === selectedIndustry)
                        ?.name
                    }
                    ?
                  </div>
                </div>

                <Row className="justify-content-center gy-3">
                  {features.map((feature: any) => (
                    <Col
                      key={feature._id}
                      className="col-auto"
                      onClick={() => handleFeatureSelect(feature._id)}
                    >
                      <div
                        className={`custom-cursor card mastery-card-web2 ${
                          selectedFeatures.includes(feature._id)
                            ? 'selected'
                            : ''
                        }`}
                      >
                        <div className="box-icon">
                          <AnimatedImageWithOpacity
                            src={feature.image}
                            width="28"
                            height="28"
                            alt={feature.name}
                            loading="lazy"
                          />
                        </div>
                        <p className="card-text">{feature.name}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
              <div
                className="text-center py-2"
                // style={{
                //   cursor: 'pointer',
                // }}
              >
                <span className="text-white custom-cursor fs-20 fw-bold"
                onClick={() => handleStepClick(4, selectedDevelopmentType)}
                >Move to last step</span>
              </div>
            </Col>
            <Col
              lg={9}
              className={`mx-auto slider-section ${
                activeStep === 4 ? 'active-slide' : 'inactive-slide'
              } ${direction === 'right' ? 'slide-in-right' : 'slide-in-left'}`}
            >
              <div className="hero-contain">
                <div className="text-with-pill dark shimmer mt-5">
                  Get your quote now! 💌
                </div>
                <div className="content">
                  <div className="fs-1 main-title text-offwhite">
                    Share your details so we can tailor a solution just for you!
                  </div>
                </div>
                <Row className="d-flex align-items-center justify-content-center budget-form">
                  <Col
                    lg={8}
                    className="mb-3 "
                  >
                    <input
                      type="text"
                      name="name"
                      className={`form-control p-4 ${
                        errors.name ? 'border-white' : ''
                      }`}
                      placeholder="Your name"
                      onChange={handleInputChange}
                      value={formData.name}
                    />
                  </Col>
                  <Col
                    lg={8}
                    className="mb-20"
                  >
                    <input
                      type="text"
                      name="email"
                      className={`form-control p-4 ${
                        errors.email ? 'border-white' : ''
                      }`}
                      placeholder="Email"
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </Col>
                  <Col
                    xs={12}
                    lg={8}
                  >
                    <button
                      type="button"
                      className="fs-18 fw-500 btn w-100 btn-light text-primary py-3 custom-cursor"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      Send quote on Email
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="mt-auto py-5 change-h">
          <svg
            className="fit-img"
            width="1366"
            height="129"
            viewBox="0 0 1366 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-256.5 89C-236.333 102.167 -116.284 149.046 1.49915 89C78 50 205.464 41 243.5 41C313 41 593 98.5 680.5 98.5C743.74 98.5 967.412 72.2115 1073 41C1152.5 17.5 1344.8 9.29992 1432 62.4999"
              stroke="url(#paint0_linear_6003_1613)"
              stroke-width="1.5"
            />
            <g
              onClick={() =>
                handleStepClick(activeStep, selectedDevelopmentType)
              }
              className='custom-cursor py-2'
              // style={{
              //   cursor: 'pointer',
              // }}
            >
              <rect
                x="651"
                y="64"
                width="64"
                height="64"
                rx="32"
                fill="#8787A3"
                stroke="#191A4E"
                stroke-width="1.5"
              />

              <text
                x="682"
                y="98"
                text-anchor="middle"
                alignment-baseline="middle"
                fontSize={24}
                fontWeight={500}
                fill="white"
              >
                {' '}
                0{activeStep}{' '}
              </text>
            </g>

            <g
              className={`custom-cursor py-2 ${activeStep === 4 ? 'd-none' : ''}`}
              onClick={() =>
                handleStepClick(activeStep + 1, selectedDevelopmentType)
              }
              // style={{
              //   cursor: 'pointer',
              // }}
            >
              {/* last */}
              <rect
                x="1242"
                y="1"
                width="44"
                height="44"
                rx="22"
                fill="#757694"
                stroke="#DBDBE3"
                stroke-width="1.5"
              />
              <text
                x="1264"
                y="24"
                text-anchor="middle"
                alignment-baseline="middle"
                fontSize={16}
                fontWeight={500}
                fill="#DBDBE3"
              >
                {' '}
                0{activeStep + 1}{' '}
              </text>
            </g>

            <g
              className={`custom-cursor py-2 ${activeStep === 1 ? 'd-none' : ''}`}
              onClick={() =>
                handleStepClick(activeStep - 1, selectedDevelopmentType)
              }
              // style={{
              //   cursor: 'pointer',
              // }}
            >
              {/* first */}
              <rect
                x="80"
                y="35"
                width="44"
                height="44"
                rx="22"
                fill="#757694"
                stroke="#DBDBE3"
                stroke-width="1.5"
              />
              <text
                x="102"
                y="59"
                text-anchor="middle"
                alignment-baseline="middle"
                fontSize={16}
                fontWeight={500}
                fill="#DBDBE3"
              >
                {' '}
                0{activeStep - 1}{' '}
              </text>
            </g>

            <defs>
              <linearGradient
                id="paint0_linear_6003_1613"
                x1="-256.5"
                y1="70.8141"
                x2="1432"
                y2="70.8141"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop
                  offset="0.559053"
                  stop-color="#191A4E"
                />
                <stop
                  offset="1"
                  stop-color="white"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default BudgetCalculatorHeroSection;
