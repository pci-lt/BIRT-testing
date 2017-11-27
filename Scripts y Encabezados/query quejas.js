//pring logs
importPackage(Packages.java.lang);
function log(msg){
    System.out.println(msg);
}
reportContext.setGlobalVariable('log', log);

var query = this.queryText.toString();
var new_query = "";
var bookmark = "{$exists:false},";
var fecha = params["Fecha"].value;
var month = params["Mes Quejas"].value;
var year = params["Año Quejas"].value;


if(fecha!= null && fecha!= ""){
	log(' entr al 1er if \n');
	log('Fecha: ' + fecha);
	fecha = fecha.toString();
	var date = fecha.split('-');

	var year = parseInt(date[0], 10);//fecha.substring(0,4)
	var month = parseInt(date[1],10); //fecha.substring(5,7)
	var day = parseInt(date[2], 10);//fecha.substring(8)
	log('date: ' + year);
	log('date: ' + month);
	log('date: ' + day);

	var day_to = day + 1;
	var month_to = month;
	var year_to = year;


	if((day == 31 && month == 1) || (day == 31 && month == 3) || (day == 31 && month == 5) || (day == 31 && month == 7) || (day == 31 && month == 8) || (day == 31 && month == 10)){
		day_to = 1;
		month_to = month + 1;
	}
	if((day == 30 && month == 4) || (day == 30 && month == 6) || (day == 30 && month == 9) || (day == 30 && month == 11)){
		day_to = 1
		month_to += 1;
	}
	if((day == 28 && month == 2) || day == 29 && month == 2){
		day_to = 1;
		month_to +=1;
	}
	if(day == 31 && month == 12){
		day_to = 1;
		month_to = 1;
		year_to += 1;
	}

	if(day < 10)
		day = '0' + day;

	if (day_to < 10) {
		day_to = '0' + day_to;
	}

	if (month < 10 ) {
		month = '0' + month
	}
	if (month_to < 10 ) {
		month_to = '0' + month_to
	}
	var f1 = year + "-" + month + "-" + day;
	var f2 = year_to + "-" + month_to + "-" + day_to;
	
	log('Fecha: ' + fecha);
	log('Fecha 1: ' + f1);
	log('Fecha 2: ' + f2);


	var bookmark = "{$exists:false},";


	new_query = "created_at: {$gte: {$date:'" + f1 + "T05:00:00Z'} , $lte:{$date:'" + f2 + "T04:59:59Z'} }";

}else{

if(month != '' && month != null){
	log(' entr al 2do if \n');

	var month_to = month;
	var year_to = year;
	
	if(month == 12){
		year_to = year + 1;
		month_to = "01";
	}else{
		month_to = month + 1 ;
	}
			
	if(month_to<10 && month_to != "01"){
		month_to = '0' + month_to;
	}
		
	if(month<10){
		month = '0' + month;
	}
	
	var f1 = year + "-" + month;
	var f2 = year_to + "-" + month_to;
	
	new_query = "created_at: {$gte: {$date:'" + f1 + "-01T05:00:00Z'} , $lte:{$date:'" + f2 + "-01T04:59:59Z'} }";	

	}
}

log('new query= ' + new_query)

query = query.replace(bookmark, bookmark + new_query );
this.queryText = query;

log('query' + query);