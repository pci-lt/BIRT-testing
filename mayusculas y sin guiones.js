var area = row["Area"];
if(area == null){
	area = " ";
}
area = area.toUpperCase();
var arr = area.split('_');
var resultado = '';
for (var i = 0; i <arr.length;i++){
var te =  (new Packages.java.lang.String(arr[i]));
	resultado = resultado +  new Packages.java.lang.Character.toString(te.charAt(0)).toUpperCase() + te.substring(1);
	if (i < arr.length - 1) {
		resultado = resultado + ' ';
	}
}
resultado;
