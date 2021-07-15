import React from "react";
import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
import Fac from "./Fac";
import Home from "./Home";
import F04 from "./F04";

const Lnk = () => {
    return <>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/fac">Fac</Link>
    </>
}
function App() {
  return (
    <BrowserRouter>
        <Lnk/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/fac" exact component={Fac} />
        <Route path="*" component={F04} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
