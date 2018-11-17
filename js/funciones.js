var estudiantes = new Array();

function registrar(){
    var inNota= document.getElementById("inNota");
    var inNombre= document.getElementById("inNombre");
    var inCodigo= document.getElementById("inCodigo");

    if(inCodigo.value =="" || inNombre.value =="" || inNota.value =="")
    {
            alert("Ingrese los datos necesarios")
    }else{
        var estudiante = new Estudiante(inCodigo.value,inNombre.value,parseInt(inNota.value));
        estudiantes.push(estudiante);
        inNombre.value= "";
        inNota.value= "";
        inCodigo.value= "";
        mostrarEstudiantes();
    }
    
}


function mostrarEstudiantes() {
    var tabla = document.getElementById("tabla");

    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    var theader = document.createElement("tr");
    var thCodigo = document.createElement("th");
    var thNombre = document.createElement("th");
    var thNota = document.createElement("th");


    thCodigo.innerHTML = "Codigo"
    thNombre.innerHTML = "Nombre"
    thNota.innerHTML =  "Nota"

    theader.appendChild(thCodigo);
    theader.appendChild(thNombre);
    theader.appendChild(thNota);
    tabla.appendChild(theader);
    
    

    for (x in estudiantes) {
        var trEstudiant = document.createElement("tr")
        var tdCodigo = document.createElement("td")
        var tdNombre = document.createElement("td")
        var tdNota = document.createElement("td")

        tdCodigo.innerHTML = estudiantes[x].codigo
        tdNombre.innerHTML = estudiantes[x].nombre
        tdNota.innerHTML = estudiantes[x].nota

        trEstudiant.appendChild(tdCodigo)
        trEstudiant.appendChild(tdNombre)
        trEstudiant.appendChild(tdNota)

        trEstudiant.id = "estudiante" + estudiantes[x].codigo
        tabla.appendChild(trEstudiant)
    }
}

function calcularPromedio() {
    var acumulador, contador, promedio;

    contador = 0
    acumulador = 0
    promedio = 0
    for (x in estudiantes) {
        acumulador += estudiantes[x].nota;
        contador++;
    }
    if(contador!=0){
        promedio = acumulador / contador;


        var textPromedio;

        if(document.getElementById("promedio")==null){
            textPromedio=document.createElement("p");
            textPromedio.setAttribute("id","promedio");
        }else{
            textPromedio=document.getElementById("promedio");
        }
    
    
        textPromedio.innerHTML = "El promedio es " + promedio
        textPromedio.style.backgroundColor = "#0068bf"
        document.getElementById("mensajes").appendChild(textPromedio);
    }else{
        alert("Asegurese que exista al menos un estudiante registrado");
    }
    
   

}

function Notas() {
    var notas = new Array()
    for (x in estudiantes) {
        notas[x] = estudiantes[x].nota
    }
    return notas
}

function MayorNota() {
    var notas = Notas();
    for (x in estudiantes) {
        if (estudiantes[x].nota == Math.max(...notas)) {
            ActualizarMenorMayor("#4a0072", "mayor", estudiantes[x].nota)
            document.getElementById("estudiante" + estudiantes[x].codigo).style.color = "#fff"
        }
    }
}

function MenorNota() {
    var notas = Notas();
    for (x in estudiantes) {
        if (estudiantes[x].nota == Math.min(...notas)) {
            ActualizarMenorMayor("#ae52d4", "menor", estudiantes[x].nota)
        }
    }
}

function ActualizarMenorMayor(color, valor, nota) {
    try {
        document.getElementById("estudiante" + estudiantes[x].codigo).style.backgroundColor = color
    } catch (error) {
        console.log("No cambia el color, porque no se ha listado los estudiantes")
    }
    
    var textNota;
    if(document.getElementById(valor)==null){
        textNota=document.createElement("p");
    }else{
        textNota=document.getElementById(valor);
    }
    textNota.innerHTML = "La " + valor + " nota es " + nota
    textNota.setAttribute("id",valor);
    document.getElementById("mensajes").appendChild(textNota);
    textNota.style.backgroundColor = color
}
