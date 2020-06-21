import useStore from "./useStore";

export default useAuthInfo = () => {
  const { authInfoStore } = useStore();
  return authInfoStore;
};
