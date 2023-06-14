import PropTypes from 'prop-types';
import { Avatar, List, ListItem, Name, Status } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <ListItem key={id}>
            <Status isOnline={isOnline} />
            <Avatar src={avatar} alt={name} size={100} />
            <Name>{name}</Name>
          </ListItem>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
