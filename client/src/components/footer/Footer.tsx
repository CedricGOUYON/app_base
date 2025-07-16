import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
