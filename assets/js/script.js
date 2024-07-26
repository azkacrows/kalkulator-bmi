document.getElementById('formcal').addEventListener('submit', (e) => {
    e.preventDefault();

    const tinggi = document.getElementById('tinggi').value;
    const berat = document.getElementById('berat').value;
    const usia = document.getElementById('usia').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const hasil = document.getElementById('text-hasil');
    const output = document.getElementById('output');
    const saranHasil = document.getElementById('saran-hasil');
    const resultCard = document.querySelector('.card.hidden');

    const calBMI = (berat, tinggi) => {
        return (berat / ((tinggi / 100) * (tinggi / 100))).toFixed(1);
    };

    const bmi = calBMI(berat, tinggi);
    let hasilText = '';
    let saranText = '';

    if (bmi < 18.5) {
        hasilText = 'Kekurangan Berat Badan';
        saranText = 'Anda sebaiknya menambah berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        hasilText = 'Normal (Ideal)';
        saranText = 'Anda sehat';
    } else if (bmi >= 25 && bmi <= 29.9) {
        hasilText = 'Kelebihan Berat Badan';
        saranText = 'Anda sebaiknya mengurangi berat badan';
    } else {
        hasilText = 'Kegemukan (Obesitas)';
        saranText = 'Anda sebaiknya mengurangi berat badan';
    }

    if (usia < 18) {
        saranText +=
            '. Karena Anda masih dalam masa pertumbuhan, konsultasikan dengan dokter atau ahli gizi untuk rekomendasi yang lebih tepat.';
    } else if (usia > 60) {
        saranText +=
            '. Karena Anda sudah lanjut usia, penting untuk menjaga pola makan dan konsultasi dengan dokter secara rutin.';
    }

    hasil.innerHTML = hasilText;
    output.innerHTML = `BMI: ${bmi}`;
    saranHasil.innerHTML = saranText;

    if (bmi) {
        resultCard.classList.remove('hidden');
    }
});
