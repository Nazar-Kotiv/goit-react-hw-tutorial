import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className="list-container">
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem data={friend} />
        </li>
      ))}
    </ul>
  );
};
