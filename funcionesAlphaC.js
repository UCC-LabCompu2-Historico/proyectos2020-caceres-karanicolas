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
    }
];

var estrellas = [
    {
        nombre:"Alpha Centauri B",
        h:200,
        y: 268,
        r: 80,
        c: 80,
        tamanio: 24,
        color: "#6f72df",
        mostrar: true,
        velocidad: 1,
        pos_rad:Math.PI/2
    },
    {
        nombre: "Proxima Centauri",
        h: 200,
        y: 268,
        r: 80,
        c: 80,
        tamanio: 20,
        color: "#dadf9e",
        mostrar: true,
        velocidad: 0.01,
        pos_rad: Math.PI / 2
    }
]

function dibujarEstrellas() {
    var canvas = document.getElementById('Canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var cenX = canvas.width / 2;
    var cenY = canvas.height / 2;

    //Elipse
    ctx.beginPath();
    ctx.ellipse(cenX - 50, cenY, 160, 170, Math.PI / 2, 0, 2 * Math.PI,false);
    ctx.stroke();
    ctx.closePath();


    //Alpha Centauri A
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
            //planeta
            ctx.beginPath();
            ctx.fillStyle = i.color;
            ctx.moveTo(i.x, i.y);
            ctx.arc(i.x, i.y, i.tamanio, 0, 2 * Math.PI, false);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    }
    for(var i of estrellas){
        if(i.mostrar) {

            ctx.beginPath();
            ctx.fillStyle = i.color;
            ctx.moveTo(i.x, i.y);
            ctx.ellipse(i.x, i.y,i.tamanio,i.tamanio, Math.PI / 2, 0, 2 * Math.PI,false);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    }
}
var interval;


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

function moverElipse() {
    clearInterval(interval);
    var x = document.forms["formulario"]["fechayear"].value/2000;

    for(var i of estrellas){
        i.h +=x;
        i.x = (i.r*i.r)*(Math.cos(i.pos_rad)*Math.cos(i.pos_rad))-(2*i.r*Math.cos(i.pos_rad)*i.c)+(i.c*i.c);
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
