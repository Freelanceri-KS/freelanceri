import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './LandingPage/Home/home';
import Header from './LandingPage/components/header';
import Login from './login/login';
import FindJob from './pages/FindJob/findJob';
import Signup from './signup/signup';
import FAQs from './FAQs/faqs';
import AboutUs from './pages/AboutUs/AboutUs';
import Trial from './pages/Trial/Trial';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginMessage from './login/loginMessage';
import NewHeader from './LandingPage/components/newHeader/newHeader';
import ContactForm from './pages/ContactUs/Contact';

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
          {/* <Route path="/job" element={<FindJob />} /> */}
          <Route path="/register" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/welcome" element={<LoginMessage />} />
          <Route path='/ContactUs' element={<ContactForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
