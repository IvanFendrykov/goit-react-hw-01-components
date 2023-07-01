import user from './profile/user.json';
import { Profile } from './profile/Profile';

import data from './statistics/data.json';
import { Statistics } from './statistics/Statistics';

import friends from './friendlist/friends.json';
import {FriendList} from './friendlist/FriendList';

import transactions from './transactionhistory/transactions.json';
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