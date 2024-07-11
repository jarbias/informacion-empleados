//En una empresa se tiene personal obrero y personal administrativo.
// La empresa necesita determinar cuál es el monto promedio que paga por cada tipo de personal. 
// Al ser consultada por la forma como desean que se presente la salida, 
//la empresa suministra el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana 
//$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) 
//gana $150:
import Trabajadores from "./Trabajadores.js";
import Empresa from "./Empresa.js";

let t1 = new Trabajadores('Juan', 100, 'obrero');
let t2 = new Trabajadores('Ana', 120, 'obrero');
let t3 = new Trabajadores('Lin', 200, 'administrativo');
let t4 = new Trabajadores('Mary', 50, 'obrero');
let t5 = new Trabajadores('Carlos', 150, 'administrativo');
let emp = new Empresa();
emp.procesartrabajadores(t1);
emp.procesartrabajadores(t2);
emp.procesartrabajadores(t3);
emp.procesartrabajadores(t4);
emp.procesartrabajadores(t5);   
let salida = document.getElementById('resultados');
salida.innerHTML += "Monto pagado a los obreros: $" + emp.devolversalarioobrero() + " <br>";
salida.innerHTML += "promedio pagado a  "+ emp.contobreros+ " obreros: $" + emp.promedioobreros() + " <br>";
salida.innerHTML+= "<br>";
salida.innerHTML += "Monto pagado a los administrativos: $" + emp.devolversaladmin() + " <br>";
salida.innerHTML += "promedio pagado a  "+ emp.contadmin+ " administrativos: $" + emp.promedioadmin() + " <br>";