import logoImg from "../../../assets/images/icon.jpg";

export default function MainMenu() {
  return (
    <div className="menu">
      <div className="container">
        <nav className="navbar">
          <ul className="desktop-menu">
            <li>
              <a href="#" className="active-item">
                home
              </a>
            </li>
            <li>
              <a href="#">pages</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">
                <i className="icon ion-android-more-horizontal"></i>
              </a>
            </li>
          </ul>
          <ul className="mobile-menu">
            <li>
              <a href="#">
                <i className="icon ion-android-more-horizontal"></i>
              </a>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <a href="#">
            <img src={logoImg} alt="FlyPlan" />
          </a>
          <h1 className="brand-name">
            <a href="#">flyplan</a>
          </h1>
        </div>

        <div className="search">
          <form>
            <input type="text" placeholder="search..." />
            <button type="submit">
              <i className="icon ion-android-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
