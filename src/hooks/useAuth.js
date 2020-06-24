import useStore from "./useStore";

export default useAuth = () => {
  const { authStore } = useStore();
  return authStore;
};
