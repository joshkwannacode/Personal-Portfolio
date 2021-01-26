import React, { useLayoutEffect, useState } from "react";
import FrontPage from "./components/FrontPageSection/FrontPage";
import Projects from "./components/ProjectSection/Projects";
import Skills from "./components/SkillsSection/Skills";
import About from "./components/AboutSection/About";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    window.onload = (event) => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };
  }, []);
  return (
    <>
      {!isLoading ? (
        <div className="page-container">
          <div className="content-wrap">
            <Router>
              <AnimatePresence>
                <Switch>
                  <Route exact path="/" component={FrontPage} />
                  <Route exact path="/Projects" component={Projects} />
                  <Route exact path="/Skills" component={Skills} />
                  <Route exact path="/About" component={About} />
                </Switch>
              </AnimatePresence>
            </Router>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
