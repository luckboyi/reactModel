import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const HomePage = () => (
  <div>
    <Button />
  </div>
);
const AboutPage = () => <div>This is a About Page</div>;
const BaseLayout = () => (
  <div className="base">
    <header>
      <p>react-router demo</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </header>
  </div>
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>demo</h2>
          <BrowserRouter>
            <BaseLayout />
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
