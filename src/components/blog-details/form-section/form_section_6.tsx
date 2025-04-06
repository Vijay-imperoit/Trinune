import { Col, Container, Row, Image, Card } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { success, error } from "../../pages/toast";
import { errorMessages, validationMessages } from "../../../utils/validationMessages";
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
const FormSection6 = () => {
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
    const [validationErrors, setValidationErrors] = useState<validationErrors | any>({
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
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
                const apiService = new APICallService(APIS.CONTACTUS, sanitizedFormData);
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
                            src={IMAGES.blogImage3}
                            width='737'
                            height='429'
                            alt='web-app'
                        />
                        <p>
                            Mobile apps have already penetrated every walks of our lives and across all businesses,
                            irrespective of the categories and niches. Apps have emerged as the most effective tools for
                            lead generation, business conversion, branding, customer support, and business process
                            automation.
                        </p>

                        <p>
                            Like every part of the world, small businesses and startups are increasingly opting for
                            mobile app-based business operations. But building an app involves a considerable cost and
                            resources. As a business, if you want to have a clear idea about the app development cost
                            UK, it is essential to consider various vital factors responsible for it.
                        </p>

                        <p>
                            As a UK-based business, if you want to know how much it costs to make an app, consider the
                            following cost components and factors for any app project.
                        </p>

                        <h4>Choice of platforms & tech stack</h4>
                        <p>
                            At first, you need to decide between building hybrid or cross-platform, or native app
                            development. Do you want to make the app separately for iOS and Android, or do you want to
                            build one app that can run on all platforms, as the final option, do you want to reuse the
                            core codebase across platforms while not losing the advantages of native development? These
                            three approaches are distinct and are represented as native, hybrid, and cross-platform
                            development. Let’s explain the cost factors for each of them and the other pros and cons.
                        </p>

                        <ul>
                            <li>
                                <h5>Native development:</h5>
                                <p>
                                    Native apps using platform-specific technologies offer better user experience and
                                    performance. But since, with this approach, you need to build two separate apps by
                                    using Swift language for iOS and Java language for Android, it involves a higher
                                    cost.
                                </p>
                            </li>
                            <li>
                                <h5>Hybrid development:</h5>
                                <p>
                                    In complete contrast to the native development approach, the hybrid approach allows
                                    you to build one app that runs on multiple platforms. It is highly cost-effective
                                    because by using jQuery or Ionic, or other hybrid frameworks, you can build a single
                                    app for all platforms. But hybrid apps lack platform-specific user experience and
                                    app performance.
                                </p>
                            </li>
                            <li>
                                <h5>Cross-platform development:</h5>
                                <p>
                                    Cross-platform development approach, on the other hand, finds a middle path between
                                    the above two approaches. While the core codebase is reused across both iOS and
                                    Android, a certain amount of native code for each platform is used to shape the
                                    platform-specific user experience. You can hire Flutter developer or React Native
                                    developers for maximum code reusability and deliver a native user experience. This
                                    is a cost-efficient development approach without making you compromise on quality.
                                </p>
                            </li>
                        </ul>

                        <p>
                            If you ask how much it costs to have an app made for both iOS and Android, we can only take
                            cross-platform development stacks into consideration and refer to the cost accordingly. But
                            for native development, the tech stacks and their corresponding cost impacts will be
                            different.
                        </p>

                        <p>
                            Among cross-platform frameworks, Flutter, because of its modular architecture, offers a cost
                            advantage over React Native and Xamarin. Though, here the cost differences between these
                            technologies are very negligible.
                        </p>

                        <p>
                            As for iOS development, both Swift for iOS app projects involves a little less development
                            time than Java for Android apps. But now, Kotlin, by reducing the complexities and coding
                            efforts, helps reduce the programming effort to a great extent for Android developers.
                        </p>

                        <ul>
                            <li>
                                <h5>The choice of app features:</h5>
                                <p>
                                    When you are considering how much it costs to develop an app, the choice of app
                                    features for the project plays an important role. Based on the complexity and
                                    feature set, apps can be segregated into three categories, and each of them involves
                                    different cost factors.
                                </p>
                            </li>
                            <li>
                                <h5>Simple or basic app:</h5>
                                <p>
                                    A simple app that requires basic features naturally involves lesser cost. Many
                                    ambitious app projects initially keep the number of features limited and only use
                                    the most elementary feature that explains the core value proposition of the app.
                                </p>
                            </li>
                            <li>
                                <h5>Moderately featured app:</h5>
                                <p>
                                    App projects with moderate complexity and feature set are the most common across
                                    niches, and the development cost for these apps largely vary.
                                </p>
                            </li>
                            <li>
                                <h5>Complex and multilayered app:</h5>
                                <p>
                                    Complex and multilayered large app projects that involve several advanced features
                                    are the most expensive ones as far as the development budget is concerned.
                                </p>
                            </li>
                        </ul>

                        <p>
                            Since your app idea needs to be justified with proper execution without compromising on the
                            feature set just for the sake of reducing cost, you can also opt for incremental
                            development. The Minimum Viable Product (MVP) approach of development has become popular
                            these days because of the flexibility to start small and gradually add other features over
                            time to deliver a comprehensive and robust user experience.
                        </p>

                        <p>
                            As a new company or startup from the UK, you should always find this MVP approach
                            beneficial, as you can make the right footing with user updates. This approach prevents the
                            app project from draining resources on course correction, as you can only make value
                            additions based on user feedback.
                        </p>

                        <h4>The development team setup</h4>
                        <p>
                            Now, let’s talk about the biggest cost factor for any app project. How Much Does It Cost to
                            Make an App? Boils down to a team you choose for building the app? Do you want to hire
                            several development experts involving frontend, backend, design, and QA testing processes,
                            or just want to get the job done through a small team of full-stack developers? Obviously,
                            both options have different cost implications for the project.
                        </p>
                        <ul>
                            <li>
                                <h5>Hiring separate teams for development processes:</h5>
                                <p>
                                    If you have a large app project involving too much complexity, you need to hire front-end
                                    developers, back-end developers, and design experts. But this involves managing a large team
                                    of developers with sharp increases in the cost of development.
                                </p>
                            </li>
                            <li>
                                <h5>Hiring Full Stack developers:</h5>
                                <p>
                                    Small to medium-sized app projects capable of accommodating modular development can hire
                                    full stack developers. Full stack developers capable of handling both frontend and backend
                                    development tasks can help a project reduce the development resources and corresponding cost
                                    impact.
                                </p>
                            </li>
                        </ul>
                        <h4>Hiring and engagement model</h4>
                        <p>
                            Whether you hire app developers with little experience or specialists, you need to make a
                            choice between outsourcing and in-house hiring. Despite several pros, in-house hiring comes
                            with the additional overhead cost overload and the need for infrastructure. Naturally,
                            businesses with no technical background may find this cost overload too challenging for
                            their app projects. But if you already have several apps up and running 8n the market and
                            you already have an in-house team of developers and robust infrastructure, hiring an
                            in-house team for the new project will not make a big impact on cost.
                        </p>

                        <p>
                            In complete contrast, hiring remote developers, apart from helping you to make a better
                            bargain on cost, can also give exposure to the developer talents worldwide. If you know how
                            to hire frontend developers or backend developers, or full stack developers and manage them
                            remotely for your project, you can actually get onboard better talents and at a better
                            price.
                        </p>

                        <p>
                            When it comes to remote hiring, UK companies can easily choose from the emerging IT
                            outsourcing hubs with huge talent pools, such as India, China, Poland, Philippines,
                            Singapore, Malaysia, etc. In many of these countries, the outsourcing companies offer far
                            more competitive pricing for app projects than their western counterparts.
                        </p>

                        <h4>The mobile app development process</h4>
                        <p>
                            Last but not least factor impacting the app development cost to a great extent is the mobile
                            app development process. The traditional waterfall development methodology has already been
                            replaced by agile, scrum, DevOps, RAD, and several new methodologies and approaches.
                        </p>

                        <p>
                            Both agile and scrum methods are great as, through a test-driven environment (TDE), they
                            reduce the load on the QA testing process at the end of the development cycle and do away
                            with the course correction needs. Ultimately, this continuous testing approach ensures
                            building a better app product that, in the long run, delivers a higher return on investment.
                        </p>

                        <p>
                            For enterprise app projects focusing on business process automation or streamlining
                            operation, DevOps is still the most credible development approach. But the cost of
                            implementing DevOps largely varies depending upon the scale and scope. In the long run,
                            DevOps for an enterprise app project can help reduce the maintenance cost and ensure higher
                            ROI.
                        </p>

                        <p>
                            Despite the cost benefits of faster development, you should not reinvent the wheel entirely
                            just because deeper fault lines found later can result in more resource-consuming course
                            correction. Instead of doing without the necessary steps such as market and audience
                            research and design mock-up & prototyping, you should rather opt for an incremental MVP
                            development approach. This will help you release a perfect basic app at a lesser cost and
                            later on through every subsequent update. You can make value additions.
                        </p>

                        <h4>Wrapping Up</h4>
                        <p>
                            Finally, let’s repeat the same question: how much does it cost to build a mobile app for a
                            UK business? The answer is not simple as it depends upon several factors that we mentioned
                            above. To keep development costs under control and reduce drainage of resources, it is
                            advisable to start small and simple and add value over time based on user feedback.
                        </p>
                    </Col>
                    <Col lg={4}>
                        <Card className='rounded-3 sticky-lg-top top-5 '>
                            <Card.Body className='p-lg-4'>
                                <h4 className='fs-20 fw-500 mb-20'>Got a Question? Drop it here!</h4>
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
                                            {errors.name && <p className='text-danger fs-6'>{errorMessages.name}</p>}
                                            {validationErrors.name && (
                                                <p className='text-danger fs-6'>{validationMessages.name}</p>
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
                                            {errors.email && <p className='text-danger fs-6'>{errorMessages.email}</p>}
                                            {validationErrors.email && (
                                                <p className='text-danger fs-6'>{validationMessages.email}</p>
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
                                            {errors.phone && <p className='text-danger fs-6'>{errorMessages.phone}</p>}
                                            {validationErrors.phone && (
                                                <p className='text-danger fs-6'>{validationMessages.phone}</p>
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
                                                <p className='text-danger fs-6'>{errorMessages.message}</p>
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

export default FormSection6;
