import styled from "styled-components";
import { sizes, themes } from "utils/variables";
import { motion } from "framer-motion";
import { useTheme } from "utils/provider";
import { useRouter } from "next/router";

export const Button = ({
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
}) => {
  const { theme } = useTheme();
  const router = useRouter();

  //Handle Click Button
  const handleClick = (e, href) => {
    e.preventDefault();
    if (target == "_blank") {
      window.open(href, "_blank");
      return;
    }
    if (href) {
      router.push(href);
    }
  };

  //Handle Enter Key on Tab Navigation
  const handleKeyDown = (e, href) => {
    if (e.key === "Enter" && href && target !== "_blank") {
      e.preventDefault();
      router.push(href);
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
      backround={themes[theme].button}
      color={themes[theme].buttonText}
      onClick={(e) => handleClick(e, href)}
      onKeyDown={(e) => handleKeyDown(e, href)}
      target="_blank"
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
  transition: 0.1s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-weight: 600;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
   box-sizing: border-box; 
  border: 1px solid ${(props) => props.color}};
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
