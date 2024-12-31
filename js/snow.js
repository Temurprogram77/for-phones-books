const canvas = document.getElementById("smoothSnow");
const ctx = canvas.getContext("2d");

// Canvas o'lchamlarini oynaga moslashtirish
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

// Qor parchasi yaratish
function createSnowflake() {
    const x = Math.random() * canvas.width; // Tasodifiy x koordinata
    const y = Math.random() * canvas.height; // Tasodifiy y koordinata
    const size = Math.random() * 3 + 2; // Tasodifiy o'lcham
    const speedY = Math.random() * 1 + 0.5; // Pastga tushish tezligi
    const speedX = Math.random() * 0.15 - 0.15; // Yon tomonga harakat

    snowflakes.push({ x, y, size, speedY, speedX });
}

// Qor parchalarini yangilash va chizish
function updateSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Ekranni tozalash

    for (let flake of snowflakes) {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);

        // Soya qo'shish
        ctx.shadowBlur = 10; // Soya tarqalish darajasi
        ctx.shadowColor = "rgba(255, 255, 255, 0.5)"; // Yengil oqish soya

        ctx.fillStyle = "rgba(255, 255, 255, 0.78)";
        ctx.fill();

        // Qor parchalarining yangi pozitsiyasini hisoblash
        flake.y += flake.speedY;
        flake.x += flake.speedX;

        // Ekrandan chiqib ketgan parchalarni qayta joylashtirish
        if (flake.y > canvas.height) {
            flake.y = -flake.size;
            flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width || flake.x < 10) {
            flake.x = Math.random() * canvas.width;
        }
    }
}

// Animatsiyani boshqarish
function animate() {
    updateSnowflakes();
    requestAnimationFrame(animate); // Animatsiya davom etadi
}

// 150 ta qor parchasi yaratish
for (let i = 0; i < 200; i++) {
    createSnowflake();
}

// Animatsiyani boshlash
animate();

// Oyna hajmi o'zgarganda canvasni moslashtirish
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});