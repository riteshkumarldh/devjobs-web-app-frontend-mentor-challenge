import { Link } from "react-router-dom";
import logo from "../../assets/desktop/logo.svg";

export default function Logo() {
  return (
    <Link to={"/"}>
      <img src={logo} alt="logo" width={115} height={32} />
    </Link>
  );
}
