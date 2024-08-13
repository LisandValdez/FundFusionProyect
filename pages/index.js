import React, {useState} from "react";
import Login from "./Login";


export default function Home() {
  const {usuarioGlobal, setUsuarioGlobal} = useState(null);

  return (
    <div>
      {
        usuarioGlobal ? <><Sidebar/> <ChatScreen/> </> : <Login/>
      }
    </div>
  );
}
