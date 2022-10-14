var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res) {
  res.render('anasayfa', { 'title': 'Anasayfa' });
}

const mekanBilgisi = function(req,res){
    res.render('mekanbilgisi',{'title':'MekanBilgisi'});
}

const yorumEkle = function(req,res){
    res.render('yorumekle',{'title':'YorumEkle'});
        
}
module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle

};


