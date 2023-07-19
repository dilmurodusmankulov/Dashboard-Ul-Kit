import "./navbar.css"
import { search, message, users  } from "../assets/styles/Iconsnavbar";
const Navbar = () => {
  return (
    <div className="container__navbar">
      <div className="header">
        <div className="header__left">
          <h3 className="headings__navbar">Overview</h3>
        </div>
        <div className="header___right">
          <span>{search}</span>
          <span>{message}</span>
          <span>Jones Ferdinand{users}</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
