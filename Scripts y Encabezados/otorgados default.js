var desde = params["Fecha"].value;
var campo = row["Campo"];
var fecha = 0;
var dia = "";
var diferencia = row["Diferencia de dias"];
var i = 0;
var display = 0;

do{

	fecha = BirtDateTime.weekDay(desde, 1);
	if((fecha == 1 || fecha == 7) && campo == "Oficina"){
		display++;
	}
	else if (fecha == 1 && campo == "Campo") {
		display++;
	}
	fecha = 0;
	desde = BirtDateTime.addDay(desde, 1);
	i++;

}while(i < diferencia);

display;