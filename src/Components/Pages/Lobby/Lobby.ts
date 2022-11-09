import Component from '../../index';
import './Lobby.css'
import ClientSocket from "../../../Net/Sockets/ClientSocket";
import App from "../../../App";
export default class Lobby extends Component{

    private playersWindow;
    private lobbyButtons;
    private startLobbyButton;
    private returnButton;
    private buttonContainer;

    constructor() {
        super();

        // element creation
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.classList.add('button-container');

        this.playersWindow = document.createElement('div');
        this.playersWindow.classList.add('players-window');

        this.lobbyButtons = document.createElement('div');
        this.lobbyButtons.classList.add('lobby-buttons');

        this.startLobbyButton = document.createElement('div');
        this.startLobbyButton.classList.add('start-lobby-button', 'lobby-page-button');
        this.startLobbyButton.innerHTML = 'Начать';

        this.returnButton = document.createElement('div');
        this.returnButton.classList.add('return-button', 'lobby-page-button');
        this.returnButton.innerHTML = 'Назад';
    }

    private updatePlayers(players: any[]){
        this.playersWindow.innerHTML = '';
        for (let i = 0; i < players.length; i++){
            const playerElem = document.createElement('div');
            playerElem.innerHTML = players[i].name;
            playerElem.classList.add('player-elem');
            console.log(playerElem);
            this.playersWindow.append(playerElem);
        }
    }

    private setUpdateLobby(){
        if (ClientSocket.socket){
            ClientSocket.socket.on('newLobbyState', (newLobby) => {
                console.log(newLobby.players)
                this.updatePlayers(newLobby.players);
            })
        }
    }

    render() :HTMLElement{
        this.setUpdateLobby();

        this.returnButton.addEventListener('click', () => {
            ClientSocket.requestLeaveLobby();
        })

        this.startLobbyButton.addEventListener('click', () => {
            ClientSocket.requestStartGame();
        })

        this.container.append(this.playersWindow)
        this.lobbyButtons.append(this.returnButton);
        this.buttonContainer.append(this.startLobbyButton);
        this.lobbyButtons.append(this.buttonContainer);
        this.container.append(this.lobbyButtons);

        ClientSocket.requestNewLobbyState();

        return this.container;
    }
}