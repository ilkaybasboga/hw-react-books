import React, { useState } from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";
import { useTranslation } from 'react-i18next';
import { ButtonTr, ButtonEn } from "./Navbar.style";
import i18next from "i18next";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();

  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
  };
const langChangeHandle =(lang)=>{
i18next.changeLanguage(lang)
localStorage.setItem('current-language', lang);

}
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/" sx={{}}>{t("navbar.name")}</Logo>
      <div>
      <ButtonTr onClick={()=>langChangeHandle("tr")}>Türkçe</ButtonTr>
      <ButtonEn onClick={()=>langChangeHandle("en")}>English</ButtonEn></div>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">{t("navbar.home")}</MenuLink>
        <MenuLink to="/about">{t("navbar.about")}</MenuLink>
        {/* <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/login">Login</MenuLink>
        <MenuLink to="/login">Logout</MenuLink> */}

        {currentUser ? (
          <MenuLink to="/login" onClick={logout}>
            {t("navbar.logout")}
          </MenuLink>
        ) : (
          <>
            <MenuLink to="/register">{t("navbar.register")}</MenuLink>
            <MenuLink to="/login">{t("navbar.login")}</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
