var objeto = [{ nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero"},
              { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre"},
              { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo"},
              { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
              { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" }];

var resultado = "";
function mostrar_nombre(){
  for(var i in objeto){
    resultado +=  "<li>Nombre:" + objeto[i].nombre + "<br>" +
                  "<li>Apellidos:" objeto[i].apellido + "<br>" +
                  "<li>Rol:" objeto[i].rol + "<br>"+
                  "<li>Cumpleaños:" objeto[i].cumpleanios + "<br>" + "<br>";
  }
  document.getElementById("imprimir").innerHTML = resultado;
}
