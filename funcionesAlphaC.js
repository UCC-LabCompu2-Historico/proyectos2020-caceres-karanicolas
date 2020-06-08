/**
 * Dibuja los planetas
 * @method dibujar_planetas
 * @param Parámetro A
 * @return Valor que retorna
 */

var planetas = [
    {
        nombre:"Aplha Centauri A",
        x:400,
        y:245,
        orbita: 45,             // Radio de la orbita
        tamanio: 6,             // Radio del planeta
        color: "#faf3ff",
        mostrar: true,
        velocidad: 0.0172,
        pos_rad:23
    },{
        nombre:"Proxima Centauri",
        x:362,
        y: 268,
        orbita: 80,
        tamanio: 12,
        color: "#dfd743",
        mostrar: true,
        velocidad: 0.0107,
        pos_rad:0
    },{
        nombre:"Star planet",
        x:389,
        y: 105,
        orbita: 93,
        tamanio: 12,
        color: "#3cff8e",
        mostrar: true,
        velocidad: 0.0090,
        pos_rad:0
    }
];

function dibujar_planetas() {
    var canvas = document.getElementById('Canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var cenX = canvas.width / 2;
    var cenY = canvas.height / 2;

    ctx.beginPath();
    ctx.arc(cenX, cenY, 28, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#FFFF00";
    ctx.strokeStyle = "#FFFF00";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

