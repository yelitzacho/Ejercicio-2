var datosLaboratoria = [{ nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero"},
             { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre"},
             { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo"},
             { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
             { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" }];

var resultado = datosLaboratoria.forEach(function(indice,datos){
  documernt.getElementById("registro").innerHTML+=  ("<ul>"
                                                    "<li>Nombre:" + datos[indice].nombre + "</li>"
                                                    "<li>Apellidos:" datos[indice].apellido + "<li>"
                                                    "<li>Rol:" datos[indice].rol + "<li>"
                                                    "</li><li> Cumpleaños:"datos[indice].cumpleanios +"</li>"
                                                    "</ul>");
};
