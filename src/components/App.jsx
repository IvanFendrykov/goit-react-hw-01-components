import user from './data/user.json';
import { Profile } from './profile/Profile';

import data from './data/data.json';
import { Statistics } from './statistics/Statistics';

import friends from './data/friends.json';
import {FriendList} from './friendlist/FriendList';

import transactions from './data/transactions.json';
import { TransactionHistory } from './transactionhistory/TransactionHistory';

import {Box} from './Box.js'

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      bg="backgroundColor"
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
}