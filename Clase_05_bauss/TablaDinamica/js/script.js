var boton;

addEventListener('load', function(){
    boton=document.getElementById('btnCargar');
    boton.addEventListener('click', CargarTabla, false);
}, false);

function CargarTabla(){
    //console.log(personas);
    let div = document.getElementById('info');
    let tabla = document.createElement('table');
    let header = document.createElement('tr');

    for (let key in personas[0]) {
        let th = document.createElement('th');
        let texto = document.createTextNode(key);
        th.appendChild(texto);
        header.appendChild(th);
    }

    tabla.appendChild(header);

    for (let i in personas) {
        let fila = document.createElement('tr');
        
        for (let j in personas[i]) {
            let celda = document.createElement('td');
            celda.setAttribute('style', 'text-align: center');
            let dato = document.createTextNode(personas[i][j]);
            
            celda.appendChild(dato);
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    div.appendChild(tabla);

    let body = document.getElementsByTagName("body");
    let btnTabla = document.getElementById("btnTabla");
    body[0].removeChild(btnTabla);

}

