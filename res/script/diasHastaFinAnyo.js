window.onload = function(){
    const resultado = document.getElementById('resultado');
    resultado.className = "divFlexCenterColumn";
    const fechaActual = new Date();
    const dia = String(fechaActual.getDate());
    const mes = String(fechaActual.getMonth()+1);
    const año = String(fechaActual.getFullYear());
    const totalAñoMs = new Date(fechaActual.getFullYear(), 11 , 31);
    const diff = totalAñoMs - fechaActual;
    const diasFinAño = Math.floor(diff/1000/60/60/24);

    let textoVentana = document.createElement("h1");
    textoVentana.innerText = "Hoy es " + dia + " del " + mes + " de " + año + " y faltan " + diasFinAño + " días para fin de año";
    textoVentana.style.color = "var(--primario)";

    resultado.appendChild(textoVentana);

}