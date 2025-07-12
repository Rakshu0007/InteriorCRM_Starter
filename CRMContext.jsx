import React, { createContext, useState } from "react";

export const CRMContext = createContext();

export function CRMProvider({ children }) {
  const [leads, setLeads] = useState([]);

  return (
    <CRMContext.Provider value={{ leads, setLeads }}>
      {children}
    </CRMContext.Provider>
  );
}