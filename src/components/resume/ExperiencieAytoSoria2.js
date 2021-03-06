import React from "react";
import { DetailedListItem } from "../ui/DetailedListItem";

export const ExperienceAytoSoria2 = () => {
  return (
    <DetailedListItem
      date="Octubre 2014 – Octubre 2015"
      location="Ayuntamiento de Soria, Soria"
      title="Desarrollador web"
      technologies="AngularJS, Leaflet, Codeigniter, JS, PHP"
    >
      <p>
        Administración de la Web ofcial del Ayuntamiento,&nbsp;
        <a
          href="https://www.soria.es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soria.es
        </a>
        , y desarrollo de una aplicación de gestión del cementerio de Soria con
        AngularJS, Leaflet y API en PHP con Codeigniter.
      </p>
    </DetailedListItem>
  );
};
