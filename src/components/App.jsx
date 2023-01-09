// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };



import user from '../data/user.json'
import {Profile} from './Profile/Profile'

import data from '../data/data.json';
import {Statistics}  from './Statistics/Statistics'

import friends from '../data/friends.json'
import {FriendList} from './FriendList/FriendList'


export const App = () => {
  return (
    <div>
       <Profile
        username ={user.username} 
        usertag={user.tag} 
        location={user.location} 
        avatar ={user.avatar} 
        stats={user.stats} 
        />
    
    <Statistics title="Upload stats" stats={data} />
<FriendList friends={friends}/>

    </div>
  );
};