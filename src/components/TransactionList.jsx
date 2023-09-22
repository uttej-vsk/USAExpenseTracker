import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { GlobalContext } from "../context/GlobalState";

function TransactionList({ txn, index }) {
  const { deleteTxn } = useContext(GlobalContext);

  return (
    <>
      <div
        className='flex relative w-full justify-center items-center'
        key={txn.id}
      >
        <button className='absolute -left-6'>
          <RxCross1
            color='#FF0000'
            onClick={() => deleteTxn(txn.id)}
          />
        </button>
        <li className='relative flex justify-between w-full border border-solid p-2 border-slate-100 shadow-sm'>
          <p>{txn.text}</p>
          <p>{txn.amount}$</p>
        </li>
        <div
          className={`${
            txn.amount < 0 ? "bg-red-600" : "bg-green-500"
          } h-10 w-1`}
        ></div>
      </div>
    </>
  );
}

export default TransactionList;
