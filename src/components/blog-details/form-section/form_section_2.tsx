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
const FormSection2 = () => {
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
              src={IMAGES.blogImage4}
              width='737'
              height='429'
              alt='web-app'
            />
            <p className='text-lg mb-6'>
              Developing a mobile application is a must for any business looking
              for success in 2023. It provides a great opportunity to widen the
              reach, leverage robust technology to stay on top of the
              competition, and ensure growth. Developing an app requires
              considering the right technology stack, and adopting next-gen
              trends to stay ahead of the curve.
            </p>

            <p className='text-lg mb-6'>
              Many decisions must be made throughout the process, from designing
              the user interface (UI) and experience (UX) to choosing which
              features and functionalities will be included. Additionally, there
              are often constraints on budget and timeline that must be
              considered along with the latest mobile app development trends.
            </p>

            <p className='text-lg mb-6'>
              The mobile app development industry has been growing rapidly over
              the last few years, and this growth shows no signs of slowing
              down. According to forecasts, the worldwide
              <b> mobile application development</b> industry will grow to{" "}
              <b>$44.3 trillion by 2027.</b> The current trends in mobile app
              development are bound to shape up in 2023, and businesses are
              preparing to leverage the same.
            </p>

            <p className='text-lg mb-6'>
              Since app development is always evolving, developers need to stay
              ahead of time to ensure crafting successful apps. And, as we enter
              2023, the latest mobile app development trends are on the verge of
              redefining the industry.
            </p>

            <h3 className='text-2xl font-bold mt-12 mb-6'>
              Let's check out the top 9 app development trends in 2023
            </h3>

            <div className='space-y-8'>
              <section>
                <h4 className='text-xl font-bold mb-4'>
                  #1. Cross-Platform Development
                </h4>
                <p className='text-lg mb-4'>
                  With two major platforms (iOS and Android), it can be
                  challenging for developers to build an app that works on both.
                  That's why cross-platform development is becoming increasingly
                  popular, allowing developers to write code once and deploy it
                  across multiple platforms.
                </p>
                <p className='text-lg'>
                  This makes creating apps much more efficient and
                  cost-effective. React Native is one example of a popular
                  cross-platform framework that enables developers to build
                  native applications for iOS and Android with JavaScript
                  quickly.
                </p>
                <p className='text-lg'>
                  A major trend can also be seen in Flutter development which is
                  expected to continue upward as more developers and
                  organisations are attracted to its advantages. Popular
                  features such as Hot Reload, a vast array of plugins, and
                  cross-platform compatibility will continue to draw developers
                  looking for cross-platform applications.
                </p>
                <p className='text-lg'>
                  Additionally, there will be an increased emphasis on creating
                  features that target specific platforms, such as Android and
                  iOS. Flutter allows developers to leverage platform-specific
                  features and APIs to create more robust and feature-rich
                  applications.
                </p>
              </section>

              <section>
                <h4 className='text-xl font-bold mb-4'>
                  #2. Artificial Intelligence (AI)
                </h4>
                <p className='text-lg'>
                  AI is becoming increasingly integrated into mobile apps as
                  technology progresses. AI can help improve user experiences by
                  automating tasks (for example, the <b>IFTTT app</b>), enabling
                  personalisation, and ensuring accuracy.
                </p>
                <p className='text-lg'>
                  Developers also use Machine Learning (ML) algorithms to
                  predict user behaviour based on data gathered from their
                  interactions in an app over time.
                </p>
                <p>
                  Businesses wondering how to develop an app that stands out in
                  2023 will leverage AI in the following manner.
                </p>
                <div className='ml-4 space-y-4'>
                  <p className='text-lg'>
                    <strong>Facial recognition:</strong> Facial Recognition is a
                    biometric technology that uses a computer to identify a
                    person's face by comparing it to a database of known faces.
                  </p>
                  <p className='text-lg'>
                    <strong>ML-powered mobile apps:</strong> ML-powered mobile
                    apps use machine learning to improve the user experience by
                    providing personalised recommendations.
                  </p>
                  <p className='text-lg'>
                    <strong>Smart camera apps:</strong> Smart camera apps use
                    artificial intelligence and computer vision technologies to
                    enhance the camera capabilities.
                  </p>
                  <p className='text-lg'>
                    <strong>Real-time translation:</strong> App developers can
                    develop an app with real-time translation where technology
                    allows users to translate text or speech instantly.
                  </p>
                </div>
              </section>

              {/* Additional sections following the same pattern */}
              <section>
                <h4 className='text-xl font-bold mb-4'>
                  #3. Internet of Things (IoT)
                </h4>
                <p className='text-lg mb-4'>
                  IoT is a system where physical objects have network
                  connectivity, allowing them to exchange data through smart
                  devices such as phones, tablets, or computers. This connection
                  enables users to remotely control their home environment via
                  their smartphone or wearable device like a fitness band or
                  smartwatch.
                </p>
                <p className='text-lg mb-4'>
                  App developers are leveraging this technology by creating
                  applications that allow users to control home appliances from
                  anywhere in the world through their smartphones or other
                  connected devices.
                </p>
                <p className='text-lg mb-4'>
                  The Internet of Things (IoT) is quickly becoming an important
                  part of mobile app development. By 2023, IoT will
                  significantly impact the mobile app development industry,
                  including integrating IIOT (Industrial IoT as a part of{" "}
                  <b>Industry 4.0</b>) with a heavy emphasis on mobile apps.
                  More and more mobile applications will adopt sensors and
                  connected devices to collect and analyse data for consumers
                  and B2B app users.
                </p>
              </section>

              <section>
                <h4 className='text-xl font-bold mb-4'>#4. Cloud Computing</h4>
                <p className='text-lg mb-4'>
                  Cloud computing involves storing data online instead of
                  locally on hard drives or servers so it can be accessed from
                  any device regardless of location. This has made developing an
                  app easier since you don't need an expensive server setup for
                  your application to run reliably across multiple devices.
                </p>
                <div className='ml-4 space-y-4'>
                  <p className='text-lg'>
                    <strong>1. Increasing Use of Edge Computing:</strong> Edge
                    computing is becoming increasingly popular for mobile cloud
                    computing, enabling data processing closer to the source. It
                    is expected to become a mainstream technology in mobile
                    cloud computing by 2025 since it ensures reduced latency and
                    enhances user experience.
                  </p>
                  <p className='text-lg'>
                    <strong>2. Increased Security and Privacy:</strong> Cloud
                    security and privacy will become even more important as more
                    businesses move their data to the cloud.Forward-looking
                    businesses will look to render services of mobile app
                    developers well-versed in ensuring cloud security and
                    privacy solutions for mobile apps.
                  </p>
                  <p className='text-lg'>
                    <strong>3. Increased Use of Containers:</strong> Containers
                    are becoming increasingly popular for cloud computing as
                    they provide a more efficient, lightweight, and portable way
                    to deploy applications. Containers are expected to be widely
                    used for mobile cloud computing in 2025, as they are ideal
                    for running applications on multiple platforms.
                  </p>
                </div>
              </section>

              <section>
                <h4 className='text-xl font-bold mb-4'>
                  #5. Augmented Reality/Virtual Reality (AR/VR)
                </h4>
                <p className='text-lg mb-4'>
                  AR/VR technologies are being used in exciting new ways within
                  mobile apps. For example, Snapchat has implemented augmented
                  reality filters into its platform so users can take selfies
                  with animated 3D characters overlaid onto their photos.
                </p>
                <p className='text-lg'>
                  Similarly, virtual reality headsets allow users to experience
                  immersive environments within gaming apps while still using
                  their regular smartphone hardware.
                </p>
                <p className='text-lg'>
                  Developers who want to know how to develop an app in 2023 with
                  A/R capabilities can leverage the following trends —
                </p>
                <div className='ml-4 space-y-4'>
                  <p className='text-lg'>
                    <strong>Increased AR/VR Support:</strong> AR and VR support
                    in mobile apps will become much more prevalent and robust by
                    2025, with the technology being used in various
                    applications, including gaming, shopping, travel,
                    entertainment, education, and more.
                  </p>
                  <p className='text-lg'>
                    <strong>Enhancing Social Interaction:</strong> Apps will be
                    increasingly designed to allow users to interact in virtual
                    and augmented reality, leading to a more social experience
                    and a greater sense of connection.
                  </p>
                  <p className='text-lg'>
                    <strong>ARKIT 6 Improvements:</strong> WWDC 2022 saw Apple
                    unveil many new ARKit 6 capabilities. Scene occlusion and
                    other experiences will be more realistic thanks to the depth
                    API change and <b> Apple's LiDAR scanner</b> that creates
                    "instant AR" experiences.
                  </p>
                  <p>
                    Mobile app developers for iOS can leverage it to add motion
                    capture data for 3D models while the camera focuses on
                    surrounding objects. Humans occlusion, another recent
                    update, lets virtual objects pass in front of and behind
                    people. For instance,<b>RoomPlan uses LiDAR</b> scanning to
                    design home floor plans swiftly using ARKit 6 features b.
                  </p>
                  <p className='text-lg'>
                    <strong>Better Accessibility:</strong> WebAR is another
                    major AR trend. WebAR works in browsers without further
                    applications. Best accessibility situation. WebAR delivers
                    the simplest AR experiences and lacks many of the
                    capabilities native AR can give on mobile devices.
                  </p>
                  <p>
                    WebAR may be handy for simple experiences like applying
                    filters to faces, altering hair or item colours, backdrop
                    replacement, and basic 3D objects.
                  </p>
                </div>
              </section>

              <section>
                <h4 className='text-xl font-bold mb-4'>#6. 5G</h4>
                <p className='text-lg mb-4'>
                  2023 is projected to be a major milestone in the world of 5G
                  connectivity. By the end of 2023, 5G networks are expected to
                  cover <b>over 50% of the world’s population.</b>
                  Global 5G subscriptions are predicted to reach 3.5 billion,
                  with more than 70 countries rolling out 5G services. In
                  addition to the increased coverage, 5G speeds are predicted to
                  be up to 10 times faster than 4G and one hundred times faster
                  than 3G.
                </p>
                <p className='text-lg mb-4'>
                  This will enable high-speed data transfers and provide low
                  latency for real-time applications. 5G will also provide
                  improved bandwidth and capacity, allowing more users to access
                  the same network simultaneously. The improved capacity will
                  enable new services such as self-driving cars, and driving way
                  for VR, AR, and IoT at ease.
                </p>
                {/* <div className='ml-4 space-y-4'>
                                    <p className='text-lg'>
                                        <strong>Improved Bandwidth and Capacity:</strong> 5G will provide improved
                                        bandwidth, allowing more users to access the same network simultaneously, making
                                        self-driving cars, AR, VR, and IoT feasible.
                                    </p>
                                </div> */}
              </section>

              <section>
                <h4 className='text-xl font-bold mb-4'>
                  #7. Security and Privacy
                </h4>
                <p className='text-lg'>
                  Security and privacy concerns have moved up the agenda
                  recently due to several major data breaches, so it’s no
                  surprise that this trend will continue into 2023 too. Develop
                  an app that ensures data security through robust encryption
                  technologies, two-factor authentication methods, biometric
                  identification systems etc. Otherwise, users may not trust
                  them enough to use them.
                </p>
                <p>
                  The most significant security and privacy trend in 2023 will
                  be the increased use of encryption. Encryption is a process of
                  encoding data unreadable to anyone without the keys to unlock
                  it. This will protect user data, making it harder for
                  malicious actors to gain access. App developers will also need
                  to monitor potential security threats.
                </p>
                <p>
                  The following major mobile app development trends can be
                  expected in security and privacy from 2023 onwards.
                </p>
                <div className='ml-4 space-y-4'>
                  <p className='text-lg'>
                    <strong>1.Cloud Security:</strong> Mobile apps will
                    increasingly rely on cloud-based services, and the security
                    of these services will be essential. End-to-end encryption,
                    secure access controls, and other cloud security measures
                    will be necessary
                  </p>
                  <p className='text-lg'>
                    <strong>2.Privacy by Design:</strong> Privacy by design will
                    become a core principle of mobile app development. This
                    means that privacy must be built into the app's design, and
                    must be taken into account at all stages of the development
                    process.
                  </p>
                  <p className='text-lg'>
                    <strong>3.Security Audits:</strong> Security audits will
                    become a regular part of the development process, with
                    third-party security experts conducting regular checks to
                    ensure that apps are secure and compliant.
                  </p>
                </div>
              </section>

              <section>
                <h4 className='text-xl font-bold mb-4'>#8. Low Code Apps</h4>
                <p className='text-lg mb-4'>
                  As technology continues to evolve and become more
                  user-friendly, the low-code mobile app development trend has
                  grown significantly in recent years. Low-code platforms make
                  mobile app development easier, faster, and more cost-effective
                  for businesses. With the help of low-code mobile app
                  development platforms, businesses can create sophisticated
                  mobile apps without requiring extensive coding knowledge.
                </p>
                <p className='text-lg mb-4'>
                  In 2023, low-code mobile app development will be a key trend
                  in mobile app development. Businesses will look for ways to
                  reduce development costs and speed up the process. Low-code
                  mobile app development platforms will be perfect solutions for
                  businesses.
                </p>
                <p className='text-lg mb-4'>
                  Additionally, these platforms allow developers to quickly
                  create mobile apps that are highly functional and visually
                  appealing. In addition to reducing development costs, low-code
                  mobile app development platforms provide several other
                  benefits.
                </p>
                <p>
                  For example, these platforms often come with various tools
                  that allow developers to customise their apps according to the
                  needs of their users. Additionally, these platforms often come
                  with libraries of pre-built components that can be used to
                  develop features quickly. This eliminates the need to start
                  from scratch and allows developers to focus more on the design
                  and functionality of the app.
                </p>
              </section>

              <section>
                <h4 className='text-xl font-bold mb-4'>#9. PWAs</h4>
                <p className='text-lg'>
                PWAs are web applications that use modern web technologies such as HTML5, CSS3, and JavaScript to create immersive experiences for users. They are designed to be faster, more secure, more reliable, and more engaging than traditional web apps. The key advantage of PWAs is that they can be accessed from any device or browser without installing an app.
                </p>
                <p>
                Users can access a PWA from their mobile device or desktop computer with a few clicks. Furthermore, PWAs can work offline, which makes them ideal for situations with no internet connection.
                </p>
                <p>
                With Instant Apps, users can access specific parts of an app without downloading the entire thing, which helps reduce storage space and data usage on their devices. This also means that developers can focus on creating only those features the user needs instead of creating bulky apps with many unnecessary features. 
                </p>
                <p>
                In 2023, it’s expected that both PWAs and Instant Apps will become even more popular due to the following reasons —
                </p>
                <div className='ml-4 space-y-4'>
                  <p className='text-lg'>
                    <strong>1. More Focus on Offline Experiences:</strong> Mobile apps will become even more focused on providing offline experiences since users no longer need to be connected to the internet to use them. PWAs will continue to provide a seamless experience across all devices and platforms, regardless of connection speed or bandwidth.
                  </p>
                  <p className='text-lg'>
                    <strong>2. Leveraging Browser Caching:</strong> Browser caching will become even more important for PWAs, as it will help make the apps faster and more responsive. Developers must pay close attention to caching mechanisms and ensure their PWAs are optimised for the best performance. 
                  </p>
                  <p className='text-lg'>
                    <strong>3. Improved User Interface:</strong> PWAs will continue to focus on creating an intuitive and user-friendly experience. Developers will use AI and machine learning to create an intuitive experience and improve the user interface.
                  </p>
                </div>
              </section>

              <section>
                <h4 className='text-xl font-bold mb-4'>Conclusion</h4>
                <p className='text-lg'>
                By 2023, mobile app development will continue to be an ever-evolving industry that relies on innovation and creativity. We expect to see more powerful apps leveraging the latest technologies, such as machine learning, augmented reality, virtual reality and 5G networks. 
                </p>
                <p className='text-lg'>
                These cutting-edge features will make apps more interactive, immersive, and engaging. Additionally, with the rise in popularity of cloud-based solutions, we anticipate a move towards cloud-native apps which offer enhanced scalability and security benefits. 
                </p>
                <p className='text-lg'>
                Ultimately, the future of mobile app development looks bright, and companies should strive to remain competitive in this dynamic landscape in 2023.
                </p>
              </section>
            </div>
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

export default FormSection2;
