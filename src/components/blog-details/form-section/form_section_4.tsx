import { Col, Container, Row, Image, Card } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { useEffect, useState } from "react";
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
import APICallService from "../../../api/apiCallService";

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
const FormSection4 = () => {
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
  const [formData, setFormData] = useState<FormData | any>(initialState);
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
  useEffect(() => {
    let history = getPathHistory();
    setFormData((prevData: any) => ({
      ...prevData,
      visitedPages: history,
    }));
  }, []);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedFormData = { ...formData };
    if (!formData.budget || formData.budget === "0") {
      delete sanitizedFormData.budget;
    }
    let newErrors: { [key: string]: boolean } = {};
    let isValid = true;
    const fieldsToValidate = ["name", "email", "phone", "message"];

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
        const apiService = new APICallService(
          APIS.CONTACTUS,
          sanitizedFormData
        );
        const response = await apiService.callAPI();
        if (response) {
          success(ToastMessage.ContactUsAdd);
          setFormData(initialState);

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

  return (
    <div className='section custom-blog-cursor'>
      <Container>
        <Row>
          <Col lg={8} className=''>
            <Image
              className='img-fluid mb-30 blog-details-full-img'
              src={IMAGES.blogImage1}
              width='737'
              height='429'
              alt='web-app'
            />
            <p className='fs-20 mb-6'>
              User Interface (UI) and User Experience (UX) are two terminologies
              often used interchangeably, referring to the ultimate aspect of
              any digital product - user-centric design. A modern design tends
              to be highly user-centric, which is probably why there is so much
              emphasis on web and mobile apps' UI/UX design. But for a reputed
              <b> UI/UX design agency</b>, both UI/UX design plays the most crucial role
              in shaping the success of a digital product.
            </p>
            <p className='fs-20 mb-6'>
              But to achieve perfection with UI and UX design, a UI UX design
              agency needs to understand the differences between these aspects
              of user-centric design and their respective scopes. Throughout
              this post, we will explain the differences between UI and UX
              design and the key steps and principles leading to successful
              UI/UX design.
            </p>

            <h3 className='fw-bold'>
              What is user experience (UX) design?
            </h3>

            <p className='fs-20'>
              User experience (UX) design is a comprehensive approach centered
              around natural human inclinations, interactions, and behavioral
              patterns. The popular term first coined by the cognitive scientist
              Norman Nielsen Norman in 1990 has become almost the watchdog
              design principle for product design across all niches and
              platforms. According to Nielsen, all users' interactions with the
              product, the business brand, and its services and footprints are
              part of the user experience.
            </p>

            <p className='fs-20'>
              So, perfecting user experience is not just about the look and feel
              of the product; it is also how your brand, through multiple
              channels and platforms, impress users, how it allows user
              interactions and makes an impact on the user perception of the
              product, services, and the business brand.
            </p>
            <p className='fs-20'>
              In the context of digital products such as software, web, and
              mobile applications, the User Experience (UX) similarly refers to
              a broader field involving all ways of user interaction, look and
              feel of the products, ease of use, purpose, relevance, and impact
              of the digital products and services. Since digital products such
              as software, web, and mobile apps virtually come into contact with
              people, the user experience (UX) attributes play a bigger role in
              impressing the users here.
            </p>
            <p className='fs-20'>
              No wonder, despite being a scientific concept referring
              human-centric principle of design for practically any product,
              service, and business brand, UX is most commonly and widely used
              mainly to refer to the satisfaction level of the users of digital
              products and app solutions. This is why you can easily find
              hundreds of expert-written or expert-created content on the UX of
              digital products.
            </p>

            <h3 className='fw-bold'>
              The critical attributes of UX design
            </h3>

            <p className='fs-20'>
              The UX designer considers a product's aesthetic look and feels and
              the ease of use, interaction, and effortless ways of getting
              things done through a digital product. What users feel and how
              easily users complete any task while using a digital product
              remain the central focus areas for UX designers.
            </p>

            <p className='fs-20'>
              Any UX designer's key focus is ease of use and smooth user
              experience. For example, when buying a knife, do you consider how
              ergonomic the design of the handle is and how easily it can be
              used? Similarly, how effortlessly shoppers can checkout is a key
              UX consideration when shopping in an online store.
            </p>
            <p className='fs-20'>
              So the job of the UX designer is to design a product to ensure
              optimum ease of use, relevance to the purpose, effortless
              interactions, and a seamless process to start and finish using a
              product. All significant differences between UI and UX design
              resemble appearance, on the one hand, usability, and ease of use
              on the other. Here are some aspects that describe the core
              attributes of UX design.
            </p>
            {/* <p className='fs-20'>
              No wonder, despite being a scientific concept referring
              human-centric principle of design for practically any product,
              service, and business brand, UX is most commonly and widely used
              mainly to refer to the satisfaction level of the users of digital
              products and app solutions. This is why you can easily find
              hundreds of expert-written or expert-created content on the UX of
              digital products.
            </p> */}
            <ul className='fs-20'>
              <li>
                User Experience (UX) design focuses on
                enhancing the quality of user interaction with a product,
                service, or business brand.
              </li>
              <li>
              User experience design as a principle can be applied to both digital and non-digital products and services. Still, the concept of UX design is most familiar in the context of digital products, especially the web and mobile apps. 
              </li>
              <li>
                UX design is far from only aesthetics and visual design. Apart
                from taking into account the visual feel of the invention, it
                deals with the overall impact and impression a product or
                business creates on the end users.
              </li>
            </ul>
            <h3>What is User Interface (UI) Design?</h3>
            <p className='fs-20'>
              As we have already said, User Interface (UI) and User Experience
              (UX) design are often misconceptualized to be the same. But they
              differ in many ways despite having a mutually shared connection.
            </p>
            <p className='fs-20'>
              While user experience (UX) focuses on the broader context of user
              interactions, ease of use, and design impact on the user behavior,
              <strong>User Interface (UI) design</strong> is about the look and
              feel or, more precisely, the product's appearance. This appearance
              is just a small part of user experience design attributes.
            </p>
            <p className='fs-20'>
              So, UX is the more extensive umbrella term for all user
              interactions, use cases, design elements, and design impact. On
              the other hand, UI design just deals with the visual look and feel
              of a digital product. UI designers mainly deal with graphic and
              animation elements, while UX designers focus on user flow,
              interactive features, user engagement, and the product's overall
              impact on users.
            </p>
            <p className='fs-20'>
              Another significant difference between UI and UX design is that,
              unlike the latter, the former is not a broader term referring to
              real-world and virtual digital aspects. UI design deals strictly
              with the user interfaces of web and mobile apps. The user
              interface is the interaction point between the user and a digital
              app or device. This interaction point can be just the touchscreen
              of a smartphone, the touchpad of a remote monitor, or the
              interactive screen of a software application.
            </p>
            <p className='fs-20'>
              The UI design focuses on the product's visual appearance and
              interactive elements regarding web and mobile apps. A UI/UX app
              development agency with quality UI design can contribute heavily
              to better UX design, but it is not the only corresponding factor
              to impact the UX design.
            </p>
            <h3>The Key Aspects UI Designers Deal With</h3>
            <p className='fs-20'>
              Though user interface (UI) design comparatively has a smaller
              purview of scope, good UI design through appropriate visual design
              elements and interactive attributes significantly impacts the
              acceptance and appreciation of any digital product. UI design is
              equally a challenging role with several aspects to deal with.
            </p>
            <p className='fs-20 fw-bold'>
              Let’s now have a quick overview of what is involved in User
              Interface (UI) design:
            </p>
            <ul className='fs-20'>
              <li>
                User interface (UI) design entirely focuses on shaping digital
                interfaces, and it does not apply to the design of real-world
                products, services, and interactive elements.
              </li>
              <li>
                UI design is all about perfecting the visual interfaces of
                digital products and services through appropriate design of
                fonts and typefaces, buttons, icons, and use of space, color,
                and layout.
              </li>
              <li>
                The main objective of UI design is to provide visual guidance or
                clues to help users interact with an interface and get the
                intended things done. In this respect, UI design is vital to
                every digital product's great intuitive user experience (UX).
              </li>
              <li>
                UI design through various visual design attributes helps
                transfer the brand-specific design attributes and visual
                messages to the interface of digital products and ensures a
                consistent and aesthetically appealing look and feel.
              </li>
            </ul>
            <h3>How Can You Ensure UI and UX Design Stand Out?</h3>
            <p className='fs-20'>
              Now that you comprehensively understand the differences Between UX
              and UI Design and the mutual role of UI/UX design in software,
              web, and mobile apps, it is essential to understand how UI/UX
              design helps brands stand out from the competition. Well, based
              upon the UI/UX design success of leading app solutions, here we
              provide some key points of consideration.
            </p>
            <ul className='fs-20'>
              <li>
                Instead of reinventing the wheel for interactive elements, stick
                to the convention so that users can quickly identify the
                familiar ones and make faster interactions.
              </li>
              <li>
                Does the design provide users enough freedom of choice and
                control to achieve their goals? This is a key thing to consider.
              </li>
              <li>
                Is the UI/UX design self-explanatory enough to engage users
                without leaving any room for confusion?
              </li>
              <li>
                Does the UI/UX design ensure easy interactions leading to
                enhanced business conversion?
              </li>
              <li>
                Does the design, in most cases, leave a pleasant impression on
                users and make them return to the app frequently?
              </li>
            </ul>

            <h3>Summing It Up</h3>
            <p className='fs-20'>
              Let us be very clear on one point. Most apps do not know whether
              they stand out from the UI/UX design competition. This happens
              because when every app adheres to the advanced design principles
              for its products, there is hardly any recognizable difference in
              taking a call on design excellence. Almost every app does the job
              perfectly in terms of color scheme, layout, and distribution of
              negative space.
            </p>
            <p className='fs-20'>
              But even in such a competitive era where UI/UX design excellence
              is rampant, Uber, Airbnb, and a handful of others stand out in
              terms of ease of use, visual appeal, and usability. These apps
              show how creative design excellence can take your UI/UX design
              beyond the average level.
            </p>
          </Col>
          <Col lg={4}>
            <Card className='rounded-3 sticky-lg-top top-5 '>
              <Card.Body className='p-lg-4'>
                <h4 className='fs-20 fw-500 mb-20'>
                  Got a Question? Drop it here!
                </h4>
                <form>
                  <Row className='gy-4 gx-20'>
                    <Col lg={12}>
                      <input
                        type='text'
                        name='name'
                        className='form-control'
                        placeholder='Full name'
                        onChange={handleInputChange}
                        value={formData.name}
                      />
                      {errors.name && (
                        <p className='text-danger fs-6'>{errorMessages.name}</p>
                      )}
                      {validationErrors.name && (
                        <p className='text-danger fs-6'>
                          {validationMessages.name}
                        </p>
                      )}
                    </Col>
                    <Col lg={12}>
                      <input
                        type='text'
                        name='email'
                        className='form-control'
                        placeholder='Email Address'
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                      {errors.email && (
                        <p className='text-danger fs-6'>
                          {errorMessages.email}
                        </p>
                      )}
                      {validationErrors.email && (
                        <p className='text-danger fs-6'>
                          {validationMessages.email}
                        </p>
                      )}
                    </Col>
                    <Col lg={12}>
                      <input
                        type='text'
                        name='phone'
                        className='form-control'
                        placeholder='Phone number'
                        onChange={handleInputChange}
                        value={formData.phone}
                      />
                      {errors.phone && (
                        <p className='text-danger fs-6'>
                          {errorMessages.phone}
                        </p>
                      )}
                      {validationErrors.phone && (
                        <p className='text-danger fs-6'>
                          {validationMessages.phone}
                        </p>
                      )}
                    </Col>
                    <Col xs={12}>
                      <textarea
                        name='message'
                        className='form-control'
                        cols={3}
                        rows={4}
                        placeholder='Your Message Here!'
                        onChange={handleInputChange}
                        value={formData.message}
                      ></textarea>
                      {errors.message && (
                        <p className='text-danger fs-6'>
                          {errorMessages.message}
                        </p>
                      )}
                    </Col>
                    <Col xs={12}>
                      <button
                        type='button'
                        className='fs-16 fw-500 btn btn-primary text-white'
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
  );
};

export default FormSection4;
