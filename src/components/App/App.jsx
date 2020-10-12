import React from "react";
import { ContactItem } from "../ContactItem/ContactItem";
import { MainTitle } from "../Title/MainTitle";
import { Page } from "./../Page/Page";

function App() {
  return (
    <>
      <Page>
        <MainTitle>Diego Sanz</MainTitle>
        <ContactItem icon="phone">Test</ContactItem>
      </Page>
      <Page>Página 2</Page>
    </>
  );
}

export default App;
