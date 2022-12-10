import styled from "styled-components";
import { sizes } from "../../utils/variables";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const Link = ({
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
  href,
  setShowMenu = () => {},
}) => {
  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href).then(() => {
      setShowMenu(false);
    });
  };

  //Handle Enter Key on Tab Navigation
  const handleKeyDown = (e, href) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(href).then(() => {
        setShowMenu(false);
      });
    }
  };

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
      onClick={(e) => handleClick(e, href)}
      tabIndex="0"
      onKeyDown={(e) => handleKeyDown(e, href)}
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.p)`
  display: flex;
  flex-direction: row;
  cursor: pointer;

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
