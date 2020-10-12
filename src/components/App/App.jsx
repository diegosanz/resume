import React from "react";
import { ContactItem } from "../ContactItem/ContactItem";
import { MainTitle } from "../Title/MainTitle";
import { Page } from "./../Page/Page";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <Page>
        <MainTitle>Diego Sanz</MainTitle>
        <ContactItem icon={faMobileAlt}>666 555 333</ContactItem>
      </Page>
      <Page>Página 2</Page>
    </>
  );
}

export default App;
