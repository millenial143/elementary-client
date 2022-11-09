abstract class Component{
    protected container: HTMLElement;
    constructor() {
        this.container = document.createElement('div');
    }

    abstract render():HTMLElement;
}

export default Component