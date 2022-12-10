import styled from "styled-components";
import { sizes, text } from "../../utils/variables";
import { motion } from "framer-motion";

export const H1 = ({
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
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.h1)`
  display: flex;
  flex-direction: row;
  margin: 0 0 20px 0;
  z-index: 2;
  font-weight: ${text.h1.weight};
  font-size: ${text.h1.xl};

  ${({xl}) => xl};

  @media (max-width: ${sizes.lg}) {
    font-size: ${text.h1.lg};
    ${({lg}) => lg};
  }

  @media (max-width: ${sizes.md}) {
    font-size: ${text.h1.md};
    ${({md}) => md};
  }

  @media (max-width: ${sizes.sm}) {
    font-size: ${text.h1.sm};
    ${({sm}) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({xs}) => xs};
  }
`;
