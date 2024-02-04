let animatedNumber = 0;

function updateNumber() {
    // a güncelle
    document.getElementById('animatedNumber').textContent = animatedNumber;

    // Sayıyı hızla artır
    animatedNumber += 1;

    // Eğer sayı 40'a ulaştıysa sıfırla
    if (animatedNumber > 40) {
        animatedNumber = 0;
    }
}

// Sayfa her kaydırıldığında updateNumber fonksiyonunu çağır
document.addEventListener('scroll', updateNumber);

// İlk yüklenme sırasında bir kez çağır
updateNumber();