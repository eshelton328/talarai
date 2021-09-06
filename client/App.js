import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./src/pages/Home.js'));
const About = React.lazy(() => import('./src/pages/About.js'));
const Services = React.lazy(() => import('./src/pages/Services.js'));
const Functionality = React.lazy(() => import('./src/pages/Functionality.js'));
const Contact = React.lazy(() => import('./src/pages/Contact.js'));

const App = () => {
	return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/functionality' component={Functionality} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Suspense>
    </Router>
	);
};

export default App;