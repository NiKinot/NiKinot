const messages = [
    "Estas segura?",
    "Muy segura??",
    "De verdad?",
    "Meu por favor",
    "Piensalo un poquito!",
    "Si me dices que no voy a llorar",
    "Lo voy a hacer",
    "Voy a llorar por años",
    "Esta bien, dejare de molestar",
    "Joda, di que si di que si! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
