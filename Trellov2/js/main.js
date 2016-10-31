
var botonInicio = document.getElementById("botonInicio"); //input de inicio creado en html//
botonInicio.addEventListener("click",añadirLista); //la indicacion addEventListener afuera de  la funcion (click al boton activa funcion)//
var contenidoDiv = document.getElementById("caja"); //el div que contiene el boton anterior
var idMovibles = 1;//el contador de id de las tarjetas//

function añadirLista(){
	var inputLista = document.createElement("input")
	inputLista.setAttribute("placeholder","Añadir título de lista");
	inputLista.setAttribute("class", "form-control");
	contenidoDiv.appendChild(inputLista);
	var boton = document.createElement("button");//boton guardar//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
	boton.setAttribute("class", "btn btn-primary");
	boton.textContent = "Guardar";
	contenidoDiv.appendChild(boton);
	inputLista.value = "";

	boton.addEventListener("click",botonGuardar);
	
    
	function botonGuardar(){

		var rowpadre = document.getElementById("rowpapa")//Obtener el id del row, que es padre de los divs a utilizar//
		var divRecorrer = document.createElement("div");//este div se desplaza ya que le indicamos que el primer hijo del row ira antes de el//
		divRecorrer.setAttribute("class", "col-xs-12 col-lg-3 col-md-3");
		divRecorrer.style.backgroundColor = "#5D4E4E";
		divRecorrer.style.marginRight = "1%";
		var divDelP = document.createElement("div");//en este div esta un textarea y un boton anadir lista,, este div es hijo del que se recorre//
		divDelP.setAttribute("class","col-xs-12 col-lg-12 col-md-12");
		divDelP.setAttribute("id", "otraCaja");//el div que contiene el p//

		divDelP.addEventListener("drop",soltar);//aÑado un evento al activar mi funcion soltar para hacer el drop//
		divDelP.addEventListener("dragover",arrastrarSobre);
		divDelP.addEventListener("dragleave",dejarArrastrar);

		var titulo = document.createElement("h4");
		var textArea = document.createElement("textarea")
		textArea.setAttribute("placeholder","Añadir Tarjeta");
		textArea.style.display = "block";

		var botonAddLista = document.createElement("button");
		botonAddLista.setAttribute("type", "button");
		botonAddLista.setAttribute("class", "btn btn-primary");
		botonAddLista.textContent = "Añadir Tarjeta";
		titulo.innerHTML = inputLista.value;
		inputLista.value ="";
		divRecorrer.appendChild(titulo);
		divRecorrer.appendChild(textArea);
		divRecorrer.appendChild(botonAddLista);
		rowpadre.insertBefore(divRecorrer,rowpapa.firstChild)
	 	
	 	botonAddLista.addEventListener("click",addTarjeta);

    function addTarjeta(){

    	var tarjeta = document.createElement("div")
    	tarjeta.style.margin = "2%";
    	tarjeta.style.backgroundColor = "lightgrey";
    	var p = document.createElement("p");
    	tarjeta.draggable = "true";//el .draggable es un atributo para arrastrar//
    	divDelP.insertBefore(tarjeta,divDelP.firstChild)
    	divRecorrer.appendChild(divDelP);
		p.innerHTML = textArea.value;
 	    tarjeta.appendChild(p);  
 	    textArea.value = "";

 	    tarjeta.setAttribute("id", "ptarjeta.1" + idMovibles);
 	    tarjeta.addEventListener("dragstart", arrastrar);//ese drag inicializa el movimiento de la tarjeta
 	    tarjeta.addEventListener("dragend", terminaArrastrar);//dragend es termina de arrastrar la tarjeta//
 	    idMovibles++;


   		 
   		 // rowpadre.insertBefore(divQueseRecorre,rowpapa.firstChild)
 	   //  var divDeTarjetas = document.createElement("div");
 	   //  divDeTarjetas.("id", "divDeTarjetas")
 	   //  divDeTarjetas.style.backgroundColor = "#000";
 	    
	    
     	}
	}
	function arrastrar(evt){
		evt.dataTransfer.setData("text", this.id)//function del p//
	}
	function arrastrarSobre(evt){
		evt.preventDefault();//bloquea lo que por default hace y hace lo conrario, aun no lo entiendo //
	}
	function soltar(evt){
		var idMove = evt.dataTransfer.getData("text")
		var pMove = document.getElementById(idMove)
		this.insertBefore(pMove, this.childNodes[1]);
	}

	function dejarArrastrar(evt){

	}

	function terminaArrastrar(evt){

	}





}