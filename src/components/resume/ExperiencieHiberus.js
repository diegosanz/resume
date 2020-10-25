import React from "react";
import { DetailedListItem } from "../ui/DetailedListItem";

export const ExperienceHiberus = () => {
  return (
    <DetailedListItem
      date="Febrero 2018 - Actualidad"
      location="Hiberus, Zaragoza"
      title="Desarrollador fullstack y líder de proyecto"
    >
      <p>
        Empecé como desarrollador Fullstack en Typescript en proyectos como{" "}
        <a
          href="https://www.eduardolosilla.es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eduardolosilla.es
        </a>
        , kioskos interactivos para HMY y CocaCola Francia, o máquinas
        expendedoras de Azkoyen.
      </p>
      <p>
        En Marzo de 2019 pasé a liderar proyectos en Hiberus Industrial
        Solutions. Entre los proyectos más destacados está la gestión del
        tráfico y la aplicación de control de Vehículos Guiados Autónomos (AGV),
        aplicaciones para la validación de la materia prima, trazabilidad de
        maquinaria y gestión documental.
      </p>
    </DetailedListItem>
  );
};
