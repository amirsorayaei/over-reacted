"use client";

import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import { dark, light } from "@/src/assets/styles/Theme.styled";
import { useAppSelector } from "@/src/redux/hooks";
import { RootState } from "@/src/redux/store";

interface Props {
  children: React.ReactNode;
}

/**
 * Theme provider component
 *
 * This component wrap the entire children on styled-components ThemeProvider to
 * easily manage toggling themes
 */
const ThemeProvider = ({ children }: Props) => {
  const theme = useAppSelector((state: RootState) => state.app.theme);

  return (
    <StyledComponentsThemeProvider theme={theme === "dark" ? dark : light}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
