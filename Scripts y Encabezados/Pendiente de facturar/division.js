var area = row["_id.area"];
var display = "";

//Inicia Metro
if(area == "balbuena" || area == "cuautitlan-morelos" || area == "ermita-tlahuac" || area == "satelite" || area == "texcoco-zaragoza"|| area == "toluca"){
	display = "Metro"
}
else if (area == "lindavista" || area == "lomas" || area == "mixcoac" || area == "sotelo" || area == "universidad" || area == "valle-san_juan") {
	display = "Metro"
}
else if (area == "acapulco" || area == "chilpancingo" || area == "cuernavaca") {
	display = "Metro"
}

// inicia Occidente
else if (area == "chihuahua" || area == "culiacan" || area == "durango" || area == "hermosillo" || area == "juarez" || area == "la_paz") {
	display = "Occidente"
}
else if (area == "los_mochis" || area == "mazatlan" || area == "nogales" || area == "obregon") {
	display = "Occidente"
}
else if (area == "colima" || area == "guadalajara_cto" || area == "guadalajara_ote" || area == "guadalajara_pte" || area == "jalisco") {
	display = "Occidente"
}
else if (area == "morelia" || area == "pto_vallarta" || area == "tepic" || area == "zamora") {
	display = "Occidente"
}

//Inicia Norte

else if (area == "sabinas" || area == "tampico" || area == "torreon" || area == "aguascalietnes" || area == "celaya" || area == "irapuato" || area == "leon" ) {
	display = "Norte"
}
else if (area == "queretaro" || area == "san_luis_potosi" || area == "zacatecas") {
	display = "Norte"
}
else if (area == "matamoros" || area == "monterrey_i" || area == "monterrey_ii" || area == "monterrey_foraneo" || area == "nuevo_laredo" || area == "reynosa") {
	display = "Norte"
}

//Inicia Sur
else if (area == "oaxaca" || area == "pachuca" || area == "puebla" || area == "tlaxcala" || area == "campecha" || area == "cancun" || area == "merida") {
	display = "Sur"
}
else if (area == "tuxtla_gutierrez" || area == "villahermosa" || area == "coatzacoalcos" || area == "cordoba" || area == "jalapa" || area == "poza_rica" || area == "veracruz") {
	display = "Sur"
}

display;