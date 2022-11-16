import Component from "../../index";
import ClientSocket from "../../../Net/Sockets/ClientSocket";

export default class CreateLobbyPopup extends Component{
    private maxPlayers = 2;
    private minPlayers = 4;

    private popup;
    private buttonContainer;
    private buttonCreate;

    private nameInput;
    private playersInput;
    private playersOptions = ['2', '3', '4', '5', '6'];
    private typeInput;
    private typeOptions = ['Teams', 'FFA'];

    constructor() {
        super();
        this.popup = document.createElement('div');
        this.nameInput = document.createElement('input');

        this.typeInput = document.createElement('select');
        this.addOptions(this.typeInput, this.typeOptions);
        this.playersInput = document.createElement('select');
        this.addOptions(this.playersInput, this.playersOptions);

        this.buttonContainer = document.createElement('div');
        this.buttonContainer.classList.add('button-container');

        this.buttonCreate = document.createElement('div');
        this.buttonCreate.classList.add('button-create');
        this.buttonCreate.innerHTML = 'Создать';
    }

    private addOptions(element: HTMLElement, opts: string[]){
        for (let i = 0; i < opts.length; i++){
            let option = document.createElement('option');
            option.innerHTML = opts[i];
            option.value = opts[i];
            element.append(option);
        }
    }

    render(): HTMLElement {
        this.popup.classList.add('popup');
        this.popup.append(this.nameInput);
        this.popup.append(this.typeInput);
        this.popup.append(this.playersInput);
        this.popup.append(this.buttonContainer);
        this.buttonContainer.append(this.buttonCreate);

        this.container.classList.add('create-lobby-popup');

        this.container.style.display = 'none';
        this.container.addEventListener('click', (e) => {
            e.stopPropagation();
            if ((e.target as HTMLElement).classList.contains('create-lobby-popup')){
                this.container.style.display = 'none';
            }
        })

        this.buttonCreate.addEventListener('click', () => {
            let params = {
                name: this.nameInput.value,
                playersNumber: this.playersInput.value
            };
            ClientSocket.createLobby(params);
        })

        this.container.append(this.popup);
        return this.container;
    }
}