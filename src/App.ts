import {Socket} from "net";

import ClientSocket from "./Net/Sockets/ClientSocket";

import StartMenu from "./Components/Pages/StartMenu/StartMenu";
import Lobbies from "./Components/Pages/Lobbies/Lobbies";
import Lobby from "./Components/Pages/Lobby/Lobby";
import GamePage from "./Components/Pages/GamePage/GamePage";

class App {
    private static container: HTMLElement | null;
    //bind

    constructor() {
        App.container = document.querySelector('App');
    }

    public static async renderNewPage(pageCode: string){ //рендер новой страницы
        // проверка на то что все мероприятия имеют обязательные свойства
        let pageHtmlContainer: HTMLElement;
        pageHtmlContainer = document.createElement('div');
        switch (pageCode){
            case 'start-menu':
                pageHtmlContainer = new StartMenu().render();
                break;
            case 'lobbies':
                pageHtmlContainer = new Lobbies().render();
                break;
            case 'lobby-page':
                pageHtmlContainer = new Lobby().render();
                break;
            case 'game-page':
                pageHtmlContainer = new GamePage().render();
                break;
            default:
                console.log('error: page not found in: \'App.ts\': renderNewPage');
                pageHtmlContainer.innerHTML = 'error: page not found in: \'App.ts\': renderNewPage';
        }

        if (this.container){
            this.container.innerHTML = '';
            this.container.append(pageHtmlContainer);
        }
    }

    start(){
        ClientSocket.initializeConnection();
        App.renderNewPage('start-menu');
    }
}


export default App