import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const naviagte = useNavigate();
  const locationArr = location.pathname.split("/");

  return (
    <div className="flex gap-x-7 w-full">
      <div>
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li onClick={() => naviagte("/profile")}>
            <a className={locationArr.length == 2 ? "active" : ""}>Profile</a>
          </li>
          <li onClick={() => naviagte("address")}>
            <a className={locationArr[2] === "address" ? "active" : ""}>
              Address
            </a>
          </li>
          <li onClick={() => naviagte("authentication")}>
            <a className={locationArr[2] === "authentication" ? "active" : ""}>
              Authentication
            </a>
          </li>
          <li onClick={() => naviagte("orders")}>
            <a className={locationArr[2] === "orders" ? "active" : ""}>
              Orders
            </a>
          </li>
          <li onClick={() => naviagte("payment_methods")}>
            <a className={locationArr[2] === "payment_methods" ? "active" : ""}>
              Payment Methods
            </a>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
