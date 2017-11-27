var puesto = row["position"];
var display = "";

if(puesto.indexOf("Supervisor") != 1 || puesto.indexOf("Coordinador") != -1 || puesto.indexOf("Auxiliar Administrativo") || puesto.indexOf("Axiliar Call Center") != -1){
	display = "Campo";
}
else if(puesto.indexOf("Auxiliar Administrativo") != -1 || puesto.indexOf("Portalero") != -1 || puesto.indexOf("Tecnico") != -1){
	display = "Campo";
}
else if (puesto.indexOf("Almacenista") != -1 || puesto.indexOf("Asistente") != -1 || puesto.indexOf("Desarrollador") != -1 || puesto.indexOf("Gerente") != -1 ) {
	display = "Oficina";
}
else if (puesto.indexOf("Instructor") != -1 || puesto.indexOf("Programador") != -1) {
	display = "Oficina";
}
else{
	display = "Desconocido";
}
display;