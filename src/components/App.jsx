import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import { Container } from './App.styled';
import FriendList from './FriendList/FriendList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  console.log(user);
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
