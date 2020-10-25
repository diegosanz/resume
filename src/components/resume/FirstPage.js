import React from "react";
import { ContactSection } from "../ui/ContactSection";
import { Header } from "../ui/Header";
import { StyledAside } from "../ui/StyledAside";
import { StyledArticle } from "../ui/StyledContent";
import { StyledSection } from "../ui/StyledSection";
import { MainSubtitle } from "../ui/MainSubtitle";
import { MainTitle } from "../ui/MainTitle";
import { Sheet } from "../ui/Sheet";
import { Skills } from "./Skills";
import { ContactGithub } from "./ContactGithub";
import { ContactLocation } from "./ContactLocation";
import { ContactMail } from "./ContactMail";
import { ContactPhone } from "./ContactPhone";
import { Education } from "./Education";
import { Experiences } from "./Experiences";

export const FirstPage = () => {
  return (
    <Sheet>
      <Header>
        <MainTitle>
          Diego Sanz
          <MainSubtitle>Fullstack developer</MainSubtitle>
        </MainTitle>
        <ContactSection>
          <ContactMail />
          <ContactPhone />
          <ContactLocation />
          <ContactGithub />
        </ContactSection>
      </Header>
      <StyledArticle>
        <StyledSection>
          <Experiences />
        </StyledSection>
      </StyledArticle>
      <StyledArticle>
        <StyledSection>
          <Education />
        </StyledSection>
        <StyledAside>
          <Skills />
        </StyledAside>
      </StyledArticle>
    </Sheet>
  );
};
