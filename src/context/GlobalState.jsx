import React, {
  createContext,
  useReducer,
  useEffect,
} from "react";

import AppReducer from "./AppReducer";

//Initial state

const latestTxn =
  JSON.parse(localStorage.getItem("transactions")) || [];

const initialState = {
  transactions: latestTxn,
};

//Create context

export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    AppReducer,
    initialState
  );

  useEffect(() => {
    const storedTxn = JSON.parse(
      localStorage.getItem("transactions")
    );

    if (storedTxn) {
      dispatch({
        type: "SET_TXN",
        payload: storedTxn,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(state.transactions)
    );
  }, [state.transactions]);

  function deleteTxn(id) {
    dispatch({
      type: "DELETE_TXN",
      payload: id,
    });
  }

  function addTxn(txn) {
    dispatch({
      type: "ADD_TXN",
      payload: txn,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTxn,
        addTxn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
