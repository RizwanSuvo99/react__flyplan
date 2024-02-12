import MainMenu from "./MainMenu/MainMenu";
import TopMenu from "./TopMenu/TopMenu";

export default function Navbar() {
  return (
    <header className="section header">
      <TopMenu />
      <MainMenu />
    </header>
  );
}
