function mudaJanela(){
    document.getElementById("alerta").style.display = "none";
}

document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault()
    document.getElementById("alerta").style.display = "block";
});
document.getElementById("formulario").addEventListener("reset", function(){
    document.getElementById("alerta").style.display = "none";
});