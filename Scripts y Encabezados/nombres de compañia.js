var nombre = row["first_name"]
var empresa = "";
if(nombre == "Alejandra Argueta")
	empresa = "NH Redes S.A. de C.V."
else if (nombre == "Armando Ortega")
	empresa = "Aglaskhom Servicios S.A. de C.V."
else if (nombre == "Beatriz Ruíz" || nombre == "Elibeth Mendez Alegria")
	empresa = "Alta Tecnología en Telecomunicaciones Saturno S.A. de C.V."
else if (nombre == "Emmanuel Aguilar Rios")
	empresa = "Jorge Guerrero Lopez"
else if (nombre == "Francisco Cesar Aguilar Muñoz")
	empresa = "Santa Muñoz Hernandez"
else if (nombre == "Jose Luis Canto Carrillo" || nombre == "Jose Luis Nuñez Sosa" || nombre == "Ruben Gemayel")
	empresa = "Café Servicios Dinámicos del Sureste S.A. de C.V."
else if (nombre == "Maria de los Angeles Romero Garcia")
	empresa = "Instalaciones de Antenas y Redes Telefónicas"
else if (nombre == "Felipe Sanchez")
	empresa = "MBG Constructora S.A. de C.V."
else if (nombre == "Olga Migdalia Garcia Peña")
	empresa = "Sistelver S.A. de C.V."
else if (nombre == "Fabio Leonardo Mendez Lopez" || nombre == "Jose Eutimio Perez Castillo" || nombre == "Juan Pablo Perez Damian" || nombre == "Lorenzo Ortiz Daza" || nombre == "Maria Concepcion Gonzalez Melchor" || nombre == "Oscar Rey Garciapiña Flores" || nombre == "Ramon Francisco Magaña Portilla" || nombre == "Juan Pablo Zagada" || nombre == "Aline Arlette Lozano" || nombre == "Blanca Nayeli Mujica Sarabia" || nombre == "Candido Herndan Hernández" || nombre == "Dante Ortiz Maldonado")
	empresa = nombre;
else if (nombre == "Fernando Espinoza Flores") {
	empresa = "Adriana Morales Miranda";
}
else if (nombre == "Juan Jose Salazar") {
	empresa = "Aglaskhom";
}
else if (nombre == "Juan Gomez Hernandez") {
	empresa = "Alejandro Leal";
}
else if (nombre == "Nichdali Najera Peralta") {
	empresa = "Saturno";
}
else if (nombre == "Paulina Rosas Soto") {
	empresa = "Comunicación Digital Aries";
}
else if (nombre == "Zeidy Hernandez Vidal") {
	empresa = "Erika Hernández Vidal";
}
else if (nombre == "Luis Enrique Barrera Espinosa") {
	empresa = "Francisco Arturo Amezcua Espinosa";
}
else if (nombre == "Ana Cristina Peña Solorio"){
	empresa = "Grupo Aledher"
}
else if (nombre == "Alejandro Ortega Zarate") {
	empresa = "Grupo JHAS";
}
else if (nombre == "Jessica Vences Hernandez") {
	empresa = "Grupo Viagus";
}
else if (nombre == "Jose Antonio Martinez Bahena") {
	empresa = "IETT";
}
else if (nombre == "Miguel Cachoa Ocampo") {
	empresa = "Leonor Ocampo Vargas";
}
else if (nombre == "Maricela Gomar Ocampo") {
	empresa = nombre;
}
else if (nombre == "Adrian Cigala Esquivel") {
	empresa = "P&P";
}
else if (nombre == "Mario Humberto Ibañez Alba"){
	empresa = "BRUSIM"
}
else if (nombre == "Víctor Hugo Rodríguez Perez") {
	empresa = "Quetzal"
}
else if (nombre == "Omar Maldonado") {
	empresa = "Rafael Ortíz Camarillos";
}
else if (nombre == "Alejandro Rocha Martinez") {
	empresa = "Saira Denis Rodríguez";
}
else if (nombre == "Juan Carlos Solares Sandoval") {
	empresa = "Sertel";
}
else if(nombre == "Juan Manuel Prieto Alvarez"){
	empresa = "SIJ";
}
else if (nombre == "Javier Castillo Pantoja") {
	empresa = "Telecomunicaciones";
}
else if (nombre == "Candido Herdan Hernández") {
	empresa = "Candido Hernández";
}
else if (nombre == "Gerardo Rivera Chavarria" || nombre == "Jose Angel Rivera Cruz" || nombre == "Raul Huerta Jimenez" || nombre == "Rosendo Anaya Luna" || nombre == "Victor Hugo  Lopez Garcia" || nombre == "Viridiana Castillo Marin" || nombre == "Yair Arellano Mastachi") {
	empresa = nombre;
}
else if (nombre == null || nombre == "") {
	empresa = "PC Industrial"
}
else if (nombre == "Maria Garcia Olvera") {
	empresa = "Elisur";
}
else
	empresa = nombre + "*";

empresa
