//pring logs
importPackage(Packages.java.lang);
function log(msg){
    System.out.println(msg);
}
reportContext.setGlobalVariable('log', log);

var query = this.queryText.toString();
var new_query = "";
var bookmark = "{$exists:false},";
var password = params["Password"].value
var inicio = 0;
var fin = 0;
var connection = 0;
if(password != null || password !=""){
  inicio = password.indexOf("#");
  fin = password.indexOf("&");
  connection = password.substring(inicio+1, fin);
  log("Conexión: " + connection);
  new_query = " connection_id: " + connection + ","
}



log('new query= ' + new_query)

query = query.replace(bookmark, bookmark + new_query );
this.queryText = query;

log('query' + query);
