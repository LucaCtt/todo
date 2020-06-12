export default createStore = () => ({
  theme: "light",
  toggleTheme() {
    const nextTheme = this.theme === "light" ? "dark" : "light";
    this.theme = nextTheme;
  },
});
