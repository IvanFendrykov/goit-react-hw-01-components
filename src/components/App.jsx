import user from '../Data/user.json';
import { Profile } from './profile/Profile';

import data from '../Data/data.json';
import { Statistics } from './statistics/Statistics';

import friends from '../Data/friends.json';
import {FriendList} from './friendlist/FriendList';

import transactions from '../Data/transactions.json';
import { TransactionHistory } from './Transactionhistory/TransactionHistory';

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