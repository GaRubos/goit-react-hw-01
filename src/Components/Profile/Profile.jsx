import s from './Profile.module.css'


const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};

const Profile = ({ username, tag, location, image  }) => {

    
  return (
    <div className={s.wrapper}>
      
      <div className={s.userDate}>
        <div className={s.imageWrapper}>
        <img className={s.userImage} src={image} alt="userlogo" />
        </div>
        <p className={s.userName}>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      
      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span>1000</span>
        </li>
        <li>
          <span>Views</span>
          <span>2000</span>
        </li>
        <li>
          <span>Likes</span>
          <span>3000</span>
        </li>
      </ul>
</div>

  )
}

export default Profile