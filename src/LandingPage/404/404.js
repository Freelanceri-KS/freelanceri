import "./404.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="not-found">
            <p className="not-found-404">404</p>
            <p className="not-found-txt">(Page not found)</p>
            <p className="not-found-long">Oops! It looks like you've ventured into uncharted territory. The page you're looking for seems to have gone missing in the digital wilderness.</p>
            <button className="not-found-button" onClick={()=>navigate("/")}>Go Home</button>
        </div>
    );
}


export default NotFound;