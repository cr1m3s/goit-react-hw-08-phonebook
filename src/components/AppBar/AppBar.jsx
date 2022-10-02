import Navigation from "../Navigation";
import NavAuth from "../NavAuth";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import style from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={style.header}>
      <p className={style.link}>
        <span className={style.phone}>Phone</span>book
      </p>
      {isLoggedIn ? <Navigation /> : <NavAuth />}
    </header>
  );
};

export default AppBar;
