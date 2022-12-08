import styled from "styled-components";
import { sizes, themes } from "../../utils/variables";
import { motion } from "framer-motion";
import { useTheme } from "../../utils/provider";

export const Card = ({
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
}) => {
  const { theme } = useTheme();
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
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  border-radius: 25px;
  transition: 0.2s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border: 0px;
  font-weight: 500;
  background: ${(props) => props.backround}};
  color: ${(props) => props.color}};

  &:hover {
    filter: brightness(110%);
    box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25);
  }

  ${({xl}) => xl};

  @media (max-width: ${sizes.lg}) {
    ${({lg}) => lg};
  }

  @media (max-width: ${sizes.md}) {
    ${({md}) => md};
  }

  @media (max-width: ${sizes.sm}) {
    ${({sm}) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({xs}) => xs};
  }
`;
