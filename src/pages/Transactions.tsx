import { useEffect } from "react";
import { User } from "../App";

type Props = {
  user: User;
};

export function Transactions({ user }: Props) {
  if (user === null) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="transaction-page">
      <h1>Hello {user.email}, here your transactions for this month</h1>
      <ul className="transactions-list">
        <ul className="table">
          <li>Date</li>
          <li>Description</li>
          <li>Withdrawals</li>
          <li>Deposits</li>
          <li>Balance</li>
        </ul>
        {user.transactions.map((item) => (
          <ul className="transactions">
            <li>{item.date}</li>
            <li>{item.description}</li>
            <li>{item.withdrawals}£</li>
            <li>{item.deposits}£</li>
            <li>{item.balance}£</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
