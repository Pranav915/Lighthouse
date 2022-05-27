import React from "react";
import "./css/bootstrap.css";
import "./css/main.css";
// import "./css/maps/main.css";
// import "./css/maps/bootstrap.css";

export const Home = () => {
  return (
    <>
      <div className="site-wrapper overflow-hidden position-relative">
        <header className="site-header site-header--menu-left landing-11-menu site-header--absolute site-header--sticky">
          <div className="container">
            <nav className="navbar site-navbar">
              <div className="brand-logo">
                <a href="/">
                  <img
                    src="image/logo/logo-black.png"
                    alt=""
                    className="light-version-logo"
                  />
                  <img
                    src="image/logo/logo-white.png"
                    alt=""
                    className="dark-version-logo"
                  />
                </a>
              </div>
              <div className="menu-block-wrapper">
                <div className="menu-overlay"></div>
                <nav className="menu-block" id="append-menu-header">
                  <div className="mobile-menu-head">
                    <div className="go-back">
                      <i className="fa fa-angle-left"></i>
                    </div>
                    <div className="current-menu-title"></div>
                    <div className="mobile-menu-close">&times;</div>
                  </div>
                  <ul className="site-menu-main">
                    <li className="nav-item nav-item-has-children">
                      <a href="/" className="nav-link-item drop-trigger">
                        Dropdowns <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub-menu" id="submenu-9">
                        <li className="sub-menu--item">
                          <a href="/">Dropdown 01</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/">Dropdown 02</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/">Dropdown 03</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="/">Dropdown 04</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link-item">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://uxtheme.net/product-support/"
                        className="nav-link-item"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-btns  header-btn-l11 ms-auto d-none d-xs-inline-flex align-items-center">
                <a className="btn log-in-btn focus-reset" href="/signup">
                  Signup
                </a>
                <a className="download-trail-btn btn focus-reset" href="/login">
                  Log In
                </a>
              </div>
              <div className="mobile-menu-trigger">
                <span></span>
              </div>
            </nav>
          </div>
        </header>
        <div className="hero-area-l11 position-relative z-index-1 overflow-hidden">
          <div className="container position-relative">
            <div className="row position-relative justify-content-center">
              <div
                className="col-xl-8 col-lg-9 col-md-12 order-lg-1 order-1"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="content">
                  <h1>
                    Landing page
                    <br className="d-none d-md-block" /> built for software.
                  </h1>
                  <div className="row banner-l-11-bottom-content">
                    <div className="col-lg-8 col-md-8 col-sm-10">
                      <p className="position-relative banner-main-content-l-11">
                        Create custom landing pages with Shades that convert
                        more visitors than any website—no coding required.
                        <span className="line-left-content"></span>
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 flex-y-center ">
                      <a className="btn l-11-hero-btn" href="/">
                        Download free trial
                      </a>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                      <div className="compitable-text border-top d-inline-block">
                        <p>Compitable with:</p>
                        <div className="compatible-icon flex-y-center img-grayscale">
                          <a href="/" className="font-size-13 mr-7">
                            <img src="./image/l2/windows.svg" alt="" />
                          </a>
                          <a href="/" className="font-size-13 mr-7">
                            <img src="./image/l2/apple.svg" alt="" />
                          </a>
                          <a href="/" className="font-size-13">
                            <img src="./image/l2/penguine.svg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-9 order-lg-1 order-0"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <img
                  src="image/l2/laptop-screen.png"
                  alt=""
                  className="w-100 hero-l11-main-image"
                />
              </div>
            </div>
          </div>
          <div className="hero-shape-l11-1 d-none d-md-block">
            <img src="./image/l2/hero-shape-1.svg" alt="" />
          </div>
          <div className="hero-shape-l11-2 d-none d-md-block">
            <img src="./image/l2/hero-shape-2.png" alt="" />
          </div>
        </div>
        <div className="brand-area-l11">
          <div className="container">
            <div className="row img-grayscale">
              <div
                className="col-lg-12"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="brand-logos d-flex justify-content-center justify-content-xl-between align-items-center flex-wrap ">
                  <div className="single-brand">
                    <img src="image/l2/brand-logo.svg" alt="" />
                  </div>
                  <div className="single-brand">
                    <img src="image/l2/brand-logo-1.svg" alt="" />
                  </div>
                  <div className="single-brand">
                    <img src="image/l2/brand-logo-2.svg" alt="" />
                  </div>
                  <div className="single-brand">
                    <img src="image/l2/brand-logo-3.svg" alt="" />
                  </div>
                  <div className="single-brand">
                    <img src="image/l2/brand-logo-4.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-area-l-11-1">
          <div className="container">
            <div className="row align-items-center justify-content-lg-start justify-content-center">
              <div
                className="col-xl-6 col-md-5 col-md-10"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="content-img position-relative z-index-1">
                  <img
                    src="image/l2/content-img1.png"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
              <div
                className="offset-xxl-1 col-xxl-5 col-xl-6 col-lg-7 col-md-9"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="content section-heading-5">
                  <h2>Build Beautiful Landing Pages Faster.</h2>
                  <p>
                    Create custom landing pages with Shades that convert more
                    visitors than any website, no coding required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-area-l-11-2">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between justify-content-center">
              <div
                className="col-xxl-4 col-xl-5 col-lg-6 col-md-9 order-lg-1 order-1"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="content section-heading-5">
                  <h2>Completely Free for Everyone.</h2>
                  <div className="d-flex content-l-11-3-card">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="27"
                      viewBox="0 0 32 27"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              className="mypath1"
                              fill="none"
                              stroke="/258aff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="20"
                              stroke-width="2"
                              d="M25.528 25.615v0h5.47v0-5.911c0-.56-.341-1.062-.86-1.27l-5.118-2.05a1.367 1.367 0 0 1-.86-1.267v-1.2a5.445 5.445 0 0 0 2.735-4.711V6.471a5.47 5.47 0 0 0-8.205-4.738"
                            ></path>
                          </g>
                          <g>
                            <path
                              className="mypath1"
                              fill="none"
                              stroke="/258aff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="20"
                              stroke-width="2"
                              d="M19.367 19.846l-5.14-2.036a1.358 1.358 0 0 1-.864-1.257v-1.192a5.394 5.394 0 0 0 2.747-4.676V7.97c0-2.999-2.46-5.43-5.495-5.43-3.034 0-5.494 2.431-5.494 5.43v2.715a5.394 5.394 0 0 0 2.747 4.676v1.192c0 .555-.342 1.054-.864 1.26l-5.14 2.036c-.52.206-.863.703-.864 1.257v4.51h19.23v0-4.51c0-.555-.342-1.054-.863-1.26z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className="content-body">
                      <h5>Easy setup process</h5>
                      <p>
                        Editing and customizing Essential Landing is easy and
                        fast.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex content-l-11-3-card">
                    <img src="image/l2/settings.svg" alt="icon" />
                    <div className="content-body">
                      <h5>Built for real users</h5>
                      <p>
                        Editing and customizing Essential Landing is easy and
                        fast.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-6 offset-xxl-2 col-xl-6 col-lg-5 col-md-9 order-lg-1 order-0"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="content-img">
                  <img
                    src="image/l2/content-img2.png"
                    alt=""
                    className="w-lg-auto w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-area-l-11-3 position-relative">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-lg-start">
              <div
                className="col-xl-6 col-lg-6 col-md-8 order-lg-1 order-0"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <div className="content-img">
                  <img
                    src="image/l2/content-img3.png"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
              <div
                className="offset-xl-1 col-xl-5 col-lg-6 col-md-9 order-lg-1 order-1"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <div className="content section-heading-5">
                  <h2>Completely Free for Everyone.</h2>
                  <p>
                    Event is not like most tech conferences. We want our
                    presentations to engage the audience, spark discussion and
                    inspire new ideas.{" "}
                  </p>
                  <ul className="list-unstyled pl-0">
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check"></i>Unlimited design
                      possibility
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check"></i>Completely responsive
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check"></i>Easy to customize
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-l-11">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 px-lg-12 col-md-12">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-center">
                    <div className="section-heading-5">
                      <h2>One Software, Every Solution</h2>
                      <p>
                        We designed and tested prototypes that helped identify
                        pain points in the account creation process. Together,
                        we shaped the new standard.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row feature-l-11-items justify-content-center">
                  <div
                    className="col-md-6"
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="d-flex ">
                      <div className="icon-box">
                        <i className="icon icon-pen-01"></i>
                      </div>
                      <div className="content-body">
                        <h5>Easy to Use</h5>
                        <p>
                          Whether it’s a small internal app or a new for
                          millions of customers, our design and development
                          teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="d-flex ">
                      <div className="icon-box">
                        <i className="icon icon-layers-3"></i>
                      </div>
                      <div className="content-body">
                        <h5>300+ Blocks</h5>
                        <p>
                          Whether it’s a small internal app or a new for
                          millions of customers, our design and development
                          teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    <div className="d-flex ">
                      <div className="icon-box">
                        <i className="icon icon-office"></i>
                      </div>
                      <div className="content-body">
                        <h5>100% Responsive</h5>
                        <p>
                          Whether it’s a small internal app or a new for
                          millions of customers, our design and development
                          teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    <div className="d-flex ">
                      <div className="icon-box">
                        <i className="icon icon-book-open-2"></i>
                      </div>
                      <div className="content-body">
                        <h5>Rich Documentation</h5>
                        <p>
                          Whether it’s a small internal app or a new for
                          millions of customers, our design and development
                          teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <div className="d-flex ">
                      <div className="icon-box">
                        <i className="icon icon-pen-01"></i>
                      </div>
                      <div className="content-body">
                        <h5>50+ Ready Pages</h5>
                        <p>
                          Whether it’s a small internal app or a new for
                          millions of customers, our design and development
                          teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <div className="d-flex ">
                      <div className="icon-box">
                        <i className="icon icon-settings-gear-64-2"></i>
                      </div>
                      <div className="content-body">
                        <h5>Quick Setup</h5>
                        <p>
                          Whether it’s a small internal app or a new for
                          millions of customers, our design and development
                          teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-area-l-11">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-xl-7 col-lg-9"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="section-heading-5 text-center">
                  <h2>30,000+ Customers Trust Us</h2>
                  <p>
                    We designed and tested prototypes that helped identify pain
                    points in the account creation process. Together, we shaped
                    the new standard.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="col-xl-10 col-lg-12 col-md-10">
                <div className="testimonial-slider-l-11 position-relative">
                  <div className="single-slide focus-reset">
                    <div className="testimonial-card">
                      <p>
                        <span className="d-inline-block quote-size-1">“</span>{" "}
                        You made it so simple. My new site is so much faster and
                        easier to work with than my old site. I just choose the
                        page, make the change and click save. Thanks, guys!”
                      </p>
                      <div className="d-flex user-details align-items-center">
                        <div className="customer-img">
                          <img src="image/l2/client-img-2.png" alt="" />
                        </div>
                        <div className="user-identity">
                          <h5>Sallie Lawson</h5>
                          <span>Founder of Crips</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slide focus-reset">
                    <div className="testimonial-card">
                      <p>
                        <span className="d-inline-block quote-size-1">“</span>{" "}
                        You made it so simple. My new site is so much faster and
                        easier to work with than my old site. I just choose the
                        page, make the change and click save. Thanks, guys!”
                      </p>
                      <div className="d-flex user-details  align-items-center">
                        <div className="customer-img">
                          <img src="image/l2/client-img-1.png" alt="" />
                        </div>
                        <div className="user-identity">
                          <h5>Ella Brooks</h5>
                          <span>Founder of Crips</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slide focus-reset">
                    <div className="testimonial-card rounded">
                      <p>
                        <span className="d-inline-block quote-size-1">“</span>{" "}
                        You made it so simple. My new site is so much faster and
                        easier to work with than my old site. I just choose the
                        page, make the change and click save. Thanks, guys!”
                      </p>
                      <div className="d-flex user-details  align-items-center">
                        <div className="customer-img">
                          <img src="image/l2/client-img-2.png" alt="" />
                        </div>
                        <div className="user-identity">
                          <h5>Sallie Lawson</h5>
                          <span>Founder of Crips</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter-l-11">
          <div className="container">
            <div className="row justify-content-center news-l-11-main-bg position-relative">
              <div className="news-l-11-second-bg w-100 h-100"></div>
              <div
                className="col-xxl-6 col-xl-7 col-lg-8 col-md-11"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="content text-center">
                  <h5>Try our free software!</h5>
                  <h2>Try our free software!</h2>
                  <p>
                    We designed and tested prototypes that helped identify pain
                    points in the account creation process. Together, we shaped
                    the new standard.
                  </p>
                  <div className="btn-area">
                    <a href="/" className="btn">
                      <i className="fas fa-download d-inline-block"></i>{" "}
                      Download Free Trial
                    </a>
                  </div>
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-l-11 text-center text-md-start">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-logo-l-11">
                  <a href="/">
                    <img src="image/logo/logo-black.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-widget-l-11">
                  <ul className="pl-0 list-unstyled d-flex flex-wrap justify-content-center align-items-end ">
                    <li className="d-flex">
                      <a href="">About</a>
                    </li>
                    <li className="d-flex">
                      <a href="">Features</a>
                    </li>
                    <li className="d-flex">
                      <a href="">Works</a>
                    </li>
                    <li className="d-flex">
                      <a href="">Career</a>
                    </li>
                    <li className="d-flex">
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="social-icons-l-11">
                  <ul className="pl-0 list-unstyled d-flex  justify-content-center justify-content-md-end align-items-end ">
                    <li className="d-flex flex-column justify-content-center">
                      <a href="/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="d-flex flex-column justify-content-center">
                      <a href="/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="d-flex flex-column justify-content-center">
                      <a href="/">
                        <i className="fab fa-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright-area-l-11">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <p>© Grayic 2021 All right reserved. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="js/vendor.min.js"></script>
      <script src="./plugins/aos/aos.min.js"></script>
      <script src="./plugins/slick/slick.min.js"></script>
      <script src="./plugins/menu/menu.js"></script>
      <script src="js/custom.js"></script>
    </>
  );
};
