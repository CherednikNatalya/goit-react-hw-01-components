import {App} from '../App'
import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({username, usertag, location, avatar, stats})=> {
  return (
    <div className={css.profile}>
  <div className={css.description}>
    <img
      src={css.avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{usertag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.userlikes}</span>
    </li>
  </ul>
</div>

  )
}


Profile.propTypes ={
  username: PropTypes.string.isRequired,
  usertag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  ),
}



