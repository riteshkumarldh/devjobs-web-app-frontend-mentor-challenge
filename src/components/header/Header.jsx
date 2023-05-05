// components
import Logo from "./Logo";
import DarkLight from "./DarkLight";

// scss
import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Logo />
        <DarkLight />
      </div>
    </header>
  );
}
