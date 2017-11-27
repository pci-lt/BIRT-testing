var desde = params["Fecha"].value;
var hasta = params["Hasta"].value;
var dif = row["DifDate"];
var fechas = [0];
var count = 0;

for (var i=0; i < dif; i++) {
	fechas[i] = BirtDateTime.dayOfWeek(desde);
	desde = BirtDateTime.addDay(desde , 1);
}

for (var i = 0; i < fechas.length; i++) {
	if ((fechas[i] == 1 || fechas[i] == 7) && row["Campo"] == "Oficina"){
		count++
	}
	if ((fechas[i] == 1 && row["Campo"] == "Campo"){
		count++
	}
}
count;