import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import darkLogo from "/public/logo-dark.png";
import lightLogo from "/public/logo-light.png";
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  // const src = isDarkMode ? `logo-light.png` : "logo-light.png";
  return (
    <StyledLogo>
      <Img src={isDarkMode ? darkLogo : lightLogo} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
