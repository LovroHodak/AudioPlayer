import React, { useState, createContext, useContext } from "react";

const PercentageContext = createContext();

export function PercentageProvider(props) {
    const [percentage, setPercentage] = useState(0);

    const onChange = (e) => {
      setPercentage(e.target.value);
    };

    

    return (
        <PercentageContext.Provider value={{percentage, setPercentage, onChange}} >
            {props.children}
        </PercentageContext.Provider>
    )
}

export function usePercentage() {
    return useContext(PercentageContext)
}