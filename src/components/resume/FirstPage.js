import React from "react";
import { ContactSection } from "../ui/ContactSection";
import { MainSubtitle } from "../ui/MainSubtitle";
import { MainTitle } from "../ui/MainTitle";
import { Sheet } from "../ui/Sheet";
import { ContactGithub } from "./ContactGithub";
import { ContactLocation } from "./ContactLocation";
import { ContactMail } from "./ContactMail";
import { ContactPhone } from "./ContactPhone";

export const FirstPage = () => {
  return (
    <Sheet>
      <header>
        <MainTitle>
          Diego Sanz
          <MainSubtitle>Fullstack developer</MainSubtitle>
        </MainTitle>
        <ContactSection>
          <ContactMail></ContactMail>
          <ContactPhone></ContactPhone>
          <ContactLocation></ContactLocation>
          <ContactGithub></ContactGithub>
        </ContactSection>
      </header>
    </Sheet>
  );
};
