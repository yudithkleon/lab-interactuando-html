const mostrar = document.getElementById("mostrar");
let votosD = 0;
let votosJs = 0;
let votosBD = 0;

const diseño = () => {
  votosD += 1;
  mostrarConsole(votosD);
  mostrar.innerHTML = `
<span>Votos Diseño:${votosD}</span>
`;
  alert("Gracias por su voto de Diseño");
  ;
};

const js = () => {
  votosJs += 1;
  mostrarConsole(votosJs);

  alert("Gracias por su voto de Javascripts");
  mostrar.innerHTML = `
<span>Votos de Js:${votosJs}</span>
`;
};

const baseDato = () => {
  votosBD += 1;
  mostrarConsole(votosBD);

  alert("Gracias por su voto de Base de Datos");
  mostrar.innerHTML = `
<span>Votos de Base de Dato:${votosBD}</span>
`;
};

const mostrarConsole = (votos) => {
  if (votos % 5 === 0) {
    console.log("Sus votos son: ", votos);
  }
};
