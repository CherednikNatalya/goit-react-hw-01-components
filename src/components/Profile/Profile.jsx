import {App} from '../App'
import PropTypes from './Profile.module.css'

export const Profile = ({username, usertag, location, avatar, stats})=> {
  return (
    <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">@{usertag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.userlikes}</span>
    </li>
  </ul>
</div>

  )
}


Profile.propTypes ={
  username: PropTypes.string,
  usertag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.string),
}

