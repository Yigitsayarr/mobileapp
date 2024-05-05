// Masal listesi
var masallar = [
    "Bir varmış bir yokmuş, evvel zaman içinde kalbur saman içinde, develer tellal iken, pireler berber iken, ben annemi dinlerken, masal anlatırken...",
    "Üç küçük domuzcuk ormanda yaşarmış. Büyük bir kötü kurt vardı, birinci evi saman, ikinci evi odun, üçüncü evi tuğla olan bu evlerden hangisini yıkmaya çalışsa hep bir şekilde kaçmayı başarırlarmış...",
    "Uyuyan güzel masalıyla ünlüdür: Prens bir büyücünün kötü büyüsüne karşı savaşır ve onu öper, böylece laneti kırar ve güzel prenses uyandırır..."
];

// Masalı ekrana yazdıran fonksiyon
function masalGetir() {
    var randomIndex = Math.floor(Math.random() * masallar.length);
    var masalDiv = document.getElementById("masal");
    masalDiv.innerHTML = masallar[randomIndex];
    
    // Masal çal
    var audio = new Audio('masal1.mp3');
    audio.play();
}

// "Masal Getir" butonuna tıklama olayı
var btnMasalGetir = document.getElementById("btnMasalGetir");
btnMasalGetir.addEventListener("click", masalGetir);
