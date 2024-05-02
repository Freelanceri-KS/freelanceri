import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./LandingPage/Home/home";
// import Login from "./Auth/login/login"
import FindJob from "./Freelancer/FindJob/findJob";
import FAQs from "./LandingPage/FAQs/faqs";
import AboutUs from "./LandingPage/AboutUs/AboutUs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginMessage from "./Auth/login/loginMessage";
import NewHeader from "./LandingPage/components/newHeader/newHeader";
import DetailsPage from "./Freelancer/DetailsPage/Details";
import Contact from "./LandingPage/Contact/contact";
import RegisterPage from "./Auth/RegisterPage/registerPage";
import Profile from "./Freelancer/profile/profile";
import PostControll from "./super-admin/PostControll/postControll";
import SuperDashboard from "./super-admin/super-admin/dashboard";
import FreelancerDashboard from "./Freelancer/dashboard/dashboard";
import Login from "./Auth/login/login";
import {
  setLang,
  setLoggedInBusiness,
  setLoggedInFreelancer,
} from "./redux/Functions/actions";
import { connect } from "react-redux";
import BusinessDashboard from "./Business/business-dashboard";
import Blogs from "./LandingPage/Blogs/blogs";
import BlogDetails from "./LandingPage/Blogs/blogDetails";
import Bookmarks from "./Freelancer/Bookmarks/bookmarks";
import ApplicationForm from "./Freelancer/ApplicationForm/applicationForm";
import ViewProfile from "./Business/view-profile/view-profile";
import PostDetail from "./Business/post-details/post-details";
import ProfileCheck from "./Business/post-details/profile-check/profile-check";
import Contract from "./Business/contracts/offer_contract/contract";
import NotFound from "./LandingPage/404/404";
import ViewContract from "./Business/contracts/view_contract/viewContract";
import Career from "./Freelancer/Careers/career";
function App(props) {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        {
          window.location.pathname != "/welcome" ? (
            <NewHeader />
          ) : (
            ""
          )}
        <Routes>
          {!props.isLoggedInBusiness && !props.isLoggedinFreelancer && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/faqs" element={<FAQs />} />
            </>
          )}
          {props.isLoggedInBusiness && (
            <>
              <Route path="/details-page/:id" element={<DetailsPage />} />
              <Route path="/" element={<BusinessDashboard />} />
              <Route path="/post-detail/:id" element={<PostDetail />} />
              <Route path="/profile-check/:id" element={<ProfileCheck />} />
              <Route path="/view-profile/:id" element={<ViewProfile />} />
              <Route path="/contract/:id" element={<Contract />} /> */
              <Route path="*" element={<NotFound />} />
              <Route path="/view-contract/:id" element={<ViewContract />} />
            </>
          )}

          {props.isLoggedinFreelancer && (
            <>
              <Route path="/" element={<FindJob />} />
              <Route path="/details-page/:id" element={<DetailsPage />} />
              <Route path="/apply-form/:id" element={<ApplicationForm />} />
              <Route
                path="/freelancer-dashboard"
                element={<FreelancerDashboard />}
              />
              <Route path="*" element={<NotFound />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/career" element={<Career />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedinFreelancer: state.data.isLoggedinFreelancer,
    isLoggedInBusiness: state.data.isLoggedinBusiness,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (data) => dispatch(setLang(data)),
    setLoggedInFreelancer: (data) => {
      dispatch(setLoggedInFreelancer(data));
    },
    setLoggedInBusiness: (data) => {
      dispatch(setLoggedInBusiness(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
