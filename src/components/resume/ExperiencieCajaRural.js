import React from "react";
import { DetailedListItem } from "../ui/DetailedListItem";

export const ExperienceCajaRural = () => {
  return (
    <DetailedListItem
      date="Enero 2016 - Enero 2018"
      location="Caja Rural de Soria, Soria"
      title="Desarrollador, BBDD admin. y supervisor de proyectos"
      technologies="React, Express, Webfocus, SQL, JS"
    >
      <p>
        Encargado del desarrollo con React y Express de un portal para la
        visualización de informes financieros apoyado en informes desarrollados
        Webfocus y SQL. Además era el encargado de supervisar los desarrollos
        desarrollados por otras empresas.
      </p>
    </DetailedListItem>
  );
};
