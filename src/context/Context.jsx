import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const GlobalContext = ({ children }) => {
  const [ticketsList, setTicketsList] = useState(
    JSON.parse(localStorage.getItem("tickets")) || []
  );
  const [searchRes, setSearchRes] = useState(ticketsList);

  useEffect(() => {
    setSearchRes(ticketsList);
    
  }, [ticketsList]);
  localStorage.setItem("tickets", JSON.stringify(ticketsList));
  return (
    <Context.Provider
      value={{ ticketsList, setTicketsList, setSearchRes, searchRes }}
    >
      {children}
    </Context.Provider>
  );
};
