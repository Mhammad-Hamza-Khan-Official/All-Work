import { useContext, useState } from "react";
import UserContext from "../Context/UserContext"

export default function Login() {
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  
  const {setUser} = useContext(UserContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({userName,userEmail,userPassword})
  }


  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="">Name :</label>
      <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
      <br />
      <label htmlFor="">Email :</label>
      <input type="email" name="" id="" value={userEmail} onChange={(e)=> setUserEmail(e.target.value)}/>
      <br />
      <label htmlFor="">Password :</label>
      <input type="password" name="" id="" value={userPassword} onChange={(e)=> setUserPassword(e.target.value)}/>
      <br />
      <input type="submit" onClick={handleSubmit} value="Submit" />
    </div>
  )
}
