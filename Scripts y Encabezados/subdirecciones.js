var area = row["_id.area"];
var display = "Subdirección desconocida";

//Metro
if(area == "acapulco" || area == "chilpancingo" || area == "morelos" || area == "cuernavaca"){
	display = "GUERRERO-MORELOS";
}
else if (area == "balbuena" || area == "cuautitlan-morelos" || area == "ermita-tlahuac" || area == "satelite" || area == "texcoco-zaragoza" || area == "toluca") {
	display = "METRO NORTE";
}
else if (area == "lindavista" || area == "lomas" || area == "mixcoac" || area == "sotelo" || area == "universidad" || area == "valle-san_juan") {
	display = "METRO SUR";
}

//Norte
else if (area == "matamoros" || area == "monterrey_i" || area == "monterrey_ii" || area == "monterrey_foraneo" || area == "nuevo_laredo" || area == "reynosa" || area == "sabinas" || area == "tampico" || area == "torreon") {
	display = "MONTERREY";
}
else if (area == "aguascalientes" || area == "celaya" || area == "irapuato" || area == "leon" || area == "queretaro" || area == "san_luis_potosi" || area == "zacatecas") {
	display = "QUERÉTARO";
}

//Occidente
else if (area == "colima" || area == "guadalajara_centro" || area == "guadalajara_ote" || area == "guadalajara_pte" || area == "jalisco" || area == "morelia" || area == "puerto_vallarta" || area == "tepic" || area == "zamora") {
	display = "GUADALAJARA";
}
else if (area == "cd_juarez" || area == "chihuahua" || area == "ciudad_obregon" || area == "culiacan" || area == "durango" || area == "hermosillo" || area == "la_paz" || area == "los_mochis" || area == "mazatlan" || area == "nogales") {
	display = "HERMOSILLO";
}

//Sur
else if (area == "oaxaca" || area == "pachuca" || area == "puebla" || area == "tlaxcala") {
	display = "PUEBLA";
}
else if (area == "campeche" || area == "cancun" || area == "chiapas" || area == "quintana_roo"|| area == "tabasco" || area == "yucatan" || area == "villahermosa" || area == "merida" || area == "mérida" || area == "tuxtla_gutierrez") {
	display = "SURESTE";
}
else if (area == "coatzacoalcos" || area == "cordoba" || area == "jalapa" || area == "poza_rica" || area == "veracruz") {
	display = "VERACRUZ";
}

display;