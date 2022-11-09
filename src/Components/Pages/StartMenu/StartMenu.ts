import Component from '../../index';
import './StartMenu.css'
import MenuItem from "./MenuItem/MenuItem";

export default class StartMenu extends Component{

    constructor() {
        super();
    }



    render() :HTMLElement{
        const items = document.createElement('div');
        items.classList.add('start-menu-items');
        this.container.append(items);

        items.append(new MenuItem('start-menu', 'Пользовательские игры').render());

        return this.container;
    }
}