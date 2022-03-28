import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
<div className="mt-5 pt-5 pb-5 footer">
<div className="container">
  <div className="row">
    <div className="col-lg-3 col-xs-12 about-company">
      <h2>About Us</h2>
      <p className="pr-5 text-white-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
      <p><a href="https://facebook.com"><i className="fab fa-facebook-square mr-1"></i></a><a href="https://linkendin"><i className="fab fa-linkedin ms-2"></i></a><a href="https://linkendin"><i className="fab fa-instagram-square ms-2"></i></a></p>
        <img src='images/main-logo.png' alt='clinic logo'></img>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h3 className="mt-lg-0 mt-sm-3">Services</h3>
        <ul className="m-0 p-0">
          <li>- <Link to="/">Lorem ipsum</Link></li>
          <li>- <Link to="/">Nam mauris velit</Link></li>
          <li>- <Link to="/">Etiam vitae mauris</Link></li>
          <li>- <Link to="/">Fusce scelerisque</Link></li>
          <li>- <Link to="/">Sed faucibus</Link></li>
          <li>- <Link to="/">Mauris efficitur nulla</Link></li>
        </ul>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h3 className="mt-lg-0 mt-sm-3">Galleries</h3>
        <ul className="m-0 p-0">
          <li>- <Link to="/">Lorem ipsum</Link></li>
          <li>- <Link to="/">Nam mauris velit</Link></li>
          <li>- <Link to="/">Etiam vitae mauris</Link></li>
          <li>- <Link to="/">Fusce scelerisque</Link></li>
          <li>- <Link to="/">Sed faucibus</Link></li>
          <li>- <Link to="/">Mauris efficitur nulla</Link></li>
        </ul>
    </div>
    <div className="col-lg-3 col-xs-12 location">
      <h3 className="mt-lg-0 mt-sm-4">Contact Us</h3>
      <p><i className="fas fa-map-marked-alt"></i>&nbsp;22, Lorem ipsum dolor, consectetur adipiscing</p>
      <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
      <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col copyright">
      <p className=""><small className="text-white-100">Designed and Seo By© <a href='https://softgenics.in'>SoftGenics</a></small></p>
    </div>
  </div>
</div>
</div>
  )
}

export default Footer