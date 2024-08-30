const Footer = ({ bg, extraClass }) => {
  return (
      <footer
        className={`main-footer ${bg ? bg : "black"}-bg ${
          extraClass ? extraClass : ""
        }`}
      >
        <div className="container">
          {/*=== Footer CTA ===*/}
          <div className="footer-cta pt-80 pb-40">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Single CTA Item ===*/}
                <div className="single-cta-item pr-lg-60 mb-40">
                  <div className="icon">
                    <img src="assets/images/icon/support.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">
                      Need Any Support For Tour &amp; Travels ?
                    </h3>
                    <a href="#" className="icon-btn">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== Single CTA Item ===*/}
                <div className="single-cta-item pl-lg-60 mb-40">
                  <div className="icon">
                    <img src="assets/images/icon/travel.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">
                      Ready to Get Started With Vacations!
                    </h3>
                    <a href="#" className="icon-btn">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Footer Widget ===*/}
          <div className="footer-widget-area pt-75 pb-30">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget about-company-widget mb-40">
                  <h4 className="widget-title">Address</h4>
                  <div className="footer-content">
                    <p>
                      Jl. Peltu Sujono No. 25, Kota Malang 65148
                    </p>
                    <a href="localhost:3000" className="footer-logo">
                      <img
                        src={
                          bg === "gray"
                            ? "assets/images/logo/logo-black.png"
                            : "assets/images/logo/logo-white.png"
                        }
                        alt="Site Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget service-nav-widget mb-40 pl-lg-70">
                  <h4 className="widget-title">Services</h4>
                  <div className="footer-content">
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">General Sunday Service</a>
                      </li>
                      <li>
                        <a href="#">Filadelfia Shining Kids</a>
                      </li>
                      <li>
                        <a href="#">Filadelfia Youth Ministry</a>
                      </li>
                      <li>
                        <a href="#">Worship Night</a>
                      </li>
                      <li>
                        <a href="#">Filadelfia Couple Fellowship</a>
                      </li>
                      <li>
                        <a href="#">Small Group</a>
                      </li>
                    </ul>
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">Need a Career ?</a>
                      </li>
                      <li>
                        <a href="#">Latest News &amp; Blog</a>
                      </li>
                      <li>
                        <a href="#">Core Features</a>
                      </li>
                      <li>
                        <a href="#">Meet Our teams</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100">
                  <h4 className="widget-title">Our Social Media</h4>
                  <div className="footer-content">
                    <div className="icon">
                      <i className="far fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <span className="title">Church Address</span>
                      <h5>25 Peltu Sujono Street, Malang</h5>
                    </div>
                    <form>
                      <div className="form_group">
                        <label>
                          <i className="far fa-paper-plane" />
                        </label>
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Footer Copyright ===*/}
          <div className="footer-copyright bg-black text-white">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Footer Text ===*/}
                <div className="footer-text">
                  <p>
                    &copy; 2024 GKB Filadelfia Malang. All Right Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};
export default Footer;
