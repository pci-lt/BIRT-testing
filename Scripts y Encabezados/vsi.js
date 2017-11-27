var tarea = row["_id.tipo_tarea"];
var display = "";
var ti = tarea.search("TI");
var tk = tarea.search("TK");
var fc = tarea.search("FC");

if(ti != -1 || tk != -1 || fc != -1 || tarea == "TS VOZ" || tarea == "MIGRACIÓN VOZ" ){
	display = "NO"
}
else if (tarea == "MIGRACION VOZ" || tarea.search("Fc") != -1 || tarea.search("Ti") != -1 || tarea.search("Tk") != -1) {
	display = "NO"
}
else{
	display = "MVSI"
}
display;