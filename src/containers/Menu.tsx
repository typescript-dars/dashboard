import { NavLink } from "react-router-dom";
import "../style/Menu.scss";
import MENU1 from "../assets/Vector.svg";

const Menu = ({ first }: { first: boolean }) => {
  return (
    <div className={first ? "menu max-width" : "menu min-width"}>
      <div className="in-menu">
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
          to={"/"}
        >
          <img src={MENU1} alt="menu1" />
          <p>Overview</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
          to={"/tickets"}
        >
          <img src={MENU1} alt="menu1" />
          <p>Tickets</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
          to={"/agents"}
        >
          <img src={MENU1} alt="menu1" />
          <p>Agents</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
          to={"/ideas"}
        >
          <img src={MENU1} alt="menu1" />
          <p>Ideas</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
          to={"/contacts"}
        >
          <img src={MENU1} alt="menu1" />
          <p>Contacts</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
          to={"/articles"}
        >
          <img src={MENU1} alt="menu1" />
          <p>Articles</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
