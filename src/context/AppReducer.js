export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case "DELETE_TXN":
      return {
        ...state,
        transactions: state.transactions.filter(
          (txn) => txn.id !== action.payload
        ),
      };
    case "ADD_TXN":
      return {
        ...state,
        transactions: [
          action.payload,
          ...state.transactions,
        ],
      };

    case "SET_TXN":
      return {
        ...state,
        transactions: action.payload,
      };

    default:
      return state;
  }
};
