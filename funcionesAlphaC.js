/**
 * Dibuja los planetas
 * @method dibujar_planetas
 * @param Parámetro A
 * @return Valor que retorna
 */

var planetas = [
    {
        nombre:"Star planet",
        x:362,
        y: 268,
        orbita: 80,
        tamanio: 12,
        color: "#dfd743",
        mostrar: true,
        velocidad: 0.0107,
        pos_rad:0
    },{
        nombre:"Alpha Centauri B",
        x:389,
        y: 105,
        orbita: 150,
        tamanio: 12,
        color: "#3cff8e",
        mostrar: true,
        velocidad: 0.0090,
        pos_rad:0
    }
];

function dibujarEstrellas() {
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
    for(var i of planetas){

        ctx.beginPath();
        ctx.moveTo(cenX+i.orbita,200);
        ctx.arc(cenX, cenY, i.orbita, 0, 2 * Math.PI, false);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();

        if(i.mostrar) {
            //planetas
            ctx.beginPath();
            ctx.fillStyle = i.color;
            ctx.moveTo(i.x, i.y);
            ctx.arc(i.x, i.y, i.tamanio, 0, 2 * Math.PI, false);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    }
}
var interval;

var a=0;

function moverplanetas() {
    clearInterval(interval);
    var x = document.forms["formulario"]["fechayear"].value/2000;


    for(var i of planetas){
        i.pos_rad += x;
        i.x= 400 + i.orbita* Math.cos(i.pos_rad);
        i.y= 200 + i.orbita* Math.sin(i.pos_rad);
    }

    interval=setInterval(animacion, 10);
}

function animacion(){
    for(var i of planetas){
        i.pos_rad += i.velocidad;
        i.x= 400 + i.orbita* Math.cos(i.pos_rad);
        i.y= 200 + i.orbita* Math.sin(i.pos_rad);
    }
    dibujarEstrellas();
}