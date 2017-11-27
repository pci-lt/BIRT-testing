var estatus = row["_id.estatus_cob"];
var display = "";

if (estatus == "pendiente" || estatus == "validacion" || estatus == "aceptada" || estatus == "archivo_carga_masiva" || estatus == "error_validacion" || estatus == "error_de_paco") {
	display = "Órden de servicio";
}
else if (estatus == "paco") {
	display = "PACO";
}
else if (estatus == "Liberada") {
	display = "Órden de compra";
}
display;