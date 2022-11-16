import {io, Socket} from "socket.io-client";
import App from "../../App";
import Game from "../../Game/Game";
// test
export default class ClientSocket{
    static socket: Socket | undefined;
    private static lobby: string | undefined = undefined;

    public static initializeConnection(){
        let socket = ClientSocket.socket;
        ClientSocket.socket = io('http://localhost:3000');
        ClientSocket.socket.on("connect", () => {
            App.renderNewPage('start-menu');
            if (ClientSocket.socket){
                console.log(ClientSocket.socket.id); // x8WIv7-mJelg7on_ALbx
            }
        });

        ClientSocket.socket.on('joinLobby', (lobbyId) => {
            ClientSocket.lobby = lobbyId;
            App.renderNewPage('lobby-page');
        })

        ClientSocket.socket.on('leaveLobby', () => {
            ClientSocket.lobby = undefined;
            App.renderNewPage('start-menu');
        })

        ClientSocket.socket.on('startGame', (game) => {
            App.renderNewPage('game-page');

            let events: string[] = [];

            if (ClientSocket.socket){
                ClientSocket.socket.on('initializeGameState', (field, gameState) => {
                    //console.log(field);
                    Game.initializeGameState(field, gameState);
                });
                events.push('initializeGameState');

                ClientSocket.socket.on('updateGameState', (field, gameState) => {
                    Game.updateGameState(field, gameState);
                })
                events.push('updateGameState');

                ClientSocket.socket.once('endGame', () => {
                    for (let i = 0; i < events.length; i++){
                        ClientSocket.socket?.removeAllListeners(events[i]);
                        Game.deleteGameState();
                        App.renderNewPage('start-menu');
                    }
                })
            }

        })


    }

    public static createLobby(params: object){
        if (ClientSocket.socket){
            ClientSocket.socket.emit('requestCreateLobby', params);
        }
    }

    public static async requestLobbies(): Promise<any>{
        return await new Promise(resolve => {
            if (ClientSocket.socket) {
                ClientSocket.socket.emit('requestLobbies', (lobbies: any) => {
                    resolve(lobbies);
                });
            } else {
                console.log('no ClientSocket.socket');
            }
        });
    }

    public static requestJoinLobby(lobbyId: number){
        if (ClientSocket.socket){
            ClientSocket.socket.emit('requestJoinLobby', lobbyId);
        }
    }

    public static requestLeaveLobby(){
        if (ClientSocket.socket){
            ClientSocket.socket.emit('requestLeaveLobby');
        }
    }

    public static requestNewLobbyState(){
        if (ClientSocket.socket){
            ClientSocket.socket.emit('requestNewLobbyState');
        }
    }

    public static requestStartGame(){
        if (ClientSocket.socket){
            ClientSocket.socket.emit('requestStartGame');
        }
    }
}