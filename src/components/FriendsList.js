import FriendCard from './FriendCard.js';

export default function FriendsList({
    friends,
    selectedFriend,
    onSelectFriend,
}) {
    return (
        <ul>
            {friends.map((friend) => (
                <FriendCard
                    friend={friend}
                    selectedFriend={selectedFriend}
                    onSelectFriend={onSelectFriend}
                    key={friend.id}
                />
            ))}
        </ul>
    );
}
