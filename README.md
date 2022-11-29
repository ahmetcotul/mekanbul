# Mekanbul ThunderClient ve Rest-Api Testleri
A. Thunder Client Kullanılarak Collection üzerinden Test Edilmesi

<img src="/pictures/thunder_client_cikti.png">


B. Mocha, Chai ve Supertest kullanımı ile Api Testi

<img src="/pictures/test_console_output.png">



Açıklama : bu test test.js dosyası üzerinden gerçekleşerek yapılmıştır. ```npm run test```kullanılarak Test edilmiştir. 
Böylece konsol üzerinden test gerçekleştirmiş oluruz.








# MekanBul REST API Adresleri

1. [Girilen Konum Civarındaki Mekanları Listele](https://mekanbul5.ahmetcotul.repl.co/api/mekanlar?enlem=37.5&boylam=35.4)


<img src="/pictures/girilen konum.png">


2. [Mekanın ID ile Mekan Bilgilerini Getir](https://mekanbul5.ahmetcotul.repl.co/api/mekanlar/637d1b54d1b87036e5719c57)


<img src="/pictures/mekanbilgileri.png">


3. [Bir Mekana Ait Belirli Bir Yorumu Getir](https://mekanbul5.ahmetcotul.repl.co/api/mekanlar/637d1b54d1b87036e5719c57/yorumlar/637d1b98d1b87036e5719c58)


<img src="/pictures/yorumbilgileri.png">

     
     
NOT : Visual Studio Code kullanamadığım için mecburen alternatifi olan postman üzerinden kontrol etmek zorunda kaldım.->(EDIT:YALNIZCA SON ÜÇ MADDE İÇİN GEÇERLİDİR.)
