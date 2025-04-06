import {
  Col,
  Container,
  Row,
  Image,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import "./style.css";
import { useState } from "react";
import { IMAGES } from "../../../utils/staticJSON";
import APICallService from '../../../api/apiCallService';
import { APIS } from '../../../api/apiEndPoints';
import { ToastMessage } from '../../../utils/toast';
import { success, error } from '../../pages/toast';
import PhoneInput, {
  parsePhoneNumber,
  getCountryCallingCode,
} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const CareerDescriptionUiUx = () => {
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<any>({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    message: '',
    currentCTC: '',
    expectedCTC: '',
    totalExperience: '',
    resume: null,
    appliedJob: 'ui/ux',
    phoneCountry: "+91",
  });

  const [selectedCountry,setSelectedCountry] = useState<any>('IN')

  const [validation, setValidation] = useState<any>({
    name: false,
    email: false,
    phone: false,
    portfolio: false,
    message: false,
    currentCTC: false,
    expectedCTC: false,
    totalExperience: false,
    resume: false
  });

  const handleModalShow = () => setShowModal(true);

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      portfolio: '',
      message: '',
      currentCTC: '',
      expectedCTC: '',
      totalExperience: '',
      resume: null,
      appliedJob: 'ui/ux',
      phoneCountry: "+91",
    });
    setSelectedCountry('IN');
    setValidation({
      name: false,
      email: false,
      phone: false,
      portfolio: false,
      message: false,
      currentCTC: false,
      expectedCTC: false,
      totalExperience: false,
      resume: false
    });
  };

  const handleInputChange = (e: any) => {
    const { name, value, type, files } = e.target;
    let temp: any = { ...formData };
    let validationTemp: any = { ...validation };

    if (type === 'file') {
      temp[name] = files[0];
      validationTemp[name] = false;
    } else {
      // Handle different input validations
      switch (name) {
        case 'phone':
          // Allow only digits, max 10 characters
          const phoneValue = value.replace(/\D/g, '').slice(0, 10);
          temp[name] = phoneValue;
          validationTemp[name] = phoneValue.length !== 10;
          break;

        case 'currentCTC':
        case 'expectedCTC':
          // Allow only digits, max 7 characters
          const ctcValue = value.replace(/\D/g, '').slice(0, 7);
          temp[name] = ctcValue;
          validationTemp[name] = ctcValue.length < 1 || ctcValue.length > 7;
          break;

        case 'totalExperience':
          // Allow digits and one decimal point, max 4 characters
          const expValue = value.replace(/[^\d.]/g, '')
            .replace(/(\..*)\./g, '$1') // Allow only one decimal point
            .slice(0, 3);
          const numValue = parseFloat(expValue);
          temp[name] = expValue;
          validationTemp[name] = isNaN(numValue) || numValue < 0 || numValue > 99;
          break;

        case 'email':
          temp[name] = value.trimStart();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          validationTemp.email = !emailRegex.test(value);
          break;

        default:
          temp[name] = value.trimStart();
          validationTemp[name] = value.trimStart() === '';
      }
    }

    setFormData(temp);
    setValidation(validationTemp);
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
      let errorData2 = { ...validation };
    errorData2.phone = false;
    setValidation(errorData2)
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let validationTemp = { ...validation };
    let hasError = false;

    Object.keys(formData).forEach(key => {
      if (!formData[key] && key !== 'portfolio') {
        validationTemp[key] = true;
        hasError = true;
      }
    });

    if (hasError) {
      setValidation(validationTemp);
      return;
    }

    try {
      setLoading(true);
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      const apiService = new APICallService(
        APIS.JOBAPPLY,
        formDataToSend
      );
      const response = await apiService.callAPI();

      if (response) {
        handleModalClose();
        success(ToastMessage.JobApply);
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (err: any) {
      error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="section pb-4 if-white custom-blog-cursor">
        <Container>
          <div className="card careers-box-career-details">
            <div className="card-body">
              <Row className="align-items-center gy-3">
                <Col xs="auto">
                  <Image
                    className="img-fluid"
                    src={IMAGES.ui_ux}
                    width="100"
                    height="100"
                    alt="tech-logo"
                    loading="lazy"
                  />
                </Col>
                <Col>
                  <h3 className="title">UI/UX designer</h3>
                  <p className="sub-text">
                    <Image
                      className="img-fluid"
                      src={IMAGES.briefcase}
                      width="24"
                      height="24"
                      alt="briefcase"
                      loading="lazy"
                    />
                    Experience: 1 to 4 years
                  </p>
                </Col>
                <Col xs="auto">
                  <span
                    // href='#'
                    className="btn btn-primary d-flex align-items-center justify-content-center custom-cursor"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={handleModalShow}
                    style={{ height: '50px', width: '120px' }}
                  >
                    Apply Now
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="left-box-career-details custom-blog-cursor">
                <div className="careers-head">
                  <h3 className="main-title">Job Description</h3>
                  <p className="sub-title">
                    As a UI/UX Designer, you'll translate user needs and
                    business goals into intuitive and visually appealing
                    designs. You'll create wireframes, prototypes, and user
                    interfaces while ensuring a seamless user experience. You'll
                    collaborate with cross-functional teams, conduct user
                    research, and oversee the implementation of your designs,
                    maintaining consistency with brand guidelines. You'll also
                    refine designs based on user feedback and adhere to Agile
                    workflows to deliver impactful solutions.
                  </p>
                </div>
                <div className="careers-details">
                  <h3 className="main-title">Requirements :</h3>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Experience with designing mobile and web interfaces.
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Hands-on experience in - Adobe Photoshop, Adobe
                      Illustrator & Adobe XD.
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Ability to create designs with a strong first impression.
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      End user-focused. If the functionality can be achieved in
                      2 clicks, but your design requires 3 clicks, it’s a bad
                      user experience. "less is more.”
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Rapid prototyping. It’s vital to save your time for more
                      productive work rather than explaining the application's
                      flow.
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Delivering design assets quickly and accurately through
                      software like Zeplin & Figma.
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Strong communication skills as you will be coordinating
                      with the clients directly.
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Knowledge of HTML and CSS isn't required but good to have.
                    </p>
                  </div>
                </div>
                <div className="careers-details">
                  <h3 className="main-title">Skills and Responsibilities :</h3>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Understanding the concept and analyzing the requirements.
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Should have an eye for clean and artful design and possess
                      superior UI skills to translate high-level.
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Converting the requirements of the project into a
                      beautiful & functional user interface.
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Wire-framing the scope of work. This requires you to
                      convert the scope of work into the black & white sketch
                      version.
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Designing pixel-perfect UI for web & mobile apps.
                    </p>
                  </div>
                  <div className="list-item">
                    <Image
                      className="img-fluid"
                      src={IMAGES.greenIcon}
                      width="20"
                      height="20"
                      alt="check-green-icon"
                    />
                    <p className="text">
                      Ensuring that your designs are self-explanatory. If it
                      does need an explanation, it may be considered a bad
                      design.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={8}
            >
              <div className="box-career-details-right">
                <h3 className="title">About this Role</h3>
                <div className="progress-bar-box">
                  <p className="text">
                    5 Vacant /
                    <span className="disabled-text">10 Vacancies</span>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '25%' }}
                      aria-label="progress"
                      // aria-valuenow="25"
                      // aria-valuemin="0"
                      // aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="mb-4 mb-md-60">
                  <div className="info-box">
                    <p className="info-text">Apply Before</p>
                    <p className="info-date">March 30, 2025</p>
                  </div>
                  <div className="info-box">
                    <p className="info-text">Job Posted on</p>
                    <p className="info-date">January 1, 2025</p>
                  </div>
                  <div className="info-box">
                    <p className="info-text">Job type</p>
                    <p className="info-date">Full-time</p>
                  </div>
                </div>

                <div className="mb-4 mb-md-60">
                  <h3 className="title">Categories</h3>
                  <div className="">
                    <span className="badge">Design</span>
                    <span className="badge">User Experience</span>
                    <span className="badge">User Interface</span>
                    <span className="badge">Prototyping</span>
                  </div>
                </div>
                <div>
                  <h3 className="title">Required Skills</h3>
                  <div className="">
                    <span className="badge">Wireframing</span>
                    <span className="badge">Prototyping</span>
                    <span className="badge">User Research</span>
                    <span className="badge">Figma</span>
                    <span className="badge">Adobe XD</span>
                    <span className="badge">Sketch</span>
                    <span className="badge">Responsive Design</span>
                    <span className="badge">Interaction Design</span>
                    <span className="badge">User Testing</span>
                    <span className="badge">HTML & CSS</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        show={showModal}
        onHide={handleModalClose}
        className="job-form"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        backdrop="static"
        keyboard={false}
        style={{ zIndex: 9999 }}
      >
        <Modal.Header
          closeButton
          className="border-bottom-0 mt-2 pb-0"
        >
          <Modal.Title className="pb-0">Interested in this job?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
            <Row className="gy-2">
              <Col xs={12}>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-4"
                />
                {validation.name && (
                  <small className="text-danger">Name is required</small>
                )}
              </Col>
              <Col xs={12}>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-4"
                />
                {validation.email && (
                  <small className="text-danger">Valid email is required</small>
                )}
              </Col>
              <Col xs={12}>
                {/* <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  minLength={10}
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="p-4"
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
                {validation.phone && (
                  <small className="text-danger">
                    Valid phone number is required
                  </small>
                )}
              </Col>
              <Col xs={12}>
                <Form.Control
                  type="text"
                  name="portfolio"
                  placeholder="Portfolio / Stack overflow / Git link"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="p-4"
                />
              </Col>
              <Col xs={12}>
                <Form.Control
                  type="text"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="p-4"
                />
                {validation.message && (
                  <small className="text-danger">Message is required</small>
                )}
              </Col>
              <Col xs={12}>
                <Form.Control
                  type="text"
                  name="currentCTC"
                  placeholder="Current CTC"
                  value={formData.currentCTC}
                  onChange={handleInputChange}
                  className="p-4"
                />
                {validation.currentCTC && (
                  <small className="text-danger">Current CTC is required</small>
                )}
              </Col>
              <Col xs={12}>
                <Form.Control
                  type="text"
                  name="expectedCTC"
                  placeholder="Expected CTC"
                  value={formData.expectedCTC}
                  onChange={handleInputChange}
                  className="p-4"
                />
                {validation.expectedCTC && (
                  <small className="text-danger">
                    Expected CTC is required
                  </small>
                )}
              </Col>
              <Col xs={12}>
                <Form.Control
                  type="text"
                  name="totalExperience"
                  placeholder="Total Experience"
                  value={formData.totalExperience}
                  onChange={handleInputChange}
                  className="p-4"
                />
                {validation.totalExperience && (
                  <small className="text-danger">
                    Total experience is required
                  </small>
                )}
              </Col>
              <Col xs={12}>
                <Form.Label
                  htmlFor="Upload-doc"
                  className="labe-text"
                >
                  Upload Resume: pdf, doc, docx
                </Form.Label>
              </Col>
              <Col xs={12}>
                <Form.Control
                  type="file"
                  id="Upload-doc"
                  name="resume"
                  className="d-none"
                  accept=".pdf,.doc,.docx"
                  onChange={handleInputChange}
                />
                {formData.resume && (
                  <div className="selected-file mb-2">
                    <span className="file-name">
                      Selected file: {formData.resume.name}
                    </span>
                  </div>
                )}
                <Button
                  variant="secondary"
                  as="label"
                  htmlFor="Upload-doc"
                  className="btn upload-btn"
                >
                  <img
                    className="img-fluid"
                    src={IMAGES.fileUpload}
                    width="24"
                    height="24"
                    alt="cloud-upload"
                    loading="lazy"
                  />
                  Choose File
                </Button>
                {validation.resume && (
                  <small className="text-danger d-block">
                    Resume is required
                  </small>
                )}
              </Col>
              <Col
                xs={12}
                className="mt-4"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="fs-16 w-100"
                  type="submit"
                  disabled={loading}
                >
                  Submit Details
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CareerDescriptionUiUx;
