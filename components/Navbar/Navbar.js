import styled from "styled-components";
import { sizes, themes } from "../../utils/variables";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../../utils/provider";
import { Link } from "../Link/Link";
import ThemeSwitch from "../Switch/ThemeSwitch";
import { Container } from "../Container/Container";
import { links } from "./data";
import { Button } from "../Button/Button";

export const Navbar = ({
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
  const [showMenu, setShowMenu] = useState(false);

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
      background={themes[theme].primary}
      color={themes[theme].text}
      boxShadow={showMenu ? "0" : "0px 4px 20px rgba(0, 0, 0, 0.1)"}
    >
      <Link
        href={"/"}
        setShowMenu={setShowMenu}
        xl={"font-size: 20px; font-weight: 500;"}
      >
        Cowboy UI
      </Link>
      <Container xl={"align-items: center;"}>
        {links.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.url}
              setShowMenu={setShowMenu}
              xl={"font-size: 16px; font-weight: 500; margin: 0 40px 0 0"}
              sm={"display: none"}
            >
              {item.text}
            </Link>
          );
        })}
        <ThemeSwitch />
        <Button xl={"margin: 0 0 0 40px;"} sm={"display: none"}>Contact Us</Button>
      </Container>
    </Cont>
  );
};

const Cont = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  box-sizing: border-box;
  border-bottom: 2px solid ${(props) => props.color}};
  box-shadow: ${({ boxShadow }) => boxShadow};
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );

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
