// Masal listesi
var masallar = {
    "Hazine Sandığı": "Bir varmış bir yokmuş, evvel zaman içinde kalbur saman içinde, develer tellal iken, pireler berber iken, ben annemi dinlerken, masal anlatırken...",
    "Korsan Gemisi": "Üç küçük domuzcuk ormanda yaşarmış. Büyük bir kötü kurt vardı, birinci evi saman, ikinci evi odun, üçüncü evi tuğla olan bu evlerden hangisini yıkmaya çalışsa hep bir şekilde kaçmayı başarırlarmış...",
    "Küçük Prenses": "Uyuyan güzel masalıyla ünlüdür: Prens bir büyücünün kötü büyüsüne karşı savaşır ve onu öper, böylece laneti kırar ve güzel prenses uyandırır..."
};

// Ses dosyaları
var sesDosyalari = {
    "Hazine Sandığı": "masal1.mp3",
    "Korsan Gemisi": "masal2.mp3",
    "Küçük Prenses": "masal3.mp3"
};

// Şu anda çalan ses
var currentAudio = null;

// Masal seçme fonksiyonu
function masalSec(masalAdi) {
    var masalDiv = document.getElementById("masal");
    masalDiv.innerHTML = masallar[masalAdi];
    
    // Daha önce çalan sesi durdur
    if (currentAudio) {
        currentAudio.pause();
    }
    
    // Yeni sesi çal
    var audioDosyasi = sesDosyalari[masalAdi];
    currentAudio = new Audio(audioDosyasi);
    currentAudio.play();
}

// Durdurma butonuna tıklama olayı
var btnDurdur = document.getElementById("btnDurdur");
btnDurdur.addEventListener("click", function() {
    if (currentAudio) {
        currentAudio.pause();
    }
});

// Masal seçme düğmelerine tıklama olayları
var btnHazineSandigi = document.getElementById("btnHazineSandigi");
btnHazineSandigi.addEventListener("click", function() {
    masalSec("Hazine Sandığı");
});

var btnKorsanGemisi = document.getElementById("btnKorsanGemisi");
btnKorsanGemisi.addEventListener("click", function() {
    masalSec("Korsan Gemisi");
});

var btnKucukPrenses = document.getElementById("btnKucukPrenses");
btnKucukPrenses.addEventListener("click", function() {
    masalSec("Küçük Prenses");
});
