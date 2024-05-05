document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

    // Formdaki bilgileri al
    var name = document.getElementById('name').value;
    var interests = document.getElementById('interests').value;

    // Bu bilgileri işleme koymak için bir API'ye gönderebilir veya yerel depolama kullanabilirsiniz

    // Örnek: Konsola yazdırma
    console.log('Ad: ' + name);
    console.log('İlgi Alanları: ' + interests);

    // Formu sıfırla
    document.getElementById('profileForm').reset();
});
