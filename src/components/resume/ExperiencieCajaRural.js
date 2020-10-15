import React from "react";
import { DetailedListItem } from "../ui/DetailedListItem";

export const ExperienceCajaRural = () => {
  return (
    <DetailedListItem
      date="Enero 2016 - Enero 2018"
      company="Caja Rural de Soria"
      location="Soria"
      job="Desarrollador, BBDD admin. y supervisor de proyectos"
    >
      <p>
        Encargado del desarrollo con Node.js de un portal para la visualización
        de informes financieros apoyado en informes desarrollados Webfocus y
        SQL. Además era el encargado de supervisar los desarrollos desarrollados
        por otras empresas.
      </p>
    </DetailedListItem>
  );
};
