import React from "react";
import { ContactItem } from "../ui/ContactItem/ContactItem";
import { MainTitle } from "../ui/Title/MainTitle";
import { Sheet } from "../ui/Sheet/Sheet";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <Sheet>
        <MainTitle>Diego Sanz</MainTitle>
        <ContactItem icon={faMobileAlt}>666 555 333</ContactItem>
      </Sheet>
      <Sheet>Página 2</Sheet>
    </>
  );
}

export default App;
