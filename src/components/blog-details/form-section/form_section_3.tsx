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
const FormSection3 = () => {
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
          <Col lg={8}>
            <Image
              className='img-fluid mb-30 blog-details-full-img'
              src={IMAGES.blogDetails}
              width='737'
              height='429'
              alt='web-app'
            />
            <h4>How to Choose the Right Mobile App Development Company</h4>

            <p>
              Globally, there were 26.9 million software developers in 2021, and
              that number is likely to expand, with projections calling for 27.7
              million in 2023 and 28.7 million in 2024.
            </p>
            <p>
              This speaks volumes of the competition, making it a strenuous
              process even to filter some of the finest app development
              companies.
            </p>
            <p>
              With so many app development companies vying to grab a lead, you
              need to work in advance before choosing one. Because there are
              factors that need your consideration when selecting an app
              development company, and hiring the wrong one will push you to
              face severe issues right from the project initiation to the
              deployment stage.
            </p>
            <p>
              In such a case, a wise decision would be to form parameters that
              are based on your project expectation and business goals and then
              partner with a company that meets your requirements.
            </p>
            <p>
              Therefore, follow the process discussed in this blog when you are
              wondering how to choose a<b> mobile app development company.</b>
            </p>

            <h4>Research & Evaluate</h4>
            <p>
              Begin your hunt for an app developer company that involves
              researching and evaluating different mobile app development
              companies offering services in the field of your requirements. You
              should check their experience in developing apps, their
              technologies, and the reviews they have received from previous
              clients.
            </p>
            <p className='fw-bold'>
              This is a crucial phase as you collect information from multiple
              sources —
            </p>

            <ul>
              <li>
                <strong>Use Google:</strong>
                <p>
                  You can ask Google, ‘how can I find the best app development
                  company?’ and see the steps. Also, use different search
                  engines to get a list of companies that offer this service.
                  Take your time to check each company’s website and portfolio
                  to get an idea of their services and past projects.
                </p>
              </li>

              <li>
                <strong>Ask in your network:</strong>
                <p>
                  Another way involves asking for recommendations from friends,
                  family, colleagues, and your work network who have used mobile
                  app development services. They can provide valuable insight
                  into their vendor's quality of services.
                </p>
              </li>

              <li>
                <strong>Check Reviews:</strong>
                <p>
                  Access online reviews to get honest feedback from customers
                  who have previously worked with companies. This helps find
                  reliable and experienced developers who have delivered
                  successful projects.
                </p>
              </li>

              <li>
                <strong>Compare Prices:</strong>
                <p>
                  Once you have shortlisted a few app development companies,
                  compare their prices and services to determine which will
                  provide you with the best value for money.
                </p>
              </li>
              <li>
                <strong>Have a Conversation:</strong>
                <p>
                  When researching and finding any interesting prospect, drive a
                  conversation over an e-meeting. This helps you understand
                  their working style better and build an app, making an
                  informed decision about which to choose for your project.
                </p>
              </li>
            </ul>

            <h4>Match Requirements with Budget</h4>
            <p>
              Start with gauging your requirements before engaging with any
              mobile app development company. You can only address your precise
              needs by identifying costs and feature sets.
            </p>
            <p>
              Think about the functionalities you need for your app and the
              technology you may use. This helps you set a budget. Consider how
              much money you are willing to invest in the project-based
              requirement. This will help the vendor company to cater to your
              needs better and allocate resources to match your needs within the
              predefined budget.
            </p>

            <h4>Discuss Budget & Timeline</h4>
            <p>
              Ask your company how much to create an app UK. Discussing the
              budget and timeline with the mobile app development company to
              ensure that both parties are on the same page regarding
              expectations from each other. Also, check if any hidden costs may
              come up during the project.
            </p>
            <p>
              When discussing the budget and timeline for hiring a mobile app
              development company, have an honest and open conversation about
              your project’s scope, budget, and timeline. Moreover, even before
              dwelling on the details of the budget and timeline, you should
              discuss the scope of your project, necessary features, allocated
              resources, technologies, etc.
            </p>
            <p>
              Here, be specific about what you need to help them provide an
              accurate cost estimate and the expertise required. Also, remember
              that delays may occur due to unforeseen circumstances, so it is
              best to remain flexible in those aspects.
            </p>

            <h4>Test and Work on the Demo</h4>
            <p>
              It is wise to avail of product demos or codes before finalizing
              the app development company. For this, you can assign a specific
              task to your preferred (or chosen) app developer company and send
              you for evaluation within a specific time frame. This will help
              you know their capabilities, expertise, and experience in
              developing custom mobile apps.
            </p>
            <p>
              Once you receive the sample work, ask questions about their{" "}
              <b>development process</b>, technical approach, and the types of
              platforms they are comfortable working with.
            </p>
            <p>
              When assigning tasks to an app developer company, provide them
              with as much detail as possible about the project. Provide
              information like the purpose of your application, key features you
              plan to incorporate, target audience, budget, timeline, or any
              other relevant details. This helps the company understand the
              scope of your app development project.
            </p>
            <p>
              Finally, ensure communicating expectations for the demo to
              accurately assess how well the app will meet your needs.
            </p>

            <h4>Set Communication Method</h4>
            <p>
              Information sharing is vital to the success of any professional
              relationship. Therefore, when hiring an app development company,
              look for one with specialized skills and a
              <b> dedicated app development team</b> of business analysts,
              project managers, software developers, user interface designers,
              and quality assurance engineers.
            </p>
            <p>
              Choose your point of contact and get access to their messaging IDs
              for platforms like Skype, Slack, Zoom, etc. Ensure everyone you
              communicate with possesses impeccable communication skills since
              their soft skills become apparent when you first speak to your
              potential partner.
            </p>
            <p>
              Effective project management depends on communication tools, team
              members, and internal and external communications. Therefore,
              choose a company that works on the platform of your choice and
              communicate during your working hours.
            </p>
            <h4>Choosing the Partner</h4>
            <p>
              Finally, choose a mobile app development company that can provide
              the right combination of experience, expertise, and customer
              service. Go for a high-quality product that meets your specific
              needs and given budget.
            </p>
            <p>
              This is when you can get into the contract mentioning all the
              details. Ensure all the necessary documents are in place,
              including contracts, non-disclosure agreements, payment terms,
              etc.
            </p>

            <h4>Red Flags to Avoid When Hiring an App Development Company</h4>
            <p>
              As the app development industry continues to grow, it is
              increasingly important for business owners to understand the red
              flags to avoid when hiring an app development company.
            </p>
            <p>
              Working with the wrong app development company can result in an
              app that does not meet the desired specifications or deliver a
              user experience.
            </p>
            <p>
            When it comes to app development, communication and transparency are key. Therefore, before hiring an app development company, ensure they are available, can give you time, and are ready to work along as per your demands.
            </p>
            <p className='fw-bold fs-20'>Consider the following red flags when choosing an app development company—</p>
            <ul className='fs-20'>
              <li className='my-4'>
                <strong>Poor communication:</strong> Avoid companies that are
                not responsive to your inquiries or do not provide timely
                updates on the project's progress.
              </li>
              <li  className='my-4'>
                <strong>Lack of experience:</strong> Be sure to research a
                company’s portfolio and references before hiring them, as this
                will give you an idea of their expertise in app development.
              </li>
              <li  className='my-4'>
                <strong>Hidden costs:</strong> Ask for a detailed quote and
                contract that outlines all fees associated with the project so
                there are no surprises later on.
              </li>
              <li  className='my-4'>
                <strong>Unrealistic timelines:</strong> If a company promises
                unrealistic deadlines, it will likely be unable to deliver
                quality results within those parameters and within a
                predetermined budget.
              </li>
              <li  className='my-4'>
                <strong>Poor customer service:</strong> A good app development
                company should be willing to answer questions and address any
                issues quickly and efficiently throughout developing your app.
              </li>
              <li  className='my-4'>
                <strong>Failure to provide references:</strong> If a company is
                unwilling or unable to provide references from past or current
                clients, that's a big red flag.
              </li>
              <li  className='my-4'>
                <strong>Low rates:</strong> Companies offering suspiciously low
                rates may be cutting corners, which could lead to an inferior
                product.
              </li>
              <li  className='my-4'>
                <strong>Lack of portfolio:</strong> A company needs a portfolio
                of past projects to know what kind of work they can produce. If
                any business refuses to show its portfolio, consider it a red
                flag.
              </li>
            </ul>

            <p className='fw-bold fs-20'>
              Top Tips to Consider Before Hiring a Mobile App Development
              Company
            </p>

            <ul className='fs-20'>
              <li className='my-4'>
                <strong>Assess their expertise:</strong> Take the time to
                research a company’s track record, review its work, and speak to
                its staff. Grill them with tough questions to get the best idea
                of their knowledge.
              </li>
              <li className='my-4'>
                <strong>Availability in your time zone:</strong> It is important to know whether your preferred web development company has available staff to communicate.
              </li>
              <li className='my-4'>
                <strong>Understand the technology stack:</strong> Be sure to ask what technologies your prospective mobile application development partner uses when creating apps. This will indicate how effectively they deliver quality solutions within a given timeline and budget. 
              </li>
              <li className='my-4'>
                <strong>Ask for detailed quotes:</strong> Make sure that all quotes received from potential companies include a breakdown of costs associated with each stage of the project, including design, coding, testing, and deployment. This will help determine which companies can deliver value within your budget before signing up or paying anything upfront. 
              </li>
              <li className='my-4'>
                <strong>Request a timeline for completion:</strong> You should request the expected delivery timelines from prospective app development companies. This ensures that every team member understands expectations upfront to prevent delays. Such an approach negates the chances of miscommunications or lack thereof when tasks are interdependent.
              </li>
              <li className='my-4'>
                <strong>Discuss post-launch support plans:</strong> If needed, ask if an ongoing maintenance plan is available after launch so you can anticipate the support offered after launching an app. For instance, resources should be readily available if problems arise or your app needs an update.
              </li>
              <li className='my-4'>
                <strong>Know maintenance fees & best practices:</strong> When hiring, check for additional charges related to maintenance, such as bug fixes, security patching, etc., as well as best practices like testing cycles, etc. All such aspects can impact overall cost projections significantly depending on size,  usage patterns, complexity, and anticipated traffic.
              </li>
              <li className='my-4'>
                <strong>Evaluate third-party integrations & platforms:</strong>{" "}
                Inquire about any 3rd party integrations required for backend systems/data storage, analytics tools, cloud hosting environments, payment gateways, etc. Such things may incur extra costs depending on the provider chosen, but these can drastically improve user experience.
              </li>
              <li className='my-4'>
                <strong>Streamlined communication:</strong> Ensure a clear line of communication between your point of contact and the vendor’s staff. Ideally, it is best to set response times, and frequency of meetings and get into virtual scrums. Keep regular updates going both ways between developer & client throughout the duration of the job to keep everyone informed.
              </li>
            </ul>

            <h4>Conclusion</h4>
            <p>
            Investing in the services of a reputable mobile app development company is a substantial financial commitment; therefore, making the proper choice is crucial. Ideally, consider the above-mentioned factors when hiring a mobile app development company.
            </p>
            <p>
            Consider getting regular updates on the app development status. A reputable mobile app development company will encourage your participation throughout the process. They will seek input from your end and make reiterations based on your inputs and feedback. 
            </p>
            <p>
            You should leverage multiple project collaboration tools to get updates from developers, designers, and QA testers.
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

export default FormSection3;
