var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res) {
    res.render('anasayfa',{ 
        "baslik": 'Anasayfa',
        "sayfaBaslik":{
            "siteAd":"MekanBul",
            "slogan":"Civardaki Mekanları Keşfetin!"
         },
        "mekanlar":[
            {
                "ad":"Starbucks",
                "puan":4,
                "adres":"Centrum Garden AVM",
                "imkanlar":["Kahve","Çay","Kek"],
                "mesafe":"10km"


            },

            {
                "ad":"Barida Kafe",
                "puan":"5",
                "adres":"Sdü Batı Kampüsü",
                "imkanlar":["Kahve","Çay","Kek"],
                "mesafe":"1km"  
            },

            {
                "ad":"Taş Kafe",
                "puan":"3",
                "adres":"Sdü Batı Kampüsü",
                "imkanlar":["Kahve","Çay","Kek"],
                "mesafe":"4km"
            }



        ]

 
    });
}

const mekanBilgisi = function(req,res){
    res.render('mekanbilgisi',{
        'baslik':'MekanBilgisi',
        'mekanBaslik':"Starbucks",
        'mekanDetay':{
            "ad":"Starbucks",
            "puan":"4",
            "adres":"Centrum Garden AVM",

            "saatler":[

                {
                "gunler":"Pazartesi-Cuma",
                "acilis":"9.00",
                "kapanis":"23.00",
                "kapali":false
                },
            
                {
                "gunler":"Cumartesi-Pazar",
                "acilis":"10.00",
                "kapanis":"22.00",
                "kapali":false
                }

            ],

            "imkanlar":["Kahve","Çay","Kek"],
            "koordinatlar":{
                "enlem":"37.78",
                "boylam":"30.56"
            },
            "yorumlar":[
                {
                    "yorumYapan":"Ahmet Çotul",
                    "yorumMetni":"Kahveler Pahalı",
                    "tarih":"20 Ekim 2022",
                    "puan":"4"
                }
            ]
        }



    });
}

const yorumEkle = function(req,res){
    res.render('yorumekle',{
    'baslik':'YorumEkle'
    
});
        
}
module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle

};


