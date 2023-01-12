import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="copy" id="footer">
        <p>
          © 2022 Edify Networks LLC |  InterviewPals™ is a trademark of Edify Networks LLC
          <div>
          <Link className="privacy" to="/privacy">
              Privacy Policy
            </Link>
    
            <Link className="privacy" to="/terms&conditions">
              Terms and Conditions
            </Link>
          </div>
        </p>
        
      </div>
    </footer>
  );
}

export default Footer;
