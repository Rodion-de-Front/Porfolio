function transfer(date) {
    document.querySelector('main').innerHTML = null;
    document.querySelector('main').append(document.getElementById(date).content.cloneNode(true));
}

function sendMessage() {

}