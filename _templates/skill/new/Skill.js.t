---
to: src/components/resume/Skill<%= h.changeCase.pascalCase(name) %>.js
---

import React from "react";
import { SkillBar } from "../ui/SkillBar";

export const Skill<%= h.changeCase.pascalCase(name) %> = () => {
  return (
    <SkillBar percentage="<%= percentage %>" mainColor="<%= mainColor %>" textColor="<%= textColor %>">
      <%= name %>
    </SkillBar>
  );
};
