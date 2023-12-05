class Storage {
    #items;

    constructor(items) {
        this.#items = items;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        this.#items.splice(this.#items.indexOf(itemToRemove), 1);
    }
}