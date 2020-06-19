import useStore from "./useStore";

export default useItems = () => {
  const { itemsStore } = useStore();
  return itemsStore;
};
