import s from "./Profile.module.css";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div className={s.userCard}>
      <div className={s.userDate}>
        <div className={s.imageWrapper}>
          <img className={s.userImage} src={image} alt="userlogo" />
        </div>
        <p className={s.userName}>{username}</p>
        <p className={s.wrapperIcon}>
          {" "}
          <MdOutlineAlternateEmail /> {tag}
        </p>
        <p className={s.userLocation}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span>Followers</span>
          <span> {stats.followers} </span>
        </li>
        <li className={s.statsItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
