import React from "react";
import { DetailedListItem } from "../ui/DetailedListItem";

export const ExperienceAytoSoria1 = () => {
  return (
    <DetailedListItem
      date="Agosto 2011 – Marzo 2012"
      subtitle="Ayuntamiento de Soria"
      location="Soria"
      title="Desarrollador web"
    >
      <p>
        Programación de una Intranet en PHP y jQuery para los empleados del
        Ayuntamiento, bomberos y policía local de Soria. Esta incluía gestión de
        vacaciones, fichajes y blog para noticias. También extraía informes de
        la base de datos del padrón municipal y desarrollo de un inventario
        informático gestionable vía web con Codeigniter.
      </p>
    </DetailedListItem>
  );
};
