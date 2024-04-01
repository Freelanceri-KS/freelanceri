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
import { setLang, setLoggedIn } from "./redux/Functions/actions";
import { connect } from "react-redux";
import BusinessDashboard from "./Business/business-dashboard";
import Blogs from "./LandingPage/Blogs/blogs"
import BlogDetails from "./LandingPage/Blogs/blogDetails"
import Bookmarks from "./Freelancer/Bookmarks/bookmarks";
import ApplicationForm from "./Freelancer/ApplicationForm/applicationForm"

function App(props) {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        {window.location.pathname != "/register" &&
          window.location.pathname != "/welcome" ? (
          <NewHeader />
        ) : (
          ""
        )}
        <Routes>
          {props?.isLoggedin == false ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/welcome" element={<LoginMessage />} />
              <Route path="/registerpage" element={<RegisterPage />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/super-admin" element={<SuperDashboard />} />
              <Route path="/business-dashboard" element={<BusinessDashboard />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog-details" element={<BlogDetails />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/appform" element={<ApplicationForm/>}/>
            </>
          ) : (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<FindJob />} />
              <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
              <Route path="/super-admin" element={<SuperDashboard />} />
              <Route path="/details-page/:id" element={<DetailsPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post-controll" element={<PostControll />} />
              <Route path="/business-dashboard" element={<BusinessDashboard />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog-details" element={<BlogDetails />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/appform" element={<ApplicationForm/>}/>

            </>
          )}

          {/* <Route path='/ContactUs' element={<ContactForm/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    language: state.data.language,
    isLoggedin: state.data.isLoggedin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (data) => dispatch(setLang(data)),
    setLoggedIn: (data) => {
      dispatch(setLoggedIn(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
