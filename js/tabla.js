let x = prompt('Ingresa Un Numero Para La Tabla De Multiplicar');

function tablaMultiplicar(x){

    document.write("<h2>Tabla De Multiplicar Del "+ x +"</h2>");

    document.write("<ul>");

    for(i = 1;i<=10;i++){
        document.write("<li>");
        document.write(x + " x " + i + "= " + x * i);
        document.write("</li>");
    }

    document.write("</ul>");
}

tablaMultiplicar(x);