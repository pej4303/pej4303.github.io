import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import PageContent from "../page-content";
import PageFooter from "../page-footer";
import PageNavigator from "../page-navigator";
import { getValueFromLocalStorage } from "../../../utils/localStorage";
import { DARK_THEME_COLORS, LIGHT_THEME_COLORS } from "../../../constants/themeConstants";
import GlobalStyle from "../../../styles";

const PageLayout = ({ children }) => {
  const [theme, setTheme] = useState(getValueFromLocalStorage('isDarkMode') ? DARK_THEME_COLORS : LIGHT_THEME_COLORS);

  useEffect(() => {
    setTheme(getValueFromLocalStorage('isDarkMode') ? DARK_THEME_COLORS : LIGHT_THEME_COLORS);

    const handleThemeChange = () => {
      setTheme(getValueFromLocalStorage('isDarkMode') ? DARK_THEME_COLORS : LIGHT_THEME_COLORS);
    };

    // Add event listener for theme change
    window.addEventListener("theme", handleThemeChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("theme", handleThemeChange);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <PageWrapper>
        <PageNavigator/>
        <PageContent contents={children} />
      </PageWrapper>
      <PageFooter/>
    </ThemeProvider>
  );
};

const PageWrapper = styled.div`
  @media(max-width: 768px) {
    padding: 0 10px;
  }

  height: auto;
  min-height: 100%;
  margin-bottom: 70px;
`;

export default PageLayout;
