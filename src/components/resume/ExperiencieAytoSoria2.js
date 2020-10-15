import React from "react";
import { DetailedListItem } from "../ui/DetailedListItem";

export const ExperienceAytoSoria2 = () => {
  return (
    <DetailedListItem
      date="Octubre 2014 – Octubre 2015"
      company="Ayuntamiento de Soria"
      location="Soria"
      job="Desarrollador web"
    >
      <p>
        Administración de la Web ofcial del Ayuntamiento,&nbsp;
        <a
          href="https://www.soria.es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          soria.es
        </a>
        , y desarrollo de una aplicación de gestión del cementerio de Soria que
        con AngularJS, Leafet y API en PHP con Codeigniter.
      </p>
    </DetailedListItem>
  );
};
