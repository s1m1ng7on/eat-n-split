import './App.css';
import { useState } from 'react';
import FriendsList from './components/FriendsList.js';
import AddFriendForm from './components/AddFriendForm.js';
import Button from './components/Button.js';
import SplitBillForm from './components/SplitBillForm.js';

const initialFriends = [
    {
        id: 118836,
        name: 'Clark',
        image: 'https://i.pravatar.cc/48?u=118836',
        balance: -7,
    },
    {
        id: 933372,
        name: 'Sarah',
        image: 'https://i.pravatar.cc/48?u=933372',
        balance: 20,
    },
    {
        id: 499476,
        name: 'Anthony',
        image: 'https://i.pravatar.cc/48?u=499476',
        balance: 0,
    },
];

export default function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [isAddFriendFormVisible, setIsAddFriendFormVisible] = useState(false);

    function addFriend(newFriend) {
        setFriends([...friends, newFriend]);
        setIsAddFriendFormVisible(false);
    }

    function selectFriend(friendToSelect) {
        setSelectedFriend(friendToSelect);
        setIsAddFriendFormVisible(false);
    }

    function splitBill(value) {
        setFriends(
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelectFriend={selectFriend}
                />
                {isAddFriendFormVisible && (
                    <AddFriendForm onAddFriend={addFriend} />
                )}
                {
                    <Button
                        onClick={() =>
                            setIsAddFriendFormVisible(!isAddFriendFormVisible)
                        }
                    >
                        {!isAddFriendFormVisible ? 'Add friend' : 'Close'}
                    </Button>
                }
            </div>
            {selectedFriend && (
                <SplitBillForm
                    key={selectFriend.id}
                    selectedFriend={selectedFriend}
                    onSplitBill={splitBill}
                />
            )}
        </div>
    );
}
