window.onload = function(){
    const mainApp = document.getElementById('mainApp');
    const botonesHeader = document.querySelectorAll('header button');

    function ejercicio1(){
        mainApp.removeChild(mainApp.firstElementChild);
        let ventana = document.createElement('div');
        ventana.style.width = "600px";
        ventana.style.height = "400px";
        ventana.style.backgroundColor = "var(--primario)";
        ventana.style.boxShadow = "0 0 20px grey";
        ventana.style.borderRadius = "20px";
        ventana.style.display = "flex";
        ventana.style.alignItems = "center";
        ventana.style.textAlign =  "center";

        const fechaActual = new Date();
        const dia = String(fechaActual.getDate());
        const mes = String(fechaActual.getMonth()+1);
        const año = String(fechaActual.getFullYear());
        const totalAñoMs = new Date(fechaActual.getFullYear(), 11 , 31);
        const diff = totalAñoMs - fechaActual;
        const diasFinAño = Math.floor(diff/1000/60/60/24);

        let textoVentana = document.createElement("h1");
        textoVentana.innerText = "Hoy es " + dia + " del " + mes + " de " + año + " y faltan " + diasFinAño + " días para fin de año";
        textoVentana.style.color = "white";
        ventana.appendChild(textoVentana);

        mainApp.appendChild(ventana);
    }

    function ejercicio2(){
        function compresorCadenas(cadenaRaw){
            let textoComprimido = "";
            for(let i = 0; i < cadenaRaw.length; i++){
                if(cadenaRaw[i]===" "){
                    textoComprimido+="?";
                }
                let contador = 1;
                while(cadenaRaw[i] === cadenaRaw[i+1]){
                    contador++;
                    i++;
                }
                contador>1 ? textoComprimido+=(contador+cadenaRaw[i]) : textoComprimido+=cadenaRaw[i];
            }
            let resultado = document.createElement('h2')
            resultado.innerText = textoComprimido;
            resultado.style.color = "var(--primario)";
            return resultado;
        }

        function descompresorCadenas(textoComprimido) {
            let resultado = document.createElement('h2')
            resultado.innerText = textoComprimido;
            resultado.style.color = "var(--primario)";
            return resultado;
        }


        mainApp.removeChild(mainApp.firstElementChild);
        let contenedor1 = document.createElement('div');
        contenedor1.style.display = "flex";
        contenedor1.style.flexDirection = "column";
        contenedor1.style.alignItems = "center";
        contenedor1.style.textAlign =  "center";
        let contenedor2 = document.createElement('div');
        contenedor2.style.display = "flex";
        contenedor2.style.flexDirection = "row";
        contenedor2.style.gap = "1rem";
        contenedor2.style.alignItems = "center";
        contenedor2.style.textAlign =  "center";
        let titulo = document.createElement('h1');
        titulo.innerText = "Compresor de cadenas";
        titulo.style.color = "var(--primario)";
        titulo.style.marginRight = "20px";
        let resultado = document.createElement("h2");
        resultado.textContent = "#";
        resultado.style.visibility = "hidden";
        contenedor1.appendChild(titulo);
        contenedor1.appendChild(contenedor2);
        contenedor1.appendChild(resultado);

        function addInput(textoInput, textoBoton) {
            let contenedor = document.createElement('div');
            contenedor.display = "flex";
            contenedor.style.flexDirection = "column";
            contenedor.style.gap = "1rem";
            contenedor.style.alignItems = "center";
            contenedor.style.textAlign =  "center";
            let textofield = document.createElement('input');
            textofield.type = "text";
            textofield.placeholder = textoInput;
            textofield.style.marginRight = "10px";
            let boton = document.createElement('button');
            boton.innerText = textoBoton;
            boton.style.padding = "5px 10px";
            boton.style.borderRadius = "5px";
            boton.style.border = "none";
            boton.style.backgroundColor = "var(--secundario)";
            boton.style.color = "white";
            boton.style.cursor = "pointer";
            contenedor.appendChild(textofield);
            contenedor.appendChild(boton);
            contenedor2.appendChild(contenedor);
            boton.addEventListener('click', () => {
                if(contenedor1.lastElementChild.tagName == 'H2')contenedor1.lastElementChild.remove();
                if(boton.innerText=='Comprimir'){
                    contenedor1.appendChild(compresorCadenas(textofield.value));
                } else {
                    contenedor1.appendChild(descompresorCadenas(textofield.value));
                }
            });
        }

        addInput("Escribe para comprimir", "Comprimir");
        addInput("Escribe para descomprimir", "Descomprimir");

        mainApp.appendChild(contenedor1);
    }

    botonesHeader.forEach(boton => {
        boton.addEventListener('click', () => {
            switch(boton.id){
                case 'b1':
                    ejercicio1();
                    break;
                case 'b2':
                    ejercicio2();
                    break;
                case 'b3':
                    console.log('hola');
                    break;
                case 'b4':
                    console.log('hola');
                    break;
                case 'home':
                    location.reload();
                    break;
            }
        });
    });
}