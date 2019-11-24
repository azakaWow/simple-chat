import { initEvents } from './DomEvents';
import initSocks from './Socks';


window.addEventListener('load',() => {
    let SockInstance = initSocks();
    initEvents(SockInstance);
});