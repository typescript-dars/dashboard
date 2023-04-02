import { useState } from "react";
import Header from "./containers/Header";
import Menu from "./containers/Menu";
import Roots from "./roots/Roots";
import "./style/App.scss";

const App = () => {
  const [first, setfirst] = useState(true);
  return (
    <div className="app">
      <Menu first={first} />
      <div className="in-app">
        <Header setfirst={setfirst} />
        <Roots />
      </div>
    </div>
  );
};

export default App;
