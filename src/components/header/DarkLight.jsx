import sunIcon from "../../assets/desktop/icon-sun.svg";
import moonIcon from "../../assets/desktop/icon-moon.svg";

// using context
import { useAppContext } from "../../context/appContext";

export default function DarkLight() {
  const { setTheme, theme } = useAppContext();

  return (
    <div className="dark-light">
      <img src={sunIcon} alt="sunicon" />
      <div
        className={`checkbox ${theme && "active"}`}
        onClick={() => setTheme((prev) => !prev)}
      ></div>
      <img src={moonIcon} alt="moonicon" />
    </div>
  );
}
