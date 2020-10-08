import React, { createContext, useContext } from "react";

export const createContextHook = (useCreator) => {
  const Context = createContext(null);

  const Provider = ({ children, ...props }) => {
    const store = useCreator(props);
    return <Context.Provider children={children} value={store} />;
  };

  const useStore = () => {
    return useContext(Context);
  };

  return [Provider, useStore, Context];
};
