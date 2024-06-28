import s from './Profile.module.css'

const Profile = ({ username, tag, location, image  }) => {

    
  return (
    <div className={s.userCard}>
      
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