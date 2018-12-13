import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Header = () => {
  return(
      <div className="header">
          <a href="#default" className="logo">CompanyLogo</a>
          <div className="header-right">
              <a className="active" href="#home">Home</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
          </div>
      </div>
  )
};

const Content = () => {
  return(
      <div className="content">
          <h1>Responsive Header</h1>
          <p>Resize the browser window to see the effect.</p>
          <p>Some content..</p>
      </div>
  )
}

const SideBar = () => {
  return (
      <div className="sidebar">
          <a href="#home"><i className="fa fa-fw fa-home"></i> Home</a>
          <a href="#services"><i className="fa fa-fw fa-wrench"></i> Services</a>
          <a href="#clients"><i className="fa fa-fw fa-user"></i> Clients</a>
          <a href="#contact"><i className="fa fa-fw fa-envelope"></i> Contact</a>
      </div>
  )
}

const Footer = () => {
  return (
      <div className='footer'>
        <p>Footer</p>
      </div>
  )
}

const App = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <Content />
            <Footer />
        </div>
    )
};



export default App;
