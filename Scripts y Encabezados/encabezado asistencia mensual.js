var display = "Asistencia del ";
var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var desde = params["Fecha"].value;
var hasta = params["Hasta"].value;
var day1 = desde.getDate();
var day2 = hasta.getDate();
var mes1 = desde.getMonth();
var month1 = months[mes1];
var mes2 = hasta.getMonth();
var month2 = months[mes2];


var date1 = day1 + " de " + month1;
var date2 = day2 + " de " + month2;

display = display + date1 + " hasta " + date2;

display;
