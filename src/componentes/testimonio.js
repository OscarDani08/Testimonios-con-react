import React from "react";
import '../stylesheets/testimonio.css' ;

function Testimonio(props) {
  return(
    <div className="contenedor-Testimonio">
      <img 
        className="imagen-testimonio" 
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt="Foto de Emma"/>
      
      <div className="Contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  )
}

export {Testimonio};