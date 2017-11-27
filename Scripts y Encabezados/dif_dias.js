var desde = new Date(params["Fecha"].value);
desde = desde.toLocaleDateString();
var hasta = new Date(params["Hasta"].value);
hasta = hasta.toLocaleDateString();

desde = desde.split("/");
hasta = hasta.split("/");

var dif = FechaDif(desde[0],desde[1], desde[2], hasta[0], hasta[1], hasta[2]);
dif;

function FechaDif(day1, day2, month1, month2, year1, year2) {
	var days1, days2, dif;

	day1 = parseInt(day1,10);
	day2 = parseInt(day2,10);
	month1 = parseInt(month1,10);
	month2 = parseInt(month2,10);
	year1 = parseInt(year1, 10);
	year2 = parseInt(year2, 10);

	if (month1 > 12 || month2 > 12) {
		return -1;
	}
	if((month1== 1) || (month1==3) || month1 == 7 || month1 == 8 || month1 == 10 || month1 == 12){
		if (day1>31) {
			return -1;
		}
	}
	if((month2== 1) || (month2==3) || month2 == 7 || month2 == 8 || month2 == 10 || month2 == 12){
		if (day2>31) {
			return -1;
		}
	}
	if(month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11){
		if (day1 > 31) {
			return -1;
		}
	}
	if(month2 == 4 || month2 == 6 || month2 == 9 || month2 == 11){
		if (day2 > 31) {
			return -1;
		}
	}
	if (month1 == 2 && day1 >29) {
		return -1
	}
	if (month2 == 2 && day2 >29) {
		return -1
	}

	days1 = DateToDays(day1, month1, year1);
	days2 = DateToDays(day2, month2, year2);

	dif = days2 - days1;
	if(dif < 0){
		return (-1*dif);
	}
	return dif;
}
function DateToDays(day, month, year) {
	day = parseInt(day, 10);
	month = parseInt(month,10);
	year = parseInt(year,10);
	var cant_bic, cant_year, cant_days, no_bic;

	cant_bic = parseInt((year-1904)/4 + 1);
	no_bic = parseInt((year-1904)/4 + 1);
	cant_year = parseInt(year - 1904);
	cant_days = parseInt(cant_year*365 + cant_bic);

	var i;
	for (var i = 1; i < month; i++) {
		if ((i==1) || i==3 || i==5 || i==7 || i==8 || i==10 || i==12) {
			cant_days += 31;
		}
		if (i==4 || i==6 || i==9 || i==11) {
			cant_days +=30;
		}
		if (i==2) {
			if (no_bic) {
				cant_days +=28;
			}
			else{
				cant_days +=29;
			}
		}
	}
	cant_days += day;
	return cant_days;
}