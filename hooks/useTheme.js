import useStore from "./useStore";

export default useTheme = () => {
  const { themeStore } = useStore();
  return themeStore;
};
