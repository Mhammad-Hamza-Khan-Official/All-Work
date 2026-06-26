import { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <div></div>
    else return (
    <div>
      <h1>Profile</h1>
      <h2>Name : {user.userName}</h2>
      <h2>Email : {user.userEmail}</h2>
      <h2>Password : {user.userPassword}</h2>
    </div>
  )
}

export default Profile
