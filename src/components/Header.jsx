import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className="header" style={{background: "#632BC6", margin: "0 auto", padding: "16px", color: "white"}}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>My Products</li>
            <li>My Sales</li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
