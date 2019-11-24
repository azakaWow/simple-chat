// Create a connection to http://localhost:9999/echo
import SockJS from 'sockjs-client';
const SERVER_PATH = 'http://localhost:9999/echo';

let SOCKS_CALLBACKS = {
    onopen: () => {
      console.log('Connection established');
    },
    onclose: () => {
      console.log('Connection closed');
    },
    onerror: (e) => {
      console.error('Socks error',e);
    },
    onmessage: (e) => {
      let content = JSON.parse(e.data);
      let messageForm =  document.getElementById('chat-content');
      messageForm.value+=`${content.username} : ${content.message}\n`;
    }
}


function initSocks() {
    let SockInstance = new SockJS(SERVER_PATH);
    for(let key in SOCKS_CALLBACKS) SockInstance[key] = SOCKS_CALLBACKS[key];
    return SockInstance;
}


export default initSocks;