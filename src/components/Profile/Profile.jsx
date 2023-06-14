import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  Description,
  FullName,
  Tag,
  Location,
  List,
  ListItem,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt={username} size={100} rounded />
        <FullName>{username}</FullName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <List>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{likes}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{views}</Quantity>
        </ListItem>
      </List>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
