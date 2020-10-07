import React, { useContext, useMemo } from 'react';

const DEFAULT_CONTEXT = {
    level: 0
};

export const Context = React.createContext(DEFAULT_CONTEXT);

export const Provider = () => {
    const {level} = useContext(Context);
    const context = useMemo(() => ({level: level + 1}), [level]);

    return (
        <Context.Provider value={context} />            
    )
};
