import React from "react";
import { ContactSection } from "../ui/ContactSection";
import { Header } from "../ui/Header";
import { MainAside } from "../ui/MainAside";
import { MainContent } from "../ui/MainContent";
import { MainSection } from "../ui/MainSection";
import { MainSubtitle } from "../ui/MainSubtitle";
import { MainTitle } from "../ui/MainTitle";
import { Sheet } from "../ui/Sheet";
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
      <MainContent>
        <MainSection>
          <Experiences />
          <Education />
        </MainSection>
        <MainAside></MainAside>
      </MainContent>
    </Sheet>
  );
};
