import {Link,Switch,Route } from "react-router-dom";
import HomePage from "./home";
import Projects from "./projects";
import Contact from "./contacts";
const Main = () => {
  return (
    <div className="main">
      <div className="header">
        <p className="title">Выберите раздел</p>
      <ul className="header-list">
        <li>
          <Link to="/home"> <span>1.</span> Обо мне</Link>
        </li>
        <li>
          <Link to="/projects"><span>2.</span> Проекты</Link>
        </li>
        <li>
          <Link to="/contact"><span>3.</span> Связь со мной</Link>
        </li>
      </ul>
      </div>
      <div className="switch">
        <Switch>
        <Route path='/home' component={HomePage}/>
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
    </div>
  );
};
export default Main;
