import styled from "styled-components";
import { sizes, text } from "../../utils/variables";
import { motion } from "framer-motion";

export const Text = ({
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

const Cont = styled(motion.p)`
  display: flex;
  flex-direction: row;
  line-height: 1.65;
  margin: 0 0 40px 0;
  font-weight: ${text.p.weight};
  font-size: ${text.p.lg};

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
