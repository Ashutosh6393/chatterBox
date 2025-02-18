// import useAuth from "@/hooks/useAuth"
import { useNavigate } from "react-router";
const Chat = ( ) => {
  const navigate = useNavigate();
  // const {isAuthenticated} = useAuth();

  // if(!isAuthenticated){
  //   navigate("/")
  // }
  return (
    <div>Welcome to the chat application </div>
  )
}

export default Chat