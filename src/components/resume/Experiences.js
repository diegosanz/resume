import React from "react";
import { DetailedList } from "../ui/DetailedList";
import { DetailedListTitle } from "../ui/DetailedListTitle";
import { ExperienceAytoSoria1 } from "./ExperiencieAytoSoria1";
import { ExperienceAytoSoria2 } from "./ExperiencieAytoSoria2";
import { ExperienceCajaRural } from "./ExperiencieCajaRural";
import { ExperienceHiberus } from "./ExperiencieHiberus";

export const Experiences = () => {
  return (
    <DetailedList>
      <DetailedListTitle>Experiencia</DetailedListTitle>
      <ExperienceHiberus />
      <ExperienceCajaRural />
      <ExperienceAytoSoria2 />
      <ExperienceAytoSoria1 />
    </DetailedList>
  );
};
