window.onload = function(){
    const mainApp = document.getElementById('mainApp');
    const botonesHeader = document.querySelectorAll('header button');

    function ejercicio1(){
        let ventana = window.open("diasFinAnyo.html", "nueva", "width=600,height=400");
        ventana.className = "divFlexCenterColumn";
        ventana.id = "ventanaEj1";

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
            if(/\d/.test(cadenaRaw)) {
                alert('No se permiten numeros en el compresor.');
                return;
            }
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
            let textoResultado = "";
            for(i=0; i<textoComprimido.length; i++) {
                ch = textoComprimido[i].trim();

                switch(true) {

                    case ch === "":
                        break;

                    case ch === "?":
                        textoResultado += ' ';
                        break;

                    case !isNaN(Number(ch)):
                        for(j=0; j<Number(ch); j++) {
                            textoResultado += textoComprimido[i+1];
                        }
                        break;

                    default:
                        if(!/^[0-9]$/.test(textoComprimido[i-1])) {
                            textoResultado += textoComprimido[i];
                        }
                        break;

                    }
            }
            let resultado = document.createElement('h2')
            resultado.innerText = textoResultado;
            resultado.style.color = "var(--primario)";
            return resultado;
        }


        mainApp.removeChild(mainApp.firstElementChild);
        let contenedor1 = document.createElement('div');
        contenedor1.className = "divFlexCenterColumn";
        let contenedor2 = document.createElement('div');
        contenedor2.className = "divFlexCenterRow";
        contenedor2.style.gap = "3rem";
        let titulo = document.createElement('h2');
        titulo.innerText = "Compresor de cadenas";
        titulo.style.marginRight = "20px";
        let resultado = document.createElement("h2");
        resultado.textContent = "#";
        resultado.style.visibility = "hidden";
        contenedor1.appendChild(titulo);
        contenedor1.appendChild(contenedor2);
        contenedor1.appendChild(resultado);

        function addInput(textoInput, textoBoton) {
            let contenedor = document.createElement('div');
            contenedor.className = "divFlexCenterRow"
            contenedor.style.gap = "1rem";
            let textofield = document.createElement('input');
            textofield.type = "text";
            textofield.placeholder = textoInput;
            let boton = document.createElement('button');
            boton.innerText = textoBoton;
            boton.className = "boton";
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

    function ejercicio3(){

        mainApp.removeChild(mainApp.firstElementChild);

        const contenedor1 = document.createElement("div");
        contenedor1.className = "divFlexCenterColumn";
        contenedor1.style.alignItems = "center";

        const contenedor2 = document.createElement("div");
        contenedor2.className = "divFlexCenterRow";
        contenedor2.style.gap = "2rem";
        
        const botonReset = document.createElement("button");
        botonReset.innerText = "Reset";
        botonReset.className = "button";
        botonReset.style.fontSize = "2rem";
        botonReset.style.padding = "3px";
        botonReset.style.scale = "0.8";

        const botonSumarUno = document.createElement("button");
        botonSumarUno.innerText = "+1";
        botonSumarUno.className = "button";
        botonSumarUno.style.fontSize = "2rem";
        botonSumarUno.style.aspectRatio = "1 / 1";
        botonSumarUno.style.width = "3rem";
        botonSumarUno.style.padding = "3px";

        const botonSumarMax = document.createElement("button");
        botonSumarMax.innerText = "Max -2";
        botonSumarMax.className = "button";
        botonSumarMax.style.fontSize = "2rem";
        botonSumarMax.style.padding = "3px";
        botonSumarMax.style.scale = "0.8";

        const textoVecesPulsado = document.createElement("h2");
        textoVecesPulsado.textContent = "Veces pulsado: " + localStorage.getItem("pulsaciones");

        botonReset.addEventListener("click", () => {
            localStorage.setItem("pulsaciones", 0);
            textoVecesPulsado.textContent = "Veces pulsado: 0";
        });

        botonSumarUno.addEventListener("click", () => {
            if(localStorage.getItem("pulsaciones")<Number.MAX_SAFE_INTEGER) {
                localStorage.setItem("pulsaciones",
                    (Number(localStorage.getItem("pulsaciones"))+1)
                );
                textoVecesPulsado.textContent = "Veces pulsado: " + localStorage.getItem("pulsaciones");
            } else {
                alert("Ya no se pueden realizar nmás clicks")
            }
        });

        botonSumarMax.addEventListener("click", () => {
                localStorage.setItem("pulsaciones",
                    (Number.MAX_SAFE_INTEGER-2)
                );
                textoVecesPulsado.textContent = "Veces pulsado: " + localStorage.getItem("pulsaciones");
        });
        contenedor1.appendChild(textoVecesPulsado);
        contenedor2.appendChild(botonReset);
        contenedor2.appendChild(botonSumarUno);
        contenedor2.appendChild(botonSumarMax);
        contenedor1.appendChild(contenedor2);
        mainApp.appendChild(contenedor1);

    }

    function ejercicio4() {
        mainApp.removeChild(mainApp.firstElementChild);

        const textoRedireccion = document.createElement("h2");
        textoRedireccion.textContent = "Redireccionando a Home en 3 segundos."
        let segundosParaHome = 3;
        mainApp.appendChild(textoRedireccion);
        setInterval(() => {
            textoRedireccion.textContent = "Redireccionando a Home en " + --segundosParaHome + " segundos.";
        }, 1000);
        setTimeout(() => {
            location.reload();
        }, segundosParaHome*1000);
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
                    ejercicio3();
                    break;
                case 'b4':
                    ejercicio4();
                    break;
                case 'home':
                    location.reload();
                    break;
            }
        });
    });
}