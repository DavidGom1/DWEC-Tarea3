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
        mainApp.removeChild(mainApp.firstElementChild);
    }

    botonesHeader.forEach(boton => {
        boton.addEventListener('click', () => {
            switch(boton.id){
                case 'b1':
                    ejercicio1();
                    break;
                case 'b2':
                    console.log('hola');
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