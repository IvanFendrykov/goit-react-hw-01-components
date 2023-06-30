import PropTypes from 'prop-types';
import React from 'react';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsDirection,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsDirection>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsDirection>
        <StatsDirection>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsDirection>
        <StatsDirection>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsDirection>
      </Stats>
    </ProfileCard>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
