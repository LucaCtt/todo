import useStore from "./useStore";

export default useTheme = () => {
  const store = useStore();
  return [store.theme, store.toggleTheme];
};
