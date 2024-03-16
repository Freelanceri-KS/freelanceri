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
import PostControll from "./super-admin/PostControll/postControll"
import SuperDashboard from "./super-admin/super-admin/dashboard"
import FreelancerDashboard from "./Freelancer/dashboard/dashboard"

function App() {
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
          <Route path="/" element={<Home />} />
          <Route path="/findjobs" element={<FindJob />} />
          {/* <Route path="/register" element={<Login />} /> */}
          <Route path="/freelancer-dashboard" element={<FreelancerDashboard/>}/>
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/welcome" element={<LoginMessage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/details-page" element={<DetailsPage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/post-controll" element={<PostControll />}/>
          <Route path="/super-admin" element={<SuperDashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
