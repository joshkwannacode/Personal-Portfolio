import React from "react";
import FrontPage from "./components/FrontPage";
import Projects from "./components/ProjectSection/Projects";
import Skills from "./components/SkillsSection/Skills";
import Resume from "./components/Resume";
import About from "./components/About";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <AnimatePresence>
            <Switch>
              <Route exact path="/" component={FrontPage} />
              <Route exact path="/Projects" component={Projects} />
              <Route exact path="/Skills" component={Skills} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Resume" component={Resume} />
            </Switch>
          </AnimatePresence>
        </Router>
      </div>
    </div>
  );
}

export default App;