import { connect } from "react-redux";
import { setLang } from "../../../redux/Functions/actions";
import "./newHeader.scss";
import Albania from "../../../assets/images/alb.jpg";
import English from "../../../assets/images/eng.png";
import HeaderLogo from "../../../assets/images/headerLogo.png";
import { useLocation, useNavigate } from "react-router-dom";

const NewHeader = (props) => {
  const location = useLocation('')
  const navigate = useNavigate('')
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light newHeader">
        <div className="container">
          <a role="button" className="navbar-brand" onClick={()=> navigate('/')}>
            <img src={HeaderLogo} alt="Logo" height="35" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li role="button" className="nav-item margin">
                <a className={`nav-link ${location.pathname == "/" ? ' active' : ''}`} onClick={()=> navigate('/')}>
                  Home
                </a>
              </li>
              <li role="button" className="nav-item margin">
                <a className={`nav-link ${location.pathname == "/faqs" ? ' active' : ''}`}onClick={()=> navigate('/faqs')}>
                  FAQ
                </a>
              </li>
              <li role="button" className="nav-item margin">
                <a className={`nav-link ${location.pathname == "/about-us" ? ' active' : ''}`}onClick={()=> navigate('/about-us')}>
                  {props?.language == true ?'Rreth Nesh': "About Us"}
                </a>
              </li>
            </ul>
            <div className="headerItems">
              <div role="button" className="dropdown text-center lang">
                <a
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={props.language == true ? Albania : English}
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                </a>
                <ul className="dropdown-menu text-small lang-dr">
                  <li>
                    <div role="button" className="dropdown-item" onClick={() => {props.setLang(true)}}>
                      <img
                        src={Albania}
                        alt="mdo"
                        width="25"
                        height="25"
                        className="rounded-circle"
                      />{" "}
                      Alb
                    </div>
                  </li>
                  <li>
                    <div role="button" className="dropdown-item" onClick={() => {props.setLang(false)}}>
                      <img
                        src={English}
                        alt="mdo"
                        width="25"
                        height="25"
                        className="rounded-circle"
                      />{" "}
                      Eng
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="headerItems">
              <a
                className="btn btn-primary my-2 my-sm-0 free-btn"
                type="button"
                href="/register"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.data.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (data) => dispatch(setLang(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewHeader);
