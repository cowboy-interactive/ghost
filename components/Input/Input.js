import styled from "styled-components";
import { sizes, themes } from "utils/variables";
import { motion } from "framer-motion";
import { useTheme } from "utils/provider";
import { useRouter } from "next/router";

export const Input = ({
  children,
  xl,
  lg,
  md,
  sm,
  xs,
  initial = {},
  whileInView = {},
  viewport = {},
  transition = {},
  href = "/",
  target,
  placeholder
}) => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <Cont
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      backround={themes[theme].button}
      color={themes[theme].buttonText}
      target="_blank"
      placeholder={placeholder}
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.input)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  padding: 0 20px;
  border-radius: 25px;
  transition: 0.1s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-weight: 600;
  border: none;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
   box-sizing: border-box; 
  background: ${(props) => props.backround}};
  color: ${(props) => props.color}};

  ${({ xl }) => xl};
  @media (max-width: ${sizes.lg}) {
    ${({ lg }) => lg};
  }

  @media (max-width: ${sizes.md}) {
    ${({ md }) => md};
  }

  @media (max-width: ${sizes.sm}) {
    ${({ sm }) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({ xs }) => xs};
  }
`;
