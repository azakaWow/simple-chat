export function initEvents(Sock) {
    let messageForm =  document.getElementById('messageForm');
    messageForm.addEventListener('submit',(e) => {e.preventDefault(); sendMessage(messageForm,Sock)});
}

function sendMessage(messageForm,Sock){
    let formData = new FormData(messageForm)
    let result = {};
    for(let [name, value] of formData) result[name] = value;
    Sock.send(JSON.stringify(result));
}