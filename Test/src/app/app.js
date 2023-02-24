import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Value from './components/value';
import User from './components/user';
import User2 from './components/user2';
import NotFound from './components/notFound';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/value' element={<Value />} />
          <Route path='/value/:number' element={<Value />} />
          <Route path='/user' element={<User />} />
          <Route path='/user2' element={<User2 />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    )
  }
}

export default App;