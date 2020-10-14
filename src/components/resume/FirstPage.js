import React from "react";
import { MainSubtitle } from "../ui/MainSubtitle";
import { MainTitle } from "../ui/MainTitle";
import { Sheet } from "../ui/Sheet";

export const FirstPage = () => {
  return (
    <Sheet>
      <header>
        <MainTitle>
          Diego Sanz
          <MainSubtitle>Fullstack developer</MainSubtitle>
        </MainTitle>
      </header>
    </Sheet>
  );
};
