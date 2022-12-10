import styled from "styled-components";
import { sizes, themes } from "utils/variables";
import { motion } from "framer-motion";
import { useTheme } from "utils/provider";

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
  className,
}) => {
  const { theme } = useTheme();
  return (
    <Cont
      className={className}
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      backround={themes[theme].primary}
      color={themes[theme].secondary}
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.button)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  padding: 40px;
  width: 100%;
  min-height: 200px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.2s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border: 2px solid ${(props) => props.color}};
  background: ${(props) => props.backround}};
  color: ${(props) => props.color}};

  &:hover {
    filter: brightness(110%);
    box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25);
  }

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
