import Profile from "./Components/Profile/Profile";
import userData from './assets/userData.json';


const App = () => {
  return (
    <>
      <Profile user = {userData}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App
