
function agregarPendiente(){
	
	var lista = document.getElementById("pendienteAgregado").value;
    var elemento = document.createElement("li");
    elemento.innerHTML = lista;
    document.getElementById("lista").appendChild(elemento);


}

function borrarPendiente(){
    var borrar=document.getElementById("lista").getElementsByTagName('li');
    for(var i=0; i<borrar.length;i++){
        borrar[i].onclick=function(){
            if(confirm("Borrar"))
            lista.parentNode.removeChild("li");
        };
    }
}

function agregarPendienteOtra(){
	
	var lista = document.getElementById("pendienteAgregadoOtra").value;
    var elemento = document.createElement("li");
    elemento.innerHTML = lista;
    document.getElementById("listaOtra").appendChild(elemento);


}

function borrarPendienteOtra(){
    var borrar=document.getElementById("listaOtra").getElementsByTagName('li');
    for(var i=0; i<borrar.length;i++){
        borrar[i].onclick=function(){
            if(confirm("Borrar"))
            listaOtra.parentNode.removeChild("li");
        };
    }
}



