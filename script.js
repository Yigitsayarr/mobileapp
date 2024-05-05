
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
