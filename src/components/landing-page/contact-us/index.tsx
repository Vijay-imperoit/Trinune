import { Col, Container, Form, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { success, error } from "../../pages/toast";
import {
  errorMessages,
  validationMessages,
} from "../../../utils/validationMessages";
import { APIS } from "../../../api/apiEndPoints";
import { trimInput, validateField } from "../../../utils/validations";
import { getPathHistory, removePathHistory } from "../../../utils/localStorage";
import { ToastMessage } from "../../../utils/toast";
// import { InlineWidget } from "react-calendly";
import APICallService from "../../../api/apiCallService";
// import { gsap } from "gsap";
import {
  parsePhoneNumber,
  getCountryCallingCode,
} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
const PhoneInput = React.lazy(() => import('react-phone-number-input'));
const InlineWidget = React.lazy(() => import('react-calendly').then(module => ({ default: module.InlineWidget })));
const confetti = React.lazy(() => import('canvas-confetti'));
// import confetti from "canvas-confetti";

interface ContactUsProps {
  isHome?: boolean;
}
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
interface validationErrors {
  name: boolean;
  email: boolean;
  phone: boolean;
}

const ContactUs: React.FC<ContactUsProps> = ({ isHome }) => {
  const location = useLocation();
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

  const [activeTab, setActiveTab] = useState<Number>(1);
  const [formData, setFormData] = useState<FormData | any>(initialState);
  const [selectedCountry,setSelectedCountry] = useState<any>('IN');
  const [errors, setErrors] = useState<Errors | any>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  const [validationErrors, setValidationErrors] = useState<
    validationErrors | any
  >({
    name: false,
    email: false,
    phone: false,
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let history = getPathHistory();
    setFormData((prevData: any) => ({
      ...prevData,
      visitedPages: history,
    }));
  }, []);

  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
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
      const nationalNumber = phoneNumber ? phoneNumber.nationalNumber : '';
      console.log(nationalNumber,nationalNumber.length);
      if (nationalNumber.length > 12) {
        return;
      }
      setFormData((prevData: any) => ({
        ...prevData,
        phoneCountry: phoneNumber
          ? `+${phoneNumber.countryCallingCode}`
          : prevData.phoneCountry,
        phone: nationalNumber,
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
    setLoading(true);
      try {
        const apiService = new APICallService(
          APIS.CONTACTUS,
          sanitizedFormData
        );
        const response = await apiService.callAPI();
        if (response) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: {
              x: (rect.left + rect.width / 2) / window.innerWidth,
              y: (rect.top + rect.height / 2) / window.innerHeight,
            },
          });
          success(ToastMessage.ContactUsAdd);
          setFormData(initialState);
          setSelectedCountry("IN")
          setActiveTab(1);
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
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="section form-get-section custom-blog-cursor">
      <Container>
        <Row className="gy-4">
          <Col
            lg={5}
            xl={4}
          >
            <p className="fs-20 fw-500">Get In Touch 👋</p>
            <h2 className="title-2 mb-3">
              {isHome ? (
                <>Let’s Innovate and Drive Impact Together</>
              ) : (
                <>Discuss your software vision with industry experts</>
              )}
            </h2>
            <p>
              We know, you have an excellent idea. Let's have an awesome
              conversation & get your idea live sooner!
            </p>
            <div className="d-flex align-items-center mb-2 gap-3">
              <img
                className="img-fluid"
                src={IMAGES.emailIcon}
                width="20"
                height="20"
                alt="email-icon"
                loading="lazy"
              />
              <a
                href="mailto:info@imperoit.com"
                className="fs-16 fw-bold text-gray custom-cursor"
              >
                info@imperoit.com
              </a>
            </div>
            <div className="d-flex align-items-baseline gap-3">
              <div className="mt-2">
                <img
                  className="img-fluid"
                  src={IMAGES.indiaFlag}
                  width="50"
                  height="50"
                  alt="india-flag"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="fs-16 fw-bold text-gray mb-2">
                  Solitaire Connect, 1301-1315, Sarkhej - Gandhinagar Hwy, near
                  Gallops Motors, Makarba, Ahmedabad, Gujarat 380051
                </p>
                <a
                  href="tel:+91 982 510 8987"
                  className="fs-16 fw-bold text-gray custom-cursor"
                >
                  098251 08987
                </a>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            className="offset-lg-1 offset-xl-2"
          >
            <div className="card br-12px">
              <div className="card-header">
                <ul
                  className="nav nav-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li
                    className="nav-item"
                    role="presentation"
                  >
                    <button
                      className={`nav-link custom-cursor ${
                        activeTab == 1 ? 'active' : ''
                      }`}
                      id="form-budget-tab"
                      type="button"
                      role="tab"
                      aria-controls="form-budget"
                      aria-selected={activeTab === 1}
                      onClick={() => handleTabChange(1)}
                    >
                      Fill a Form
                    </button>
                  </li>
                  <li
                    className="nav-item"
                    role="presentation"
                  >
                    <button
                      className={`nav-link custom-cursor ${
                        activeTab == 2 ? 'active' : ''
                      }`}
                      id="calendar-tab"
                      type="button"
                      role="tab"
                      aria-controls="calendar"
                      aria-selected={activeTab === 2}
                      onClick={() => handleTabChange(2)}
                    >
                      Schedule Meeting
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div
                  className="tab-content"
                  id="myTabContent"
                >
                  <div
                    className={`tab-pane fade ${
                      activeTab == 1 ? 'show active' : ''
                    }`}
                    id="form-budget"
                    role="tabpanel"
                    aria-labelledby="form-budget-tab"
                  >
                    <form>
                      <Row className="gy-4 gx-20">
                        <Col lg={6}>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Full name"
                            onChange={handleInputChange}
                            value={formData.name}
                          />
                          {errors.name && (
                            <p className="text-danger fs-6">
                              {errorMessages.name}
                            </p>
                          )}
                          {validationErrors.name && (
                            <p className="text-danger fs-6">
                              {validationMessages.name}
                            </p>
                          )}
                        </Col>
                        <Col lg={6}>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email Address"
                            onChange={handleInputChange}
                            value={formData.email}
                          />
                          {errors.email && (
                            <p className="text-danger fs-6">
                              {errorMessages.email}
                            </p>
                          )}
                          {validationErrors.email && (
                            <p className="text-danger fs-6">
                              {validationMessages.email}
                            </p>
                          )}
                        </Col>
                        <Col lg={6} className=''>
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
                          {errors.phone && (
                            <p className="text-danger fs-6">
                              {errorMessages.phone}
                            </p>
                          )}
                          </Col>
                        <Col lg={6}>
                          <select
                            name="budget"
                            className="form-select"
                            value={formData.budget}
                            onChange={handleInputChange}
                          >
                            <option value="0">Budget</option>
                            <option value="Less than $10,000">
                              Less than $10,000
                            </option>
                            <option value="$10,000 to $20,000">
                              $10,000 to $20,000
                            </option>
                            <option value="$20,000 to $50,000">
                              $20,000 to $50,000
                            </option>
                            <option value="$50,000 and above">
                              $50,000 and above
                            </option>
                          </select>
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
                            <p className="text-danger fs-6">
                              {errorMessages.message}
                            </p>
                          )}
                        </Col>
                        <Col xs={12}>
                          <button
                            type="button"
                            className="fs-16 fw-500 btn btn-primary text-white custom-cursor"
                            onClick={handleSubmit}
                            disabled={loading}
                          >
                            Submit
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab == 2 ? 'show active' : ''
                    }`}
                    id="calendar"
                    role="tabpanel"
                    aria-labelledby="calendar-tab"
                  >
                    {/* <label className="mb-3">Schedule Meeting:</label> */}
                       {activeTab === 2 && (
                      <React.Suspense fallback={""}>
                        <InlineWidget url="https://calendly.com/ayushdave-impero/30min" />
                      </React.Suspense>
                    )}
 
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
