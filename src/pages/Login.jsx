import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Logo />
      </motion.div>
      <motion.div
        initial={{ x: "800px" }}
        animate={{ x: "0px" }}
        transition={{ duration: 0.3 }}
      >
        <Heading as="h4">Login to your account</Heading>
      </motion.div>{" "}
      <motion.div
        initial={{ y: "500px" }}
        animate={{ y: "0px" }}
        transition={{ duration: 0.3 }}
      >
        <LoginForm />
      </motion.div>
    </LoginLayout>
  );
}

export default Login;
