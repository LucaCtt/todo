import useStore from "./useStore";

export default useItems = () => {
  const store = useStore();
  return {
    items: store.items,
    addItem: store.addItem,
    toggleCompleteItem: store.toggleCompleteItem,
  };
};
