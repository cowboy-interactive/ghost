import styled from "styled-components";
import { sizes } from "utils/variables";
import { motion } from "framer-motion";

export const Section = ({
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

const Cont = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
  padding: 0 20%;

  ${({xl}) => xl};

  @media (max-width: ${sizes.lg}) {
    ${({lg}) => lg};
  }

  @media (max-width: ${sizes.md}) {
    padding: 0 5%;
    ${({md}) => md};
  }

  @media (max-width: ${sizes.sm}) {
    flex-direction: column;
    margin: 60px 0;
    ${({sm}) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({xs}) => xs};
  }
`;
