import {App} from '../App'
import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem'

export const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
        {friends.map(({avatar, name, isOnline, id}) => (
          <FriendListItem 
          key={id}
          avatar ={avatar} 
          name={name} 
          isOnline={isOnline}
          />
        ))}
      </ul>
    )
  }

  FriendList.propTypes ={
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }),
    ),
  }