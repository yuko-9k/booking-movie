import React from "react";
import logo from "../../../staticFile/images/web-logo.png";
import avatar from "../../../staticFile/images/avatar.png";
import MenuCity from "../../component/Menu/menucity";
import RightDrawer from "../../component/Navigation/drawerUserMobile";

export default function HeaderComponent() {
  return (
    <header id="toTop">
      <div className="header-content">
        <img className="img-logo" src={logo} alt="logo" />
        <div className="nav">
          <ul>
            <li>
              <a href="#">Lịch Chiếu</a>
            </li>
            <li>
              <a href="#">Cụm rạp</a>
            </li>
            <li>
              <a href="#">Tin Tức</a>
            </li>
            <li>
              <a href="#">Ứng dụng</a>
            </li>
          </ul>
        </div>
        <div className="user">
          <div className="user-login">
            <img src={avatar} alt="avatar" />
            <a className="m-0">Đăng Nhập</a>
          </div>
          <MenuCity />
        </div>
        <div className="userMobile" style={{ display: "none" }}>
          <RightDrawer />
        </div>
      </div>
    </header>
  );
}
