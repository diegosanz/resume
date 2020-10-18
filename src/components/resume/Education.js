import React from "react";
import { DetailedList } from "../ui/DetailedList";
import { DetailedListTitle } from "../ui/DetailedListTitle";
import { EducationDaw } from "./EducationDaw";
import { EducationAsi } from "./EducationAsi";
import { EducationEsi } from "./EducationEsi";

export const Education = () => {
  return (
    <DetailedList>
      <DetailedListTitle>Education</DetailedListTitle>
      <EducationDaw />
      <EducationAsi />
      <EducationEsi />
    </DetailedList>
  );
};
