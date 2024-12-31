document.addEventListener('DOMContentLoaded', function() {
    // localStorage-dan foydalanuvchi malumotlarini olish
    const savedData = JSON.parse(localStorage.getItem('userData'));

    if (savedData) {
        // Foydalanuvchi ma'lumotlarini ekranga chiqarish
        document.getElementById('usernameSpan').textContent = savedData.username;
        document.getElementById('emailSpan').textContent = savedData.email;
        document.getElementById('passwordSpan').textContent = savedData.password;

        // Rasmni ko'rsatish
        const profileImage = document.getElementById('profileImage');
        profileImage.src = savedData.profileImage || "default-avatar.png"; // Agar rasm yo'q bo'lsa, default rasm ko'rsatiladi
    } else {
        // Ma'lumotlar yo'q bo'lsa, bildirishni ko'rsatish
        showNotification("Foydalanuvchi ma'lumotlari topilmadi. Iltimos, ro'yxatdan o'ting.");
        setTimeout(function() {
            window.location.href = "index.html"; // 3 soniya kutgandan so'ng ro'yxatdan o'tish sahifasiga qaytish
        }, 3000);
    }
});

// Rasmni tahrirlash
document.getElementById('editImageButton').addEventListener('click', function() {
    document.getElementById('editImageInput').click(); // Inputni faollashtirish
});

// Rasm faylini tanlash
document.getElementById('editImageInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            // Rasmni yangilash
            const profileImage = document.getElementById('profileImage');
            profileImage.src = event.target.result;

            // localStorage-ni yangilash
            const savedData = JSON.parse(localStorage.getItem('userData'));
            savedData.profileImage = event.target.result;
            localStorage.setItem('userData', JSON.stringify(savedData));

            // Rasmni muvaffaqiyatli yangilash haqida bildirish
            showNotification("Rasm muvaffaqiyatli yangilandi.");
        };
        reader.readAsDataURL(file); // Rasmni base64 formatida o'qish
    }
});

// Ismni tahrirlash
document.getElementById('editNameButton').addEventListener('click', function() {
    const nameInput = document.getElementById('editNameInput');
    nameInput.style.display = 'block'; // Inputni ko'rsatish
    nameInput.value = document.getElementById('usernameSpan').textContent; // Hozirgi ismni inputga joylash

    // Ismni saqlash uchun tugma qo'shish
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Saqlash';
    saveButton.style.marginTop = '10px';
    document.getElementById('editNameButton').after(saveButton);

    saveButton.addEventListener('click', function() {
        const newName = nameInput.value;
        if (newName) {
            // Ismni yangilash
            document.getElementById('usernameSpan').textContent = newName;

            // localStorage-ni yangilash
            const savedData = JSON.parse(localStorage.getItem('userData'));
            savedData.username = newName;
            localStorage.setItem('userData', JSON.stringify(savedData));

            // Ismni muvaffaqiyatli yangilash haqida bildirish
            showNotification("Ism muvaffaqiyatli yangilandi.");
        }
        nameInput.style.display = 'none'; // Inputni yashirish
        saveButton.remove(); // Saqlash tugmasini olib tashlash
    });
});

// Chiqish qilish
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('userData'); // LocalStorage-dan ma'lumotlarni olib tashlash
    showNotification("Siz tizimdan chiqdingiz.");
    setTimeout(function() {
        window.location.href = "/public/contact.html"; // Ro'yxatdan o'tish sahifasiga qaytish
    }, 1000);
});

// Xabarni sahifada ko'rsatish funksiyasi
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);

    // Xabarni 3 soniyadan keyin o'chirish
    setTimeout(function() {
        notification.remove();
    }, 3000); // 3 soniya kutgandan so'ng
}
