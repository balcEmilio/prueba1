
//cm2  contiene los campeones mundiales de todas las copas,solo los nombres
  let cm2 = {};

const hoy = new Date();

const fechaFormateada = 
  hoy.getFullYear() + "/" +
  String(hoy.getMonth() + 1).padStart(2, "0") + "/" +
  String(hoy.getDate()).padStart(2, "0");

console.log(fechaFormateada);


  let campeonesMundiales = [];
  let br2 = document.createElement("br");

let equiposWC2026 = document.getElementById("equiposWC2026");
equiposWC2026.classList.add("row")
equiposWC2026.classList.add("align-items-start")
equiposWC2026.classList.add("p1")



let misEquipos = []
let partidos = []
let grupos = []
let misGrupos = []

let gruposSimplificado;

let divGruposFixture = document.getElementById("divGrupos");





let btnRecargaCSS = document.getElementById("recargaCSS");
btnRecargaCSS.addEventListener("click", fRecargarCSS);

function fRecargarCSS(){
    const link = document.getElementById("estilos");
  link.href = "estilo.css?v=" + new Date().getTime();
}




//obtiene los datos de todos los torneos mundiales de fifa.
async function traerCampeonesMundialesHistorial() {
  const API_KEY = "ccbdcb265ba0436fac94f04dc5513585";


  /*
  const res = await fetch(
    "https://api.football-data.org/v4/competitions/WC",
    {
      headers: {
        "X-Auth-Token": API_KEY
      }
    }
  );

  */

    const res = await fetch("/api2.php");

  const data = await res.json();

  //obtiene las temporadas. cada mundial
  console.log(data);

  let cm = {};


//de lacompentencia WORDL CUP, trae las temporadas, luego, consigue la cantidad de veces
//que un equipo salio campeon ylos pone en un arrayt

 data.seasons.forEach(element => {
  
  if(element.id == 2398){
    console.log("nada");
  }else{

    campeonesMundiales.push(element.winner.name);
  
   // console.log(element.winner.name);

    if(cm[element.winner.name]){
      cm[element.winner.name] += 1;
    }else{
      cm[element.winner.name] = 1;
    }
  }
 });

 //console.log(campeonesMundiales)
 //console.log(cm);
 cm2 = cm;



 //agrego las imagenes de cada copa ganada por el pais, si la tiene.
 Object.entries(cm).forEach(([clave,valor])=>{
 // console.log(clave);
  for(let i=0; i<valor; i++){
    let imgCopa = document.createElement("img");
    imgCopa.setAttribute("src","https://svgsilh.com/svg/149492.svg")
    imgCopa.classList.add("imgCopaGanada");

  }

 })


}


async function traerCompetencia() {
  const API_KEY = "ccbdcb265ba0436fac94f04dc5513585";
/*
  const res = await fetch(
    "https://api.football-data.org/v4/competitions",
    {
      headers: {
        "X-Auth-Token": API_KEY
      }
    }
  );*/

    const res = await fetch("api2.php");

  const data = await res.json();


//  console.log(data);
}

// async function copaLibertadores2026(){
//   const API_KEY = "ccbdcb265ba0436fac94f04dc5513585";

//   const res = await fetch("https://api.football-data.org/v4/competitions/CLI/teams",{
//     headers:{
//       "X-Auth-Token": API_KEY
//     }
//   });

//   const data = await res.json();
//   console.log(data);
// }



//traerEquiposWC2026
async function traerCompetencia2() {
  const API_KEY = "ccbdcb265ba0436fac94f04dc5513585";


  /*
  const res = await fetch(
    "https://api.football-data.org/v4/competitions/WC/teams",
    {
      headers: {
        "X-Auth-Token": API_KEY
      }
    }
  );

  */
  const res = await fetch("/api.php");
  


  const data = await res.json();
  console.log(data);


  data.teams.forEach(team => {
  
       let divCopas = document.createElement("div");
    divCopas.classList.add("divCopas");
    divCopas.classList.add("row");
    divCopas.classList.add("col-12")


    
     Object.entries(cm2).forEach(([clave,valor])=>{
 // console.log(clave);
  if(clave == team.name){
    for(let i=0; i<valor; i++){
      let imgCopa = document.createElement("img");
      // imgCopa.setAttribute("src","https://svgsilh.com/svg/149492.svg")
      imgCopa.setAttribute("src","https://svgsilh.com/svg/1345884-ffc107.svg")
      imgCopa.classList.add("imgCopaGanada");
      divCopas.appendChild(imgCopa);
  
    }
   }

 });


    let team2 = {}
    team2.name = team.name;
    team2.tla = team.tla;
    team2.contrincantesFaseGrupo = [];
    misEquipos.push(team2);

    let lbl = document.createElement("label");
    let br = document.createElement("br");
    //divPrincipal de la card del pais
    let div = document.createElement("div");
  
    let img = document.createElement("img");
    let divImgEquipo = document.createElement("div");
    divImgEquipo.classList.add("flagImg")
    let aWSite = document.createElement("a");
    let lblAbreviatura = document.createElement("label");
    let cmPais = document.createElement("img");
    cmPais.setAttribute("src","https://svgsilh.com/svg/149492.svg");
    cmPais.classList.add("imgCopaGanada");



    lblAbreviatura.innerHTML = team.tla;
    lblAbreviatura.classList.add("abreviaturaPais")
    lblAbreviatura.classList.add("tilt-prism-titulo1")

    aWSite.setAttribute("href",team.website);
    aWSite.innerHTML = team.website;
    aWSite.classList.add("linkWebPais")
  

  div.appendChild(divCopas)


  

    img.setAttribute("src",team.crest);
    img.classList.add("banderaPais");
    img.classList.add("col-12")
    lbl.innerHTML = team.name;
    lbl.classList.add("tituloEquipo");
    lbl.classList.add("tilt-prism-titulo1");
    divImgEquipo.appendChild(img);
    div.appendChild(divImgEquipo);
    div.setAttribute("id",team.tla);












 div.appendChild(br)

    div.appendChild(lbl);
    div.appendChild(lblAbreviatura);
    div.appendChild(aWSite);

    div.classList.add("col-sm-5")
    div.classList.add("col-8")
    div.classList.add("col-md-5");
    div.classList.add("col-lg-3");

    div.classList.add("bandera1");


    equiposWC2026.appendChild(div);


    });


}



//obtiene los partidos de la copa 2026
async function traerPartidosCopa2026() {

  const API_KEY = "ccbdcb265ba0436fac94f04dc5513585";
/*
  const res = await fetch(
    "http://api.football-data.org/v4/competitions/2000/matches",
    {
      headers: {
       
        "X-Auth-Token": API_KEY
      }
    }
  );




  */




  const data = await res.json();
  console.log(data);


}


//consigue las areas, todavia no las uso.
async function conseguirAreas() {
  const API_KEY = "ccbdcb265ba0436fac94f04dc5513585";

  const url = "./areas.php";

  try {
    let response = await fetch(url,{
      "method":"get",
      "headers":{
        "Content-Type":"aplication/json"
      }
    })
    let resultado = await response.json();
    console.log(resultado);

    
  } catch (error) {
    console.log("el error es: ", error);
  }




}


async function partidosWorldCup2026 (){

  let divPais = document.getElementsByClassName("bandera1");
  let logo = document.getElementById("logoCopa")

  let imgCopa = document.createElement("img");
  imgCopa.classList.add("logo2026")

  // const url = "./partidosWC2026.php"

  // try {

  //   let responseGet = await fetch(url, {
  //     "method": "get",
  //     "headers":{
  //           "Content-Type": "application/json",
  //     }
  //   })


    

  //   let resultado = await responseGet.json();
  
try{


    
    const res = await fetch("/partidosWC2026.php");

  const resultado = await res.json();

  //obtiene las temporadas. cada mundial
  console.log(resultado);



    // console.log("STATUS:", res.status);

    // const text = await res.text();

    // console.log("RESPUESTA COMPLETA:");

    // console.log(text);

  //  console.log(resultado);


   //console.log(resultado["matches"]);


//    console.log(resultado["competition"].emblem)
    imgCopa.setAttribute("src",resultado["competition"].emblem)
    logo.appendChild(imgCopa)

   resultado["matches"].forEach(element => {
   

   
    if(element.stage === "GROUP_STAGE"){
       let partido = {}
       let grupo = {}


      //console.log(element["group"]);
      partido.grupo = element["group"];
    //  console.log(element["stage"]);
      partido.instancia = element["stage"];

      grupos.push(element["group"]);
      
      partido.fechaUTC = element["utcDate"]
      Object.entries(element["awayTeam"]).forEach(([clave,valor])=>{
       // console.log(clave, valor);
        if(clave == "tla"){
          partido.visitante = valor;
        }

      })

      
      Object.entries(element["homeTeam"]).forEach(([clave,valor])=>{
        //console.log(clave, valor);
      
        if(clave == "tla"){
          partido.local = valor;
        }

      })

      partidos.push(partido);

    }
    

   });


 //  console.log(partidos);
    grupos = [...new Set(grupos)];

    grupos.forEach(grupo => {
      let obj = {}
      obj.name = grupo;
      obj.equipos = new Set();

      misGrupos.push(obj);
      
    });

    partidos.forEach(partido => {
      misGrupos.forEach(grupo => {
          if(grupo.name == partido.grupo){
            grupo.equipos.add(partido.local)
            grupo.equipos.add(partido.visitante)

           // grupo.equipos
          }
      });
    });

    misGrupos.forEach(grupo => {
   //   console.log(grupo)
      if(grupo.name == "GROUP_J"){
        grupo.equipos.add("JOR")
      }

    });

    console.log(grupos)
    console.log(misGrupos)


    
  } catch (error) {
    console.log("error en try catch: ", error);
  }

}


async function partidosPorGrupo(){

  partidos.forEach(partido => {
  
  });

}
traerCampeonesMundialesHistorial();


//esta funcion trae la informacion de cada equipo /teams
traerCompetencia2();



partidosWorldCup2026();




//partidosPorGrupo();
//conseguirAreas();

console.log(misEquipos);