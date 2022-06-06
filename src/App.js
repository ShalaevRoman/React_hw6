import './App.css';
import { Contacts } from './contacts/Contacts'
import React from "react";
import {HeaderContacts} from "./contacts/components/HeaderContacts";

function App() {
  return (
    <div className="App">
      <HeaderContacts/>
      <Contacts/>
    </div>
  );
}

export default App;
