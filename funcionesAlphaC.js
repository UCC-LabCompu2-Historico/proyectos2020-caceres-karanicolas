var planeta = [
    {
        nombre:"Star planet",
        x:362,
        y: 268,
        orbita: 80,
        tamanio: 12,
        color: "#2fdf20",
        velocidad: 0.0410,
        pos_rad:0
    }
];
var estrellas = [
    {
        nombre:"Alpha Centauri B",
        x:270,
        y: 310,
        orbita: 140,
        tamanio: 30,
        color: "#6a03df",
        velocidad: 0.0107,
        pos_rad:43
    },
    {
        nombre: "Proxima Centauri",
        x: 350,
        y: 380,
        orbita: 180,
        tamanio: 25,
        color: "#dadf9e",
        velocidad: 0.0211,
        pos_rad:16
    }
];
/**
 * Dibuja los planetas
 * @method dibujarEstrellas
 */

function dibujarEstrellas() {
    var canvas = document.getElementById('Canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var cenX = canvas.width / 2;
    var cenY = canvas.height / 2;

    //Alpha Centauri A
    ctx.beginPath();
    ctx.arc(cenX, cenY, 27, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#FFFF00";
    ctx.strokeStyle = "#FFFF00";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    for(var i of planeta){

        //orbita
        ctx.beginPath();
        ctx.moveTo(cenX+i.orbita,200);
        ctx.arc(cenX, cenY, i.orbita, 0, 2 * Math.PI, false);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();

        //StarPlanet
        ctx.beginPath();
        ctx.fillStyle = i.color;
        ctx.moveTo(i.x, i.y);
        ctx.arc(i.x, i.y, i.tamanio, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

    }


    for(var i of estrellas){

        var eje=cenX-50;
        //orbitaEstrellas
        ctx.beginPath();
        ctx.moveTo(eje+i.orbita,200);
        ctx.arc(eje, cenY, i.orbita, 0, 2 * Math.PI, false);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();

        //estrellas
        ctx.beginPath();
        ctx.fillStyle = i.color;
        ctx.moveTo(i.x, i.y);
        ctx.arc(i.x, i.y, i.tamanio, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

    }
}

/**
 * Validar Año ingresado
 * @method validar
 */

function validar() {
    var x = document.forms["formulario"]["year"].value;

    if (x == "" || x<0 || x.length<4 || isNaN(x)==1) {
        alert("Debe ingresar año valido");
    }
    return false;

}

var interval;

/**
 * Movimiento planetario, despues de dibujarlos vuelven a cero
 * @method moverplanetas
 */

function moverplanetas() {
    clearInterval(interval);
    var x = document.forms["formulario"]["year"].value/2000;


    for(var i of planeta){
        i.pos_rad += x;
        i.x= 400 + i.orbita* Math.cos(i.pos_rad);
        i.y= 200 + i.orbita* Math.sin(i.pos_rad);
    }
    for(var i of estrellas){
        i.pos_rad += x;
        i.x= 350 + i.orbita* Math.cos(i.pos_rad);
        i.y= 200 + i.orbita* Math.sin(i.pos_rad);
    }

    interval=setInterval(animacion, 10);
}

/**
 * Movimiento de traslacion
 * @method animacion
 */

function animacion(){
    for(var i of planeta){
        i.pos_rad += i.velocidad;
        i.x= 400 + i.orbita* Math.cos(i.pos_rad);
        i.y= 200 + i.orbita* Math.sin(i.pos_rad);
    }
    for(var i of estrellas){
        i.pos_rad += i.velocidad;
        i.x= 350 + i.orbita* Math.cos(i.pos_rad);
        i.y= 200 + i.orbita* Math.sin(i.pos_rad);
    }

    dibujarEstrellas();
}
