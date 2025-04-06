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
const FormSection5 = () => {
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
                            src={IMAGES.blogImage2}
                            width='737'
                            height='429'
                            alt='web-app'
                        />
                        <h4>Why Your Business Needs a Mobile App & How to Develop One</h4>

                        <p className='fs-20'>
                            In the past few years, it has been witnessed that smartphones have been taking over
                            desktops, and that's why developing an app from scratch, which is a dedicated app for your
                            business, is the need of the hour.
                        </p>

                        <p className='fs-20'>
                            And to be in sync with the latest trends, companies are shifting to creating an app from
                            scratch that is tailor-made for their business.
                        </p>

                        <p className='fs-20'>
                            Designing & developing an app is a complex process that involves substantial investments,
                            development time, and overall app management.
                        </p>

                        <p className='fs-20'>
                            Whether you decide to build an app from scratch or choose an existing app model, ensure that
                            you partner with an experienced mobile app development company that can be your extended
                            team in the long run. A company that is adept in its development approaches & can help you
                            build a scalable, secure & robust solution - is the one you need to make an app.
                        </p>

                        <h4>Here’s a step-by-step guide to creating an app from scratch:</h4>

                        <h4>Step #1: Brief down your app idea</h4>
                        <p className='fs-20'>The first step in the process of how to create an app is - to make your needs clear.</p>

                        <p className='fs-20'>Pen your app idea.</p>

                        <p className='fs-20'>Jot down whatever is in your head.</p>

                        <p className='fs-20'>
                            Do you aim for additional sales to your strides? Or is it something unique that enhances the
                            user experience?
                        </p>

                        <p className='fs-20'>Once you put down a clear notion of your idea, it paves the way to concise thinking.</p>

                        <p className='fs-20'>
                            For instance, when you brief down your app idea, specific objectives will be cleared out;
                            thus, many questions will come up in your mind.
                        </p>

                        <h4>Step #2: Choose a platform</h4>
                        <p className='fs-20'>
                            Here comes an important step to creating an app from scratch & that defines the entire
                            process of your app idea.
                        </p>

                        <p className='fs-20'>There are two major mobile platforms - iOS & Android.</p>

                        <p className='fs-20'>
                            Choosing to build a different app for both iOS & Android comes under native app development.
                            Native app development allows creating a rich, robust app, and especially for individual
                            platforms, i.e., iOS & Android platforms. However, suppose you build an app from scratch by
                            choosing native app development. In that case, it may prove costly, but if you’re a
                            well-established business or company with a significant budget and want to offer an
                            effortless smooth experience to your users, then go for native app development.
                        </p>

                        <p className='fs-20'>
                            So once you embark on how to make an app - decide which mobile app development platform to
                            choose for your app needs.
                        </p>

                        <p className='fs-20'>Also, there's the availability of a Hybrid app development model.</p>

                        <p className='fs-20'>
                            Hybrid app development is a cost-effective way to develop an app. As it includes creating an
                            app from scratch that is a single app and works for both Android & iOS.
                        </p>

                        <p className='fs-20'>
                            Based on your budget, choose whether you want to build an app through a hybrid model or a
                            native application?
                        </p>

                        <p className='fs-20'>The platform you choose will further vastly vary your app development process.</p>

                        <h4>Step #3: Do market research</h4>
                        <p className='fs-20'>Market research can change your game plan.</p>

                        <p className='fs-20'>Don’t just start blindly. Answer a few questions:</p>
                        <ul className='fs-20'>
                            <li>What’s the Unique Selling Proposition (USP) in your idea?</li>
                            <li>Is your app resembling an existing app?</li>
                        </ul>

                        <p className='fs-20'>
                            If your idea has something unique to offer, go for it. Do basic market research. But don't
                            forget to look out for your competitors in the same market field. Create an app with a
                            definitive organized scope of your app idea, list your user's pain points & how to make an
                            app that will solve them.
                        </p>

                        <p className='fs-20'>
                            If your app resembles an existing app, in that case - check out your competitor's loopholes
                            & strategize your entire process & focus on how you will try to improve it.
                        </p>

                        <h4>Step #4: Define your app’s scope of work</h4>
                        <p className='fs-20'>This step is high time to determine the features & functionalities of your app.</p>

                        <p className='fs-20'>A well-planned way is to jot down answers to some of the questions listed below:</p>
                        <ul className='fs-20'>
                            <li>Will my app have an e-commerce integration?</li>
                            <li>
                                How will users send questions & get them answered? (contact us form, chat feature, FAQs)
                            </li>
                            <li>
                                Does my app need social media integration features? (for users to share information)
                            </li>
                        </ul>

                        <p className='fs-20'>
                            You should note all the features & functionalities you wish for while creating an app from
                            scratch.
                        </p>

                        <p className='fs-20'>
                            Doing so will help you & your prospective mobile app development company work on your
                            product correctly & efficiently.
                        </p >

                        <h4>Step #5: Make a list of business goals</h4>
                        <p className='fs-20'>What are you trying to achieve by building an app?</p>

                        <p className='fs-20'>How will you monetize your app?</p>

                        <ul className='fs-20'>
                            <li>In-app purchases?</li>
                            <li>A paid app?</li>
                            <li>An advertisement-based model?</li>
                        </ul>

                        <p className='fs-20'>
                            Questions such as this are worth giving your time to before actually investing your time &
                            money in developing an app from scratch.
                        </p>

                        <h4>Step #6: Designing</h4>
                        <p className='fs-20'>Now we are on the essential part of making an app from scratch.</p>

                        <p className='fs-20'>
                            Once you have hired a top mobile app development company and synced with your project, they
                            will create an app by wireframing your application.
                        </p>

                        <p className='fs-20'>
                            A wireframe is a greyscale skeleton of your app. It works as a visual guide and opens the
                            way to mapping the user journey of your application.
                        </p>

                        <p className='fs-20'>
                            After the wireframes are ready, testing is executed. Once you approve the wireframes, the
                            mobile app designers start working on the designs of your app. Also called app prototypes.
                        </p>

                        <p className='fs-20'>
                            Designing an app from scratch means adding the colours, fonts, and graphics to the wireframe
                            and looking attractive.
                        </p>

                        <p className='fs-20'>
                            Once the prototype is implemented, the developers will proceed to the final stage of app
                            development.
                        </p>

                        <h4>Step #7: Developing an app</h4>
                        <p className='fs-20'>
                            Once the predevelopment stages are completed, an app is designed from scratch. Your app will
                            now be in the developer’s hand - who will make an app by integrating your app’s design with
                            full-fledged coding.
                        </p>

                        <p className='fs-20'>
                            When it comes to creating an app from scratch for startup apps & beginners, it is
                            recommended to build an app based on the MVP model.
                        </p>

                        <p className='fs-20'>
                            The MVP (Minimum Viable Product) allows building an app from scratch with only the
                            essentials of your product’s idea.
                        </p>

                        <p className='fs-20'>
                            In the MVP model, the first app development phase has only the necessary features &
                            functions that will make your app stand out in the market. The rest of the features &
                            functionalities are added after deployment based on the user’s feedback.
                        </p>

                        <p className='fs-20'>For example:</p>
                        <p className='fs-20'>Let's say you are developing an app from scratch, a video calling application.</p>

                        <p className='fs-20'>The MVP of your video-calling app will include:</p>
                        <ul className='fs-20'>
                            <li>A primary video calling feature.</li>
                            <li>A USP feature - is very important.</li>
                            <li>A chat messaging feature.</li>
                            <li>A screen-sharing feature.</li>
                        </ul>

                        <p className='fs-20'>
                            High functionality features like adding the background, uploading the photo or adding sound
                            can be done at a later stage upon the demands of the users.
                        </p>

                        <p className='fs-20'>
                            "Let's take into reference the office analogy. The MVP of an office will have a roof, four
                            walls, and a set of computers. There wouldn't be a separate conference room or neither a
                            private room nor amenities such as that. Things like these can also be added later."
                        </p>

                        <h4>Step #8: Deployment</h4>
                        <p className='fs-20'>The final stage in the app development process.</p>

                        <p className='fs-20'>
                            Now is the stage to reap the results of your hard work. Your app would be released on the
                            App Stores and in the hands of actual users.
                        </p>

                        <p className='fs-20'>
                            Ensure that your server is fully functional to make an app functional without any problems.
                        </p>

                        <p className='fs-20'>
                            Because now it would be the time to make an impression to be good in your customer's eyes.
                        </p>

                        <p className='fs-20'>
                            As mentioned earlier, the process of releasing/deploying your app in the app market largely
                            depends on the platform you choose.
                        </p>

                        <p className='fs-20'>
                            If your app is a native iOS app, it would be deployed on the App stores & if it's a native
                            Android app, it would be released on Google Play Store.
                        </p>

                        <p className='fs-20'>
                            We at Impero take care of launching the app, so if you create an app with us, you won't have
                            to worry about deployment.
                        </p>

                        <p className='fs-20'>And those who decide to go their way, there would be some extra steps in the deployment process. </p>

                        <h4>Takeaway</h4>
                        <p className='fs-20'>By this stage, your app would be already roaring the app market. To back up your entire process… consider promoting your app on platforms similar to your app's genre.</p>

                        <p className='fs-20'>Our article intended to provide a step-by-step guide to help you create an app that makes the whole development process an easy affair; we hope we did that.</p>

                        <p className='fs-20'>But you can always contact us to know more about your idea's feasibility in the market, along with a competitive analysis report and a complimentary 3 months maintenance period post-launch.</p>

                        <p className='fs-20'>All the best ;{')'}
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

export default FormSection5;
