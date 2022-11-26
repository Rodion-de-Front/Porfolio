function transfer(date) {
    document.querySelector('main').innerHTML = null;
    document.querySelector('main').append(document.getElementById(date).content.cloneNode(true));
}

function sendMessage() {
    document.getElementById('send').innerHTML = `<h1 class='thanks'>Спасибо за доверие. Скоро  свяжусь с Вами.<h1>`;
}
