import { setLang } from "../../redux/Functions/actions";
import { connect } from "react-redux";
import "./explore_sect.scss";
import { useNavigate } from "react-router";

const ExploreSection = (props) => {
  const navigate = useNavigate('')
  return (
    <div className="grayArealastsec">
      <div className="d-flex justify-content-center">
        <h1 className="TalentText">
          <div
            dangerouslySetInnerHTML={{
              __html:
                props?.language === true
                  ? "Eksploro dhe gjej <br /> punë apo talent"
                  : "Explore And Find <br /> A Job Or A Talent",
            }}
          />
        </h1>
      </div>
      <center>
        <div className="mt-4 LastSec">
          <span className="colorsplit">
            {props?.language === true ? "Freelanceri" : "Freelanceri"}
          </span>{" "}
          {props?.language == true ? "është platforma ku " : "is the platform,"}
          {props?.language === true
            ? "kompanitë mund të marrin ndihmë me rekrutimin e talenteve dhe lidhje me investitorë."
            : "companies can get assistance with their recruitment of talent as well as connection with investors."}
        </div>
      </center>
      <div className="d-flex justify-content-center gap-3 mt-5">
        <button  onClick={()=>  navigate('/register')} className="BecomeTalentBtn">
          {props?.language == true ? "Gjej talent" : "Find a Talent"}
        </button>
        <button onClick={()=>  navigate('/register')} className="FindTalentBtn">
          {props?.language == true ? "Bëhuni freelancer" : "Become a Talent"}
        </button>
      </div>
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ExploreSection);
