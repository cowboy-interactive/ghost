
# Cowboy Interactive Next JS System 2023

A customizable, responsive, and easy to use template created with Next JS, Styled Components and Framer Motion.


## Get Started

To get started clone this repository and run:

```
npm install
npm run dev
```
This will install the nessecary dependencies and run your site locally.

## Components

Components are built using styled components and pass down sizes as props. These sizes control media queries and can be adjusted in /utils/variables/sizes. Compnents all use the same base structure:

```jsx
import styled from "styled-components";
import { sizes } from "../../utils/variables";
import { motion } from "framer-motion";

export const Container = ({
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

const Cont = styled(motion.div)`
  display: flex;

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
```

This allows for custom styling per media query from the top level using regular css:

```jsx
<Container
  xl={"width: 1000px;"}
  lg={"width: 750px;"}
  lg={"width: 650px;"}
  sm={"width: 550px;"}
  xs={"width: 450px;"}
>
```

Motion props include initial, whileInView, viewport, transition. To get a simple fade-in animation on scroll use: 

```jsx
<Container
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ ease: "easeOut", duration: 1 }}
>
```
