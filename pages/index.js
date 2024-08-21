import React, {useState} from "react";
import Login from "./Login";
import { useSession} from "next-auth/react"
import PaymentCards from "./paymentCardsPage";


export default function Home() {
  const {data: session} = useSession()
  if(session) {
    return (
      <div>
        {
          <PaymentCards/>
        }
      </div>
    );
  }
  return (
    <div>
      {
        <Login/>
      }
    </div>
  );
}
