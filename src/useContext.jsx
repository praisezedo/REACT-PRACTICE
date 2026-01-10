import React from "react";

const usecontext = React.createContext();

const Provider = usecontext.Provider;
const Consumer = usecontext.Consumer;

export { Provider, Consumer };