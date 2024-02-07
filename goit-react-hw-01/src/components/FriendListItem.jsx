export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
  return (
    <div className="friend-card">
      <img className="avatar-friends" src={avatar} alt="Avatar" width="48" />
      <p className="friend-name"> {name}</p>
      <p className={`status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
