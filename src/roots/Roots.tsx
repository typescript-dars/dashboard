import { Route, Routes } from "react-router-dom";
import Agents from "../components/Agents";
import Articles from "../components/Articles";
import Contacts from "../components/Contacts";
import Ideas from "../components/Ideas";
import Overview from "../components/Overview";
import Tickets from "../components/Tickets";

const Roots = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
};

export default Roots;
