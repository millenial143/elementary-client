import Component from '../../../index';
import App from "../../../../App";


export default class MenuItem extends Component{
    private code: string;
    private text: string;
    constructor(code: string, text: string) {
        super();
        this.code = code;
        this.text = text;
    }



    render() :HTMLElement{
        const item = document.createElement('div');
        item.classList.add('start-menu-item');
        item.innerHTML = this.text;

        item.addEventListener('click', (e) => {
            App.renderNewPage('lobbies');
        })

        this.container.append(item);



        return this.container;
    }
}