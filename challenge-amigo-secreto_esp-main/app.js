// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para añadir amigos
let amigos = [];
let numeroMaximo = 0;

function agregarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }

}

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    
    if (nombre) {
        amigos.push(nombre);
        console.log(amigos);
        numeroMaximo++;
        agregarLista();
        document.querySelector("#amigo").value = ""
    }else{
        alert("¡Ingrese un nombre válido!")
    }
    console.log(numeroMaximo)
}


agregarLista(amigos)

function sortearAmigo(){
    
    if (amigos != ""){
        let numeroaleatorio = Math.floor(Math.random()*numeroMaximo);
        console.log(numeroaleatorio);
        let resultado = amigos[numeroaleatorio];
        alert(`El nombre escogido es ${resultado}`);
        
    }else{
        alert("No existen datos");
    }

}
