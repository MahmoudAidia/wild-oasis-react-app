import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { motion } from "framer-motion";

const StyledAside = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledAside>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Logo />
      </motion.span>
      <MainNav />
    </StyledAside>
  );
}

export default Sidebar;
