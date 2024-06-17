import React from "react";

import "./About.scss";

const About = ({ isOpen, toggle }) => {
  return (
    <section className="about" id="about">
      <h3 className={`title-about ${isOpen ? "active" : ""}`} onClick={toggle}>
        Quien soy
      </h3>
      <div className={`mobile-dropdown ${isOpen ? "open" : ""}`}>
        <h4>
          ¡Hola!
          <br />
          <br />
          Soy Mariia, una apasionada programadora front-end con una sólida
          experiencia en diseño gráfico.
          <br />
          <br />
          Empecé mi carrera como diseñadora gráfica pero durante mi trabajo en{" "}
          <span className="accent">S,C,P,F...</span> y trabajé diseñando y
          programando las piezas creativas y fue ahí donde descubrí mi pasión
          por la programación. Durante los últimos años he estado enfocando mi
          carrera en desarrollo web, aprendiendo lenguajes de programación como{" "}
          <span className="accent">JavaScript</span> y{" "}
          <span className="accent">TypeScript</span>, bibliotecas y frameworks
          como <span className="accent">React</span>, paquetes de módulos como{" "}
          <span className="accent">Webpack</span>,{" "}
          <span className="accent">Parcel</span> y{" "}
          <span className="accent">Docker</span>, bases de datos,{" "}
          <span className="accent">API</span>,{" "}
          <span className="accent">git</span>,{" "}
          <span className="accent">testing</span> y mucho mas para tener un
          perfil más avanzado y especializado.
          <br />
          <br />
          Actualmente, trabajo como programadora front-end, combinando mi pasión
          por el diseño con mi habilidad para crear experiencias interactivas y
          funcionales en la web.
          <br />
          <br />
          He tenido la fortuna de trabajar en diversos proyectos para marcas
          reconocidas como <span className="accent">BMW</span>,{" "}
          <span className="accent">Asisa</span>,{" "}
          <span className="accent">Nivea</span>,{" "}
          <span className="accent">Danone</span>,{" "}
          <span className="accent">Listerine</span>,{" "}
          <span className="accent">Iberia</span>,{" "}
          <span className="accent">Swarovski</span>,{" "}
          <span className="accent">Opel</span> y{" "}
          <span className="accent">L'Oréal</span>, entre otras.
          <br />
          <br />
          Me apasiona crear interfaces intuitivas y atractivas, y tengo
          experiencia en el desarrollo de aplicaciones web interactivas y
          responsive.
        </h4>
      </div>
    </section>
  );
};

export default About;
