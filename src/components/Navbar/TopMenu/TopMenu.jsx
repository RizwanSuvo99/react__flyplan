export default function TopMenu() {
  return (
    <div className="top-menu">
      <div className="container">
        <div className="top-menu-left">
          <div className="phone top-menu-item top-menu-left-item">
            <a href="#">
              <i className="fa fa-phone"></i>
            </a>
            <a href="#">
              <span>555-555-555</span>
            </a>
          </div>
          <div className="social-btn top-menu-item top-menu-left-item">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <div className="top-menu-mobile top-menu-item top-menu-left-item">
            <i className="fa fa-bars"></i>
          </div>
        </div>

        <div className="top-menu-right">
          <div className="register top-menu-item top-menu-right-item">
            <a href="#">
              <i className="icon ion-android-person-add"></i>
            </a>
            <a href="#">
              <span>register</span>
            </a>
          </div>
          <div className="login top-menu-item top-menu-right-item">
            <a href="#">
              <i className="icon ion-android-unlock"></i>
            </a>
            <a href="#">
              <span>login</span>
            </a>
          </div>
          <div className="currency top-menu-item top-menu-right-item">
            <a href="#" className="active-currency" id="active-currency">
              <span>$ usd</span>
            </a>
            <a href="#" id="currency">
              <i className="fa fa-angle-down"></i>
            </a>
            <div className="currency-list d-none" id="currency-list">
              <a href="#">
                <span>$ usd</span>
              </a>
              <a href="#">
                <span>৳ bdt</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
