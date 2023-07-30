"use client";

import Switch from "react-switch";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Header as HeaderContainer,
  IconWrapper,
  Title,
} from "@/src/assets/styles/Header.styled";
import { RootState } from "@/src/redux/store";
import { toggleTheme } from "@/src/redux/slices/appSlice";
import { black, pink } from "@/src/assets/styles/Colors";

import Moon from "@/src/assets/images/moon.png";
import Sun from "@/src/assets/images/sun.png";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";

/**
 * Header component
 */
const Header = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const theme = useAppSelector((state: RootState) => state.app.theme);

  /**
   * Toggle theme to dark or light
   */
  const handleChange = () => {
    dispatch(toggleTheme());
  };

  /**
   * Moon icon
   */
  const checkedIcon = (
    <IconWrapper>
      <Image width={20} height={20} src={Moon} alt="moon" />
    </IconWrapper>
  );

  /**
   * Sun icon
   */
  const uncheckedIcon = (
    <IconWrapper>
      <Image width={20} height={20} src={Sun} alt="sun" />
    </IconWrapper>
  );

  /**
   * Default font-size and color of header title
   */
  let titleFontSize = "1.4rem";
  let titleColor = pink;
  if (pathname === "/") {
    /**
     * Change the font-size and color for home page only
     */
    titleFontSize = "2rem";
    titleColor = "";
  }

  return (
    <HeaderContainer>
      <Title color={titleColor} fontSize={titleFontSize}>
        <Link href="/">{"Overreacted"}</Link>
      </Title>
      <Switch
        checked={theme === "dark"}
        onChange={handleChange}
        onColor={black}
        offColor={black}
        boxShadow={`0px 0px 1px 2px ${pink}`}
        activeBoxShadow={`0px 0px 1px 2px ${pink}`}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </HeaderContainer>
  );
};

export default Header;
