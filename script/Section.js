export class Section {
  constructor(options, selector) {
    this._items = options.items;
    this._selector = selector;
    this._renderer = options.renderer;
  }

  render() {
    this._items.forEach((item) => {
      const domElement = this._renderer(item, this._selector);

      this.addItem(domElement);
    });
  }

  addItem(domElement) {
    const elements = document.querySelector(this._selector);

    elements.prepend(domElement);
  }
}
