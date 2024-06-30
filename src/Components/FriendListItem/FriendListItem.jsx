import s from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div className={s.friendWrapper}>
      <img src={avatar} alt="Avatar" width="50" />
      <p>{name}</p>
      <p className={clsx(s.status, isOnline === true ? s.online : s.offline)}>
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
