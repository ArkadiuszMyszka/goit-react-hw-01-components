import Profile from './Profile';

import user from '../data/user';

export const App = () => {
  return (
    <div className="wrapper">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={stats} /> */}
      {/* <FriendList friends={friends} /> */}
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
};
