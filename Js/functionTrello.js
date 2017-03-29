

function agregarPendiente(){
	
	var lista = document.getElementById("pendienteAgregado").value;
    var elemento = document.createElement("li");
    elemento.innerHTML = lista;
    document.getElementById("lista").appendChild(elemento);

    pendienteAgregado.value= " ";  

}

function borrarPendiente(){
    var borrar=document.getElementById("lista").getElementsByTagName('li');
    for(var i=0; i<borrar.length;i++){
        borrar[i].onclick=function(){
            this.parentNode.removeChild(this);
        };
    }
}




function agregarPendienteOtra(){
	
	var lista = document.getElementById("pendienteAgregadoOtra").value;
    var elemento = document.createElement("li");
    elemento.innerHTML = lista;
    document.getElementById("listaOtra").appendChild(elemento);

    pendienteAgregadoOtra.value= " ";  

}

function borrarPendienteOtra(){
    var borrar=document.getElementById("listaOtra").getElementsByTagName('li');
    for(var i=0; i<borrar.length;i++){
        borrar[i].onclick=function(){
            this.parentNode.removeChild(this);
        };
    }
}

function eliminarLista(){
    var contenedor= document.getElementById("ListaCompleta");
    while (contenedor.hasChildNodes())
        contenedor.removeChild(contenedor.firstChild);
}

function eliminarListaOtra(){
    var contenedor= document.getElementById("ListaCompletaOtra");
    while (contenedor.hasChildNodes())
        contenedor.removeChild(contenedor.firstChild);
}




