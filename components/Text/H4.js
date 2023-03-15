import styled from "styled-components";
import { motion } from "framer-motion";
import { sizes } from "utils/variables";
import { font } from "utils/variables/font";

export const H4 = ({
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

const Cont = styled(motion.h4)`
  display: flex;
  flex-direction: row;
  font-family: GeneralSans-Bold;
  font-weight: ${font.h4.weight};
  font-size: ${font.h4.lg};
  -webkit-text-stroke: 1px black;
  color: transparent;
  margin: 0 0 20px 0;
  text-align: center;



  ${({xl}) => xl};

  @media (max-width: ${sizes.lg}) {
    ${({lg}) => lg};
  }

  @media (max-width: ${sizes.md}) {
    ${({md}) => md};
  }

  @media (max-width: ${sizes.sm}) {
    ${({sm}) => sm};
    font-size: ${font.h4.sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({xs}) => xs};
  }
`;
