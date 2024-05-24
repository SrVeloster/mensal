const classeMain = document.querySelector(".classeMain"),
qrInput = classeMain.querySelector(".form input"),
generateBtn = classeMain.querySelector(".form button"),
qrImg = classeMain.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = "Gerando um QR Code...";
    qrImg.src = `https://www.qrtag.net/api/qr_4.png?url=${qrValue}`;
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Gerar QR Code";
        classeMain.classList.add("active");
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        classeMain.classList.remove("active");
    }
});
