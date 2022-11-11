//BU ODEV AHMET ÇOTUL TARAFINDAN YAZILMIŞTIR DAĞITIMI/KOPYALANMASI YASAKTIR......
var mongoose=require("mongoose"); //mongoose kullanılacağı belirtilmiştir
require("./mekansema"); //new log

var dbURI = "mongodb://localhost/mekanbul"; 
mongoose.connect(dbURI);
//su anda bağlantı sağlandı veritabanı çalışıyorsa direkt bağlanılabilir...


function kapat(msg,callback){
	mongoose.connection.close(function(){
		console.log(msg);
		callback();//Amaç?
	
	});


}
process.on("SIGINT",function(){
	kapat("Uygulama kapatıldı",function() {
		process.exit(0);
	});

});

mongoose.connection.on("connected",function(){

//connection bağlandığında fonksiyonu da çalıştır diyoruz amacı connect stringi ile karşılık geleni eşleştirmek
	
	console.log(dbURI+" adresindeki veritabanına bağlandı..");


});

mongoose.connection.on("disconnected",function(){
        console.log(dbURI+" adresindeki veritabanına koptu..");
	


});
mongoose.connection.on("error",function(){
	console.log(dbURI+"adresindeki veritabanı bağlantı hatası..");
	


});






















