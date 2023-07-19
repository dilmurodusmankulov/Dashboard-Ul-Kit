import "./sidebar.css";
import Logo from "../assets/images/icons/logo.jsx";
import SidebarBtn from "../components/SidebarBtn";
import {
  Chart,
  Tickets,
  Ideas,
  Contacts,
  Agents,
  Articles,
  Settings,
  Subscription,
} from "../assets/Icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Logo />
        <h1>Dashboard Kit</h1>
      </div>
      <SidebarBtn img={<Chart />} title="Overview" />
      <SidebarBtn img={<Tickets />} title="Tickets" />
      <SidebarBtn img={<Ideas />} title="Ideas" />
      <SidebarBtn img={<Contacts />} title="Contacts" />
      <SidebarBtn img={<Agents />} title="Agents" />
      <SidebarBtn img={<Articles />} title="Articles" />
      <SidebarBtn img={<Settings />} title="Settings" />
      <SidebarBtn img={<Subscription />} title="Subscription" />
    </div>
  );
};

export default Sidebar;
