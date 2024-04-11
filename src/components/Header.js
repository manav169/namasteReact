import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

    useEffect(() => {
       console.log("useeffect called");
    },[btnNameReact])

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img src={LOGO_URL} alt="App Logo" className="w-20 ml-6" />
        </div>
        <div>
          <div className="flex items-center ">
            <ul className="flex p-4 m-4">
              <li className="px-4">
                Online Status: {onlineStatus ? "✅" : "🔴"}
              </li>
              <li className="px-4">
                <Link to="/">Home</Link>
              </li>
              <li className="px-4">
                <Link to="/about">About Us</Link>
              </li>
              <li className="px-4">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="px-4">
                <Link to="/grocery">Grocery</Link>
              </li>
              <li to="/cart" className="px-4">
                Cart
              </li>
              <button
                className="login"
                onClick={() => {
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                }}
              >
                {btnNameReact}
              </button>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;