import useStore from "./useStore";

export default useTheme = () => {
  const store = useStore();
  return {
    items: store.items,
    add: store.addItem,
    toggleComplete: store.toggleCompleteItem,
  };
};
