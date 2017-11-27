var tarea = row["tipo"];
var display = "";
var ti = tarea.indexOf("TI");
var tk = tarea.indexOf("TK");
var fc = tarea.indexOf("FC");
var d9 = tarea.indexOf("D9");

if(ti != -1 || tk != -1 || fc != -1 || tarea == "TS VOZ" || tarea == "MIGRACIÓN VOZ" || d9 != -1){
	display = "NO"
}
else if (tarea == "MIGRACION VOZ" || tarea.indexOf("Fc") != -1 || tarea.indexOf("Ti") != -1 || tarea.indexOf("Tk") != -1 || tarea.indexOf("d9") != -1) {
	display = "NO"
}
else{
	display = "MVSI"
}
display;