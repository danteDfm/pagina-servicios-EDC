const contenCard = document.querySelector(".card_servicios");


const ruta = './src/static/img';
let card = '';
const listCard = [
  {
    img: ruta.concat('/web.jpg'),
    titulo: "APP WEB",
    subtitulo: "NODE - MONGO - PHP",
    des: `Como compañia les ofrecemos el mejor servicio posible en la creacion de aplicaciones web de todo tipo, tanto productivas, empresariales y dinamicas.`,
    foot: "hace un mes",
  },
  {
    img: ruta.concat('/abogados.png'),
    titulo: "PAGINAS WEB",
    subtitulo: "CSS - HTML - JS",
    des: `Nuestras paginas web siempre tienen nuestro sello de calidad, ofrecemos diseños unicos y responsivos donde el cliente puede ver reflejado su propio trabajo. `,
    foot: "hace un mes",
  },
  {
    img: ruta.concat('/movil.jpg'),
    titulo: "APP MOVIL",
    subtitulo: "REACT NATIVE",
    des: `Nuestras app movil son eficientes rapidas y con un estilo unico, nos gusta los desafios y por eso extendemos nuestros servicios, danos tu idea y la desarrollaremos.`,
    foot: "hace un mes",
  },
  {
    img: ruta.concat('/medida.png'),
    titulo: "APP A MEDIDA",
    subtitulo: "PYTHON, NODE, REACT",
    des: `Creamos paginas, aplicaciones web, aplicaciones movil a medida con tus espesificaciones e ideas.`,
    foot: "hace un mes",
  },
  {
    img: ruta.concat('/reportabilidad.png'),
    titulo: "REPORTABILIDAD",
    subtitulo: "DASHBOARD",
    des: `Visualizar su información de manera clara y concisa para que pueda comprender su desempeño y tomar decisiones más informadas.`,
    foot: "hace un mes",
  },
 



]

console.log(contenCard.scrollTo);

for(let i = 0; i<listCard.length; i++){
    card +=`
    <div class="card">
        <div class="img_card">
            <img src="${listCard[i].img}">
        </div>
        <div class="descripcion_card">
            <div class="title_card"> 
                <h1 class="title_card-h1">${listCard[i].titulo}</h1>
                <p class="title_card-p">${listCard[i].subtitulo}</p>
            </div>
            <div class="descripcion_card_content">
                <p>${listCard[i].des}</p>
            </div>
            <div class="foot_card">
                <p>${listCard[i].foot}</p>
            </div>
        </div>
    </div>
`;
    
}

contenCard.innerHTML = card;











