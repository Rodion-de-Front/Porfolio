function transfer(date) {
    document.querySelector('main').innerHTML = null;
    document.querySelector('main').append(document.getElementById(date).content.cloneNode(true));
}

function sendMessage() {

    let name = document.getElementById('name').value;

    let number = document.getElementById('number').value;

    let email = document.getElementById('e-mail').value;

    let message = document.getElementById('message').value;

    let msg = name + ' ' + number + ' ' + email + ' ' + message;

    // создаём объкт который умеет отправлять запросы
    let requestObj = new XMLHttpRequest();

    // собираем ссылку для запроса
    let link = 'https://api.telegram.org/bot5521315588:AAHgmnzbi4_ZoHfiMiEi19zHWXAvcd_dmS4/sendMessage?chat_id=892205925&text=' + msg;

    //конфигурируем объект
    requestObj.open('POST', link, false);
        
    // отправляем запрос
   requestObj.send();

   document.querySelector('main').innerHTML = `<h1 class='thanks'>Спасибо за доверие. Скоро  свяжусь с Вами.<h1>`;

}