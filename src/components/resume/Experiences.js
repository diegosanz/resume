import React from "react";
import { DetailedList } from "../ui/DetailedList";
import { DetailedListItem } from "../ui/DetailedListItem";
import { DetailedListTitle } from "../ui/DetailedListTitle";

export const Experiences = () => {
  return (
    <DetailedList>
      <DetailedListTitle>Experiencia</DetailedListTitle>
      <DetailedListItem
        date="Enero 2018 - Actualidad"
        company="Hiberus"
        location="Zaragoza"
        job="Developer leader"
      ></DetailedListItem>
    </DetailedList>
  );
};
