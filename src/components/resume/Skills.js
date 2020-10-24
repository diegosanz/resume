import React from "react";
import { DetailedList } from "../ui/DetailedList";
import { DetailedListTitle } from "../ui/DetailedListTitle";
import { SkillJavascript } from "./SkillJavascript";
import { SkillTypescript } from "./SkillTypescript";
import { SkillSass } from "./SkillSass";
import { SkillAngular } from "./SkillAngular";
import { SkillReact } from "./SkillReact";
import { SkillVue } from "./SkillVue";
import { SkillSql } from "./SkillSql";
import { SkillNestJs } from "./SkillNestJs";
import { SkillExpress } from "./SkillExpress";

export const Skills = () => {
  return (
    <DetailedList>
      <DetailedListTitle>Habilidades</DetailedListTitle>
      <SkillTypescript />
      <SkillJavascript />
      <SkillSass />
      <SkillSql />
      <br />
      <SkillAngular />
      <SkillReact />
      <SkillVue />
      <br />
      <SkillNestJs />
      <SkillExpress />
    </DetailedList>
  );
};
