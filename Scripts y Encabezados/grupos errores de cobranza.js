var error = row["error"];
var n = 0;
var display = "";

if(error.search("exp_liq_telmex") != -1 || error.search("objetadas") != -1 || error.search("os_te") != -1 || error.search("abierto") != -1 || error.search("Herramienta DIQUE") != -1 || error.search("Tipo Tarea") != -1)
	display = "Supervisor";

if(error.search("No fue instalado por un constratista.") != -1 || error.search("El expediente") != -1 || error.search("No encontrado.") != -1)
	display = "Supervisor";

if(error.search("No fué instalado por un constratistas.") != -1 || error.search("Fue instalado por el contratista") != -1)
	display = "Supervisor";

if(error.search("cobre") != -1 || error.search("telefono_-_folio") != -1)
	display = "Mesa de control";

if(error.search("Fue instalado hace") != -1 || error.search("Fue instalado hace") != -1 || error.search("no pertenece al tipo de") != -1 || error.search("SIN ESTATUS CARGA FORANEA") != -1 || error.search("Ya fué capturado,") != -1)
	display = "Facturación";

if(error.search("No se pudo registrar el folio") != -1 || error.search("prev-2016") != -1 || error.search("Se encuentra duplicado.") != -1 || error.search("El trabajo contiene un valor") != -1 || error.search("No contiene ningún trabajo a registrar.") != -1)
	display = "Facturacion"

display;
