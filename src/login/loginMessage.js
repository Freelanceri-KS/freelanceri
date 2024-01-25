import Pllum from "../assets/images/pllumat.png";
import "./loginMessage.scss";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa"; 

const LoginMessage = ()=>{
    return (
      <div className="welcomeMsg">
        <div className="wrapper">
          <div className="image">
            <img src={Pllum} alt="Welcome image" className="pllumi" />
          </div>
          <div className="content">
            <h1>Mirë se vini!</h1>
            <p>
              Mirësevini në platformën Freelancer! Regjistrimi juaj me sukses ka
              aktivizuar ofertën promocionale për 3 muaj falas. Sapo keni
              pranuar një email që përmban detaje më të hollësishme. Suksese!
            </p>
          </div>
          <div className="content-footer">
            <div className="socials">
              <a
                href="https://www.instagram.com/freelanceri.app"
                target="_blank"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/freelanceriapp/"
                target="_blank"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                href="https://www.facebook.com/platforma.freelanceri"
                target="_blank"
              >
                <FiFacebook size={30} />
              </a>
            </div>
            <button onClick={() => (window.location.href = "/")}>Vazhdo</button>
          </div>
        </div>
      </div>
    );
}

export default LoginMessage;