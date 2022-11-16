import Component from '../../index';
import './Lobbies.css'
import App from "../../../App";
import ClientSocket from "../../../Net/Sockets/ClientSocket";
import CreateLobbyPopup from "./CreateLobbyPopup";

export default class Lobbies extends Component{
    static set lobbies(value: any[]) {
        this._lobbies = value;
    }
 //   private lobbies: Lobby[];

    private static _lobbies: any[];

    private lobbiesWindow;
    private lobbiesButtons;
    private refreshButton;
    private newLobbyButton;
    private backButton;
    private buttonContainer;

    private popup;

    constructor(/*lobbies: Lobby[]*/) {
        super();
        this.popup = new CreateLobbyPopup().render();
     //   this.lobbies = lobbies;

        // element creation
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.classList.add('button-container');

        this.lobbiesWindow = document.createElement('div');
        this.lobbiesWindow.classList.add('lobbies-window');

        this.lobbiesButtons = document.createElement('div');
        this.lobbiesButtons.classList.add('lobbies-buttons');

        this.refreshButton = document.createElement('div');
        this.refreshButton.classList.add('refresh-button', 'lobby-page-button');
        this.refreshButton.innerHTML = 'Обновить';

        this.newLobbyButton = document.createElement('div');
        this.newLobbyButton.classList.add('new-lobby-button', 'lobby-page-button');
        this.newLobbyButton.innerHTML = 'Создать';

        this.backButton = document.createElement('div');
        this.backButton.classList.add('back-button', 'lobby-page-button');
        this.backButton.innerHTML = 'Назад';
    }

    private addLobby(lobby: any){
        let lobbyElem = document.createElement('div');
        lobbyElem.classList.add('lobby-item');
        if (lobby.name){
            lobbyElem.innerHTML = lobby.name;
        }

        lobbyElem.addEventListener('click', () => {
            ClientSocket.requestJoinLobby(lobby.id);
        });

        this.lobbiesWindow.append(lobbyElem);
    }

    private async updateLobbies() {
        // add loading page
        this.lobbiesWindow.classList.remove('loaded');
        this.lobbiesWindow.classList.add('loading');
        this.lobbiesWindow.innerHTML = 'Загрузка...';

        // after loaded remove loading page, add content
        let lobbies = await ClientSocket.requestLobbies();
        this.lobbiesWindow.innerHTML = '';
        this.lobbiesWindow.classList.remove('loading');

        if (lobbies){
            for (let i = 0; i < lobbies.length; i++){
                this.addLobby(lobbies[i]);
            }
        }

        this.lobbiesWindow.classList.add('loaded');
    }

    render() :HTMLElement{
        this.container.append(this.popup);

        this.backButton.addEventListener('click', (e) => {
           App.renderNewPage('start-menu');
        });

        this.refreshButton.addEventListener('click', (e) => {
            this.updateLobbies();
        });

        this.newLobbyButton.addEventListener('click', (e) => {
            this.popup.style.display = 'flex';
        });

        this.container.append(this.lobbiesWindow);
        this.lobbiesButtons.append(this.backButton);
        this.buttonContainer.append(this.refreshButton);
        this.buttonContainer.append(this.newLobbyButton);
        this.lobbiesButtons.append(this.buttonContainer);
        this.container.append(this.lobbiesButtons);

        this.updateLobbies();

        return this.container;
    }
}