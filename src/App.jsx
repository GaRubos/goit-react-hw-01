import FriendList from "./Components/FriendList/FriendList";
import friends from "./assets/friends.json";
import Profile from "./Components/Profile/Profile";
import userData from "./assets/userData.json";

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
