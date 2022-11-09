import {io, Socket} from "socket.io-client";
import App from "../../App";

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
        })
    }

    public static createLobby(){
        if (ClientSocket.socket){
            ClientSocket.socket.emit('createLobby', 'new lobby');
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