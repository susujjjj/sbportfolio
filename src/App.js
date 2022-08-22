import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { gsap } from 'gsap';
import './styles/App.scss';
import Header from './components/header';
import Navigation from './components/navigation';
import Projects from './pages/projects';
import Approach from './pages/approach';
import About from './pages/about';
import Home from './pages/home';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/approach', name: 'approach', Component: Approach },
  { path: '/projects', name: 'Projects', Component: Projects },
  { path: '/about', name: 'about', Component: About },
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
    // prevents flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });
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
