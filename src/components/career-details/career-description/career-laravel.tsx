import {
    Col,
    Container,
    Row,
    Image,
    Modal,
    Button,
    Form,
} from 'react-bootstrap';
import './style.css';
import { useState } from 'react';
import { IMAGES } from '../../../utils/staticJSON';
import { ToastMessage } from '../../../utils/toast';
import { error, success } from '../../pages/toast';
import APICallService from '../../../api/apiCallService';
import { APIS } from '../../../api/apiEndPoints';
import PhoneInput, {
  parsePhoneNumber,
  getCountryCallingCode,
} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const CareerDescriptionLaravel = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading,setLoading] = useState(false);

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
      appliedJob: 'laravel',
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
        appliedJob: 'laravel',
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
      }  finally {
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
                      src={IMAGES.laravel}
                      width="100"
                      height="100"
                      alt="tech-logo"
                      loading="lazy"
                    />
                  </Col>
                  <Col>
                    <h3 className="title">Laravel Developer</h3>
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
                      // href="#"
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
                <div className="left-box-career-details">
                  <div className="careers-head">
                    <h3 className="main-title">Job Description</h3>
                    <p className="sub-title">
                      As a Laravel Developer, you'll translate business
                      requirements into efficient and scalable web applications
                      using Laravel and PHP. You'll design and implement
                      database structures, build RESTful APIs, and ensure
                      seamless integration with front-end components. You'll
                      also oversee application performance, troubleshoot issues,
                      and maintain code quality while adhering to Agile
                      development methodologies.
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
                        Previous working experience as a PHP/Laravel developer
                        for a minimum of 1 year required.
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
                        BS/MS degree in Computer Science, Engineering, or a
                        similar relevant field.
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
                        In-depth knowledge of object-oriented PHP and Laravel 5
                        PHP Framework.
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
                        Hands-on experience with SQL schema design, SOLID
                        principles, REST API design.
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
                        Software testing (PHPUnit, PHPSpec, Behat).
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
                        MySQL profiling and query optimization.
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
                        Creative and efficient problem solver.
                      </p>
                    </div>
                  </div>
                  <div className="careers-details">
                    <h3 className="main-title">
                      Skills and Responsibilities :
                    </h3>
                    <div className="list-item">
                      <Image
                        className="img-fluid"
                        src={IMAGES.greenIcon}
                        width="20"
                        height="20"
                        alt="check-green-icon"
                      />
                      <p className="text">
                        Develop, record, and maintain cutting edge web-based PHP
                        applications on portal & premium service platforms.
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
                        Design, build and maintain efficient, reusable, and
                        reliable code.
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
                      <p className="text">Experience in Laravel is a must.</p>
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
                        Translate application storyboards and use cases into
                        functional applications
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
                        Hands-on practice of good database design, query
                        optimization
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
                        Integrate data storage solutions (MSSQL, MYSQL, MongoDB,
                        etc.)
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
                        Ensure the best possible performance, quality, and
                        responsiveness of applications.
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
                        Identify bottlenecks and bugs, and devise solutions to
                        mitigate the issues.
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
                        Help maintain code quality, organization, and
                        automation.
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
                        Coordinate the workflow between the Team.
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
                        Help maintain code quality in an organization using
                        automation testing.
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
                      <span className="badge">Web Development</span>
                      <span className="badge">Backend</span>
                      <span className="badge">Laravel</span>
                      <span className="badge">PHP</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="title">Required Skills</h3>
                    <div className="">
                      <span className="badge">Laravel</span>
                      <span className="badge">PHP</span>
                      <span className="badge">MySQL</span>
                      <span className="badge">REST APIs</span>
                      <span className="badge">Git</span>
                      <span className="badge">JavaScript</span>
                      <span className="badge">CSS</span>
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
                    <small className="text-danger">
                      Valid email is required
                    </small>
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
                    <small className="text-danger">
                      Current CTC is required
                    </small>
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

export default CareerDescriptionLaravel;
