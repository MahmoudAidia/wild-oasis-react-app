import styled, { css } from "styled-components";
const Heading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  ${(props) =>
    props.bgRed === "True" &&
    css`
      background-color: #fff;
    `}

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `} 
     ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
`;

export default Heading;
