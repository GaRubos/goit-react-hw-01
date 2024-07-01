import FriendList from "./FriendList/FriendList";
import friends from "../assets/friends.json";

import Profile from "./Profile/Profile";
import userData from "../assets/userData.json";

import TransactionHistory from "./TransactionHistory1/TransactionHistory";
import transactions from "../assets/transactions.json";

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
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
