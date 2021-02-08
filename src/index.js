import React, { createContext, useContext } from "react";

export const createContextHook = (useCreator, initialContext = null) => {
  const Context = createContext(initialContext);

  const Provider = ({ children, ...props }) => {
    const store = useCreator(props);
    return <Context.Provider children={children} value={store} />;
  };

  const useStore = () => {
    return useContext(Context);
  };

  return [Provider, useStore, Context];
};
