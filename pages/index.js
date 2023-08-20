import { useState } from "react";
import { Button } from "components/Button/Button";
import { Card } from "components/Card/Card";
import { Container } from "components/Container/Container";
import { Column } from "components/Container/Column";
import { Section } from "components/Container/Section";
import { Grid } from "components/Grid/Grid";
import { Img } from "components/Img/Img";
import { H1 } from "components/Text/H1";
import { H2 } from "components/Text/H2";
import { H3 } from "components/Text/H3";
import { Text } from "components/Text/Text";
import useScrollTop from "hooks/useScrollTop";
import useWindowSize from "hooks/useWindowSize";
import { themes } from "utils/variables";
import { useTheme } from "utils/provider";
import dynamic from "next/dynamic";
import { Hero } from "components/Hero/Hero";
import { Input } from "components/Input/Input";
import { H4 } from "components/Text/H4";
const Scene = dynamic(() => import("components/Scene"), { ssr: true });

export default function Home() {
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position] = useState({ x: 0, y: 0 });

  const { theme, setTheme } = useTheme();

  return (
    <Container xl="overflow: hidden; flex-direction: column;">
      {/* 
      hero section
      hero section 
      hero section 
      */}
      <Section
        xl="position: relative; 
            margin: 100px 20% 0 20%; 
            padding: 0;"
        md="margin: 100px 5% 0 5%;"
      >
        <Container
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1 }}
          xl={`font-size: 256px; 
              font-weight: 700; 
              position: absolute;
              color: ${themes[theme].primary};
              -webkit-text-stroke: 2px ${themes[theme].secondary};`}
          xs="font-size: 30vw; top: 0%; left: 0px;"
        >
          ghost
        </Container>
        <Container
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
          xl={`font-size: 256px; 
              font-weight: 700; 
              position: absolute; 
              top: 100px; 
              left: 200px;
              color: ${themes[theme].primary};
              -webkit-text-stroke: 2px ${themes[theme].secondary};`}
          xs="font-size: 30vw; top: 50%; left:25%;"
        >
          ghost
        </Container>
        <Container
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.125 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          xl={`font-size: 256px; 
              font-weight: 700; 
              position: absolute; 
              top: 200px; left: 400px;
              color: ${themes[theme].primary};
              -webkit-text-stroke: 2px ${themes[theme].secondary};`}
          xs="font-size: 30vw; top: 100%; left:50%;"
        >
          ghost
        </Container>
        <Container
          xl={`transition: 0.5s ease;
              animation-name: breath-animation;
              animation-duration: 4s;
              animation-iteration-count: infinite;
          `}
        >
          <Img
            src="/images/ghost-1.png"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1, delay: 1.25 }}
            xl="max-width: 500px; 
                top: 200px;"
            sm="position: absolute;"
          />
        </Container>
        <Container
          xl="flex-direction: column; 
              align-items: flex-end; 
              top: 480px;
              z-index: 100;"
          xs="top: 300px;"
        >
          <H3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
            xl="margin: 0 0 40px 0"
          >
            Invisble Pimple Patches
          </H3>
          <Button
            xl="box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25);"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1, delay: 1 }}
            href=""
          >
            Coming Soon
          </Button>
        </Container>
      </Section>
      {/* 
      section 2
      section 2 
      section 2 
      */}
      <Section
        xl="position: relative; 
            margin: 600px 20% 0 20%; 
            padding: 0;"
        md="margin: 600px 5% 0 5%;"
        sm="margin: 1100px 5% 0 5%; 
            align-items: center;"
        xs="margin: 1000px 5% 0 5%; 
            align-items: flex-start;"
      >
        <Img
          src="/images/ghost-package.png"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ ease: "easeOut", duration: 1 }}
          xl="max-width: 500px; margin: 0 60px 0 0;"
          md="width: 100%; margin: 0 0 40px 0;"
        />
        <Container xl="flex-direction: column;">
          <H2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            Invisble Pimple Patches
          </H2>
          <Text
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            coming soon...
          </Text>
          <Text
            xl="max-width: 500px"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            The flexible material works by absorbing fluid from a wound while
            keeping the skin around it moist, which is key for speeding up the
            healing process. These patches have proven highly effective against
            acne blemishes and pimples. They work by supporting the skins
            natural ability to cure from within, while blocking harmful
            impurities.
          </Text>
          <Button
            xl="box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25);"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
            href=""
          >
            Coming Soon
          </Button>
        </Container>
      </Section>
      {/* 
      section 3
      section 3 
      section 3 
      */}
      <Section
        xl="position: relative; 
        margin: 400px 20% 0 20%;; 
        padding: 0;"
        md="margin: 300px 10% 0 10%;"
      >
        <Container xl="flex-direction: column; width: 100%; align-items: center;">
          <Img
            src="/images/patch.gif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
            xl="max-width: 500px; margin: 0 0 60px 0; border-radius: 50%;"
          />
          <H2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            Extremely Thin
          </H2>
          <Text
            xl="max-width: 500px; text-align: center;"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            The thinnest, most durable, and most stable patches. Can be
            formulated to treat a wide variety of cosmetics issues: acne patch,
            pimple patch, brightening patch.
          </Text>
        </Container>
      </Section>
      {/* 
      section 4
      section 4 
      section 4
      */}
      <Section
        xl="position: relative; 
            margin: 400px 20%; 
            padding: 0;
            justify-content: center;
            align-items: center;"
        md="margin: 300px 5%; "
      >
        <Container
          xl="position: absolute;
              width: 100%;
              transition: 0.5s ease;
              animation-name: breath-animation;
              animation-duration: 4s;
              animation-iteration-count: infinite;"
        >
          <Img
            src="/images/ghost-1.png"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
          />
        </Container>
        <Container
          xl="flex-direction: column; 
              align-items: center; 
              width: 80%;"
        >
          <H4
            src="/images/ghost-1.png"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
            xs="text-align: center;"
          >
            Become a ghost!
          </H4>
          <Text
            src="/images/ghost-1.png"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
            xl="margin: 0 0 40px 0; text-align: center;"
          >
            Be the first to hear about news and product{'\u00A0'}launches.
          </Text>
          <Input
            src="/images/ghost-1.png"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
            xl="margin: 0 0 20px 0"
            xs="width: 100%;"
            placeholder="email"
          />
          <Button
            src="/images/ghost-1.png"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "easeOut", duration: 1 }}
            xl="width: 300px;"
            xs="width: 100%;"
            href=""
          >
            Subscribe
          </Button>
        </Container>
      </Section>
    </Container>
  );
}
