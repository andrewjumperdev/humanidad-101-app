import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="parallax">
      <Nav />
      <div className="grid grid-cols-4 gap-4 grid-rows-4">
        <h1 className="title--style col-start-2 col-span-2">HUMANIDAD 101</h1>
        <p className="quote--style col-start-2 col-span-2">
          "Las luces parpadeaban en la nave espacial mientras se adentraba en el
          cinturón de asteroides. La capitana miró a través de la ventana,
          preguntándose qué secretos se ocultaban entre las rocas cósmicas..."
        </p>
        <p className="col-start-2 col-span-2 row-start-4 quote--style-secondary">
          Adéntrate a la historia de ... que se publicará completamente virtual
          donde podrás se relatará la creación de...
        </p>
      </div>
    </div>
  );
};

export default Header;
