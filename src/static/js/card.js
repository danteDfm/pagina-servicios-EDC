const contenCard = document.querySelector(".card_servicios");


const ruta = './src/static/img';
let card = '';
const listCard = [
  {
    img: ruta.concat('/sistema-html-concepto-sitio-web.jpg'),
    titulo: "title",
    subtitulo: "subtitle",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae cupiditate quos nesciunt enim excepturi. Unde officia commodi fugit doloribus sint dolore sed.",
    foot: "hace un mes",
  },
  {
    img: ruta.concat('/sistema-html-concepto-sitio-web.jpg'),
    titulo: "title",
    subtitulo: "subtitle",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae cupiditate quos nesciunt enim excepturi. Unde officia commodi fugit doloribus sint dolore sed.",
    foot: "hace un mes",
  },
  {
    img: ruta.concat('/sistema-html-concepto-sitio-web.jpg'),
    titulo: "title",
    subtitulo: "subtitle",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae cupiditate quos nesciunt enim excepturi. Unde officia commodi fugit doloribus sint dolore sed.",
    foot: "hace un mes",
  },
  {
    img: ruta.concat('/sistema-html-concepto-sitio-web.jpg'),
    titulo: "title",
    subtitulo: "subtitle",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae cupiditate quos nesciunt enim excepturi. Unde officia commodi fugit doloribus sint dolore sed.",
    foot: "hace un mes",
  },
  {
    img: ruta.concat('/sistema-html-concepto-sitio-web.jpg'),
    titulo: "title",
    subtitulo: "subtitle",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae cupiditate quos nesciunt enim excepturi. Unde officia commodi fugit doloribus sint dolore sed.",
    foot: "hace un mes",
  },
    {img: ruta.concat('/sistema-html-concepto-sitio-web.jpg'),
    titulo: "title",
    subtitulo: "subtitle",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae cupiditate quos nesciunt enim excepturi. Unde officia commodi fugit doloribus sint dolore sed.",
    foot: "hace un mes",
  },
  {
    img: ruta.concat('/sistema-html-concepto-sitio-web.jpg'),
    titulo: "title",
    subtitulo: "subtitle",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae cupiditate quos nesciunt enim excepturi. Unde officia commodi fugit doloribus sint dolore sed.",
    foot: "hace un mes",
  },
  {
    img: ruta.concat('/sistema-html-concepto-sitio-web.jpg'),
    titulo: "title",
    subtitulo: "subtitle",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae cupiditate quos nesciunt enim excepturi. Unde officia commodi fugit doloribus sint dolore sed.",
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











