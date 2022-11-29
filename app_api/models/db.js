var mongoose = require('mongoose');
//var dbURI = "mongodb+srv://ahmett:uykIknYCywJES8gw@cluster0.gmxz3hn.mongodb.net/?retryWrites=true&w=majority";
var dbURI = "mongodb://127.0.0.1/mekanbul";
mongoose.connect(dbURI);


function kapat(msg,callback){
	mongoose.connection.close(function(){
		console.log(msg);
		callback();
	});
	
}

process.on("SIGINT",function(){
	kapat("uygulama kapatıldı!",function(){
		process.exit(0);
	});
	
});

mongoose.connection.on("connected",function(){
	console.log(dbURI+" adresine bağlantı sağlandı...\n");
});


mongoose.connection.on("error",function(){	
	console.log("baglantı hatası!\n");
});

mongoose.connection.on("disconnected",function(){
	
	console.log("bağlantı kesildi!\n");
	
});

require('./mekansema');