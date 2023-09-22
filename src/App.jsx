import { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import Transactions from "./components/Transactions";
import NewTransaction from "./components/NewTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className='flex justify-center w-full'>
          <div className='flex flex-col items-start w-[350px]'>
            <Balance />
            <IncomeExpense />
            <Transactions />
            <NewTransaction />
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
