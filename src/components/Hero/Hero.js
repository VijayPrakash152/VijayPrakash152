import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        👋 Hey there! I am Vijay Prakash, currently working as a data engineer.
        Web development is my passion and I like creating content whenever I get
        time. Also I am highly addicted to ☕.
      </SectionText>
      <Button>
        <a href="/VijayPrakash_Resume.pdf" download={true}>
          Download Resume
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
