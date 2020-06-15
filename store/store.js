export default createStore = () => ({
  theme: "light",
  toggleTheme() {
    const nextTheme = this.theme === "light" ? "dark" : "light";
    this.theme = nextTheme;
  },

  items: [
    { id: 0, text: "test", completed: false },
    { id: 1, text: "fuck off", completed: false },
  ],
  addItem(text) {
    const item = {
      id: this._nextItemId,
      text,
      completed: false,
    };

    this.items.push(item);
  },
  toggleCompleteItem(id) {
    const item = this.items.filter((item) => item.id === id)[0];
    item.completed = !item.completed;
  },

  get _nextItemId() {
    if (this.items.length === 0) {
      return 0;
    }
    return Math.max(...this.items.map((item) => item.id)) + 1;
  },
});
