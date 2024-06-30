const FriendListItem = ({ friend }) => {
  return (
    <div>
      <img src={friend.avatar} alt="Avatar" width="40" />
      <p>{friend.name}</p>
      <p>onlin</p>
    </div>
  );
};

export default FriendListItem;
