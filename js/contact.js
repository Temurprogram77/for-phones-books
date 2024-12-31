// Dastlab buttonni o'chirish
const submitButton = document.getElementById('submitButton');
submitButton.disabled = true;

// Sahifa yuklanganda ma'lumotlarni tekshirish
document.addEventListener('DOMContentLoaded', function() {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
        autoRedirect(savedData);
    }
});

// Validatsiya holatini tekshirish uchun yordamchi funksiya
function validateInputs() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    return (
        usernameRegex.test(username) &&
        emailRegex.test(email) &&
        passwordRegex.test(password)
    );
}

// Xatolikni ko'rsatish va borderni qizil qilish
function showError(inputId, message) {
    const inputField = document.getElementById(inputId);
    const errorMessage = inputField.nextElementSibling;
    errorMessage.innerText = message;
    inputField.style.border = "2px solid red";
}

// Xatolikni o'chirish va borderni asl holatga qaytarish
function clearError(inputId) {
    const inputField = document.getElementById(inputId);
    const errorMessage = inputField.nextElementSibling;
    errorMessage.innerText = "";
    inputField.style.border = "1px solid #ccc";
}

// Kiritish maydonlaridagi har bir o'zgarishni kuzatish
['username', 'email', 'password'].forEach((inputId) => {
    const inputElement = document.getElementById(inputId);
    inputElement.addEventListener('input', function() {
        const value = inputElement.value.trim();
        const regex =
            inputId === 'username'
                ? /^[a-zA-Z0-9_]{3,16}$/
                : inputId === 'email'
                ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!regex.test(value)) {
            showError(inputId, `${inputId.charAt(0).toUpperCase() + inputId.slice(1)} noto'g'ri!`);
        } else {
            clearError(inputId);
        }

        // Har bir input validatsiyasini tekshirib, button holatini yangilash
        submitButton.disabled = !validateInputs();
    });
});

// Ma'lumotlarni saqlash va yangi accountga o'tish
submitButton.addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Ma'lumotlarni localStorage-ga saqlash
    const userData = { username, email, password };
    localStorage.setItem('userData', JSON.stringify(userData));

    // "Yangi accountga o'tish" buyrug'i
    showNotification("Yangi accountga o'tkazilmoqda...");

    // Account sahifasiga o'tish
    setTimeout(function() {
        window.location.href = "/public/account.html"; // Account sahifasiga o'tish
    }, 2000);
});

// Saqlangan ma'lumotlarga asoslangan avtomatik yo'naltirish
function autoRedirect(data) {
    const currentUsername = document.getElementById('username').value.trim();
    const currentEmail = document.getElementById('email').value.trim();
    const currentPassword = document.getElementById('password').value.trim();

    if (
        data.username === currentUsername &&
        data.email === currentEmail &&
        data.password === currentPassword
    ) {
        showNotification("Siz allaqachon accountga kirgansiz!");
        setTimeout(function() {
            window.location.href = "/public/account.html"; // Account sahifasiga o'tish
        }, 2000);
    }
}

// Xabarni sahifada ko'rsatish
function showNotification(message) {
    const notification = document.querySelector('.notification');
    notification.textContent = message;

    // Xabarni 3 soniyadan keyin o'chirish
    setTimeout(function() {
        notification.textContent = '';
    }, 3000);
}
