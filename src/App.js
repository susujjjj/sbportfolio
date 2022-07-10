import React, { useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";

//pages
import Projects from "./pages/projects";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";

//routes
const routes = [
  { path: "/sbportfolio", name: "Home", Component: Home },
  { path: "/projects", name: "Projects", Component: Projects },
  { path: "/approach", name: "approach", Component: Approach },
  { path: "/services", name: "services", Component: Services },
  { path: "/about", name: "about", Component: About },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } }); //preventing flash from happening.
    //grab inner height of window for mobile reasons when dealing with vh
    // let vh = dimensions.height * 0.01;
    // let vh = window.innerHeight * 0.01;

    //set css varible vh
    // document.documentElement.style.setProperty("--vh", `${vh}px`);

  const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  },[]);

  return (
    <>
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
