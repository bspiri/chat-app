import React from "react";
import logo from "./logo.svg";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Shelly Jennings"
        avatar="https://randomuser.me/api/portraits/women/40.jpg"
        online="true"
      />
      <Contact
        name="Travis Payne"
        avatar="https://randomuser.me/api/portraits/men/0.jpg"
        online=""
      />
      <Contact
        name="Gregory Butler"
        avatar="https://randomuser.me/api/portraits/men/76.jpg"
        online="true"
      />
    </div>
  );
}

export default App;
