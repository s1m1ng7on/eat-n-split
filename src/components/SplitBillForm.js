import { useState } from 'react';
import Button from './Button.js';

export default function SplitBillForm({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState(0);
    const [userExpense, setUserExpense] = useState(0);
    const [payer, setPayer] = useState('user');

    const friendExpense = bill - userExpense;

    return (
        <form
            className="split-bill-form"
            onSubmit={(e) => {
                e.preventDefault();

                if (!bill || !userExpense) return;

                onSplitBill(payer === 'user' ? friendExpense : -userExpense);
            }}
        >
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input
                type="text"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />

            <label>🧍 Your expenses</label>
            <input
                type="text"
                value={userExpense}
                onChange={(e) => {
                    const userExpense = Number(e.target.value);
                    if (userExpense <= bill) {
                        setUserExpense(userExpense);
                    }
                }}
            />

            <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
            <input type="text" value={friendExpense} disabled />

            <label>🤑 Who is paying the bill</label>
            <select value={payer} onChange={(e) => setPayer(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
}
