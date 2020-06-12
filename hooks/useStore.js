import { useContext } from "react";
import { storeContext } from "../store/StoreProvider";

export default useStore = () => {
  const store = useContext(storeContext);

  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }

  return store;
};
