import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../components/about-us";
import Achievements from "../components/achievements";
import CareerDetails from "../components/career-details";
import Startups from "../components/startups";
import MobileAppDevelopment from "../components/mobile-app-development";
import IosAppDevelopment from "../components/ios-app-development";
import AndroidAppDevelopment from "../components/android-app-development";
import ESGSustainability from "../components/esg-sustainability";
import UIUX from "../components/uiux";
import Blogs from "../components/blogs";
import BlogDetails from "../components/blog-details";
import Careers from "../components/careers";
import ContactUs from "../components/contact-us";
import BespokeSoftwareDevelopment from "../components/bespoke-software-development";
import FlutterAppDevelopment from "../components/flutter-app-development";
import ARVR from "../components/arvr";
import WebDevelopment from "../components/web-development";
import ReactNative from "../components/react-native";
import ScrollToTop from "../components/pages/scrollTop";
import PageNotFound from "../components/pages/pageNotFound";
import CaseStudies from "../components/case-studies";
import KeepAppy from "../components/keep-appy";
import PathHistory from "../components/pages/pathHistory";
import ScrollToTopMain from "../components/pages/scrollTopMain";
import ScoreBoard from "../components/scoreboard";
import Utrade from "../components/utrade";
import InPractice from "../components/InPractice";
import DruidLearning from "../components/druid-learning";
import NameDown from "../components/name-down";
import EquinasEducation from "../components/aquinas-education";
import Siente from "../components/siente";
import Kemas from "../components/kemas";
import SureWash from "../components/sure-wash";
import ITCarlow from "../components/it-carlow";
import EthiCart from "../components/ethicart";
import Donaghmore from "../components/donaghmore";
import TeachKloud from "../components/teach-kloud";
import Mosaic from "../components/mosaic";
import IrishTour from "../components/irish-tour";
import Examfly from "../components/examfly";
import ESPTiles from "../components/esp-tiles";
import HealthCare from "../components/industries/healthcare";
import Manufacturing from "../components/industries/manufacturing";
import Education from "../components/industries/education";
import Retail from "../components/industries/retail";
import OnDemand from "../components/industries/on-demand";
import Restaurant from "../components/industries/restaurant";
import Entertainment from "../components/industries/entertainment";
import Travel from "../components/industries/travel";
import Events from "../components/industries/event-software";
import ECommerce from "../components/industries/e-commerce";
import SaaS from "../components/industries/saas";
import Games from "../components/industries/games";
import Wellness from "../components/industries/wellness";
import SocialNetworking from "../components/industries/social-networking";
import Banking from "../components/industries/banking";
import Insurance from "../components/industries/insurance";
import RealEstate from "../components/industries/real-estate";
import NewsSoftware from "../components/industries/news-software";
import Logistics from "../components/industries/logistics";
import Finance from "../components/industries/finance";
import BudgetCalculator from '../components/budget-calculator';
// import GETQuotation from '../components/pages/quotation';

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopMain />
      {/* <EBookBanner /> */}
      {/* <GETQuotation/> */}
      <PathHistory />
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="/about-us"
          element={<AboutUs />}
        />
        <Route
          path="/blogs"
          element={<Blogs />}
        />
        <Route
          path="/blog-details/:url"
          element={<BlogDetails />}
        />
        <Route
          path="/careers"
          element={<Careers />}
        />
        <Route
          path="/career-details/:url"
          element={<CareerDetails />}
        />
        <Route
          path="/contact-us"
          element={<ContactUs />}
        />
        <Route
          path="/about-us"
          element={<AboutUs />}
        />
        <Route
          path="/achievements"
          element={<Achievements />}
        />
        <Route
          path="/startups"
          element={<Startups />}
        />
        <Route
          path="/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route
          path="/ios-app-development"
          element={<IosAppDevelopment />}
        />
        <Route
          path="/android-app-development"
          element={<AndroidAppDevelopment />}
        />
        <Route
          path="/esg-sustainability"
          element={<ESGSustainability />}
        />
        <Route
          path="/uiux"
          element={<UIUX />}
        />
        <Route
          path="/bespoke-software-development"
          element={<BespokeSoftwareDevelopment />}
        />
        <Route
          path="/flutter-app-development"
          element={<FlutterAppDevelopment />}
        />
        <Route
          path="/arvr"
          element={<ARVR />}
        />
        <Route
          path="/web-development"
          element={<WebDevelopment />}
        />
        <Route
          path="/react-native-development"
          element={<ReactNative />}
        />
        <Route
          path="/case-studies"
          element={<CaseStudies />}
        />
        <Route
          path="/keepappy"
          element={<KeepAppy />}
        />
        <Route
          path="/scoreboard"
          element={<ScoreBoard />}
        />
        <Route
          path="/utrade"
          element={<Utrade />}
        />
        <Route
          path="/inpractice"
          element={<InPractice />}
        />
        <Route
          path="/druidlearning"
          element={<DruidLearning />}
        />
        <Route
          path="/surewash"
          element={<SureWash />}
        />
        <Route
          path="/namedown"
          element={<NameDown />}
        />
        <Route
          path="/ITCarlow"
          element={<ITCarlow />}
        />
        <Route
          path="/aquinas-education"
          element={<EquinasEducation />}
        />
        <Route
          path="/siente"
          element={<Siente />}
        />
        <Route
          path="/kemas"
          element={<Kemas />}
        />
        <Route
          path="/ethicart"
          element={<EthiCart />}
        />
        <Route
          path="/donaghmore"
          element={<Donaghmore />}
        />
        <Route
          path="/teach-kloud"
          element={<TeachKloud />}
        />
        <Route
          path="/mosaic"
          element={<Mosaic />}
        />
        <Route
          path="/irish-tour"
          element={<IrishTour />}
        />
        <Route
          path="/examfly"
          element={<Examfly />}
        />
        <Route
          path="/esp-tiles"
          element={<ESPTiles />}
        />
        <Route
          path="/healthcare"
          element={<HealthCare />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
        <Route path="/arvr" element={<ARVR />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/react-native-development" element={<ReactNative />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/keepappy" element={<KeepAppy />} />
        <Route path="/scoreboard" element={<ScoreBoard />} />
        <Route path="/utrade" element={<Utrade />} />
        <Route path="/inpractice" element={<InPractice />} />
        <Route path="/druidlearning" element={<DruidLearning />} />
        <Route path="/surewash" element={<SureWash />} />
        <Route path="/namedown" element={<NameDown />} />
        <Route path="/ITCarlow" element={<ITCarlow />} />
        <Route path="/aquinas-education" element={<EquinasEducation />} />
        <Route path="/siente" element={<Siente />} />
        <Route path="/kemas" element={<Kemas />} />
        <Route path="/ethicart" element={<EthiCart />} />
        <Route path="/donaghmore" element={<Donaghmore />} />
        <Route path="/teach-kloud" element={<TeachKloud />} />
        <Route path="/mosaic" element={<Mosaic />} />
        <Route path="/irish-tour" element={<IrishTour />} />
        <Route path="/examfly" element={<Examfly />} />
        <Route path="/esp-tiles" element={<ESPTiles />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/education" element={<Education />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/on-demand" element={<OnDemand />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/saas" element={<SaaS />} />
        <Route path="/games" element={<Games />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/social-networking" element={<SocialNetworking />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/news" element={<NewsSoftware />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/budget-calculator" element={<BudgetCalculator/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
