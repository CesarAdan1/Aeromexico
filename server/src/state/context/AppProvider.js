import React, { createContext, useState, useEffect, useContext } from 'react';

export const AppContext = createContext({})

const AppProvider = props => {
    const [loading, setLoading] = useState(false);
    const [harry, setHarry] = useState([]);


    const providerValues = {
        loading,
        harry
    }

    return (
        <AppContext.Provider
            value={providerValues}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider